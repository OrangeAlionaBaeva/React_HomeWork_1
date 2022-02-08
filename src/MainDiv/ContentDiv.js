import React from "react";

const styles = {
    h1: {
        color: 'white',
        fontWeight: '900',
    fontSize: '2.5rem'
    
    },

    h6: {
        color: 'white',
        lineHeight: '1.2rem',
        fontSize: '.8rem'
    
    },

    button: {
        background: '#1b89d7',
        width: '9rem',
        height: '2rem',
        border: '1px solid #1b89d7',
        borderRadius: '10px',
        color: 'white',
        cursor: 'pointer',
    }

}

export default function ContentDiv(props) {
    return (
        <div className="contentDiv"> 
           <h1 style={styles.h1}>{props.name}</h1> 
           <h6 style={styles.h6}>{props.text}</h6>
               <button style={styles.button}>{props.buttonText}</button>
        </div>
        
        
    )
}