const router = require('express').Router()
const udara = require('./udara/udara.route')
const {gempa,gempa_dirasakan,gempa_terkini} = require('./gempa/gempa.route')

//routes cuaca
router.get('/cuaca',(req,res) => {
    require('./cuaca/cuaca.route').cuaca(req,res)
})
router.get('/cuaca/jakarta',(req, res)=>{
    require('./cuaca/cuaca.route').cuaca_jakarta(req,res)
})
router.get('/cuaca/aceh',(req,res)=>{
    require('./cuaca/cuaca.route').cuaca_aceh(req,res)
})
router.get('/cuaca/banten',(req,res)=>{
    require('./cuaca/cuaca.route').cuaca_banten(req,res)
})
router.get('/cuaca/jabar',(req,res)=>{
    require('./cuaca/cuaca.route').cuaca_jabar(req,res)
})
router.get('/cuaca/jateng',(req,res)=>{
    require('./cuaca/cuaca.route').cuaca_jateng(req,res)
})
router.get('/cuaca/jatim',(req,res)=>{
    require('./cuaca/cuaca.route').cuaca_jatim(req,res)
})
router.get('/cuaca/bandara',(req,res)=>{
    require('./cuaca/cuaca.bandara.route').cuaca_bandara(req,res)
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