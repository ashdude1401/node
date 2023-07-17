const http = require("http");
const fs =require("fs/promises");
const PORT=8000;


const server=http.createServer(async (req,res)=>{
	const contentBuffer=await fs.readFile(__dirname+'/text.txt');

	res.statusCode=200;
	res.setHeader("content-type","text/plain");
	res.end(contentBuffer.toString("utf-8"));


});


server.listen(PORT,()=>{
	console.log("Server started at port",PORT);
});
