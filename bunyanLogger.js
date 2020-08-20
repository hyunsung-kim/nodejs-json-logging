var bunyan = require('bunyan');

function reqSerializer(req) {
    return {
        method: req.method,
        url: req.url,
        headers: req.headers
    };
}

exports.logger = bunyan.createLogger({
    name: "myapp",
    serializers: {
        req: reqSerializer
    }
});