var grade = prompt("What grade did you get?");

// Simple way but in Order
if (grade >= 111) {
    
} else if (grade >= 101) {
    
} else if (grade >= 92) {
    
} else if (grade >= 85) {
    
} else if (grade >= 78) {
    
} else if (grade >= 69) {
    
} else {
    
}

// Harder but doesn't need to be in order
if (grade >= 92 && grade <= 100) {
    console.log("You got a A");
}
else if (grade >= 85 && grade <= 91) {
    console.log("You got a B");
}
else if (grade >= 78 && grade <= 84 ) {
    console.log("You got a C");
}

else if (grade >= 69 && grade <= 77 ) {
    console.log("You got a D");
}
else if (grade >= 111) {
    console.log("That's impossible!");
}

else if (grade >=101 && grade <= 110 ) {
    console.log("You did your extra credit, Nice!");
}

else {
  console.log("You got a F");
}