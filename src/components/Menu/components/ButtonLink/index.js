import React from 'react';


function ButtonLink(props){
    // props => {classNeme: "Será passado por parâmetro" href:"/" }
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
            {props.children}    
        </a>
    );  
}

export default ButtonLink;