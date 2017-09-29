Alright maybe its not magic but it's pretty close.

React uses something called "Virtual DOM" to abstract the DOM into JS objects.

When a component changes and `render` is called, React looks at the entire component tree.

It uses a diffing algorithm to compare the changes in the virtual DOM and decides which parts of the tree need to be rerendered.

It then batches the changes for efficiency and eventually updates the actual DOM, changing only what is necessary.
