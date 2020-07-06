const {baseUrl,cuacaUrl} = require('../../constants/url')
const cheerio = require('cheerio')
const request = require('request')

const jakartaEndpoint = `${cuacaUrl}Prov=07&NamaProv=DKI%20Jakarta`
const acehEndpoint = `${cuacaUrl}Prov=01&NamaProv=Aceh`
const bantenEndpoint = `${cuacaUrl}Prov=04&NamaProv=Banten`
const jabarEndpoint = `${cuacaUrl}Prov=10&NamaProv=Jawa%20Barat`
const jatengEndpoint = `${cuacaUrl}Prov=11&NamaProv=Jawa%20Tengah`
const jatimEndpoint = `${cuacaUrl}Prov=12&NamaProv=Jawa%20Timur`
const kalbarEndpoint = `${cuacaUrl}Prov=13&NamaProv=Kalimantan%20Barat`
const kaltimEndpoint = `${cuacaUrl}Prov=16&NamaProv=Kalimantan%20Timur`
const lampungEndpoint = `${cuacaUrl}Prov=19&NamaProv=Lampung`
const ntbEndpoint = `${cuacaUrl}Prov=22&NamaProv=Nusa%20Tenggara%20Barat`
const papuabaratEndpoint = `${cuacaUrl}Prov=25&NamaProv=Papua%20Barat`
const sulselEndpoint = `${cuacaUrl}Prov=28&NamaProv=Sulawesi%20Selatan`
const sulutEndpoint = `${cuacaUrl}Prov=31&NamaProv=Sulawesi%20Utara`
const sumutEndpoint = `${cuacaUrl}Prov=34&NamaProv=Sumatera%20Utara`
const baliEndpoint = `${cuacaUrl}Prov=02&NamaProv=Bali`
const bengkuluEndpoint = `${cuacaUrl}Prov=05&NamaProv=Bengkulu`
const kalselEndpoint = `${cuacaUrl}Prov=14&NamaProv=Kalimantan%20Selatan`
const kalutEndpoint = `${cuacaUrl}Prov=17&NamaProv=Kalimantan%20Utara`
const malukuEndpoint = `${cuacaUrl}Prov=20&NamaProv=Maluku`

function dataCuaca(title,endpoint,req,res){
    request(`${baseUrl}${endpoint}`,(err,response,body)=>{
        if(err || response.statusCode !== 200){
            res.send(`${err.message} ${response.statusCode}`)
        }
        try {
            const $ = cheerio.load(body)
            var daftar_kota = []
            var nama_kota,cuaca_malam,cuaca_dini_hari,suhu,kelembapan
            const element = $('tbody>tr')

            element.each(function() {
                nama_kota = $(this).find('td:nth-child(1)').text()
                cuaca_malam = $(this).find('td:nth-child(2)>span').text()
                cuaca_dini_hari = $(this).find('td:nth-child(3)').text()
                suhu = $(this).find('td:nth-child(4)').text()
                kelembapan = $(this).find('td:nth-child(5)').text()

                daftar_kota.push({nama_kota,cuaca:{cuaca_malam,cuaca_dini_hari},suhu,kelembapan})
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
module.exports = {
        cuaca:function(req, res) {
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
        },
        cuaca_jakarta:function(req,res){
            dataCuaca('Cuaca Jakarta',jakartaEndpoint,req,res)
        },
        cuaca_aceh:function (req,res){
            dataCuaca('Cuaca Aceh',acehEndpoint,req,res)
        },
        cuaca_banten:function (req,res){
            dataCuaca('Cuaca Banten',bantenEndpoint,req,res)
        },
        cuaca_jabar:function(req,res){
            dataCuaca('Cuaca Jawa Barat',jabarEndpoint,req,res)
        },
        cuaca_jateng:function(req,res){
            dataCuaca('Cuaca Jawa Tengah',jatengEndpoint,req,res)
        },
        cuaca_jatim:function(req,res){
            dataCuaca('Cuaca Jawa Timur',jatimEndpoint,req,res)
        },
        cuaca_kalbar:function(req,res){
            dataCuaca('Cuaca Kalimantan Barat',kalbarEndpoint,req,res)
        },
        cuaca_kaltim:function(req,res){
            dataCuaca('Cuaca Kalimantan Timur',kaltimEndpoint,req,res)
        },
        cuaca_lampung:function(req,res){
            dataCuaca('Cuaca Lampung',lampungEndpoint,req,res)
        },
        cuaca_ntb:function(req,res){
            dataCuaca('Cuaca Nusa Tenggara Barat',ntbEndpoint,req,res)
        },
        cuaca_papua_barat:function(req,res){
            dataCuaca('Cuaca Papua Barat',papuabaratEndpoint,req,res)
        },
        cuaca_sulsel:function(req,res){
            dataCuaca('Cuaca Sulawesi Selatan',sulselEndpoint,req,res)
        },
        cuaca_sulut:function(req,res){
            dataCuaca('Cuaca Sulawesi Utara',sulutEndpoint,req,res)
        },
        cuaca_sumut:function(req,res){
            dataCuaca('Cuaca Sumatra Utara',sumutEndpoint,req,res)
        },
        cuaca_bali:function(req,res){
            dataCuaca('Cuaca Bali',baliEndpoint,req,res)
        },
        cuaca_bengkulu:function(req,res){
            dataCuaca('Cuaca Bengkulu',bengkuluEndpoint,req,res)
        },
        cuaca_kalsel:function(req,res){
            dataCuaca('Cuaca Kalimantan Selatan',kalselEndpoint,req,res)
        },
        cuaca_kalut:function(req,res){
            dataCuaca('Cuaca Kalimantan Utara',kalutEndpoint,req,res)
        },
        cuaca_maluku:function(req,res){
            dataCuaca('Cuaca Maluku',malukuEndpoint,req,res)
        }
}


// module.exports = {cuaca,cuaca_jakarta,cuaca_aceh,cuaca_banten,
//     cuaca_jabar,cuaca_jateng,cuaca_jatim,
//     cuaca_kalbar
// }