person = {
  fristName: "Huynh",
  lastName: "Khoi",
  job: "Software Engineer",
};
person2 = {
  fristName: "Nguyen",
  lastName: "Khanh",
  job: "Software Engineer",
};
person.gender = "Male";
person.occupation = "Developer";

if ("gender" in person) {
  console.log("Gender is a property of person object");
} else {
  console.log("Gender is not a property of person object");
}
if (person.hasOwnProperty("occupation")) {
  console.log("Occupation is a property of person object");
}
for (let key in person) {
  console.log(key + " : " + person[key]);
}
for (let key in person2) {
  console.log(key + " : " + person2[key]);
}
