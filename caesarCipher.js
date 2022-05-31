function cipher(word, num) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = word.split("");
    let answer = [];
    for (let i=0; i < letters.length; i++){
        if (uppercase.includes(letters[i])) {
            let new_letter = uppercase.indexOf(letters[i]) + num;
            while (new_letter >= uppercase.length){
                new_letter -= uppercase.length;
            };
            answer.push(uppercase[new_letter]);
        } 
        else if (lowercase.includes(letters[i])){
            let new_letter = lowercase.indexOf(letters[i]) + num;
            while (new_letter >= lowercase.length){
                new_letter -= lowercase.length;
            };
            answer.push(lowercase[new_letter]);
        } else {
            answer.push(letters[i]);
        };

    };
    return answer.join("");
};

module.exports = cipher;