let startNum = 0;
let result = ""

do {
    startNum = startNum + 1;
    result = result + startNum;
} while (startNum < 1000);

console.log(result);

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

console.log(Object.keys(person));

console.log(Object.entries(person));

const arrayOfPeople = [
    { 
      firstName: "Bob",
      lastName: "Knight",
      birthDate: "Feb 9, 1965",
      gender: "male"},
    {
      firstName: "Jane",
      lastName: "Beth",
      birthDate: "Jan 7, 2000",
      gender: "female"
    },
    {
      firstName: "Ryan",
      lastName: "Howard",
      birthDate: "Mar 21, 2003",
      gender: "male"
    },
    {
      firstName: "Steph",
      lastName: "Batson",
      birthDate: "Mar 21, 2003",
      gender: "female"
    }
  
]
  
const bdayIsOdd = () => {
  
    for (const people of arrayOfPeople) {
      let birthYear = people.birthDate.slice(7, 12);
        if (!(birthYear % 2 === 0)) {
            console.log(birthYear);
        }
    }
}
  
bdayIsOdd();

const mapPeople = arrayOfPeople.map((person) => {
    console.log(person)
});
  
const onlyMales = arrayOfPeople.filter((males) => {
    if (males.gender === "male") {
      console.log(males);
    }
});

const isTrue = () => {
  
    for (const people of arrayOfPeople) {
      let date1 = new Date(people.birthDate);
      let date2 = new Date("Jan 1, 1990");
      if (date1 < date2) {
        console.log(people);
        return true
        }
    }
}
  
 isTrue();

