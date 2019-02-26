/************* Load Libraries ****************/  
const { exec } = require('child_process');

/*************  exec promoise for async  ****************/  
const execOuput =	async () => {
	return new Promise(async resolve => {
		exec("./interpreter.x input.txt", (err, stdout, stderr) => {
			resolve(err ? stderr : stdout)
		});
	});
};

/************* Run Interpreter ****************/  
let runCmd = async() => {
	return await execOuput();
}

module.exports = { runCmd };
