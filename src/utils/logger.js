/*

import pino from 'pino';

let logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

export default logger

*/


import pino from 'pino';
/*

import pretty from 'pino-pretty';

// 1. Create the stream for pino-pretty.
const stream = pretty({ colorize: true, ignore: 'pid,hostname' });

// 2. Create the Pino logger instance, passing the stream directly.
const logger = pino(
	{  level: 'debug' },
	stream
);

*/


const logger = pino({
    browser: {
      transmit: {
        level: 'info'
      }
    }
});
  

export default logger