import React from 'react';

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

  	render() {
	    return (
	      <div>
              {
                  this.state.imageArray.map((image) => {
                      return <div>
                          <p>{image.title}</p>
                          <img src={image.link}/>
                        </div>
                  })
              }
          </div>
	    );
  	}
}

export default Feed;