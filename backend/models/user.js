module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "USER",
        {
            UID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
            },
            LOCATE: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            ACCESS_TOKEN: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            charset: "utf8",
            freezeTableName: true,
            timestamps: false,
        }
    );
    user.associate = function (models) {
        user.hasMany(models.CHAT, {
            foreignKey: "SENDER",
            onDelete: "cascade",
        });
        user.hasMany(models.CHAT, {
            foreignKey: "RECVER",
            onDelete: "cascade",
        });
        user.hasMany(models.ITEM, {
            foreignKey: "USER_UID",
            onDelete: "cascade",
        });
        user.hasMany(models.WISHLIST, {
            foreignKey: "USER_UID",
            onDelete: "cascade",
        });
    };
    return user;
};
