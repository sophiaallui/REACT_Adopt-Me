// mostly code from reactjs.org/docs/error-boundaries.html

import React, {Component} from 'react'; 
import {Link} from '@reach/router';

class ErrorBoundary extends Component{ 

    state = {hasError:false, redirect:false}
    static getDerivedStatefromError(){ 
        return {hasError:true}; 
    }

    componentDidCatch(error, info){ 
        console.error("ErrorBoundary caught an err", error, info); 
    }

    componentWillUpdate(){ 
        if(this.state.hasError){ 
            setTimeout(() => this.setState({ redirect: true}), 5000);
        }
    }
    render(){ 
        if(this.state.redirect){ 
            // redirect is from reach router 
            return <Redirect to="/"/>; 
        }
        if(this.state.hasError){ 
            return(
                <h1>
                    There was an error with this listing. 
                    <Link to="/">Click Here!</Link> {" "} to go bak to the home page or wait five seconds.
                </h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary; 