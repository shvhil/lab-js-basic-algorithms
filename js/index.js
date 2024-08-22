// Iteration 1: Names and Input
let hacker1 = "Joe";
console.log("The driver's name is " + hacker1);

let hacker2 = "Hiccup";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "the driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  process.stdout.write(hacker1[i].toUpperCase() + " ");
}

console.log();

for (let i = hacker1.length - 1; i >= 0; i--) {
  process.stdout.write(hacker1[i]);
}
console.log();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus
text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut purus imperdiet, aliquet ipsum a, fermentum diam. Fusce scelerisque mauris lectus, a cursus neque sollicitudin id. Duis efficitur, sapien quis venenatis maximus, nisi tortor luctus odio, ut sodales velit nibh non felis. Aliquam risus elit, porttitor nec dui at, scelerisque placerat ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed massa lectus, malesuada sit amet libero vel, lacinia tincidunt odio. Suspendisse vitae iaculis ex. Aenean feugiat urna enim, sit amet euismod ante vulputate a. In eu nibh vulputate, venenatis ipsum vel, finibus quam. Suspendisse potenti. Suspendisse potenti. Nam in velit nec nunc consequat sodales. Maecenas est ipsum, convallis non mi nec, malesuada ullamcorper magna. Aliquam accumsan hendrerit faucibus. Fusce at accumsan massa, at dignissim turpis.

Donec at ligula nisl. In sit amet varius sapien. Curabitur non venenatis ipsum. Pellentesque ex ex, bibendum at orci ut, posuere euismod nibh. Fusce ut est ut diam blandit hendrerit eget at orci. Maecenas ultrices ligula tellus. Etiam leo ante, condimentum a erat at, blandit tincidunt nisl. Sed sed purus feugiat, tristique ligula dapibus, venenatis lectus. Integer vehicula orci velit, id rhoncus mi ornare nec. Fusce aliquam mi id massa maximus, in ultrices mauris condimentum. Curabitur commodo massa id tellus eleifend, eu fermentum arcu pellentesque. Donec vitae neque tempor, faucibus lacus tincidunt, feugiat dui. Quisque vel leo vitae lorem eleifend sollicitudin.

Morbi at purus vitae metus ultricies mollis id et sapien. Sed lorem felis, ultricies id viverra ac, efficitur vel lectus. Pellentesque consequat efficitur ex laoreet venenatis. Suspendisse pulvinar eu nisl id lacinia. Sed vitae facilisis orci. Sed vehicula ex nec ullamcorper sagittis. Suspendisse porttitor elementum risus eu pharetra. Phasellus accumsan, urna at congue pretium, quam tortor volutpat dolor, sed ultrices mi felis vitae elit. Maecenas sagittis ut risus sed placerat. Curabitur eu dolor a lorem luctus porttitor. Phasellus quis cursus mi. Curabitur accumsan dolor libero, vitae maximus urna malesuada non. Mauris nec finibus massa, ac fermentum mauris. Cras suscipit tincidunt libero eget rhoncus. Donec eu eros sodales, mollis libero non, tristique massa.
`;

let count = 0;
let etCount = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    count += 1;
  }

  if (text[i] === "e" && text[i + 1] === "t") {
    etCount += 1;
  }
}

console.log("Total Words: " + count);
console.log("Total Appearance of `et`: " + etCount);

// BONUS 2

phraseToCheck = "Was it a car or a cat I saw?";

let i = 0;
let j = phraseToCheck.length - 1;

while (i < j) {
  while (
    phraseToCheck[i].toLowerCase() === " " ||
    phraseToCheck[i].toLowerCase() === "," ||
    phraseToCheck[i].toLowerCase() === "!" ||
    phraseToCheck[i].toLowerCase() === "?" ||
    phraseToCheck[i].toLowerCase() === "'"
  ) {
    i += 1;
  }

  while (
    phraseToCheck[j].toLowerCase() === " " ||
    phraseToCheck[j].toLowerCase() === "," ||
    phraseToCheck[j].toLowerCase() === "!" ||
    phraseToCheck[j].toLowerCase() === "?" ||
    phraseToCheck[j].toLowerCase() === "'"
  ) {
    j -= 1;
  }

  console.log(
    phraseToCheck[i].toLowerCase() + " " + phraseToCheck[j].toLowerCase() + " "
  );

  if (phraseToCheck[i].toLowerCase() !== phraseToCheck[j].toLowerCase()) {
    console.log("Not a palindrome!");
    return;
  }

  i += 1;
  j -= 1;
}

console.log("Its a palindrome!");
