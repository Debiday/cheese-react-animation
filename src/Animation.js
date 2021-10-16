import { Keyframes, Frame } from 'react-keyframes'
import C1 from './assets/Cheese3.png'
import C2 from './assets/Cheese5.png'
import C3 from './assets/Cheese6.png'
import C4 from './assets/Cheese8.png'
import C5 from './assets/Cheese10.png'
import C6 from './assets/Cheese16.png'
import C7 from './assets/Cheese20.png'

function Animation() {
    return <Keyframes component="pre" loop={true} className="cheeseimg">
      <Frame duration={2500} >
        <img src={C1} alt="1"/>    
      </Frame>
      <Frame duration={20} >
      <img src={C2} alt="2"/>       
      </Frame>
      <Frame duration={20} >
      <img src={C3} alt="3"/>       
      </Frame>
      <Frame duration={20} >
      <img src={C4} alt="4"/>       
      </Frame>
      <Frame duration={20} >
      <img src={C5} alt="5"/>       
      </Frame>
      <Frame duration={15} >
      <img src={C6} alt="6"/>       
      </Frame>
      <Frame duration={20} >
      <img src={C7} alt="7"/>       
      </Frame>
      <Frame duration={10} >
      <img src={C2} alt="2"/>       
      </Frame>
      <Frame duration={100} >
        <img src={C1} alt="1"/>    
      </Frame>
    </Keyframes>
    
  }


export default Animation