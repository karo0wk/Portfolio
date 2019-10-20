import React from 'react';
import '../Main.css'
import Linkedin from '../images/icons/linkedin.png'
import Github from '../images/icons/github-sign.png'
import Cv from '../images/icons/curriculum-vitae.png'
function SectionThree() {
    return(
        <section >
        <h2 className="hDos">Get In Touch</h2>
        <p className="desc">Check the information on the networks and contact me.</p>
        <ul className="icons">
					 <li className="liIcons"><a href="https://linkedin.com/in/ivonne-carolina-pérez-flores-629843193/"><img className="logoInfo" src={Linkedin}  alt="Logo" /></a></li>
					 <li className="liIcons"><a href="https://github.com/CarolinaPerezFlores"><img className="logoInfo" src={Github}  alt="Logo" /></a></li>
					 <li className="liIcons"><a href="https://drive.google.com/file/d/0B6-tH-LYKEJcdnBab3loVnl6MHJiNmNCb2JWUHVQdEliYWQ4/view?usp=sharing"><img className="logoInfo" src={Cv}  alt="Logo" /></a></li>
                     </ul>
    </section>
    );
};

export default SectionThree;