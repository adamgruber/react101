### How React Works

- Not magic, but pretty close

- React uses "Virtual DOM" to abstract the DOM into JS objects

- Change is detected --> `render` is called

- React looks at entire component tree

- Diffing algorithm compares changes in virtual DOM

- Decides parts of tree to rerender

- Batches changes for efficiency

- Updates the actual DOM
