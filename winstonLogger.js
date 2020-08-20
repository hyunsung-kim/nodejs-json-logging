
const { createLogger, format, transports } = require('winston')
const { printf, timestamp, combine } = format;

const jsonFormat = printf((info) => {
    const logObject = {
        logger: info.logger || 'application-logger',
        level: info.level,
        service: info.service,
        message: info.message,
        time: info.timestamp,
        context: {
            tenant: info.tenant || '',
            project: info.project || '',
            email: info.email || ''
        }
    };

    if (info.stack) {
        logObject.err = {
            name: info.name,
            stack: info.stack
        };
    }
    return JSON.stringify(logObject);
});


exports.logger = createLogger({
    level: 'info',
    format: combine(timestamp(), jsonFormat),
    defaultMeta: { service: 'civet' },
    transports: [
        new transports.Console()
    ],
});
