import React from 'react';
import '../Main.css'
class Card extends React.Component {
    render(){
    return(
        <article className="columnOne">
								<div className="Thumb">
								<a href={this.props.url}><img  className="imageTipe" src={this.props.image} alt="Logo" /></a>
								</div>
								<div className="ContainerDescription">
								<h3 className="titleCard">{this.props.title}</h3>
								<p className="paragraph">{this.props.description}</p>
	                            <p2 className="paragraph">{this.props.tools}</p2>
								</div>
							</article>
    );
    };
};

export default Card;