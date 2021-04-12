console.log('Js Loaded')
//client side fetch API
fetch("http://puzzle.mead.io/puzzle/").then((response)=>{
    //console.log("response",response)
    response.json().then((res)=>{
        if(res.error){
            console.log("Cann't find Puzzle")
        }
        else{
            console.log(res)
        }
    })
})

const form=document.querySelector('form')
const search=document.querySelector('input')
const message=document.querySelector('#message1')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchVal=search.value
    console.log("search",searchVal)
    if(searchVal!=''){
        message.textContent="Loading........."
        fetch("https://jsonplaceholder.typicode.com/todos/"+searchVal).then((response)=>{

                response.json().then((res)=>{
                   // if(res.ok){ //depend on api
                   
                    if(res.error){
                        console.log("Cann't find Puzzle")
                        message.textContent="Error........."
                    }
                    else{
                        console.log(res)
                        message.textContent="Success........."+res.title+" ("+res.id+")"
                    }
                })
            })

    }
    else{
        console.log("Please provide location")
    }

})