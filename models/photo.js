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
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );
};
