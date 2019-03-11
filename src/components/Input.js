import React from 'react';

//Component for displaying image post
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            title: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addImage({
            link: this.state.link,
            title: this.state.title
        })
    }

    handleURLchange = (event) => {
        this.setState({link: event.target.value});
    }

    handleTitlechange = (event) => {
        this.setState({title: event.target.value});
    }

  	render() {
	    return (
	      <div className = "InputCollection">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className = "TitleInput"
                        type="text" 
                        name="link" 
                        placeholder="Enter URL" 
                        onChange={this.handleURLchange}
                    />
                    <br/>
                    <input
                        className = "URLInput"
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        onChange={this.handleTitlechange}
                    />
                    <input className = "SubmitButton" type="submit" value="New Post" />
                </form>
          </div>
	    );
  	}
}

export default Input;