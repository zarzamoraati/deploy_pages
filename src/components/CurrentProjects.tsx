import { MdMovie } from "react-icons/md";


export const CurrentProjects = () => {
  return (
  <div style={{ backgroundColor: "#001200", height: "100%", width: "60%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
<div style={{ padding: "5px", display: "flex", gap: "5px", rowGap: "20px",columnGap:"80px", 
  flexDirection: "column", marginLeft: "10px" , backgroundColor:"whitesmoke", borderRadius:"10px", opacity:"0.7"}}>
    <div className="name-project" 
    style={{ color: "black", fontSize: "20px", padding: "0px", textAlign: "center", alignItems:"center", display:"flex", gap:"5px" }}>
        <span><MdMovie/></span>
        <span style={{fontFamily:"fantasy"}}> 
        <a style={{textDecoration:"none"}} 
        href="https://zarzamorati10-movie-recommendation.hf.space"
        target="_blank"> System Recommendation
        </a></span>
    </div>
    <div style={{ color: "black", fontSize: "20px", padding: "0px", textAlign: "center", width:"250px" }}>
        <span> Simple recommendation movie system based on cosine simlarity</span>
    </div>
    <div style={{ color: "black", fontSize: "20px", padding: "0px", textAlign: "center" }}>
      <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
        <div style={{width:"10px",height:"10px",backgroundColor:"orange",borderRadius:"50%" }}></div>
        <span style={{fontSize:"15px"}}> 
         Sckity-Learn / Python / Docker
        </span>
      </div>
    </div>
  </div>

  <div style={{ padding: "5px", display: "flex", gap: "5px", rowGap: "20px",columnGap:"80px", 
  flexDirection: "column", marginLeft: "10px" , backgroundColor:"whitesmoke", borderRadius:"10px", opacity:"0.7"}}>
    <div className="name-project" 
    style={{ color: "black", fontSize: "20px", padding: "0px", textAlign: "center", alignItems:"center", display:"flex", gap:"5px" }}>
        <span><MdMovie/></span>
        <span style={{fontFamily:"fantasy"}}> 
        <a style={{textDecoration:"none"}} 
        href="https://zarzamorati10-movie-recommendation.hf.space"
        target="_blank"> System Recommendation
        </a></span>
    </div>
    <div style={{ color: "black", fontSize: "20px", padding: "0px", textAlign: "center", width:"250px" }}>
        <span> Simple recommendation movie system based on cosine simlarity</span>
    </div>
    <div style={{ color: "black", fontSize: "20px", padding: "0px", textAlign: "center" }}>
      <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
        <div style={{width:"10px",height:"10px",backgroundColor:"blue",borderRadius:"50%" }}></div>
        <span style={{fontSize:"15px"}}> 
         Sckity-Learn / Python / Docker
        </span>
      </div>
    </div>
  </div>

    </div>
  )
}
