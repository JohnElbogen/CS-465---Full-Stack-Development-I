// JavaScript source code
/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
};
module.exports = {
    travel
};