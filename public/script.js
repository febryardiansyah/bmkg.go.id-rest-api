document.addEventListener('DOMContentLoaded',function (){

    document.querySelectorAll('.nav a').forEach(function(el){
        el.addEventListener('click', function(e){
            page = e.target.getAttribute('href').substr(1)
            loadPage(page)
        })
    })
    
    var page = window.location.hash.substr(1)
    if(page == '') page = 'home'
    loadPage(page)

    function loadPage(page) {
        var xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
            if(this.readyState === 4){
                var content = document.querySelector('.hero-content')

                if(this.status === 200){
                    content.innerHTML =xhttp.responseText
                }else if(this.status === 404){
                    content.innerHTML = '<p>Halaman tidak ditemukan</p>'
                }else{
                    content.innerHTML ='<p>Upss. halaman tidak dapat diakses</p>'
                }
            }
        }
        xhttp.open('GET','pages/'+page+'.html',true)
        xhttp.send()
    }
})
const docs =[
    {
        routes:'/',
        description:'Main Web Documentation',
        sample:'http://bmkg-scrap.herokuapp.com/'
    },
    {
        routes:'/api',
        description:'Main API',
        sample:'http://bmkg-scrap.herokuapp.com/api'
    },
    {
        routes:'/api/cuaca',
        description:'Weather all province in indonesia',
        sample:'http://bmkg-scrap.herokuapp.com/api/cuaca'
    },
    {
        routes:'/api/cuaca/[provincename]',
        description:'Specific weather in every province',
        sample:'http://bmkg-scrap.herokuapp.com/api/cuaca/jakarta'
    },
    {
        routes:'/api/cuaca/bandara',
        description:'weather in ariplane in indonesia',
        sample:'http://bmkg-scrap.herokuapp.com/api/cuaca/bandara'
    },
    {
        routes:'/api/cuaca/dunia',
        description:'weather in every country',
        sample:'http://bmkg-scrap.herokuapp.com/api/cuaca/dunia'
    },
    {
        routes:'/api/udara',
        description:'Air condition in indonesia',
        sample:'http://bmkg-scrap.herokuapp.com/api/udara'
    },
    {
        routes:'/api/gempa/terkini',
        description:'latest earthquake in indonesia',
        sample:'http://bmkg-scrap.herokuapp.com/api/gempa/terkini'
    },
    {
        routes:'/api/gempa/dirasakan',
        description:'earthquake felt',
        sample:'http://bmkg-scrap.herokuapp.com/api/gempa/dirasakan'
    },
]

function generateTableHead(table,data,page){
    let thead = table.createTHead()
    let row = thead.insertRow()
    for (let key of data){
        let th = document.createElement('th')
        let text = document.createTextNode(key)
        th.appendChild(text)
        row.appendChild(th)
    }
    
}
function generateTable(table,data){
    for (let element of data){
        let row = table.insertRow()
        for(key in element){
            let cell = row.insertCell()
            let text = document.createTextNode(element[key])
            cell.appendChild(text)
        }
    }
}
let table = document.querySelector('table')
let data = Object.keys(docs[0])
