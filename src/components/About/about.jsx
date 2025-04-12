import React from 'react'
import './about.css'
import aboutImg from '../../assets/wao.jpg'
import playIcon from '../../assets/play-icon.png'

const about = () => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={aboutImg} alt='' className='about-img'></img>
            <img src={playIcon} alt='' className='play-icon'></img>
        </div>
        <div className="about_right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing our Leaders today</h2>
            <p>The University of YUDOM stands out as a beacon of excellence, fostering a culture of innovation,
                 inclusivity, and academic rigor. Its commitment to empowering students with cutting-edge knowledge
                  and real-world skills creates leaders who make meaningful contributions to society. The vibrant
                   campus life, dedicated faculty, and state-of-the-art facilities make it a truly 
                   transformative place to learn and grow.
                   </p>
        </div>
      
    </div>
  )
}

export default about
