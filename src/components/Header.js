import '../Main.css'

import Avatar from '../images/Avatar.jpg'
import Cv from '../images/icons/curriculum-vitae.png'
import Github from '../images/icons/github-sign.png'
import Linkedin from '../images/icons/linkedin.png'
import React from 'react';

// import Mail from '../images/icons/mail.png'

// import Whatsapp from '../images/proyects/whatsapp.png'



class Header extends React.Component {
	
    render(){
		
			return(
    <div id="header">
				<div className="inner">
					
				<img className="image avatar" src={Avatar} alt="Logo" />
			
					 <h1 ><strong>Carolina Flores</strong><br /></h1>
					 <h1 className="title1">Web Developer</h1>
					 <ul className="icons">
					 <li className="liIcons"><a target="_blanck_" href="https://www.linkedin.com/in/ivonnecarolinapf/"><img className="logoInfo" src={Linkedin}  alt="Logo" /></a></li>
					 <li className="liIcons"><a target="_blanck_" href="https://github.com/CarolinaPerezFlores"><img className="logoInfo" src={Github}  alt="Logo" /></a></li>
					 {/* <li><a href="linkedin.com/in/ivonne-carolina-pérez-flores-629843193"><img className="logoInfo" src={Mail}  alt="Logo" /></a></li> */}
					 <li className="liIcons"><a target="_blanck_" href="https://drive.google.com/file/d/16MELUIBYJpvcGeiLPPZieSmdEYy5FnQP/view?usp=sharing"><img className="logoInfo" src={Cv}  alt="Logo" /></a></li>
					 </ul>
				</div>

				<div>
				{/* <a className="appWhatsapp"  target="_blanck_"
				 href="https://api.whatsapp.com/send?phone=523324260487&text=Hola!&nbsp;me&nbsp;pueden&nbsp;ayudar?"
				 src={Whatsapp}
				 >
				 </a> */}
				</div>
			</div>
	);
	};
};
export default Header;