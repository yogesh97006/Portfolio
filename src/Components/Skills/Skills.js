import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
import './Skills.css' 
import  ProgressBar  from "@ramonak/react-progress-bar"

const Skills = () => {
  return(
    <div className='tops'>
    <h1 className='skill1'>Skills</h1>
  <div className='con1' > 
    <Carousel autoPlay={true} infiniteLoop={true} transitionTime={2000} showIndicators={false}  showStatus={false} showArrows={false}  stopOnHover={false}>
  <div  className='car1'>
    <div className='card3'><h1 className='skill'>React Js</h1>
     <ProgressBar  height='15px' bgColor='black' completed={80} className='progress'/>
    </div>
  <div className='card4'><h1 className='skill'>Java Script</h1>
    <ProgressBar className='progress' height='15px' bgColor='black' completed={80} />
   </div>
  <div className='card5'><h1 className='skill'>Bootstrap</h1>
    <ProgressBar className='progress' height='15px' bgColor='black' completed={80} />
   </div>
  </div>
  <div className='car1'>
  <div className='card6'><h1 className='skill'>Redux</h1>
    <ProgressBar className='progress'   height='15px' bgColor='black' completed={60} />
   </div>
  <div className='card1'><h1 className='skill'>HTML</h1>
    <ProgressBar className='progress'   height='15px' bgColor='black' completed={70}/>
   </div>
  <div className='card2'><h1 className='skill'>CSS</h1>
    <ProgressBar className='progress'   height='15px' bgColor='black' completed={60} />
   </div>
  </div>
</Carousel>
</div>
</div>)
}

export default Skills