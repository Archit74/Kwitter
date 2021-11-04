username="";
function adduser(){
    username= document.getElementById("input_name").value;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}