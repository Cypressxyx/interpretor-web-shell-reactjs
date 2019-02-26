import React, { Component } from 'react';
import './App.css';
import feather from './images/feather.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
					
          <img src={feather} className="App-logo" alt="lightweight" />
          <p>
						<div className="App-header-desc">
 	         		<code>src/LightWeight.py</code> 
							<br/>
							<code>A Light Weight Interpretor for Python</code>
						</div>
          </p>
						
				</header>
				<div className="Body">
					<div className= "Notepad-body">
        		Notepad
						<div>
							<form className="Form-body">
							<label>
								<center>
									<textarea className="Text-body"/>
								</center>
							</label>
								<center>
									<input className="Submit-body" type="submit" name="run" value="Run" />
								</center>
							</form>
						</div>
					</div>
					<div>
						Results
					</div>
				</div>
      </div>
    );
  }
}

export default App;
