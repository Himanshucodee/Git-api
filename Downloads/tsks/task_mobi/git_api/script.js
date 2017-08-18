var app = angular.module("myapp", []);

app.controller('appcontroller', function ($scope, $http) {
  var vm = this;

  vm.fetchData = function (user, repo) {

    $http.get('http://api.github.com/users/' + user.name).then(function (res) {
      vm.data = res;
      vm.name = res.data.name;
      console.log(res.data.name);
      vm.AbsoluteImageUrl = res.data.avatar_url;

    })

    $http.get('http://api.github.com/repos/' + user.name + '/' + repo.name + '/milestones').then(function (response) {
      if (response) {
        vm.close = response.data[0].closed_issues;
        console.log(response.data[0])
      }
    });

    $http.get('http://api.github.com/repos/' + user.name + '/' + repo.name + '/assignees').then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].login);
        vm.assign = response.data[i].login;
      }
    });
  }

});


