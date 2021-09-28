module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "WISHLIST",
        {
            WID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            USER_UID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                references: {
                    model: "USER",
                    key: "UID",
                },
            },
            ITEM_IID: {
                type: DataTypes.STRING(36),
                allowNull: false,
                references: {
                    model: "ITEM",
                    key: "IID",
                },
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
};
