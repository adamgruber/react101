Let's take another look at our TickTock component.

In order for it to work we have to do 2 things
- Pass in the current time
- Call the `tick` function to render the component every second

What if we could encapsulate this functionality inside our component? What would an ideal clock
component look like? How should it behave?
- It should know the time without us having to tell it
- It should know to tick every second on its own
- It should start ticking whenever it is first rendered to the DOM