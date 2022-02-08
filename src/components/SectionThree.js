import '../Main.css'

import Cv from '../images/icons/curriculum-vitae.png'
import Github from '../images/icons/github-sign.png'
import Linkedin from '../images/icons/linkedin.png'
import React from 'react';

function SectionThree() {
    return(
        <section >
        <h2 className="hDos">Get In Touch</h2>
        <p className="desc">Check the information on the networks and contact me.</p>
        <ul className="icons">
					 <li className="liIcons"><a target="_blanck_" href="https://www.linkedin.com/in/ivonnecarolinapf/"><img className="logoInfo" src={Linkedin}  alt="Logo" /></a></li>
					 <li className="liIcons"><a target="_blanck_" href="https://github.com/CarolinaPerezFlores"><img className="logoInfo" src={Github}  alt="Logo" /></a></li>
					 <li className="liIcons"><a target="_blanck_" href="https://drive.google.com/file/d/16MELUIBYJpvcGeiLPPZieSmdEYy5FnQP/view?usp=sharing"><img className="logoInfo" src={Cv}  alt="Logo" /></a></li>
                     </ul>
    </section>
    );
};

export default SectionThree;