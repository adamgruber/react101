- We might start with an `Avatar` component that takes a url and displays a profile picture

- And we need a `LifeStatus` component to show an icon indicating the crew member status

- Next we'll combine these alongside the crew member's name in a `CrewMember` component

- We'll also need `CrewList` component that will render a header and then any crew members we pass to it.
  - Note the use of {props.children}. Children is a special prop that evaluates to any child elements that are nested within the component

- Finally we render everything to the DOM.
- We can add a title
- Then our CrewList component which we supply with multiple CrewMember components each with different props