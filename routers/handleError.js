function notFoundRoute(req,res,next) {
    res.status(404).json({
        'message':'route not found',
        'github': 'https://github.com/febryardiansyah/bmkg.go.id-rest-api',
    })
    next(error)
}

module.exports = {notFoundRoute}