const {baseUrl} = require('../../constants/url')
const cheerio = require('cheerio')
const request = require('request')

function udara(req,res) {
    request(baseUrl,(err,response,body)=>{
        if(err || response.statusCode !== 200){
            res.send(err.message)
        }
        const $ = cheerio.load(body)
        var daftar_udara = []
        var namaKota,udara,status
        const element = $('.kualitas-udara-home').find('.ku-chart').children()

        element.each(function () {
            namaKota = $(this).find('.heading-xs').text()
            udara = $(this).find('div > div > span').text()
            status = $(this).find('p>a').text()
            daftar_udara.push({namaKota,udara,status})
            console.log(udara);
            
        })
        res.json({
            'title':'Udara',
            'status':'success',
            daftar_udara})
        
    })
}

module.exports = udara