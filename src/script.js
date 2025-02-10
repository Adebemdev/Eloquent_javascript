// Exercise 2
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// function truncate(str, maxLength) {
//   return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
// }

// truncate("What I'd like to tell on this topic is:", 20);
// truncate('Hi everyone!', 20);

// Exercise 3
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));
