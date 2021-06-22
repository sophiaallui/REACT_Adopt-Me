import React from 'react'

class Carousel extends React.Component{ 

    state = { 
        photos: [], 
        active: 0
    }; 

    static getDerivedStateFromProps({media}){
        let photos = ["http://placecorgi.com/600/600"]; 
        if(media.length){ 
            photos = media.map(({large}) => large); 
        }

        return {photos}; 
    }
    // wrong: dom API
    // what is "this", what is it referencing: it is not correct/undefined

    /*handleIndexClick(event){ 
        this.setState({
            active: event.target.dataset.index
        })
    }
    */ 

    handleIndexClick = event => { 
        this.setState({ 
            active: +event.target.dataset.index
        });
    };

    render(){ 
        const {photos, active} = this.state; 

        return (
            <div className="carousel"> 

                <img src={photos[active]} alt="animals"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index)=> (
                        <img 
                            key={photo}
                            //Works, but slow: onClick={this.handleIndexClick.bind(this,index)}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo}
                            className={index === active ? 
                            "active": ""}
                            alt="animal thumbnail"
                            />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel; 
