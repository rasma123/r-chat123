
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCnGq6XFTBPtaqL_TE4e1HpLNOz1sLqcIo",
      authDomain: "kwitter-d835f.firebaseapp.com",
      databaseURL: "https://kwitter-d835f-default-rtdb.firebaseio.com",
      projectId: "kwitter-d835f",
      storageBucket: "kwitter-d835f.appspot.com",
      messagingSenderId: "25553956372",
      appId: "1:25553956372:web:70e3676612ddd89e440101"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome  "+user_name;

function addRoom()
{
      room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name "  
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name -"+ room_name);
row="<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function log_out()
{
      localStorage.removeItem("username");
      window.location="kwitter_login.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}