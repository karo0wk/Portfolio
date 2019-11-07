import React from 'react';
import '../Main.css'
import Avatar from '../images/Avatar.jpg'
import Linkedin from '../images/icons/linkedin.png'
import Github from '../images/icons/github-sign.png'
// import Mail from '../images/icons/mail.png'
import Cv from '../images/icons/curriculum-vitae.png'



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
					 <li className="liIcons"><a href="https://linkedin.com/in/ivonne-carolina-pérez-flores-629843193/"><img className="logoInfo" src={Linkedin}  alt="Logo" /></a></li>
					 <li className="liIcons"><a href="https://github.com/CarolinaPerezFlores"><img className="logoInfo" src={Github}  alt="Logo" /></a></li>
					 {/* <li><a href="linkedin.com/in/ivonne-carolina-pérez-flores-629843193"><img className="logoInfo" src={Mail}  alt="Logo" /></a></li> */}
					 <li className="liIcons"><a href="https://drive.google.com/file/d/0B6-tH-LYKEJcdnBab3loVnl6MHJiNmNCb2JWUHVQdEliYWQ4/view?usp=sharing"><img className="logoInfo" src={Cv}  alt="Logo" /></a></li>
					 </ul>
				</div>
			</div>
	);
	};
};
export default Header;