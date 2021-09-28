module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "USER",
        {
            UID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
            },
            USERNAME: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
};
