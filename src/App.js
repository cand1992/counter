import React, { Component } from 'react';
import Counter from './counter/Counter';

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = { counterValue: 0 }
	// 	this.inc = this.inc.bind(this)
	// }
	// state = { counterValue: 0 }

	// inc = () => {
	// 	this.setState({ counterValue: this.state.counterValue + 1})
	// }

	// dec = () => {
	// 	this.setState({ counterValue: this.state.counterValue - 1})	
	// }

	render() {
		return(
			<div>
				{/*<p>
									{ this.state.counterValue }
								</p>
								<button onClick={this.inc}>+</button>
								<button onClick={this.dec}>-</button>*/}
				<Counter counterName='red' />
				<Counter counterName='green' />
				<Counter counterName='blue' />
				<Counter counterName='purple' />
			</div>
		)
	}
}

export default App;