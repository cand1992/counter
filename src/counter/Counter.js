import React, { Component } from 'react';

class Counter extends Component {
	state = { counterValue: 0 }

	inc = () => {
		this.setState({ counterValue: this.state.counterValue + 1})
	}

	dec = () => {
		this.setState({ counterValue: this.state.counterValue - 1})	
	}

	render() {
		const { counterName } = this.props
		const { counterValue } = this.state
		return(
			<div style={{backgroundColor: counterName, textAlign: 'center', width: '70%', margin: 'auto'}}>
				<h1>{ counterName } Counter</h1>
				<p>
					{ counterValue }
				</p>
				<button onClick={this.inc}>+</button>
				<button onClick={this.dec}>-</button>
			</div>
		)
	}
}

export default Counter;