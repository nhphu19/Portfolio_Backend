const { DataTypes } = require('sequelize');
const sequelize = require('../../dbs');

const SidebarLink = sequelize.define(
    'sidebar_link',
    {
        sidebar_link_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        sidebar_heading_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        api_method_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
);

module.exports = SidebarLink;
