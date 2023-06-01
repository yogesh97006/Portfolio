import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='Projects'>
    <h1 style={{color:'white',textAlign:'center',margin:'30px 0 -30px 0'}}>Projects</h1>
        <div className='Project__Cards'>
            <div className='pc'>
                <img src='' alt='' />
                <div className='pbs' >
                  <button className='pbtns' style={{color:'white',backgroundColor:'blue'}}>Link</button>
                  <button className='pbtns ' style={{color:'white',backgroundColor:'grey'}}>Source</button>
                </div>
            </div>
            </div>
      </div>
  )
}

export default Projects