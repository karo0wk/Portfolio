import React from 'react';
import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'

function App() {
  return (
    
	<div> 
	<Header></Header>
<div className="containerInfo">
	<div className="sectionOne">
	<Section></Section>
	</div>
	<div className="sectionTwo">
    <SectionTwo></SectionTwo>
	</div>		
	<div className="sectionThree">	
	<SectionThree></SectionThree>
	</div>	
	</div>
</div>
					
  );
}

export default App;
