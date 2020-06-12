const Avatar = (props) => (
  <img src={props.url} />
);

const LifeStatus = (props) => (
  <span role="img">
    {props.deceased ? '💀' : '😀'}
  </span>
);

const CrewMember = (props) => (
  <div className="crew-member">
    <Avatar url={props.avatar} />
    <p>{props.name}</p>
    <LifeStatus deceased={props.deceased} />
  </div>
);

const CrewList = (props) => (
  <div className="crew-list">
    <header>
      <span>Crew Member</span>
      <span>Status</span>
    </header>
    {props.children}
  </div>
);

ReactDOM.render(
  <div className="crew-tracker">
    <h5>Crew Tracker</h5>
    <CrewList>
      <CrewMember name="Leela" avatar="./assets/leela.png" />
      <CrewMember name="Fry" avatar="./assets/fry.png" />
      <CrewMember name="Zoidberg" avatar="./assets/zoidberg.png" deceased />
      <CrewMember name="Bender" avatar="./assets/bender.png" />
      <CrewMember name="Hermes" avatar="./assets/hermes.png" />
    </CrewList>
  </div>,
  document.getElementById('root')
);


