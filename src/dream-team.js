import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    if (typeof members === 'string') {
      return members.trim().charAt(0).toUpperCase();
    } else {
      return false;
    }
  } else {
    const stringMembers = members.filter(item => typeof item === 'string');
    if (stringMembers.length == 0) {
      return false;
    } else {
      return stringMembers
      .map(item => item.trim().charAt(0).toUpperCase())
      .sort()
      .join('');
    }
  }
}

