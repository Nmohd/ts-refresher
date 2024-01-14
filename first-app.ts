let userName: string = "najeeb";

let userAge = 34;

let isValid = true;

// string, number, boolean

let userID: string | number = "abc1";

userID = 12;
// Union Type |

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string; // "abc"
};

user = {
  name: "najeeb",
  age: 28,
  isAdmin: true,
  id: 123, // "abc"
};

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

hobbies = ["sports", "reading books", "Hockey"];
