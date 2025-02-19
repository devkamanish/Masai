function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "@#!";

    let allChars = upperCase + lowerCase;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;

    let passwordArray = [];
  
    passwordArray.push(upperCase[Math.floor(Math.random() * upperCase.length)]);

    
    if (includeNumbers) {
        passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (includeSpecialChars) {
        passwordArray.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    }
  
  
    while (passwordArray.length < length) {
        passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    for (let i = passwordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = passwordArray[i];
        passwordArray[i] = passwordArray[j];
        passwordArray[j] = temp;
    }

    
    return passwordArray.join("");
}

console.log(generatePassword(12,true,true));

