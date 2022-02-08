import React from "react";

const styles = {
    button: {
        width: '9rem',
        height: '2rem',
        background: '#e15252',
        border: '1px solid #e15252',
        borderRadius: '10px',
        color: 'white',
        cursor: 'pointer',
        marginRight: '1rem',
    
    },

    span: {
        color: 'white',
        fontWeight: '900',
        fontSize: '1rem'
    
    }
}

export default function DownloadButton(props) {
    return (
        <div className="buttonDiv"> 
            <div><span style={styles.span}>{props.logo}</span></div>
             <div><button style={styles.button}>{props.buttonNow}</button></div>
        </div>
        
        
    )
}