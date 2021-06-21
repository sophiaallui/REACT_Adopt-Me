import React from 'react'; 

const Detailts = (props) => { 
    //return <h1>hi lol</h1>
    return(

        <pre>
            <code>{JSON.stringify(props,null, 4)}</code>
        </pre>


    )
}; 
export default Detailts; 