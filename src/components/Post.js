import React from 'react';

//Component for displaying image post
class Post extends React.Component {
    constructor(props) {
        super(props);
    }

  	render() {
	    return (
	      <div>
                <p>{this.props.image.title}</p>
                <img src={this.props.image.link}/>
          </div>
	    );
  	}
}

export default Post;