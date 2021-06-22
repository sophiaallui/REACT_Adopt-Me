import React from 'react'; 
import pet from '@frontendmasters/pet'
import Carousel from './Carousel'; 
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import Modal from './Modal'; 
import {navigate} from '@reach/router'; 



class Details extends React.Component { 

    state = {loading:true, showModal: false}; 

    componentDidMount(){ 
        pet.animal(this.props.id).then(({animal}) => {
            this.setState({
                url: animal.url,
                name: animal.name,
                animal: animal.type, 
                location: `
                ${animal.contact.address.city}, 
                ${animal.contact.address.state}
                `, 
                description: animal.description, 
                media: animal.photos, 
                breed: animal.breeds.primary, 
                loading: false
            });
        },console.error); 
    } 

    toggleModal = () => this.setState({showModal: !this.state.showModal}); 
    adopt = () => navigate(this.state.url);
    render () { 

        console.log("ENTERED TO DETAILS.JS")

        console.log("Check state in render details.js", this.state.loading)
        if(this.state.loading){ 
            console.log("Check state in render details.js", this.state.loading)
            return <h1>Loading...</h1>
            
        }

        // destruction 
        // pulling from this.state
        const {animal, breed, location, description, name, media, showModal} = this.state;
        return(
            <div className="details">
                <Carousel media={media}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {themeHook => (
                            <button onClick={this.toggleModal} style={{backgroundColor: themeHook[0]}}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name}?</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModal}>no, i'm a monster</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null}
                </div>

            </div>
        );

    }
}
 
//export default Details; 

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}