import { useNavigate } from "react-router-dom"
import img1 from '../assets/WeatherApp_IMG.png'
import img2 from '../assets/SmateTP_IMG.png'
import img3 from '../assets/AirAst_IMG.png'

function MyPro(){
    const  navigate = useNavigate('')
    return(
        <div style={{display:'flex', flexDirection:'column', padding:'20px'}}>
            <div style={{display:'flex', justifyContent:'space-around', marginBottom:'20px'}}>
            <div>
                <img src={img1} alt="Weather App" style={{width:'450px'}}/>
                <h2>Weather App</h2>
            </div>
            <div>
                <img src={img2} alt="Smart Travel Planner" style={{width:'450px'}}/>
                <h2>Smart Travel Planner</h2>
            </div>
            </div>
            <div style={{width:'100%', display:'flex', justifyContent:'center',marginBottom:'20px'}}>
                <div>
                <img src={img3} alt="Air Astana" style={{width:'450px'}}/>
                <h2>"Air Astana"</h2>
            </div>
            </div>
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}> 
                <button 
                style={{
            padding: '10px 20px',
            backgroundColor: '#1c3faa',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
                onClick={()=> navigate('/about')}>About them</button>
            </div>
        </div>
    )
}

export default MyPro