function notFoundRoute(req,res,next) {
    const error = new Error(`not found - ${req.originalUrl}`)
    res.status(404).json({
        'message':'not found'
    })
    next(error)
}

module.exports = {notFoundRoute}