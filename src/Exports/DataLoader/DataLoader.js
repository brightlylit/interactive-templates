import React, { Component } from 'react';
import database from '../../fire';
import _ from 'lodash';
import { Shuffle } from '../Shuffle/Shuffle';

class DataLoader extends Component{
  constructor(props){
    super()
    this.exerciseContent = {}
    this.answerKey = []
  }

  getData(contentType){
    const myf = database.ref('/userDB/').once('value').then((snap) => {
      if(snap.val()){
        this.exerciseContent = snap.val()
        switch(contentType){
          case "PGddl":
            this.exerciseContent = _.cloneDeep( this.exerciseContent.sentence.pgDDL)  
          break;
          case "PGti":
            this.exerciseContent = _.cloneDeep(this.exerciseContent.sentence.pgTI)
          break;
          case "Multichoice":
            this.exerciseContent = _.cloneDeep(this.exerciseContent.sentence.multichoice)
          break;
          case "PGddlPara":
            this.exerciseContent = _.cloneDeep(this.exerciseContent.paragraph.pgDDLpara)
          break;
          case "PGtiPara":
            this.exerciseContent = _.cloneDeep(this.exerciseContent.paragraph.pgTIpara)
          break;
          default:
             
        }
        this.answerKey = _.cloneDeep(this.exerciseContent.answers)
        this.exerciseContent.answerKey = this.answerKey
            for( const el of this.exerciseContent.answers ){
                Shuffle(el)
              }
        return this.exerciseContent
      }
    })
      return myf  
  } 
}

export default DataLoader;
