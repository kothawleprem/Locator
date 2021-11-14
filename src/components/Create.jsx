import React, {useState} from 'react'
import axios from 'axios'

function Create() {

    const [input,setInput] = useState({title:'',address:'',landmark:'',latlng:''})

    function handleChange(event) {
       const {name, value} = event.target

       setInput(prevInput => {
           return {
               ...prevInput,
               [name]:value
           }
       })
    }

    function handleClick(event) {
        event.preventDefault()
        const newAddress = {
            title:input.title,
            address:input.address,
            landmark:input.landmark,
            latlng:input.latlng
        }
        axios.post('http://localhost:5000/create', newAddress)
    }

    return (
        <div>
            <h1>Create here</h1>
            <form>
                <div className='form-group'>
                    <input
                    onChange={handleChange}
                    name="title" value={input.title} autoComplete="off"
                    className="form-control"
                    placeholder="Locator Title">

                    </input>
                </div>
                <br></br>
                <div className='form-group'>
                    <textarea
                    onChange={handleChange}
                    name="address"  value={input.address} autoComplete="off"
                    className="form-control"
                    placeholder="Enter Address">
                        
                    </textarea>
                </div>
                <div className='form-group'>
                    <input
                    onChange={handleChange}
                    name="landmark" value={input.landmark} autoComplete="off"
                    className="form-control"
                    placeholder="Enter in Format: Landmark, Town/Village">
                    </input>
                </div>
                <div className='form-group'>
                    <input
                    onChange={handleChange}
                    name="latlng" value={input.latlng} autoComplete="off"
                    className="form-control"
                    placeholder="Enter Latitude, Longitude">
                    </input>
                </div>
                <br></br>
                <button onClick={handleClick} className="btn btn-lg btn-info">Add Address</button>
            </form>
        </div>
    )
}

export default Create
