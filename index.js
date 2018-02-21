

//-Configure Express
var express = require('express');
var app = express ();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

server.listen(process.env.PORT || 3000, function(){
  console.log("Server Listening");

});

//------Routes -----//
app.get("/", function(req,res){
  res.render("chat"); //Will look into 'views for chat.ejs'
});

//-----Configure Web Sockets ---///
io.sockets.on("connection", function(socket){
  //connection is key word (user connected to servers with these websockets)

  socket.on("Chat-Message", function(message){
    io.sockets.emit("Chat-Message", message);
  });
});
