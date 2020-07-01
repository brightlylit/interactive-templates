//this uses React hooks. const has to have a capital letter!!!
import React from'react';
import './TextInput.css';
const TextInput = React.forwardRef( ( props, ref ) => {
    return(
        <div>
            {props.myitems.sentences.map((el, i) => {
                el = el.toString().split("*")
                return (
                    <div key={i}>
                        <span>{el[0]}</span>
                            <input type="text" className="text-input"
                                ref={ props.refarray[i]}
                                onKeyDown = { props.onKeyDown }//this handles backspace key press
                                count = { props.counter }
                                myitems = { props.myitems }
                                name = { i }
                                
                                
                            />
                        <span>{el[1]}</span>
                        <button type="submit" id={ i } visible={ props.visible }>check</button>
                    </div>
                )

            })}
            
               
        </div>
        
    );
    })

export default TextInput;