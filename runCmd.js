/************* Load Libraries ****************/  
const { exec } = require('child_process');

/*************  exec promoise for async  ****************/  
const execOuput =	async () => {
	return new Promise(async resolve => {
		exec("./interpreter.x input.txt", (err, stdout, stderr) => {
			console.log(stdout);
			resolve(err ? stderr : stdout)
		});
	});
};

/************* Run Interpreter ****************/  
let runCmd = async() => {
	res = await execOuput();
	console.log("hi", res);
	return res;
}

module.exports = { runCmd };
