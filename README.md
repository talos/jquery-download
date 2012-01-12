# jquery-download

This jQuery plugin uses the `data:` URI to download the DOM of
arbitrary elements into files.  One file will be downloaded for each
selected element.  Since the DOM is captured, any javascript-generated
content will be included in the download.

[See it in action.](http://talos.github.com/jquery-download/demo.html)

### Usage

`failCallback`: (Optional) The browser may not support the data: URI.
If this is the case, this function will be called once with the text
ofeach element not downloaded.

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

$('html').download();

This would download every svg on the page into a separate file:

$('svg').download();

This takes advantage of `failCallback` in case the browser doesn't
support the `data:` uri.

var failCallback = function(text) {
  alert("Could not download " + text);
};
$('#elem').download(failCallback);

### Links

Fork it from

http://www.github.com/talos/jquery-download

CDN it at

http://talos.github.com/jquery-download/jquery-download.js

http://talos.github.com/jquery-download/jquery-download.min.js










This jQuery plugin arbitrarly CSS transforms elements to a specific
pixel size.  All the contents of the element will scale with it!

[See it in action.](http://talos.github.com/jquery-rescale/demo.html)

### Usage

`w` The width to scale to.  Required.

`h` The height to scale to.  Required.

`distort` Whether to allow differing x and y scale
factors.  Is true by default, meaning the element could be
distorted.  If false, the smallest of the two scales will be
used for both axes, so that neither w or h is ever exceeded.

`scaleDirection` If negative, only scaling down will be
allowed.  If greater than 0, only scaling up will be allowed.
Otherwise, either direction is allowed.  Defaults to 0.

```javascript
    $(selector).rescale(w, h, distort, scaleDirection);
```

### Examples

```javascript
    $('.rescale').rescale(100, 100);
```

Would scale all elements with the class 'scale' to 100 by 100
pixels.  If you don't want the elements to be distorted, pass
'false' as the distort argument:

```javascript
    $('.rescale').rescale(100, 100, false);
```

Each element will keep its original aspect ratio, but no dimension
will exceed 100 pixels.

If you want to only scale elements up, or only scale them down, you
can pass a fourth argument.  If it is negative, elements will only
be scaled down:

```javascript
    $('.rescale').rescale(100, 100, false, -1);
```

Any elements with both dimensions already smaller than 100 pixels
will be unmodified.

To only scale elements up, pass a positive value:

```javascript
    $('.rescale').rescale(100, 100, false, 1);
```

Now, elements exceeding 100px * 100px will be unmodified, but any
smaller than that will be scaled up.

Play around with demo.html to see it in action.

### Links

Fork it from:

http://www.github.com/talos/jquery-rescale

CDN it from:

http://talos.github.com/jquery-rescale/jquery-rescale.js

http://talos.github.com/jquery-rescale/jquery-rescale.min.js
