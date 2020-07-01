import TextInput from '../View/TextInput';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import DataLoader from '../../../Exports/DataLoader/DataLoader'
import { Grid, Row, Col } from '../../../UI/ExampleStyledComponent';
import Aux from '../../../HOC/Aux';
import Layout from '../../../UI/Layout'
import { connect } from 'react-redux';


//this uses React hooks. const has to have a capital letter!!!
const TextInputController = ( props ) => {
    let inputWidth = 70
    let myp = new DataLoader(); 
    let currentInput = 50;
    let currentInpAns = ""
    
    const [ inputState, setInputState ] = useState(
        { //usestate returns the state object, along with a function. This uses 'array destructuring'
        exerciseContent:{answers:[],sentences:[], answerKey:[]},
        refArray:[],
        buttonsAreVisible:"true"
    })
    useEffect(() => {
        myp.getData("PGti").then((content) => {
            const exerciseContent = content
            const refArray = exerciseContent.answers.map(() => React.createRef())
            setInputState({
                exerciseContent:exerciseContent,
                refArray:refArray,
                buttonsAreVisible:"true"
            })
 
        })

    }, []);//final empty array added so useEffect only runs once on initial render
    const inputOnChangeHandler = ( event ) =>{
        var x = event.which || event.keyCode; 
        console.log("key code: ", x)
        currentInput = event.target.name
        currentInpAns = inputState.refArray[currentInput].current.value
        let ans = inputState.exerciseContent.answerKey[currentInput][0]
        let answerLength = currentInpAns.length
        if(currentInpAns === ans){
            alert("correct")
        }
        
        //inputState.refArray[currentInput].current.style = "width:" + inputWidth + "px"
       // console.log("answerLength: ", inputState.refArray[currentInput].current.value.length)
       // console.log("inputState.refArray[currentInput].current.value.length: ",inputState.refArray[currentInput].current.value.length)
        if(inputState.refArray[currentInput].current.value.length >= 2){
            //console.log("currentInput: ", currentInput)
           inputWidth = inputState.refArray[currentInput].current.getBoundingClientRect().width
           console.log("inputwidth: ", inputWidth)
           inputState.refArray[currentInput].current.style = "width:" + inputWidth + "px"
           
        }
        /* if( newLength >= inputState.width.width / 10 ){ 
            console.log("inputState.width.width----2: ",inputState.width.width)
            mywidth.width = inputState.width.width
            mywidth.width = mywidth.width + 10
            console.log("mywidth.width: ",mywidth.width)
           setInputState({
               password: inputState.password,
               width: mywidth, 
               exerciseContent: inputState.exerciseContent,
               answerKey: inputState.answerKey,
               refArray: inputState.refArray,
            })
        }*/
       // if( inputState.password.length < mywidth.width / 10 && inputState.width.width >= mywidth.width ){
            //inputState.width.width = inputState.width.width - 10
            //if( inputState.width.width === mywidth.width || inputState.password.length < 2 ){
            //    inputState.width.width = mywidth.width
           // }
        //}
        //inputState.width.width = inputState.width.width.toString() + "px"//turn width into a string..
        
        /*setInputState({
            password: event.target.value,
            width: inputState.width,
            exerciseContent: inputState.exerciseContent,
            answerKey: inputState.answerKey,
            refArray: inputState.refArray,
            })*/
            
        //inputState.width.width = inputState.width.width.substring(0, inputState.width.width.length - 2)
        //inputState.width.width = parseInt(inputState.width.width)//..and back to a number to be incremented
        
    }
   
    
        
    return(
        
            <Layout>
                {console.log("ctr: ",props.ctr)}
                <TextInput
                refarray={inputState.refArray}
                myitems={inputState.exerciseContent}
                onKeyDown={ inputOnChangeHandler }
                visible={ inputState.buttonsAreVisible }
                />
                {/*<label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <h4>Hint</h4>*/}

            </Layout>
                
           
        
    );
    }
const mapStateToProps = state => {
    return{
        ctr: state.counter
    };
}
const mapDisptchToProps = dispatch => {
    return{

    }

}
export default connect(mapStateToProps)(TextInputController);