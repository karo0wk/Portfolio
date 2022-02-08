import '../Main.css'

import React from 'react';

class Card extends React.Component {
    render(){
    return(
        <article className="columnOne">
								<div className="Thumb">
								<a target="_blanck_" href={this.props.url}><img  className="imageTipe" src={this.props.image} alt="Logo" /></a>
								</div>
								<div className="ContainerDescription">
								<a target="_blanck_" href={this.props.url}>
								<h3 className="titleCard">{this.props.title}</h3>
								</a>
								<p className="paragraph">{this.props.description}</p>
	                            <h2 className="paragraph">{this.props.tools}</h2>
								</div>
							</article>
    );
    };
};

export default Card;