import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if ((date instanceof Date) == false) throw new Error('Invalid date!');
  const monthNumber = date.getMonth();
  if (monthNumber == 11 || monthNumber <= 1) {
    return 'winter'
  } else if (monthNumber > 1 && monthNumber <= 4) {
    return 'spring'
  } else if (monthNumber > 4 && monthNumber <= 7) {
    return 'summer'
  } else if (monthNumber > 7 && monthNumber <= 10) {
    return 'autumn (fall)'
  } else {
    return new Error('Invalid date!');
  }
}
