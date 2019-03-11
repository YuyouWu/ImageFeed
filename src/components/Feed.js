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
                    link: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg',
                    title: 'Hiking'
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