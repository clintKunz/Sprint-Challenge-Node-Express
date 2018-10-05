import React from 'react';

const Actions = (props) => {
    return(
        <React.Fragment>
            {props.actions.map(action => 
                <h5 key={action.id}>Description:{action.description}, Notes:{action.notes}</h5>
            )}
        </React.Fragment>
    )
}

export default Actions;