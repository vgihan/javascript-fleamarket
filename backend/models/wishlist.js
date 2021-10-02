module.exports = (sequelize, DataTypes) => {
    const wishlist = sequelize.define(
        "WISHLIST",
        {
            WID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
        },
        {
            charset: "utf8",
            freezeTableName: true,
            timestamps: false,
            indexes: [
                {
                    unique: true,
                    fields: ["USER_UID", "ITEM_IID"],
                },
            ],
        }
    );
    wishlist.associate = function (models) {
        wishlist.belongsTo(models.ITEM, {
            foreignKey: "ITEM_IID",
            onDelete: "cascade",
        });
    };
    return wishlist;
};
