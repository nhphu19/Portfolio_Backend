const SidebarLinkModel = require('../../models/sidebar/SidebarLink');
const ApiMethodModel = require('../../models/api-method/ApiMethod');

const SidebarLinkController = {
    detail: async (req, res, next) => {
        try {
            const sidebar_link_id = req.params.id;

            const sidebar = await SidebarLinkModel.findOne({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                where: {
                    sidebar_link_id: sidebar_link_id,
                },
                include: {
                    model: ApiMethodModel,
                    as: 'link_api_method',
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
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
                    sidebar: sidebar,
                },
            });
        } catch (err) {
            next(err);
        }
    },
};

module.exports = SidebarLinkController;
