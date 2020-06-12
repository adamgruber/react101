/**
 * Create a TickTock Class Component
 * - renders a greeting and tells the current time
 *
 */
class TickTock extends React.Component {

  // Define intial state
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // Start ticking as soon as the component
  // is rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Make sure to clean up when the component
  // is removed from the DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Update the time every tick
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const {date} = this.state;
    const now = date.toLocaleTimeString();
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>The time is now {now}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <TickTock />,
  document.getElementById('root')
);
