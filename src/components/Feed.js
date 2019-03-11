import React from 'react';

import Post from './Post';
import Input from './Input';

//Component for displaying image feed
class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArray: [
                {
                    link: 'https://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg',
                    title: 'Google'
                }
            ]
        }
    }

    addImage = (imageObj) => {
        var tempImgArr = this.state.imageArray;
        tempImgArr.push(imageObj);
        this.setState({
            imageArray: tempImgArr
        });
    }

  	render() {
	    return (
	      <div>
                <Input addImage = {this.addImage}/>

                {
                    this.state.imageArray.map((image) => {
                        return <Post image = {image}/>
                    })
                }
          </div>
	    );
  	}
}

export default Feed;