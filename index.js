var request = require('request');
var prompt = require('prompt');
var htmlToJson=require('html-to-json');
var html2json = require('html2json').html2json;

/*prompt.start();
  prompt.get(['regno'], function (err, result) {
  	request('http://aucoe.annauniv.edu/cgi-bin/result/cgrade.pl?regno='+result.regno, function (error, response, body) {
		body = html2json(body);
		console.log(" ");
		console.log(body.child[4].child[1].child[3].child[1].child[1].child[0].child[1].child[0].child[0].child[0].text);
		console.log(body.child[4].child[1].child[3].child[1].child[1].child[0].child[1].child[1].child[0].child[0].text);
		console.log(body.child[4].child[1].child[3].child[1].child[1].child[0].child[1].child[2].child[0].child[0].text);
		console.log(" ");
		// console.log(body.child[4].child[1].child[3].child[3].child[1].child[2].child[1].child[0]);
		console.log("Register Number: "+body.child[4].child[1].child[3].child[3].child[1].child[2].child[1].child[1].child[0].child[0].child[0].text);
		// console.log(body.child[4].child[1].child[3].child[3].child[1].child[2].child[1].child[2]);
		// console.log(body.child[4].child[1].child[3].child[3].child[1]);
		});
  	});*/
prompt.start();
  prompt.get(['Register_Number'], function (err, result) {
  	request('http://aucoe.annauniv.edu/cgi-bin/result/cgrade.pl?regno='+result.Register_Number, function (err, response, body) {
		if(response && response.statusCode==200){
		body = html2json(body);
		console.log(" ");
		console.log(body.child[4].child[1].child[3].child[1].child[1].child[0].child[1].child[0].child[0].child[0].text);
		console.log(body.child[4].child[1].child[3].child[1].child[1].child[0].child[1].child[1].child[0].child[0].text);
		console.log(body.child[4].child[1].child[3].child[1].child[1].child[0].child[1].child[2].child[0].child[0].text);
		console.log(" ");
		console.log("Register Number: "+body.child[4].child[1].child[3].child[3].child[1].child[2].child[1].child[1].child[0].child[0].child[0].text);
		console.log(" ");
		console.log("Name: "+body.child[4].child[1].child[3].child[3].child[1].child[2].child[1].child[3].child[0].child[0].child[0].text);
		console.log(" ");
		console.log("Branch: "+body.child[4].child[1].child[3].child[3].child[1].child[2].child[1].child[5].child[0].child[0].child[0].text);
		// console.log(" ");
		console.log("Subject Code 	"+"Grade 	"+"Result 	");
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[2].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[2].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[2].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[4].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[4].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[4].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[6].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[6].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[6].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[8].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[8].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[8].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[10].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[10].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[10].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[12].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[12].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[12].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[14].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[14].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[14].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[16].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[16].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[16].child[7].child[0].child[0].text);
		console.log("  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[18].child[1].child[0].child[0].text+"	  "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[18].child[3].child[0].child[0].text+"	 "+body.child[4].child[1].child[3].child[3].child[1].child[6].child[18].child[7].child[0].child[0].text);
		}
		else if(response && response.statusCode!=200){
			console.log("Oops! Invalid Register Number");
		}
		console.log(" ");
		console.log(" ");
		console.log("<<<<<<<<<<<<<<<<<	"+"Made with ♫ by Kishore Kumar"+	">>>>>>>>>>>>>>>>>");
		

		});
});
