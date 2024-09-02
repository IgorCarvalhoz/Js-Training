/**
 * @param {string[]} strs
 * @return {string}
 */
var commonCharacters = function(strs) {
    if (strs.length === 0) return "";
    let commonChars = strs[0].split("");
    for (let i = 1; i < strs.length; i++) {

        commonChars = commonChars.filter(char => strs[i].includes(char));
    }
    commonChars = [...new Set(commonChars)];
    return commonChars.join('');
};

console.log(commonCharacters(["Igor", "Roger", "gorilla"]));
