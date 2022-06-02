//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCnGq6XFTBPtaqL_TE4e1HpLNOz1sLqcIo",
      authDomain: "kwitter-d835f.firebaseapp.com",
      databaseURL: "https://kwitter-d835f-default-rtdb.firebaseio.com",
      projectId: "kwitter-d835f",
      storageBucket: "kwitter-d835f.appspot.com",
      messagingSenderId: "25553956372",
      appId: "1:25553956372:web:70e3676612ddd89e440101"
    };
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg= document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
   
      });
      document.getElementById("msg").Value="";
}
