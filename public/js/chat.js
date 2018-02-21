
//Emit chat messsage wen enter key is pressed

var socket = io();

$("#chat-input").keydown(function(event){
  if (event.keyCode == 13){
    event.preventDefault();
    if($("#chat-input").val() != ""){
      socket.emit("chat-message", $("#chat-input").val());
      $("#chat-input").val("");
    }
  }
});


// recieve message from Server
socket.on("chat-message",function(message){
  //Creates a new line
  $("chat-container").append(message + "<br />")
});
