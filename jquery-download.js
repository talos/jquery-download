/**
   Copyright 2012 John Krauss. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

   1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above
   copyright notice, this list of conditions and the following
   disclaimer in the documentation and/or other materials provided
   with the distribution.

   THIS SOFTWARE IS PROVIDED BY JOHN KRAUSS ''AS IS'' AND ANY EXPRESS
   OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   ARE DISCLAIMED. IN NO EVENT SHALL JOHN KRAUSS OR CONTRIBUTORS BE
   LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
   OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
   BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
   USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
   DAMAGE.

   The views and conclusions contained in the software and
   documentation are those of the authors and should not be
   interpreted as representing official policies, either expressed or
   implied, of John Krauss.
**/

/*global define, jQuery, window*/

(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    "use strict";
    /**
       Download some text to the client computer.  Only works in
       browsers that support the 'data:' scheme.

       @param text The text to download.
    **/
    var download = function (text) {
        window.location.href =
            'data:application/x-download;charset=utf-8,' +
            encodeURIComponent(text);
    },

        // Test to see if data URI is supported
        // Thanks to http://weston.ruter.net/2009/05/07/detecting-support-for-data-uris
        testImg = $('<img />'),
        supported = false,

        isWorking = function (evt) {
            supported = (this.width === 1 && this.height === 1) ? true : false;
        };

    testImg.bind('load', isWorking)
        .bind('error', isWorking)
        .attr('src', "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==");

    /**
       Download the HTML of selected elements as text to the client
       computer, one file per element.  Only works in browsers that
       support the 'data:' scheme.
    **/
    $.fn.download = function (arg) {
        if (arg === 'support') {
            return supported;
        } else {
            var texts = [],
                interval;

            $.each(this, function (i, el) {
                var $el = $(el),
                    $container = $('<div />'),
                    text;

                $el.clone().appendTo($container);
                text = $container.html();

                if (supported === true) {
                    texts.push(text);
                } else {
                    // If user supplied failCallback, call it.
                    if ($.isFunction(arg)) {
                        arg(text);
                    }
                }
            });

            // Interval to shuffle through window.location.href
            interval = setInterval(function () {
                if (texts.length > 0) {
                    download(texts.pop());
                } else {
                    clearInterval(interval);
                }
            }, 100);

            return this;
        }
    };
}));