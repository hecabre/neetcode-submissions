class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const delimitedStrs = strs.join("€");
        let encoded = "";
        if(strs.length === 0) {
            return "∅"
        }
        for (let i = 0; i < delimitedStrs.length; i++) {
            if (delimitedStrs[i] !== "€") {
                encoded += delimitedStrs[i].charCodeAt(0);
                encoded += "★";
            } else {
                encoded += "€";
            }
        }

        return encoded;
    }

    decode(str) {
        if (str === "∅") return [];
        const decoded = [];
        let decodedWord = "";
        let currentLetter = "";
        const words = str.split("€");
        
        for (let word = 0; word < words.length; word++) {
            currentLetter = words[word].split("★");
            for (let i = 0; i < currentLetter.length - 1; i++) {
                if (currentLetter[i] === "") {
                    return [];
                } else {
                    decodedWord += String.fromCharCode(Number(currentLetter[i]));
                }
            }
            decoded.push(decodedWord);
            decodedWord = "";
        }

        return decoded;
    }
}
