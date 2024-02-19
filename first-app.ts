let userName: string = "Max";

// userName = 44;
userName = "Levon";
let userAge: number = 34;
let isValid: boolean = true;

//*  baseic Type  string, number, boolean

let userID: string | number = "abc1";
userID = 45;
//* there is something that is possible string and number |

//* Object Type

// let user: object; //*valid
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string;
};

let user: User;
// user = "Maria"; // is not

user = {
  name: "Ana",
  age: 28,
  isAdmin: true,
  id: "abc", // 40
};

//* Array types

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean []
// let hobbies: string | number[];

// hobbies = [{ name: string, age: number }, "Levon"];
hobbies = ["Sport", "Games", "Reading"];
// hobbies = [1, 2, 3];

//* function

const add = (a: number, b: number) => {
  const result = a + b;
  return result;
};

//* custom type
type AddFn = (a: number, b: number) => number;

const calculate = (a: number, b: number, calcFn: AddFn) => {
  calcFn(a, b);
};

calculate(2, 5, add);

interface Credentails {
  password: string;
  email: string;
}

let creds: Credentails;

creds = {
  password: "abss",
  email: "abaa@gmail.com",
};

// class AuthCredentals implements Credentails {
//   password: string;
//   email: string;
// }

class AuthCredentals implements Credentails {
  password: string;
  email: string;
}

function login(credentals: Credentails) {}

login(new AuthCredentals());

//* merging type
// type Admin = {
//   promission: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   promission: ["Login"],
//   userName: "Kevin",
// };

interface Admin {
  promission: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  promission: ["Login"],
  userName: "Simba",
};

type Role = "admin" | "user" | "editor";

let role: Role;

role = "admin";
role = "user";
role = "editor";

const perfonaction = (action: string | number, role: Role) => {
  if (role === "admin" && typeof action === "string") {
  }
};

let roles: Array<Role>;
roles: ["admin", "user"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(data) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge({ name: "Max" }, { age: 34 });
newUser.age;
