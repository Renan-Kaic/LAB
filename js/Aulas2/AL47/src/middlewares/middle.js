module.exports = (req, res, next) => {
    console.log('\n Passei no middle global \n');


    next()
}