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
    }

    handleURLchange = (event) => {
        this.setState({link: event.target.value});
    }

    handleTitlechange = (event) => {
        this.setState({title: event.target.value});
    }

  	render() {
	    return (
	      <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="link" 
                        placeholder="Enter URL" 
                        onChange={this.handleURLchange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title" 
                        onChange={this.handleTitlechange}
                    />
                    <input type="submit" value="Submit" />
                </form>
          </div>
	    );
  	}
}

export default Input;