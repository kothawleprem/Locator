import React from 'react'
import { useHistory } from 'react-router-dom'
import mainImg from '../images/location.png'
import Lottie from 'react-lottie';
import MapAnimationData from '../lotties/area-map.json';

function Home() {
  const history = useHistory()

    function handleClick(event) {
        history.push('/locations/'+textInput.current.value)

    }
    const textInput = React.createRef();  // React use ref to get input value

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: MapAnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <img style={{width:'100%'}} src={mainImg} /> */}
               <Lottie 
                options={defaultOptions}
                  height={500}
                  width={500}
                />
            </div>
            <div className="col-md-6">
            <div style={{paddingTop:"250px"}} className="input-group mb-3">
                    <input
                    name="title" ref={textInput} autoComplete="off"
                    className="form-control"
                    placeholder="Locator Title">
                    </input>
                  <div className="input-group-append">
                  <button onClick={handleClick} className="btn btn-outline-danger" type="button">Search Address</button>
                </div>
                {/* <button  className="btn btn-lg btn-info">View Address</button> */}
            </div>
            </div>
          </div>
          
           
        </div>
    )
}

export default Home
