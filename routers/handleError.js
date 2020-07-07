function notFoundRoute(req,res,next) {
    res.status(404).json({
        'github': 'https://github.com/febryardiansyah/bmkg.go.id-rest-api',
        routes:{
            '/':'Main Web Documentation',
        '/api':'Main API',
        '/api/cuaca' : 'Weather all province in indonesia',
        '/api/cuaca/[provincename]': 'Weather all city in specific province',
        '/api/cuaca/bandara': 'Weather in airplane indonesia',
        '/api/cuaca/dunia': 'Weather in all countries',
        '/api/udara': 'Air condition in indonesia',
        '/api/gempa/terkini': 'latest earthquake in indonesia',
        '/api/gempa/dirasakan':'earthquake felt',
        '/api/tsunami': 'Tsunami'
        }
    })
    next(error)
}

module.exports = {notFoundRoute}