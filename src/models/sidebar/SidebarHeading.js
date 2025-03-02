const { DataTypes } = require('sequelize');
const sequelize = require('../../dbs');
const SidebarLink = require('./SidebarLink');

const SidebarHeading = sequelize.define(
    'sidebar_heading',
    {
        sidebar_heading_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        key_type: {
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

// SidebarHeading (1 -> n) SidebarLink
SidebarHeading.hasMany(SidebarLink, {
    as: 'heading_links',
    foreignKey: 'sidebar_heading_id',
});

SidebarLink.belongsTo(SidebarHeading, {
    as: 'link_heading',
    foreignKey: 'sidebar_heading_id',
});

module.exports = SidebarHeading;
