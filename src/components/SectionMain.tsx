import { TechStack } from './TechStack'
import { CurrentProjects } from './CurrentProjects'
import { PersonalInterest } from './PersonalInterest'


export const SectionMain = () => {
  return (
    <div style={{
      width: '75%', /* Ancho del 75% */
      height: '100vh', /* 100% de la altura de la ventana */
      position: 'absolute', /* Posición absoluta */
      right: 0, /* Alinear a la derecha */
      top: 0, /* Alinear en la parte superior */
      
    }}>
      <div style={{fontSize:"30px",fontWeight:"bold", marginLeft:"10px", 
      backgroundColor:"#fccc6e",width:"15%",opacity:"0.7",padding:"5px"}}>Tech Stack</div>
       <div style={{margin:"10px",
       height:"28%",
       display:"flex",
       justifyContent:"flex-start"}}><TechStack/></div>
      
      <div style={{fontSize:"30px",fontWeight:"bold", marginLeft:"10px", 
      backgroundColor:"#fccc6e",width:"15%",opacity:"0.7",padding:"5px"}}>Working On</div>
       <div style={{margin:"10px",
       height:"28%",
       display:"flex",
       justifyContent:"flex-start"}}><CurrentProjects/></div>
       
       <div style={{fontSize:"30px",fontWeight:"bold", marginLeft:"10px", 
      backgroundColor:"#fccc6e",width:"15%",opacity:"0.7",padding:"5px"}}>Learning...</div>
       <div style={{margin:"10px",
       height:"24%",
       display:"flex",
       justifyContent:"flex-start"}}><PersonalInterest/></div>
    </div>
  )
}

