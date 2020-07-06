const {baseCuacaUrl,baseUrl} = require('../../constants/url')
const cheerio = require('cheerio')
const request = require('request')

function cuaca_bandara(req,res) {
    request(`${baseUrl}${baseCuacaUrl}cuaca-aktual-bandara.bmkg`,(err,response,body) => {
        if (err || response.statusCode !== 200){
            res.send(`${err.message}${response.statusCode}`)
        }
        try {
            const $ = cheerio.load(body)
            const element = $('tbody>tr')
            var daftar_bandara = []
            var nama_bandara, waktu_pengamatan,arah_angin,kecepatan,jarak_pandang,
            cuaca,suhu,titik_timbun,tekanan_udara

            element.each(function() {
                nama_bandara = $(this).find('td:nth-child(2)').text()
                waktu_pengamatan = $(this).find('td:nth-child(3)').text()
                arah_angin = $(this).find('td:nth-child(4)').text()
                kecepatan = $(this).find('td:nth-child(5)').text()
                jarak_pandang = $(this).find('td:nth-child(6)').text()
                cuaca = $(this).find('td:nth-child(7)').text()
                suhu = $(this).find('td:nth-child(8)').text()
                titik_timbun = $(this).find('td:nth-child(9)').text()
                tekanan_udara = $(this).find('td:nth-child(10)').text()

                daftar_bandara.push({nama_bandara,waktu_pengamatan,arah_angin,kecepatan,jarak_pandang,cuaca,
                suhu,titik_timbun,tekanan_udara})
            })
            res.json({
                title:'Cuaca Bandara',
                'status':'success',
                daftar_bandara
            })
        } catch (error) {
            log.error(error.message)
        }
    })
}

module.exports = {cuaca_bandara}