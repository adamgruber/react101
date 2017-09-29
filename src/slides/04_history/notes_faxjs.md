Fast forward a bit. Front-end began to shift away from PHP.

By September of 2011, Facebook had moved a lot of their applications to JS using an internal MVC framework called BoltJS.

Unfortunately they found that as the applications grew and became more sophisticated, the codebases got more complicated.

So Jordan Walke set out to fix some of the shortcomings of BoltJS with a side-project called FaxJS.

FaxJS was built on the idea that the way to build user interfaces at scale was through the use of functional APIs that discouraged mutation. It also incorporated some ideas from XHP including baking an understanding of markup and content into JS, eliminating the need for manual string concatenation and thus reducing the risk of XSS vulnerabilities.

In March of 2012, the FaxJS library was brought into the Facebook codebase and renamed FBolt. Eventually it was decided that a better name that could stand on its own was needed.