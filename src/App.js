import axios from "axios"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  const apikey ="f56f24967aaf51182d1d4df628297c6d"
  const [data, setData]= useState({})
  const [inputCity,setInputCity]= useState({})


  const getWetherDetails =(cityName) =>{
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" + apikey
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)

      setData(res.data)

      
    }).catch((err)=>{
      console.log("err",err)
    })

  }
  const handleChangeInput =(e)=>{
    setInputCity(e.target.value)
  }

  const handleSearch =() => {   
    getWetherDetails(inputCity)
  }



  useEffect(()=>{
    getWetherDetails("nagpur")
  },[])

  







  return (
    <div className="vip">
    <div className="col-md-12">
      <div className='weatherbg'>
      <h1 className="heading">Weather App</h1>


      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className="form-control"  onChange={handleChangeInput}></input>
      <button className="btn btn-primary" onClick={handleSearch} type="button">Search</button>
      </div>
    </div>





      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">

       <img className="wetherIcon"
        src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
        <h5 className="wetherCity">{data.name}</h5>
        <h6 className='wetherTem'>{((data.main?.temp)-273.15).toFixed(2)}</h6>

        </div>
      </div>
   
    </div>
    </div>

  
    
  );
}

export default App;
