function limitByLength(str) {
    // Check if the length of the string is greater than 100
    if (str.length > 100) {
        // if the length is greater than 100, return the first 100 characters with three dots at the end
        return str.slice(0, 100) + "...";

    } else {
        // If the length is not greater than 100, return the original string
        return str;
    }

}

console.log(limitByLength("Heyyyyyy, my name is Oru Chinenye Magdalin. I am popularly known as Chikki. I am an intern in kodecamp academy offering Nodejs. My favourite food is ukwa and I support Manchester United that ended 8th in the league last season, but I strongly believe we will perform better. I am still immensely soaked in learning javascript."));