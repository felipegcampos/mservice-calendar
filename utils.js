class Utils {
    static debug(result) {
        if (result.isRejected()) {
            const err = result.reason();
            //console.log(require('util').inspect(err, {depth: 5}) + '\n'); // eslint-disable-line
            console.log(err && err.stack || err); // eslint-disable-line
            console.log(err && err.response || ''); // eslint-disable-line
        }
    }
}

Utils.duration = 20 * 1000;

module.exports = exports = Utils;