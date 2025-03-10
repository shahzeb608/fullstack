import '../styles/footer.css'; 
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


import { ImQrcode } from "react-icons/im";

const Footer = () => {
    return ( 
        <div id="footer">
        <div id="exc">Exclusive</div>
        <div id="support">
        <h3>Support</h3>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet consectetur.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        
        </div>
        <div id="account">
            <h3>Account</h3>
        <ul id="ul1">
                    <li><a href="/account">My Account</a></li>
                    <li><a href="/login">Login / Register</a></li>
                 {  // <li><a href="/cart">Cart</a></li>
                 }
                    <li><a href="/wish">Wishlist</a></li>
                    <li><a href="/shop">Shop</a></li>
        </ul>
        </div>
        <div id="quick">
        <h3>Quick Link</h3>
        <ul id="ul2">
        <li>
                    <a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">TERMS of Use</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                    
        </ul>
        </div>
        <div id="down">

        <div id="ddown">Download App</div>
        <div id="ul3">
        
        <div>Save 3$ for new User Only</div>
        <div id='qrs'>
       
        <div id='qr'>
            <ImQrcode />
            </div>
        <div>
            <div id='downs'>
               <div>  
                <FaGooglePlay style={{fontSize:"2rem"}}/>
               </div>
                <div>
                     <div>
                    Get it On
                    </div>
                    <div style={{fontSize:"large"}}>
                    Google Play
                    </div>

                </div>
              

                </div>
            <div id='downs'>
            
            <div>  
            <FaApple  style={{fontSize:"2rem"}}/>

               </div>
                <div>
                     <div>
                    Download on the
                    </div>
                    <div style={{fontSize:"large"}}>
                    App Store
                    </div>
                </div>
              

                </div>
               
            </div>
        </div>
        </div>
       <div id="icon">
       <div>
        <RiFacebookLine />
       </div>
       <div><CiTwitter />
       </div>
       <div><FaInstagram />
       </div>
       <div><CiLinkedin />
       </div>
       </div>

       
                    
        </div>
        </div>
        
     );
}
 
export default Footer;