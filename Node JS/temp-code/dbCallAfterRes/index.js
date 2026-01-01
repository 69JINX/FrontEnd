const axios = require('axios');

async function fetchData(num) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
	throw error;
      }
}
    
const fun = async () =>{
	await fetchData(1);
	
	setImmediate(async () => {
	  console.log('2nd api called');
	});
	
	await fetchData(3);
	
}
fun();
 
