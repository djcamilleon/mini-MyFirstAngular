angular.module('friendsList')
.controller('mainCtrl', function($scope) {
    $scope.myFriends = [
    'Lawrence', 'KLD', 'India', 'Kristin'
    ]

    $scope.addGuest = function(){
        $scope.myFriends.push($scope.newFriend);
    }
    
})

