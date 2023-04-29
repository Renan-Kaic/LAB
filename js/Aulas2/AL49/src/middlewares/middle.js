exports.middleGlobal = (req, res, next) => {
    console.log('\n Passei no middle global \n');


    next()
}

exports.CheckErrorCSURF = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('ERRO NO CSURF')
    }
}

exports.CSRFMiddle = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
} 