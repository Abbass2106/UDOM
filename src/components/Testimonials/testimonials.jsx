import React, { useRef } from 'react'
import './testimonials.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/dizer.jpg'
import user2 from '../../assets/mvuma.jpg'
import user3 from '../../assets/kuzz.jpg'
import user4 from '../../assets/derickie.jpg'

const testimonials = () => {

    const slider = useRef();
    let tx=0;

    const slideForward=()=> {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

    const slideBackward=()=> {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
        <img src={nextIcon} alt='' className='next-btn' onClick={slideForward}></img>
        <img src={backIcon} alt='' className='back-btn' onClick={slideBackward}></img>

        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=''/>
                            <div>
                                <h3>Leonard Jumbe</h3>
                                <span>YUDOM, Tanzania</span>
                            </div>
                        </div>
                        <p>
                         This university is a place of 
                        endless opportunities. It’s where knowledge meets innovation, and 
                        every day is a step closer to achieving my goals. 🏫✨
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=''/>
                            <div>
                                <h3>Mike Mvuma</h3>
                                <span>YUDOM, Tanzania</span>
                            </div>
                        </div>
                        <p>
                        My university is a hub of growth and discovery,
                         where diverse ideas come together to shape a brighter future.
                          The environment here is both challenging and supportive,
                           pushing me to achieve my best while providing the resources
                            to succeed. 🌟📚

                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=''/>
                            <div>
                                <h3>Brian Charles</h3>
                                <span>YUDOM, Tanzania</span>
                            </div>
                        </div>
                        <p>
                        My university is a place where dreams take flight. 
                         The resources here are incredible, the professors
                          are truly inspiring, and the atmosphere is charged 
                          with positivity.it’s a journey toward 
                           a brighter future. 🌟📖
                        </p>
                    </div>
                </li>   

                                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt=''/>
                            <div>
                                <h3>Derickie Kilima</h3>
                                <span>YUDOM, Tanzania</span>
                            </div>
                        </div>
                        <p>
                         This university is a place of 
                        endless opportunities. It’s where knowledge meets innovation, and 
                        every day is a step closer to achieving my goals. 🏫✨
                        </p>
                    </div>
                </li>         
            </ul>
        </div>
    </div>
  )
}

export default testimonials
