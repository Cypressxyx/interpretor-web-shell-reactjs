import React, { Component } from 'react';
import './App.css';
import feather from './images/feather.png';

class App extends Component {
	state = {
		interpretorResults: null
	};

	componentDidMount() {
		this.callBackendAPI().then( res => 
			this.setState({
				interpretorResults: res
			})
		);
	}

	async sendCode(data) {
		const request = await fetch('/echo/json', {
			headers: {
				'Content-type':'code/json'
			},
			method: 'POST',
			body: { data }
		});
		console.log(data);
  }
	

	callBackendAPI = async() => {
		const response = await fetch('/express_backend');
		const body = await response.json();
		if(response.status !== 200) {	
			throw Error(body.message);
		}
		let len = body.express.length;
		let results = [];
		let str = "";
		for(let i = 0; i < len; i++) {
			if (body.express[i] === '?') {
				if (i + 1 < len && body.express[i + 1] ==='?') {
					results.push(
						<div>
						{str} </div>
					);	
					str = "";
				}
		} else {
			str = str + body.express[i];
		}
	}
		return results;
};
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
					
          <img src={feather} className="App-logo" alt="lightweight" />
          <p>
						<div className="App-header-desc">
 	         		<code>src/LightWeight.cpp</code> 
							<br/>
							<code>A Light Weight Python Interpretor written in C++ </code>
						</div>
          </p>
						
				</header>
				<div className="Body">
					<div className= "Notepad-body">
        		Code Pad
						<div>
							<textarea className="Text-body" id = "code"/>
							<button title="run" onClick={() => this.sendCode(document.getElementById('code').value)} >
								Run 
							</button>
						</div>
					</div>
					<div>
						Results
						<p>
							{this.state.interpretorResults}
						</p>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
