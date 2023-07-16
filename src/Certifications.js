

function Certifications() {
     
    return(
        <div >
        <ul style = {{listStyle : 'none'}}>

        <div class="container">
  <div class="row" style={{justifyContent:'space-between'}}>
  
  <li class = "col-sm-5 card" style={{borderRadius: '30px',background:'white'}}>
    <div class = "row p-4" style={{margin: "20px", fontFamily:"fantasy"}}>
    <img class = "col-sm-3" src = { require('./google.png')} />
    <h3 class = "col-sm-9" style={{display:'flex', alignItems:'center'}}> Technical Support Fundamentals  </h3>
    </div>
            <div style={{fontSize:"20px", marginBottom:'50px'}}>
              <li> Computer hardware</li>
              <li> Communication</li>
              <li> Binary code </li>
              <li> Linux</li>
              <li> Troubleshooting </li>
              <li> Technical support  </li>
              <li> Customer service </li>
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/HRFTJUXSQ7RZ" 
              style={{marginTop:'40px'}} class="btn btn-outline-secondary">Show Credential</a>
            </div>
            
   </li>
   <li class = "col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div class = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img class = "col-sm-3" style={{margin: "20px"}} src = { require('./meta.png')} />
            <h3 class = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> Version control </h3>
            </div>

            <div style={{fontSize:"20px", marginBottom:'50px', color:'white'}} class="font-weight-bold">
              <li> Git</li>
              <li> Bash</li>
              <li> Version Control </li>
              <li> Github</li>
              <li> Web development </li>
              <li> Linux </li>
              <a role="button" target="_blank" href="https://www.coursera.org/learn/introduction-to-version-control/home/module/4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta"  style={{marginTop:'60px'}} class="btn btn-primary">Show Credential</a>
            </div>
          </li> 
  </div>
</div>
          

          
        </ul>
      </div>

    )
}
export default Certifications;