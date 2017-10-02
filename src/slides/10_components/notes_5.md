Conversion to Class
&nbsp;&nbsp;&nbsp;&nbsp;- local state
&nbsp;&nbsp;&nbsp;&nbsp;- lifecycle hooks

-----------------------------------
=> Create class, extend from React.Component

-----------------------------------
=> Initialize local state inside constructor
&nbsp;&nbsp;&nbsp;&nbsp;- Call `super()`

Need to know when rendered to DOM (mounted)

-----------------------------------
=> Use lifecycle method `componentDidMount`
&nbsp;&nbsp;&nbsp;&nbsp;- Set up / save timer

-----------------------------------
=> Clear timer when component is removed from the DOM (unmounted)
&nbsp;&nbsp;&nbsp;&nbsp;- `componentWillUnmount`

(Other lifecycle methods)

-----------------------------------
=> Define `tick` method
&nbsp;&nbsp;&nbsp;&nbsp;- Use special method `setState`
&nbsp;&nbsp;&nbsp;&nbsp;- Schedules updates to the local state

NEVER MODIFY STATE DIRECTLY

-----------------------------------
=> Implement render method
&nbsp;&nbsp;&nbsp;&nbsp;- Extract time from local state

-----------------------------------
=> Render to DOM
&nbsp;&nbsp;&nbsp;&nbsp;- No longer pass time as a prop
