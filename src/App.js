import './index.css';
import arrow from "./imgs/right.svg"
import { useState } from 'react';
import one from "./imgs/one.jpg"
import two from "./imgs/two.jpg"
import three from "./imgs/three.jpg"


function App() {

  const [state, setState] = useState(true);
  return (
    <div className="App" onClick={() => {setState(!state)}}>
      <h1>ICONS</h1>
      <img src={arrow} alt="arrow" className={state? "imgNormal" : "imgNormal imgTransition"}/>

    <div className="content">
     <p className={state? "p" : "p pTransform"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita, blanditiis iure dolorem, minus suscipit vero eaque tenetur ad iste, praesentium libero id illo corrupti ipsum deserunt voluptatum labore. Voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veniam. Ipsam a, doloremque error temporibus, cumque dolorem quod quaerat praesentium est reprehenderit enim non animi id laborum? Ipsa, cupiditate repellat.</p>

     <img src={two} alt="" />
    </div>
      
    </div>
  );
}

export default App;
