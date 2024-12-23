const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let res = "";
  if (Array.isArray(members)) {
    for (let item of members) {
      if (typeof item === "string") {
        for (let i = 0; i < item.length; i++) {
          if (item[i] != " ") {
            arr.push(item[i].toUpperCase());
            break;
          }
        }
      }
    }
    arr.sort();
    res = arr.join("");
    return res;
  } else return false;
}

module.exports = {
  createDreamTeam,
};
