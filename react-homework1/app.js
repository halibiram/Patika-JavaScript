import axios from "axios"

async function getData(number){
    return new Promise(async(resolve)=>{
        const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/"+number)
        const{data:post}= await axios("https://jsonplaceholder.typicode.com/posts/"+number+"?userId="+number)
        
        resolve([user,post])
        
        
    })
    
}
export default getData

