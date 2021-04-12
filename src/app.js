const express =  require('express')
const path =  require('path')
const hbs =  require('hbs')
const forcast =  require('./utility/forcast')
const geocode =  require('./utility/geocode')
const app=express()
const port=process.env.PORT || 3000
console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname,"../public"))

//defines path for express config
const publicPath=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)

//defines handlebars engine & view location
app.set('view engine','hbs')
app.set('views',viewsPath)
//setup static directory to serve
app.use(express.static(publicPath))
app.get('',(req,res)=>{ 
    res.render('index',{
        header_title:"Index Page ",
        title:"Weather App",
        name:"Tithi"
    })
})
/*app.get('',(req,res)=>{ 
    res.send('Hello Express')
})*/
app.get('/about',(req,res)=>{ 
    res.send('About Page')
})
app.get('/help',(req,res)=>{ 
    res.render('index',{
        header_title:"Help Page ",
        title:"Help",
        name:"Tithi Das"
    })
})
app.get('/weather',(req,res)=>{ 
    console.log(req.query)
    console.log(req.query.search)
   
    if(!req.query.search){
        //console.log('Please provide search value')
        return res.send({error:"Please provide search value"})
    }
        geocode(req.query.search,(error,{id,title}={})=>{
           
            forcast(id,title,(error,product)=>{
                console.log("prod--",product)
                if(error){
                    return  res.send([{
                        error: error,
                    }])
                } 
                res.send([{
                    product: product,
                }])
            })
           /* res.send([{
                location: 'Canning-Wb',
                forecast:id,
                search:req.query.search,
                title:title,
            }])*/
        })
        
})
app.get('*',(req,res)=>{ 
    res.send('<h1>Page not found</h1>')
})
app.listen(port,()=>{
    console.log('server is up on '+port)
})


