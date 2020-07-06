const {baseUrl,baseCuacaUrl} = require('../../constants/url')
const cheerio = require('cheerio')
const request = require('request')

function cuaca_dunia(req,res){
    request(`${baseUrl}${baseCuacaUrl}prakiraan-cuaca-dunia.bmkg`,(err,response,body)=>{
        if(err || response.statusCode !== 200){
            res.send(`${err.message}${response.statusCode}`)
        }
        try {
            const $ = cheerio.load(body)
            const element = $('em').find('a').attr('href')

            res.json({
                title:'Cuaca Dunia',
                status:'succsess',
                cuaca_dunia : element
            })
            
        } catch (error) {
            log.error(error.message)
        }
    })
}

module.exports = {cuaca_dunia}