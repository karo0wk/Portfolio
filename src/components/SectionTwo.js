import React from 'react';
import '../Main.css';
import Notes from '../images/proyects/nota.jpg';
import Card from './Card'
// import Cipher from '../images/proyects/cipher.jpg'
import ParachuteGame from '../images/proyects/cel.jpg'
// import Burger from '../images/proyects/Burger.jpg'
import Feebulari from '../images/proyects/idea.jpg'
import ArteMarusia from '../images/proyects/arte.jpg'

function SectionTwo() {
    return(
<div>
						<h2>Recent Work</h2>
						    <div className="row">
							<Card title="Feebulari" description="This is a web-app used to share ideas with the intention of innovating, in which creators can go." 
							tools="For this project were used: PHP, MySQL, SASS, Eloquet, and PSR7." image={Feebulari} url="https://www.feebulari.com/"/>
							</div>
							<div className="row">
							<Card title="Arte Marusia" description="This is an ecommerce website for the sale of artistic paintings." 
							tools="For this project were used: Wordpress, WooCommerce, and Facebook API." image={ArteMarusia} url="https://artemarusia.com/"/>
							</div>
						    <div className="row">
							<Card title="Take Notes" description="This is a web-app that allows you to make notes, save them in a database and edit them." 
							tools="For this project were used: React.js, Firebase, and Bootstrap." image={Notes} url="https://carolinaperezflores.github.io/GDL003-lab-notes/"/>
							</div>
							<div className="row">
							<Card title="Parachute Game" description="This application designed for cell phones gives you the ability to play to save the paratrooper before it falls." 
							tools="For this project were used: React Native" image={ParachuteGame} url="https://snack.expo.io/@karo0k/11c1ef"/>
							</div>
							{/* <div className="row">
							<Card title="Burger Queen" description="A Web-App, to take orders in restaurants, all electronically. This application can facilitate the process of an order, mainly shows the menus and products offered to the customer, can create, add, delete orders, and finally make a total sum of the cost of the products provided." 
							tools="For this project were used: Mongo Database, Express, Post Man and React.js. "image={Burger} url="https://github.com/CarolinaPerezFlores/GDL003-Burger-Queen-Back-End"/>
							</div> */}
						
						<ul className="actions">
							{/* <li><link href="#" className="button">Full Portfolio</link></li> */}
						</ul>
					</div>
    );
};

export default SectionTwo;