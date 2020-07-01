import React, { Component } from 'react';
import './PGddl.css';
import '../../../App.css';
import { Row, Col } from '../../../UI/ExampleStyledComponent'
class MultiChoice extends Component{
    constructor(props){
        super()
    }
    render(){      
        return (
            <div>
                { this.props.myitems.sentences.map((el, key)=>{
                    el = el.toString().split("*")
                    return(
                        <Row key={key} className="rowclass">
                            <Col>
                                <span>{el[0]}</span>
                                    <select className="custom-select" name={ key } onChange={this.props.onChange}>
                                        {this.props.value[key].map((el, i) => {
                                            return(
                                                <option key={i}>{el}</option>
                                            ) 
                                            })}  
                                    </select>
                                <span>{el[1]}</span>
                            </Col>
                            <Col 
                            size={1} 
                            className="colclass"
                            ref={ this.props.refarray[key] }
                                />
                                                  
                            
                        </Row>
                    )
                })}
            </div>
        )
    }
}


export default MultiChoice
/*import React, { Component } from 'react'; 

class FakeMultiChoice extends React.Component {
	constructor(props) {
		super();
    this.accordionContent = [];
    this.state = {
        testData: [
            {type:'color', value:'red'},
            {type:'name', value:'sarah'},
            {type:'number', value:2}
        ]
     }
  }
	
  accordionToggle = key => {
      console.log(key)
    const contentStyle = this.accordionContent[key].style;
    contentStyle.display === 'none' ? (contentStyle.display = 'block') : (contentStyle.display = 'none');
  };

	render(){
		return (
			<div className="container">
				{this.state.testData.map(({type,value}, key) => {
					return (
						<div key={key}>
							<button onClick={() => this.accordionToggle(key)} >
                                {type} 
                            </button>
							<div ref={ref => (this.accordionContent[key] = ref)} style={{ display: 'none' }}>
                                {value}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
export default FakeMultiChoice*/