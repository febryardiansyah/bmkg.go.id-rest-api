const router = require('express').Router()
const udara = require('./udara/udara.route')
const cuaca_route = require('./cuaca/cuaca.route')
const {gempa,gempa_dirasakan,gempa_terkini} = require('./gempa/gempa.route')

//routes cuaca
router.get('/cuaca',(req,res) => {
    cuaca_route.cuaca(req,res)
})
router.get('/cuaca/jakarta',(req, res)=>{
    cuaca_route.cuaca_jakarta(req,res)
})
router.get('/cuaca/aceh',(req,res)=>{
    cuaca_route.cuaca_aceh(req,res)
})
router.get('/cuaca/banten',(req,res)=>{
    cuaca_route.cuaca_banten(req,res)
})
router.get('/cuaca/jabar',(req,res)=>{
    cuaca_route.cuaca_jabar(req,res)
})
router.get('/cuaca/jateng',(req,res)=>{
    cuaca_route.cuaca_jateng(req,res)
})
router.get('/cuaca/jatim',(req,res)=>{
    cuaca_route.cuaca_jatim(req,res)
})
router.get('/cuaca/kalbar',(req,res)=>{
    cuaca_route.cuaca_kalbar(req,res)
})
router.get('/cuaca/kaltim',(req,res)=>{
    cuaca_route.cuaca_kaltim(req,res)
})
router.get('/cuaca/lampung',(req,res)=>{
    cuaca_route.cuaca_lampung(req,res)
})
router.get('/cuaca/ntb',(req,res)=>{
    cuaca_route.cuaca_ntb(req,res)
})
router.get('/cuaca/papuabarat',(req,res)=>{
    cuaca_route.cuaca_papua_barat(req,res)
})
router.get('/cuaca/sulsel',(req,res)=>{
    cuaca_route.cuaca_sulsel(req,res)
})
router.get('/cuaca/sulut',(req,res)=>{
    cuaca_route.cuaca_sulut(req,res)
})
router.get('/cuaca/sumut',(req,res)=>{
    cuaca_route.cuaca_sumut(req,res)
})
router.get('/cuaca/bali',(req,res)=>{
    cuaca_route.cuaca_bali(req,res)
})
router.get('/cuaca/bengkulu',(req,res)=>{
    cuaca_route.cuaca_bengkulu(req,res)
})
router.get('/cuaca/kalsel',(req,res)=>{
    cuaca_route.cuaca_kalsel(req,res)
})
router.get('/cuaca/kalut',(req,res)=>{
    cuaca_route.cuaca_kalut(req,res)
})
router.get('/cuaca/maluku',(req,res)=>{
    cuaca_route.cuaca_maluku(req,res)
})

router.get('/cuaca/bandara',(req,res)=>{
    require('./cuaca/cuaca.bandara.route').cuaca_bandara(req,res)
})
router.get('/cuaca/dunia',(req,res)=>{
    require('./cuaca/cuaca.dunia.route').cuaca_dunia(req,res)
})

//routes udara
router.get('/udara',(req,res)=>{
    udara(req,res)
})

//routes gempa
router.get('/gempa',(req,res)=>{
    gempa(req,res)
})
router.get('/gempa/dirasakan',(req,res)=>{
    gempa_dirasakan(req,res)
})
router.get('/gempa/terkini',(req,res)=>{
    gempa_terkini(req,res)
})

//routes tsunami
router.get('/tsunami',(req,res)=>{
    require('../routers/tsunami/tsunami.route').tsunami(req,res)
})

module.exports = router