let userName: string = "najeeb";

let userAge = 34;

let isValid = true;

// string, number, boolean

let userID: string | number = "abc1";

userID = 12;
// Union Type |

// let user: object;

type user = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string; // "abc"
};

let user: user;

user = {
  name: "najeeb",
  age: 28,
  isAdmin: true,
  id: 123, // "abc"
};

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

hobbies = ["sports", "reading books", "Hockey"];

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// type aliases or custom types

type fn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: fn) {
  calcFn(a, b);
}

console.log(calculate(2, 5, add));

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials = {
  password: "abc",
  email: "najeebu50",
};

// To merge the types we need and & operator.

type Admin = {
  permission: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let AppsAdmin: AppAdmin = {
  permission: ["a", "b"],
  userName: "najeeb",
};

// SPECIFIC WITH TYPE LITERALS
type Role = "admin" | "user" | "editor"; //Type assignment

let role: Role; // Variable assignment

role = "admin";
role = "user";
role = "editor";
// role = "acb"; //here we are getting error because the role is only specified for 3 roles.

function performAction(action: string | number, role: Role) {
  if (role === "admin") {
    // ...do something
  }
}

//Generic types
let roles: Array<Role>;

roles = ["admin", "editor"];

type DataStorage<T> = {
  //T is the custom generic type when we are receiving data from from api or somewhere and we dont know the type or structure of the data then we use the custome generic type. <T>
  
  storage: T[];
  add: (data: T) => void;
};
