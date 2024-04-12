module.exports = function (sequelize, DataTypes) {
    const Series = sequelize.define("Series", {
        series_round: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lower_seed_seed: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lower_seed: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        higher_seed_seed: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        higher_seed: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        winner: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        status: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    return Series;
};
