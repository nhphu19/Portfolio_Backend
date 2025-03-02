const SidebarHeadingModel = require('../../models/sidebar/SidebarHeading');
const SidebarLinkModel = require('../../models/sidebar/SidebarLink');
const ApiMethodModel = require('../../models/api-method/ApiMethod');

const SidebarHeadingController = {
    getList: async (req, res, next) => {
        try {
            const { type = 'api_refer' } = req.query;

            const sidebars = await SidebarHeadingModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                where: {
                    key_type: type,
                },
                include: {
                    model: SidebarLinkModel,
                    as: 'heading_links',
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: {
                        model: ApiMethodModel,
                        as: 'link_api_method',
                        attributes: { exclude: ['createdAt', 'updatedAt'] },
                    },
                },
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
                    length: sidebars.length,
                    sidebars: sidebars,
                },
            });
        } catch (err) {
            next(err);
        }
    },
};

module.exports = SidebarHeadingController;
