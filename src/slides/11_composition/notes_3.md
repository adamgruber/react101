Start with Avatar component
&nbsp;&nbsp;&nbsp;&nbsp;- takes a url
&nbsp;&nbsp;&nbsp;&nbsp;- renders image

-----------------------------------
=> LifeStatus component
&nbsp;&nbsp;&nbsp;&nbsp;- icon indicating status

-----------------------------------
=> CrewMember component
&nbsp;&nbsp;&nbsp;&nbsp;- combine Avatar and Status alongside crew member's name

-----------------------------------
=> CrewList component
&nbsp;&nbsp;&nbsp;&nbsp;- render a header
&nbsp;&nbsp;&nbsp;&nbsp;- list crew members
  
Note use of {props.children}. 
&nbsp;&nbsp;&nbsp;&nbsp;- special prop
&nbsp;&nbsp;&nbsp;&nbsp;- evaluates to any nested child elements

-----------------------------------
=> Render to the DOM

-----------------------------------
=> Add a title

-----------------------------------
=> CrewList component
&nbsp;&nbsp;&nbsp;&nbsp;- supply multiple CrewMember components
&nbsp;&nbsp;&nbsp;&nbsp;- different props for each