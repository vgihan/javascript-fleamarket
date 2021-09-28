module.exports = (sequelize, DataTypes) => {
    const item = sequelize.define(
        "ITEM",
        {
            IID: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
            },
            TITLE: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            PRICE: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            CONTENTS: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            CATEGORY: {
                type: DataTypes.STRING(15),
                allowNull: false,
                defaultValue: "기타",
            },
            STATE: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: "판매중",
            },
            CHAT_NUM: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            HEART_NUM: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            LOOKUP_NUM: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );
    item.associate = function (models) {
        item.hasMany(models.PHOTO, {
            foreignKey: "ITEM_IID",
            onDelete: "cascade",
        });
        item.hasMany(models.CHAT, {
            foreignKey: "ITEM_IID",
            onDelete: "cascade",
        });
    };
    return item;
};
