const {baseUrl} = require('../../constants/url')
const cheerio = require('cheerio')
const request = require('request')

function gempa(req, res){
    res.json({
        title:'Cuaca Bandara',
        status:'success',
        endpoint :{
            gempa_dirasakan : '/gempa/dirasakan',
            gempa_terkini : '/gempa/terkini'
        }
    })
}
function gempa_dirasakan(req,res) {
    request(`${baseUrl}gempabumi/gempabumi-dirasakan.bmkg`,(err,response,body)=>{
        if(err || response.statusCode !== 200){
            res.send(err.message)
        }
        try {
            const $  = cheerio.load(body)
            var gempa_dirasakan =[]
            var waktu_gempa,lintang_bujur,magnitudo,kedalaman,dirasakan,skala

            $('tbody>tr').each(function(){
                waktu_gempa = $(this).find('td:nth-child(2)').text()
                lintang_bujur = $(this).find('td:nth-child(3)').text()
                magnitudo = $(this).find('td:nth-child(4)').text()
                kedalaman = $(this).find('td:nth-child(5)').text()
                dirasakan = $(this).find('td:nth-child(6) >a ').text()
                skala = $(this).find('td:nth-child(6) > span').text()

                gempa_dirasakan.push({waktu_gempa,lintang_bujur,magnitudo,kedalaman,keterangan:{dirasakan,skala}})
            })
            res.json({
                'title':'Gempa Dirasakan',
                'status':'success',
                gempa_dirasakan})
        } catch (error) {
            console.log(error.message);
        }
    })
}

function gempa_terkini(req, res) {
    request(`${baseUrl}gempabumi/gempabumi-terkini.bmkg`,(err,response,body)=>{
        if(err || response.statusCode !== 200){
            res.send(`${err.message}${response.statusCode}`)
        }
        try {
            const $  = cheerio.load(body)
            var gempa_terkini = []
            var waktu_gempa,lintang,bujur,magnitudo,kedalaman,wilayah
            const element = $('tbody>tr')

            element.each(function(){
                waktu_gempa = $(this).find('td:nth-child(2)').text()
                lintang = $(this).find('td:nth-child(3)').text()
                bujur = $(this).find('td:nth-child(4)').text()
                magnitudo = $(this).find('td:nth-child(5)').text()
                kedalaman = $(this).find('td:nth-child(6)').text()
                wilayah = $(this).find('td:nth-child(7)').text()
                gempa_terkini.push({waktu_gempa,lintang,bujur,magnitudo,kedalaman,wilayah})
            })
            res.json({
                title:'Gempa Terkni',
                'status':'success',
                gempa_terkini
            })
        } catch (error) {
            console.log(error.message)
        }
    })
}

module.exports = {gempa,gempa_dirasakan,gempa_terkini}