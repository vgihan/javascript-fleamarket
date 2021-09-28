module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "ITEM",
        {
            IID: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
            },
            USER_UID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                references: {
                    model: "USER",
                    key: "UID",
                },
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
            LOCATE: {
                type: DataTypes.STRING(30),
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
};
