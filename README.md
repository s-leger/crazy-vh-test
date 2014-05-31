# crazy-vh-test

In Safari on iOS `100vh` is as high as the viewport *as long as the document is not higher than the viewport*. If the document is higher than the viewport, `100vh` is as high as the document. Which is insane. 

## The solution

I wrote this simple script that detects if the browser of the visitor has this bug. If so, it adds the class `crazy-vh` to the HTML element. If you place this script in the head of your document, before the stylesheets, you can provide an alternative style for those poor people with Safari on iOS. The issue is though, that it doesn't seem to work 100% of the time. And I don't understand why. If you do, and you know how to solve it, please let me know.
