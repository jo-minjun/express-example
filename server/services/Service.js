export class Service {
  static rejectResponse(error, code = 500) {
    return { error, code };
  }

  static successResponse(payload, code = 200) {
    console.log('hello??')
    return { payload, code };
  }
}

module.exports = Service;
