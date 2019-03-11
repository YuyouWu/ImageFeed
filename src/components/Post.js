import React from 'react';

//Component for displaying image post
class Post extends React.Component {
  	render() {
	    return (
	      <div className="Card">
                <p>{this.props.image.title}</p>
                <img className ="Img" src={this.props.image.link} alt={this.props.image.title}/>
          </div>
	    );
  	}
}

export default Post;