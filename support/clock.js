/**
 * Create a TickTock Component
 * - renders a greeting and tells the current time
 *
 * @param {object} props
 * @param {string} props.time Current time
 *
 * @return {ReactElement}
 */
const TickTock = props => (
  <div>
    <h1>Hello, world!</h1>
    <h2>The time is now {props.time}.</h2>
  </div>
);

/**
 * Create a `tick` function
 * - Passes the current time to our TickTock component
 * - Renders component into the root element
 */
function tick() {
  const now = 
    new Date().toLocaleTimeString();

  ReactDOM.render(
    <TickTock time={now} />,
    document.getElementById('root')
  )  
}

/**
 * Create an interval to call our `tick` function every second
 */
setInterval(tick, 1000);
