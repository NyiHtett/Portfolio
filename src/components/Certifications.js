import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function Certifications() {
    
    return(
      <div style={{animation:"fadeIn 1s ease-in-out"}}>
        <ul style = {{listStyle : 'none'}}>

        <div className="container">
  <div className="row" style={{justifyContent:'space-between'}}>
  <div className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'white'}}>
    <div className = "row p-4" style={{margin: "20px", fontFamily:"fantasy"}}>
    <img className = "col-3 col-sm-3" src = {require('../assets/google.png')} alt = "Google Logo"/>
    <h3 className = "col-sm-9" style={{display:'flex', alignItems:'center'}}> Technical Support Fundamentals  </h3>
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
              data-testid = "show-credential-button-1"
              style={{marginTop:'40px'}} className="btn btn-outline-secondary">Show Credential</a>
            </div>
   </div>
   <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div className = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img className = "col-3 col-sm-3" style={{margin: "20px"}} src = { require('../assets/meta.png')} />
            <h3 className = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> Version control </h3>
            </div>

            <div style={{fontSize:"20px", marginBottom:'50px', color:'white'}} className="font-weight-bold">
              <li> Git</li>
              <li> Bash</li>
              <li> Version Control </li>
              <li> Github</li>
              <li> Web development </li>
              <li> Linux </li>
              <a role="button" target="_blank" href="https://www.coursera.org/learn/introduction-to-version-control/home/module/4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta"  style={{marginTop:'60px'}} className="btn btn-primary">Show Credential</a>
            </div>
          </li> 
  </div>
  <br/><br/><br/>
  <div className="row" style={{justifyContent:'space-between'}}>
  
  <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'white'}}>
    <div className = "row p-4" style={{margin: "20px", fontFamily:"fantasy"}}>
    <img className = "col-3 col-sm-3" src = { require('../assets/google.png') } />
    <h3 className = "col-sm-9" style={{display:'flex', alignItems:'center'}}> Foundations of User Experience  </h3>
    </div>
            <div style={{fontSize:"20px", marginBottom:'50px'}}>
              <li>User Experience Design</li>
              <li> Wireframing</li>
              <li> Prototyping </li>
              <li> UX Research</li>
              <li> User Experience (UX) </li>
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/2D598CL97NHA" 
              style={{marginTop:'40px'}} className="btn btn-outline-secondary">Show Credential</a>
            </div>
            
   </li>
   <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div className = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img className = "col-3 col-sm-3" style={{margin: "20px"}} src = { require('../assets/meta.png')} />
            <h3 className = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> Introduction to IOS development </h3>
            </div>

            <div style={{fontSize:"20px", padding:"30px", marginBottom:'50px', color:'white'}} className="font-weight-bold">
              <li> Application Development</li>
              <li> iOS App Development</li>
              <li> Mobile Development</li>
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/X47BZXM6HP8B" 
               style={{marginTop:'60px'}} className="btn btn-primary">Show Credential</a>
            </div>
          </li> 
  </div>
  <br/><br/><br/>
  <div className="row" style={{justifyContent:'space-between'}}>
  
  <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'white'}}>
    <div className = "row p-4" style={{margin: "20px", fontFamily:"fantasy"}}>
    <img className = "col-3 col-sm-3" src = { require('../assets/google.png') } />
    <h3 className = "col-sm-9" style={{display:'flex', alignItems:'center'}}> Operating Systems: Becoming a Power User  </h3>
    </div>
            <div style={{fontSize:"20px", marginBottom:'50px'}}>
              <li>Binary code</li>
              <li> Troubleshooting</li>
              <li> Linux</li>
              <li> Customer Support</li>
              <a role="button" target="_blank" href="https://coursera.org/share/fb3169698a1d9b50721247579e1e3b08" 
              style={{marginTop:'40px'}} className="btn btn-outline-secondary">Show Credential</a>
            </div>
            
   </li>

   <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div className = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img className = "col-3 col-sm-3" style={{margin: "20px"}} src = { require('../assets/meta.png')} />
            <h3 className = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> HTML and CSS in depth </h3>
            </div>

            <div style={{fontSize:"20px", padding:"30px", marginBottom:'50px', color:'white'}} className="font-weight-bold">
              <li> Pseudocode </li>
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/ELRS4SVZBKKZ" 
               style={{marginTop:'60px'}} className="btn btn-primary">Show Credential</a>
            </div>
          </li> 
   
  </div>

  <br/><br/><br/>

  <div className="row" style={{justifyContent:'space-between'}}>
  
  <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div className = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img className = "col-3 col-sm-3" style={{margin: "20px"}} src = { require('../assets/meta.png')}/>
            <h3 className = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> Introduction to front-end development </h3>
            </div>

            <div style={{fontSize:"20px", padding:"30px", marginBottom:'50px', color:'white'}} className="font-weight-bold">
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/KZ9D6M3W4CL5" 
               style={{marginTop:'60px'}} className="btn btn-primary">Show Credential</a>
            </div>
          </li> 

   <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div className = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img className = "col-3 col-sm-3" style={{margin: "20px"}} src = { require('../assets/meta.png')}/>
            <h3 className = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> Programming with javascript </h3>
            </div>

            <div style={{fontSize:"20px", padding:"30px", marginBottom:'50px', color:'white'}} className="font-weight-bold">
              <li> javascript </li>
              <li> jest </li>
              <li> unit testing </li>
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/7MDRMLXDF8QN" 
               style={{marginTop:'60px'}} className="btn btn-primary">Show Credential</a>
            </div>
    </li>
  </div>
  <br/><br/><br/>

  <div className="row" style={{justifyContent:'space-between'}}>
  
  <li className = "col-11 col-sm-5 card" style={{borderRadius: '30px',background:'#3b5998'}}>
    <div className = "row" style={{margin: "20px", fontFamily:"fantasy", color:"white"}}>
            <img className = "col-3 col-sm-3" style={{margin: "20px"}} src = { require('../assets/meta.png')}/>
            <h3 className = "col-sm-7 text-justify" style={{display:'flex', alignItems:'center', margin: "20px"}}> Coding interview preparation </h3>
            </div>

            <div style={{fontSize:"20px", padding:"30px", marginBottom:'50px', color:'white'}} className="font-weight-bold">
              <a role="button" target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/VGWCU6HYLSXG" 
               style={{marginTop:'60px'}} className="btn btn-primary">Show Credential</a>
            </div>
          </li> 

  
  </div>

  


</div>
          

          
        </ul>
      </div>

    )
}
export default Certifications;