// Header.js
import { ProfileInfo } from './ProfileInfo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export const Header = () => {
  return (
    <div className="header">
      <div className="left-bar" style={{ display: "flex", flexDirection: "column" }}>
        {/* Aquí irá tu imagen de avatar y descripción */}
        <ProfileInfo />
        
        <div style={{ 
          backgroundColor:"black",
          padding:"20px",
          marginTop: "auto", display: "flex", justifyContent: "center" ,gap:"20px", fontSize:"40px"}}>
          <FaGithub style={{color:"white"}} />
          <FaLinkedin style={{color:"white"}} />
        </div>
      </div>  
    </div>
  );
}




