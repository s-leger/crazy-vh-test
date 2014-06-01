// create two divs
var a = document.createElement('div');
var b = document.createElement('div');

// Add them to the body
document.documentElement.appendChild(a);
document.documentElement.appendChild(b);

// The first div must be higher than the viewport
a.setAttribute('style','height:2000em');
// The second div just as high
b.setAttribute('style','height:100vh');

// wrap it all in a timeout, or it won't work
var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
	    // Add something, ot it won't work
	    b.innerHTML = '1';
	    var dHeight = b.clientHeight;
	    var bHeight = window.innerHeight;

	    // If 100vh is higher than the viewport, vh is not supported well
	    if (dHeight > bHeight) {
	        // add a class the HTML element for alternative styling
	        document.documentElement.classList.add('crazy-vh');
	    }
	    // Delete the elements
	    document.documentElement.removeChild(a);
	    document.documentElement.removeChild(b);
		clearInterval(readyStateCheckInterval);
	}
}, 10);
