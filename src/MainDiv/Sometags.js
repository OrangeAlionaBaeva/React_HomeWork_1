import React from "react";

const styles = {
    div: {
        fontWeight: '600',
    fontSize: '2.5rem',
    color: '#403f3f'
    
    }
}

export default function SomeTags(props) {
    return (
        <div className="sometagsDiv"> 
            <div style={styles.div}>{props.footer}</div>
        </div>
    )
}