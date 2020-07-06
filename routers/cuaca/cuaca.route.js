const {baseUrl,cuacaUrl} = require('../../constants/url')
const cheerio = require('cheerio')
const request = require('request')

const jakartaEndpoint = `${cuacaUrl}Prov=07&NamaProv=DKI%20Jakarta`
const acehEndpoint = `${cuacaUrl}Prov=01&NamaProv=Aceh`
const bantenEndpoint = `${cuacaUrl}Prov=04&NamaProv=Banten`
const jabarEndpoint = `${cuacaUrl}Prov=10&NamaProv=Jawa%20Barat`
const jatengEndpoint = `${cuacaUrl}Prov=11&NamaProv=Jawa%20Tengah`
const jatimEndpoint = `${cuacaUrl}Prov=12&NamaProv=Jawa%20Timur`

function cuaca(req, res) {
    request(baseUrl,(err, response,body)=>{
        if(err && response.statusCode !== 200){
            res.send(response.statusCode)
            console.log(err)
        }
        var $ = cheerio.load(body)        
        var daftar_cuaca = []
        var namaKota,waktu,cuaca,suhu
        const element = $('.row>.col-md-8').first().find('.prakicu-kota-besar-bg').first()
        .find('.service-block')

        element.each(function () {
            namaKota = $(this).find('.kota').text()
            waktu = $(this).find('p').first().text()
            cuaca = $(this).find('p').last().text()
            suhu = $(this).find('.heading-md').text()
            daftar_cuaca.push({namaKota,waktu,cuaca,suhu})
        })
        res.json({
            'title':'Cuaca Indonesia',
            status:'success',
            daftar_cuaca
        })
    })
}

function cuaca_jakarta(req,res){
    dataCuaca('Cuaca Jakarta',jakartaEndpoint,req,res)
}

function cuaca_aceh(req,res){
    dataCuaca('Cuaca Aceh',acehEndpoint,req,res)
}

function cuaca_banten(req,res){
    dataCuaca('Cuaca Banten',bantenEndpoint,req,res)
}

function cuaca_jabar(req,res){
    dataCuaca('Cuaca Jawa Barat',jabarEndpoint,req,res)
}

function cuaca_jateng(req,res){
    dataCuaca('Cuaca Jawa Tengah',jatengEndpoint,req,res)
}

function cuaca_jatim(req,res){
    dataCuaca('Cuaca Jawa Timur',jatimEndpoint,req,res)
}

function dataCuaca(title,endpoint,req,res){
    request(`${baseUrl}${endpoint}`,(err,response,body)=>{
        if(err || response.statusCode !== 200){
            res.send(`${err.message} ${response.statusCode}`)
        }
        try {
            const $ = cheerio.load(body)
            var daftar_kota = []
            var nama_kota,cuaca,suhu,kelembapan
            const element = $('tbody>tr')

            element.each(function() {
                nama_kota = $(this).find('td:nth-child(1)').text()
                cuaca = $(this).find('td:nth-child(2)>span').text()
                suhu = $(this).find('td:nth-child(3)').text()
                kelembapan = $(this).find('td:nth-child(4)').text()

                daftar_kota.push({nama_kota,cuaca,suhu,kelembapan})
            })
            res.json({
                'title':title,
                'status':'success',
                daftar_kota})
        }catch(err){
            console.log(err.message)
        }
    })
}
module.exports = {cuaca,cuaca_jakarta,cuaca_aceh,cuaca_banten,cuaca_jabar,cuaca_jateng,cuaca_jatim}