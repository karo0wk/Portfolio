import React from 'react';
import '../Main.css'
import Avatar from '../images/Avatar.jpg'
import Linkedin from '../images/icons/linkedin.png'
import Github from '../images/icons/github-sign.png'
// import Mail from '../images/icons/mail.png'
import Cv from '../images/icons/curriculum-vitae.png'
// import Whatsapp from '../images/proyects/whatsapp.png'



class Header extends React.Component {
	
    render(){
		
			return(
    <div id="header">
				<div className="inner">
					
				<img className="image avatar" src={Avatar} alt="Logo" />
			
					<h1 ><strong>Carolina Flores</strong> <br />
                     
					{/* crafted by */}
					 {/* <link  to="http://loquesea.net">lo que sea</link>. */}
					 </h1>
					 <h1 className="title1">Front-End Developer</h1>
					 <ul className="icons">
					 <li className="liIcons"><a target="_blanck_" href="https://linkedin.com/in/ivonne-carolina-pérez-flores-629843193/"><img className="logoInfo" src={Linkedin}  alt="Logo" /></a></li>
					 <li className="liIcons"><a target="_blanck_" href="https://github.com/CarolinaPerezFlores"><img className="logoInfo" src={Github}  alt="Logo" /></a></li>
					 {/* <li><a href="linkedin.com/in/ivonne-carolina-pérez-flores-629843193"><img className="logoInfo" src={Mail}  alt="Logo" /></a></li> */}
					 <li className="liIcons"><a target="_blanck_" href="https://drive.google.com/file/d/19SeZvwV5TR8LoT1SuWnxyWZ5f1J1H3yI/view?usp=sharing"><img className="logoInfo" src={Cv}  alt="Logo" /></a></li>
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