var app = angular.module('chatApp', ['ui.bootstrap', 'firebase']);




app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages').limitToLast(5);
    $scope.messages = $firebaseArray(ref);
    var onblur;
    firebase.database().ref().child('messages').on('value', function(snapshot){

    	console.log("updated one room");
          if (Notification.permission !== "granted")
                    Notification.requestPermission();
                  else {
                    
                    window.onblur = function() { onblur = true; console.log("onblur"); };
                    window.onfocus  = function() {onblur = false;  console.log("onfocus"); };
                    if(onblur) {
                    var notification = new Notification('Anguchat', {
                      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
                      body: "New Message from room 1",
                    });

                    notification.onclick = function () {
                      window.focus(); 
                       $('#onebutton').trigger('click');
                    };
                   }

                  }
    });



     $scope.send = function(message) {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now()
        })
    }

})

app.controller('ChatController2', function($scope, $firebaseArray) {
		    var ref2 = firebase.database().ref().child('messages2').limitToLast(5);
		    $scope.messages2 = $firebaseArray(ref2);
            var onblur2
		    firebase.database().ref().child('messages2').on('value', function(snapshot){

            console.log("goes inside permission 2");

           
             if (Notification.permission !== "granted")
                    Notification.requestPermission();
                  else {

                    
                    window.onblur = function() { onblur2 = true; console.log("onblur 2"); };
                    window.onfocus  = function() {onblur2 = false;  console.log("onfocus 2"); };
                    if(onblur2) {
                        console.log("goes inside notification 2");
                        var notification = new Notification('Anguchat', {
                          icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
                          body: "New Message from room 2",
                        });

                        notification.onclick = function () {
                          window.focus(); 
                           $('#twobutton').trigger('click');
                        };
                    }
                  }
            

         });
              $scope.send = function(message) {
                $scope.messages2.$add({
                    message: $scope.messageText2,
                    date: Date.now()
                })
             }
})


