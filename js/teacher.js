/*
(function () {
            $(document).ready(function(){
                check = function(){
                    if($('#password').val() == "mad2016"){
                        console.log('klopt!');
                        $("#securewall").hide('fast', function(){
                            $(".secure").show('fast');
                            
                        });
                        
                    }
                }
            });
})();
*/

var button = document.getElementById("passSubmit");
var provider = new firebase.auth.GoogleAuthProvider();
var db = firebase.database().ref();


button.addEventListener('click', e => {
  firebase.auth().signInWithPopup(provider).catch(e => console.log(e.message));
});



firebase.auth().onAuthStateChanged(firebaseUser => {
  var permission = false;
    if (firebaseUser) {
    	console.log (firebaseUser);
    db.once('value', snap => {
      snap.forEach(function(child){
        if (child.val() == firebaseUser.email) permission = true;
    });
      if (!permission) {
        firebaseUser.delete().catch(e => console.log(e.message));
        window.alert("No Permission");
      } else {
   	                        $("#securewall").hide('fast', function(){
                            $(".secure").show('fast');
                             });
                             
   
      }
    });
    } 
});
