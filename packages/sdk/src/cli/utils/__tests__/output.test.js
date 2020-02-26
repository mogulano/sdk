/* eslint-disable no-console */
const output = require('../output');

let loggedData;
const storeLog = (inputs) => { loggedData += inputs; };
const consoleLog = console.log;

beforeEach(() => {
  loggedData = '';
  console.log = jest.fn(storeLog);
});

afterEach(() => {
  console.log = consoleLog;
});

describe('each output is successful using', () => {
  test('an error message', () => {
    const MESSAGE = 'fatal: this is an error message';

    output.error(MESSAGE);
    expect(loggedData).toBe(MESSAGE);
  });

  test('a success message', () => {
    const MESSAGE = 'this is a success message';

    output.success(MESSAGE);
    expect(loggedData).toBe(MESSAGE);
  });

  test('an info message', () => {
    const MESSAGE = 'this is an info message';

    output.info(MESSAGE);
    expect(loggedData).toBe(MESSAGE);
  });

  test('a warning message', () => {
    const MESSAGE = 'this is a warning message';

    output.info(MESSAGE);
    expect(loggedData).toBe(MESSAGE);
  });

  test('a log message', () => {
    const MESSAGE = 'this is a log message';

    output.log(MESSAGE);
    expect(loggedData).toBe(MESSAGE);
  });
});
