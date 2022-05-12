const mathModel = require("../../storage/models/math.model");

const weekend = async (req, res) => {
    const { n } = req.body;
    try {
        const result = await mathModel.weekend(n);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

const leapYear = async (req, res) => {
    const { n } = req.body;
    try {
        const result = await mathModel.leapYear(n);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};


module.exports = {
    weekend,
    leapYear
};
