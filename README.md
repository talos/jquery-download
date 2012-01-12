# jquery-download

This jQuery plugin uses the `data:` URI to download the DOM of
arbitrary elements into files.  One file will be downloaded for each
selected element.  Since the DOM is captured, any javascript-generated
content will be included in the download.

[See it in action.](http://talos.github.com/jquery-download/demo.html)

### Usage

`failCallback`: (Optional) The browser may not support the `data:` URI.
If this is the case, this function will be called once with the text
of each element not downloaded.

```javascript
    $(selector).download(failCallback);
```

There is also a utility function you can use to check whether the
browser supports the data URI.  This will return `true` if there is
support, and `false` otherwise.

```javascript
    $().download('support');
```

### Examples

This will download into a browser-named file the contents of the
current page view:

```javascript
    $('html').download();
```

This would download every svg on the page into a separate file:

```javascript
   $('svg').download();
```

This takes advantage of `failCallback` in case the browser doesn't
support the `data:` uri.

```javascript
    var failCallback = function(text) {
      alert("Could not download " + text);
    };
    $('#elem').download(failCallback);
```

### Links

Fork it from

http://www.github.com/talos/jquery-download

CDN it at

http://talos.github.com/jquery-download/jquery-download.js

http://talos.github.com/jquery-download/jquery-download.min.js
