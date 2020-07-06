const request = require('request')
const cheerio = require('cheerio')
const {baseUrl} = require('../../constants/url')

function tsunami(req,res){
    request(`${baseUrl}tsunami`,(err,response,body)=>{
        if(err || response.statusCode !==200){
            res.send(`${err.message}${response.statusCode}`)
        }
        try {
            const $ = cheerio.load(body)
            const element = $('tbody>tr')
            var tangal,lokasi,magnitude,kedalaman,wilayah
            var daftar_tsunami = []

            element.each(function(){
                tangal = $(this).find('td:nth-child(1)').text()
                lokasi = $(this).find('td:nth-child(2)').text()
                magnitude = $(this).find('td:nth-child(3)').text()
                kedalaman = $(this).find('td:nth-child(4)').text()
                wilayah = $(this).find('td:nth-child(5)').text()

                daftar_tsunami.push({tangal,lokasi,magnitude,kedalaman,wilayah})
            })
            res.json({
                titles: 'Tsunami',
                status:'success',
                daftar_tsunami
            })
        } catch (error) {
            console.log(error.message)
        }
    })
}
module.exports = {tsunami}