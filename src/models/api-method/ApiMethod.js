const { DataTypes } = require('sequelize');
const sequelize = require('../../dbs');
const SidebarLink = require('../sidebar/SidebarLink');

const ApiMethod = sequelize.define(
    'api_method',
    {
        api_method_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        key_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
);

// ApiMethod (1 -> n) SidebarLink
ApiMethod.hasMany(SidebarLink, {
    as: 'api_method_links',
    foreignKey: 'api_method_id',
});

SidebarLink.belongsTo(ApiMethod, {
    as: 'link_api_method',
    foreignKey: 'api_method_id',
});

module.exports = ApiMethod;
