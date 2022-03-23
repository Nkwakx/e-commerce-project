import React from "react";


export default function Footer(props){
    return(
        <footer className="footer">
            <hr/>
            <p>Designed & Built by Nlakaniplo Khumalo</p>
            <p>Copyright&copy; {props.year}</p>
        </footer>
    );
}