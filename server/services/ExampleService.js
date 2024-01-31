/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* seconds Integer 
* returns ExampleResponse
* */
const getDelayString = ({ seconds }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        seconds,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getDelayString,
};
