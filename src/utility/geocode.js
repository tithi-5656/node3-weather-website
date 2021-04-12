const request=require('request')
const geocode =(address,callback)=>{
  
    const r_url='https://jsonplaceholder.typicode.com/todos/'+address
    request({ url: r_url,json:true},(error,response)=>{
        //console.log("response",response.body)
        if(error){
           callback("Unable to handle this service",undefined)
        }

        else if(response.body.error){
            callback("Unable to find data",undefined)
        }
        else{
            callback(undefined,{
                title:response.body.title,
                id:response.body.id
            })
        }

    })
}

module.exports=geocode