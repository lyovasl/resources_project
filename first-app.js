var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = "Max";
// userName = 44;
userName = "Levon";
var userAge = 34;
var isValid = true;
//*  baseic Type  string, number, boolean
var userID = "abc1";
userID = 45;
var user;
// user = "Maria"; // is not
user = {
    name: "Ana",
    age: 28,
    isAdmin: true,
    id: "abc", // 40
};
//* Array types
// let hobbies: Array<string>;
var hobbies; // number[], boolean []
// let hobbies: string | number[];
// hobbies = [{ name: string, age: number }, "Levon"];
hobbies = ["Sport", "Games", "Reading"];
// hobbies = [1, 2, 3];
//* function
var add = function (a, b) {
    var result = a + b;
    return result;
};
var calculate = function (a, b, calcFn) {
    calcFn(a, b);
};
calculate(2, 5, add);
var creds;
creds = {
    password: "abss",
    email: "abaa@gmail.com",
};
// class AuthCredentals implements Credentails {
//   password: string;
//   email: string;
// }
var AuthCredentals = /** @class */ (function () {
    function AuthCredentals() {
    }
    return AuthCredentals;
}());
function login(credentals) { }
login(new AuthCredentals());
var admin;
admin = {
    promission: ["Login"],
    userName: "Simba",
};
var role;
role = "admin";
role = "user";
role = "editor";
var perfonaction = function (action, role) {
    if (role === "admin" && typeof action === "string") {
    }
};
var roles;
roles: ["admin", "user"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (data) { },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: "Max" }, { age: 34 });
newUser.age;
