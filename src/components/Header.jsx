import React from 'react'
import Lottie from 'react-lottie';
import IconAnimationData from '../lotties/map-locator.json';

function Header() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: IconAnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <Lottie 
                options={defaultOptions}
                  height={50}
                  width={50}
                />
                </div>
                <div className="col-md-1">
                    <h1  style={{color: "red", fontFamily:"Montagu Slab, serif"}}>Locator!!</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Header
