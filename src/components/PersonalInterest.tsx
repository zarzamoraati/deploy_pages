import React from 'react'

export const PersonalInterest = () => {
  return (
    <div style={{backgroundColor:"#001200",
    height:"100%", width:"60%", borderRadius:"10px", display:"flex", justifyContent:"space-around", 
    alignItems:"center"}}>
        <div style={{textAlign:"center", opacity:"0.7"}}>
          <img 
          style={{borderRadius:"50%"}}
          src="imgs\tech_stack\learning\golang.png" height="100px" width="200px"/>
          <div>
            <span style={{color:"white",fontWeight:"bold", fontSize:"30px"}}>Golang</span>
          </div>
        </div>
        <div  style={{textAlign:"center",opacity:"0.7"}}>
          <img src="imgs\tech_stack\learning\langchain.png" 
          height="100px" width="200px"
          style={{borderRadius:"50%"}}/>
          <div>
            <span style={{color:"white",fontWeight:"bold", fontSize:"30px"}}>Lang Chain</span>
          </div>
        </div>
    </div>
  )
}
