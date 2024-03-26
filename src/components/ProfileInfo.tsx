import { TfiEmail } from "react-icons/tfi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



export const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <img src="imgs/profil/profile.png" alt="Avatar"/>
        <div style={{marginTop:"10px"}}>
          <div 
          style={{display:"flex",
          gap:"5px", 
          fontSize:"10px", 
          justifyContent:"center", 
          alignItems:"flex-start",
          flexDirection:"column"}}>
              <div style={{display:"flex",alignItems:"center", gap:"10px"}}> 
                <span style={{fontSize:"30px"}}>
                  <TfiEmail />
                </span>
                <span style={{fontSize:"20px"}}>
                  zarzamorati@gmail.com
                </span>
              </div>
              <div style={{display:"flex",alignItems:"center", gap:"10px"}}> 
                <span style={{fontSize:"30px"}}>
                  <FaBirthdayCake />
                </span>
                <span style={{fontSize:"20px"}}>
                  August 1992
                </span>
              </div>
              <div style={{display:"flex",alignItems:"center", gap:"10px"}}> 
                <span style={{fontSize:"30px"}}>
                  <FaLocationDot />
                </span>
                <span style={{fontSize:"20px"}}>
                  Mexico City
                </span>
              </div>
            
          </div>
          <div 
          style={{display:"flex",
          gap:"5px",
          justifyContent:"center",
          alignItems:"flex-end",
          fontSize:"40px"
          }}> 
          </div>
        </div>
    </div>
  );
}

  