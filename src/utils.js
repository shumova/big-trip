import dayjs from 'dayjs';
import {escape} from 'he';

/**
 * @param {TemplateStringsArray} strings
 * @param {...*} values
 */
export const html = (strings, ...values) => strings.reduce((before, after, index) => {
  const value = values[index - 1];

  return before + escape(String(value)) + after;
});

/**
 * @param {string} value
 */
const formatDate = (value) => dayjs(value).format('MMM DD');

/**
 * @param {string} value
 */
const formatTime = (value) => dayjs(value).format('HH:mm');

/**
 * @param {number} value
 */
const formatNumber = (value) => value.toLocaleString('en');

/**
 * @param {Object} target
 * @param {*} value
 */
const findKey = (target, value) => Object.keys(target).find((key) => target[key] === value);

export {
  formatDate,
  formatTime,
  formatNumber,
  findKey,
};
