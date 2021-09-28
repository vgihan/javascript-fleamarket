module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "PHOTO",
        {
            WID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            IMG: {
                type: DataTypes.BLOB,
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
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
};
