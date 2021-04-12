const request=require('request')
const forcast =(lat,long,callback)=>{
  
    const url='https://jsonplaceholder.typicode.com/todos/'+lat
    //request({ url: url,json:true},(error,response)=>{
        request({ url: url,json:true},(error,{body}={})=>{
        if(error){
           callback("Unable to handle this request",undefined)
        }
        else if(body.error){
            
        //else if(response.body.error){
            callback("Unable to find data",undefined)
        }
        else{
           
            //callback(undefined,response.body)
            callback(undefined,body)
        }

    })
}

module.exports=forcast