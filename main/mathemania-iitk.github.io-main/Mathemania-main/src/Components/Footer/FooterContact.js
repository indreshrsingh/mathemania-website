import { GitHub, Instagram, YouTube, Facebook, Web,Email } from "@material-ui/icons";
import React from "react";
import "../../App.css";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      
       
         
        
            
          
            
            <a href='https://www.instagram.com/stamatics_iitk/?igshid=YmMyMTA2M2Y%3D%3Fmini%3Dtrue&url=%7B%7B%20page.url%20%7C%20absolute_url%20%7C%20url_encode%20%7D%7D'>
              <Instagram />
            </a>
         

         
       
            <a href='https://www.facebook.com/stamatics.iitk'>
              <Facebook />
            </a>
        
           <a href='https://stamatics.github.io/'>
            <Web/>
           </a>
          
      
           


            
    </div>
  );
};

export default FooterContact;
