
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function send()
{
    Message = document.getElementById("Message").ariaValueMax;
    firebase.database().ref.push({
        name:user_name,
        message:msg,
        like:0,
     })

    document.getElementsById("msg").value = "";
}

function getData() {firebase.database().ref("/"+room_name).on('value',
function(snapshot){document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot){ childKey = childSnapshot.key; childData =
childSnapshot.val();if(childKey != "purpose"){
  firebase_masseage_id = childKey;
  message_data
  //Start code
  function updateLike(message_id)
{ 
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
}



  function logout() {
    window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
    

  }


  //End code
   } }); });}



 



