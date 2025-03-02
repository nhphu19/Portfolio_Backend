const Middleware = {
    checkAppKey: (req, res, next) => {
        try {
            const appKey = req.headers.appkey;
            if (appKey === process.env.APP_KEY) {
                next();
            } else {
                return res.json({
                    status: false,
                    err_code: 9000,
                    message: 'You do not have permission to access this app',
                });
            }
        } catch (err) {
            next(err);
        }
    },
};

module.exports = Middleware;
