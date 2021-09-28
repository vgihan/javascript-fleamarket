module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "CHAT",
        {
            CID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            ITEM_IID: {
                type: DataTypes.STRING(36),
                allowNull: false,
                references: {
                    model: "ITEM",
                    key: "IID",
                },
            },
            SENDER: {
                type: DataTypes.STRING(20),
                allowNull: false,
                references: {
                    model: "USER",
                    key: "UID",
                },
            },
            RECVER: {
                type: DataTypes.STRING(20),
                allowNull: false,
                references: {
                    model: "USER",
                    key: "UID",
                },
            },
            CONTENTS: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );
};
