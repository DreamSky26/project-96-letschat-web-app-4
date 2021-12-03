var firebaseConfig = {
    apiKey: "AIzaSyCIOyRYN0-5AxkSjqyX382IBDOAqXKsp2w",
    authDomain: "letschatsocialweb.firebaseapp.com",
    databaseURL: "https://letschatsocialweb-default-rtdb.firebaseio.com",
    projectId: "letschatsocialweb",
    storageBucket: "letschatsocialweb.appspot.com",
    messagingSenderId: "917542985143",
    appId: "1:917542985143:web:f0eba5605f499604c71c32",
    measurementId: "G-4CLDTMBMFW"
  };

  firebase.initializeApp(firebaseConfig);

function addUser()
    {
        user_name = document.getElementById("user_name", user_name).value;
        
        localStorage.setItem("user_name", user_name);
        
        window.location = "letschat_room.html";
    }
    
