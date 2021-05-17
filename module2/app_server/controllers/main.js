/* GET homepage */
cosnt index = (req, res) -> {
    res.render('index', { title: 'Travlr Getaways' });
};
module.exports = {
    index
};