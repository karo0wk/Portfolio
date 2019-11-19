import React from 'react';
import '../Main.css';
import Notes from '../images/proyects/notes2.jpg';
import Card from './Card'
// import Cipher from '../images/proyects/cipher.jpg'
import ParachuteGame from '../images/proyects/skyPinetree.gif'
import Burger from '../images/proyects/Burger.jpg'

function SectionTwo() {
    return(
<div>
						<h2>Recent Work</h2>
						    <div className="row">
							<Card title="Lab-Notes" description="A web-app to take notes." image={Notes} url="https://github.com/CarolinaPerezFlores/GDL003-lab-notes"/>
							</div>
							<div className="row">
							<Card title="Parachute Game" description="A web-app to play in your cellphone." image={ParachuteGame} url="https://github.com/CarolinaPerezFlores/GDL003-cipher"/>
							</div>
							<div className="row">
							<Card title="Burger Queen" description="A Web-App, for ordering restaurants." image={Burger} url="https://github.com/CarolinaPerezFlores/GDL003-Burger-Queen-Back-End"/>
							</div>
						
						<ul className="actions">
							{/* <li><link href="#" className="button">Full Portfolio</link></li> */}
						</ul>
					</div>
    );
};

export default SectionTwo;