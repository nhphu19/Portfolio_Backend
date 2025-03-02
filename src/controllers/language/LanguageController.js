const LanguageModel = require('../../models/language/Language');

const LanguageController = {
    getList: async (req, res, next) => {
        try {
            const languages = await LanguageModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            }).catch((err) =>
                res.status(500).json({
                    status: false,
                    err_code: 50001,
                    message: `Error while database query executing: ${err}`,
                }),
            );

            return res.json({
                status: true,
                message: 'Success',
                data: {
                    success: true,
                    languages: languages,
                },
            });
        } catch (err) {
            next(err);
        }
    },
};

module.exports = LanguageController;
