import React, {useEffect, useState} from 'react'
import Ola from '../images/ola.svg'
import Navigate from '../images/navigate.svg'
import Restaurant from '../images/restaurant.svg'
import Grocery from '../images/grocery.svg'
import Pharmacy from '../images/pharmacy-location.svg'
import Gas from '../images/gas.svg'



function Locations({match}) {

    const [address,setAddress] = useState([{
        title:'',
        address:'',
        landmark:'',
        latlng:'',
        ola:'',
        restaurant:'',
        grocery:'',
        navigate:'',
        pharmacies:'',
        gas:''
    }])
    useEffect(() => {
        fetch("/locations").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setAddress(jsonRes))
    })

    const iconClass = {
        width:'50%'
    }
    return (
        <div className="container">
                    { address.map(a => {
                        if(a.title === match.params.id){
                            if(a.latlng)
                                return (
                                   <div className="row">
                                        <div style={{paddingTop:"70px"}} className="col-md-6">
                                        <center>
                                            <div>
                                                <u>
                                                    <h1 style={{fontFamily:"Merriweather Sans, sans-derif"}}>{a.title}</h1>
                                                </u>
                                                <p style={{paddingTop:"70px"}}>{a.address}</p>
                                                <iframe style={{paddingTop:"70px",width:"100%",height:"400px"}} src={a.latlng}></iframe>
                                            </div>
                                        </center>
                                        </div>
                                        <div style={{paddingTop:"110px"}} className="col-md-6">
                                            <center>
                                                <div className="card">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                         <a style={{textDecoration:"None"}} href={a.navigate}>
                                                        <img style={{width:'40%'}} className={iconClass} src={Navigate} alt="navigate"/><br></br>
                                                            Navigate
                                                            <br></br>
                                                        </a>
                                                            
                                                        </div>
   
                                                        <div className="col-md-6">
                                                        <a style={{textDecoration:"None"}} href={a.ola}>
                                                                <img style={{width:'50%',paddingTop:'35px'}} className={iconClass} src={Ola} alt="ola"/><br></br>Ola
                                                                <br></br>
                                                            </a>
                                                           
                                                        </div>

                                                        <div className="col-md-6"> 
                                                        <a style={{textDecoration:"None"}} href={a.pharmacies}>   
                                                        <img style={{width:'40%'}} className={iconClass} src={Pharmacy} alt="pharmacy"/><br></br>
                                                            Pharmacies
                                                        </a>    
                                                        </div>

                                                        <div className="col-md-6">
                                                            <a style={{textDecoration:"None"}} href={a.grocery}>
                                                                <img style={{width:'40%'}} className={iconClass} src={Grocery} alt="grocery"/><br></br>
                                                                    Grocery
                                                                    <br></br>
                                                            </a>
                                                        </div>

                                                        <div className="col-md-6"> 
                                                        <a style={{textDecoration:"None"}} href={a.restaurant}>  
                                                        <img style={{width:'40%'}} className={iconClass} src={Restaurant} alt="restaurant"/><br></br>
                                                            Restaurants
                                                            <br></br>
                                                        </a>
                                                        </div>

                                                        <div className="col-md-6"> 
                                                        <a style={{textDecoration:"None"}} href={a.gas}>  
                                                        <img style={{width:'40%'}} className={iconClass} src={Gas} alt="gas"/><br></br>
                                                            Gas
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                )
                            
                            else {
                                return <div>
                                <h1>{a.title}</h1>
                                <p>{a.address}</p>
                                <iframe src={a.landmark}></iframe>
                                </div>
                            }

                        }
                    })}
        </div>
    )
}

export default Locations
