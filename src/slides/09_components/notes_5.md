We can achieve this by converting our component to a class that uses local state and lifecycle hooks.

- Start by creating our class and extending from React.Component
- Our component will use local state to keep track of the time
- We intialize this inside a constructor method
  - Note that we have to call `super()` inside the constructor

In order for our component to start ticking when it is first rendered to the DOM (or mounted), we need to know when that has happened. For this we use the lifecycle method `componentDidMount`.
- Set up a timer that calls our tick function
- We save the timer so we can clear it whenever our component is removed from the DOM (unmounted)
  - This is done inside the `componentWillUnmount` hook

  - There are other lifecycle methods available but we're only concerned with these two right now.

With our timer set up we can define the `tick` method that runs every second.
- Uses a special method called `setState` which schedules updates to the local state
- NEVER MODIFY STATE DIRECTLY

Finally we implement the render method, extracting the time from our local state.

Notice how we no longer pass the time into our component when we render it.

<Show working example>