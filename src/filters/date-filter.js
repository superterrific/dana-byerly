const moment = require('moment');

module.exports = value => {
  const dateObject = moment.utc(value);
  return `${dateObject.format('MMMM')} ${dateObject.format('Do')}, ${dateObject.format('YYYY')}`;
};
