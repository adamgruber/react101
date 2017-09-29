Ok, so Hello World is great but it doesn’t really illustrate what React can do.

Let’s look at more dynamic example.

Let's see how React only updates the parts of the DOM that need to be updated.

- Create a `TickTock` component that will render a greeting followed by the current time.
- Then define a function to render our component to the DOM
- Create an interval to call the function every second

If we open up the inspector we can see that even though we are calling `render` every second, only the time is being updated.

So what's going on here?