
export const TechStack = () => {
  return (
<div style={{ backgroundColor: "#001200", height: "100%", width: "60%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
  
  <div style={{ padding: "5px", display: "flex", gap: "5px", rowGap: "20px",columnGap:"80px", 
  flexDirection: "column", marginLeft: "10px",opacity:"0.7" }}>
    <div style={{ color: "white", fontSize: "20px", padding: "0px", textAlign: "center",fontWeight:"bold" }}>Web Development</div>
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "10px" }}>
      <img src="imgs/tech_stack/web_development/javascript.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/web_development/nodejs.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/web_development/typescript.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
    </div>
    <div style={{ display: "flex", columnGap: "10px", marginTop: "10px" }}>
      <img src="imgs/tech_stack/web_development/react.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/web_development/mongodb.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/web_development/git.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
    </div>
  </div>
 
  <div style={{ padding: "10px", display: "flex", gap: "5px", 
  rowGap: "20px",columnGap:"80px", flexDirection: "column", marginLeft: "10px",
   justifyContent: "space-between",  opacity:"0.7" }} >
    <div style={{ color: "white", fontSize: "20px", padding: "0px", textAlign: "center",fontWeight:"bold" }}>Machine Learning</div>
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "10px" }}>
      <img src="imgs/tech_stack/machine_learning/sklearn.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/machine_learning/pytorch.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/machine_learning/docker.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
    </div>
    <div style={{ display: "flex", columnGap: "10px", marginTop: "10px" }}>
      <img src="imgs/tech_stack/machine_learning/streamlit.png" alt="" style={{ maxWidth: "50px",height: "60px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/machine_learning/gradio.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/machine_learning/langchain.jpg" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
    </div>
  </div>

  <div style={{ padding: "10px", display: "flex", gap: "5px", rowGap: "20px", 
  flexDirection: "column", marginLeft: "10px", justifyContent: "space-between" ,opacity:"0.7"}}>
    <div style={{ color: "white", fontSize: "20px", padding: "0px", textAlign: "center" , fontWeight:"bold"}}>Data Analysis</div>
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "10px" }}>
      <img src="imgs/tech_stack/data_analysis/python.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/data_analysis/pandas.webp" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/data_analysis/sql.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
    </div>
    <div style={{ display: "flex", columnGap: "10px", marginTop: "10px" }}>
      <img src="imgs/tech_stack/data_analysis/excel.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/data_analysis/powerbi.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
      <img src="imgs/tech_stack/data_analysis/jupyter.png" alt="" style={{ maxWidth: "50px", borderRadius: "10px" }} />
    </div>
  </div>
</div>
  )
}
