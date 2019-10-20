import React from 'react';
import '../Main.css'
class Card extends React.Component {
    render(){
    return(
        <article className="columnOne">
								<div className="Thumb">
								<a href={this.props.url}><img  className="imageTipe" src={this.props.image} alt="Logo" /></a>
								</div>
								<h3 className="titleCard">{this.props.title}</h3>
								<p className="paragraph">{this.props.description}</p>
							</article>
    );
    };
};

export default Card;