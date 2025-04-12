import React from 'react'
import './campus.css'
import pic1 from '../../assets/camp1.jpg'
import pic2 from '../../assets/camp2.jpg'
import pic3 from '../../assets/camp3.jpg'
import pic4 from '../../assets/camp4.jpg'


const campus = () => {
  return (
    <div className='campus'>
    <div className="gallery">
        <img src={pic1} alt=''></img>
        <img src={pic2} alt=''></img>
        <img src={pic3} alt=''></img>
        <img src={pic4} alt=''></img>
        </div>
        <button className='btn dark-btn'>See more here..</button>
    </div>
  )
}

export default campus
