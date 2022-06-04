import React from 'react';

function ListItem(props) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.id +'. ' + props.title}</strong>
                <div>
                    {props.description}
                </div>
            </div>
            <div className='post__btns'>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default ListItem;