import React from 'react'
import './programs.css'
/*
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
*/
import program_icon1 from '../../assets/program-icon-1.png'
import program_icon2 from '../../assets/program-icon-2.png'
import program_icon3 from '../../assets/program-icon-3.png'

import program1 from '../../assets/gradu1.jpg'
import program2 from '../../assets/gradu2.jpg'
import program3 from '../../assets/gradu3.jpg'

const programs = () => {
  return (
    <div className='programs'>
    <div className='program'>
        <img src={program1} alt=''/>
        <div className="caption">
            <img src={program_icon1} alt=''/>
            <p>Graduation Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={program2} alt=''/>
        <div className="caption">
            <img src={program_icon2} alt=''/>
            <p>Masters Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={program3} alt=''/>
        <div className="caption">
            <img src={program_icon3} alt=''/>
            <p>Post Degree</p>
        </div>
      </div>

    </div>
  )
}

export default programs
