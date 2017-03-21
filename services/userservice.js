app.service('UserService', function() {
    var users = [
        {id:1, username:"dominic", password:"dominic"},
        {id:2, username:"tim", password:"tim"},
        {id:3, username:"rod", password:"rob"}
    ];

    this.login = function(username, password) {
        console.log("login");
        var res = false;
        users.forEach(function(item) {
            if(item.username === username && item.password === password) {
                res = true;
            }
        });
        return res;
    };
});