const firebaseConfig = {
    apiKey: "AIzaSyBBd20pxqiyGtMs6EKA5dvcL1FzLFg4KGo",
    authDomain: "kwitter-ddf94.firebaseapp.com",
    databaseURL: "https://kwitter-ddf94-default-rtdb.firebaseio.com",
    projectId: "kwitter-ddf94",
    storageBucket: "kwitter-ddf94.appspot.com",
    messagingSenderId: "443347565242",
    appId: "1:443347565242:web:0c4f35eced036b590b2083"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=  localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }
  function getData(){
firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output2").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h3>"+name+"<img class='user_tick' src='tick.png'></h3>";
message_tag="<h3>"+message+"</h3>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_tag+message_tag+like_button+span_with_tag;
document.getElementById("output2").innerHTML+=row;
} }); });
}
getData();
function updateLike(message_id){
  console.log("like"+message_id);
buttton_id=message_id;
like=document.getElementById(buttton_id).value;
updated_like=Number(like)+1;
firebase.database().ref(room_name).child(message_id).update({
   like:updated_like
});
}
function logout(){
    localStorage.removeItem("user_name");
  localStorage.removeItem("room_mame");
  window.location="kwitter_page_1.html"
}

