import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '1px solid gray', height: '60vh', marginTop: '10vh'}}>
            {props.children}
        </div>
    );
};

export default Scroll