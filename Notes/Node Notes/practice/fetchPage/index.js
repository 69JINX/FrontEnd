    async function fetchWebPage(url) {
      try {
        const response = await fetch(url,{
      referrer: 'https://alljb.dad/' 
    });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const htmlContent = await response.text();
        console.log(htmlContent);
      } catch (error) {
        console.error('Error fetching the web page:', error);
      }
    }
    fetchWebPage('https://www.jumploads.com/file/TWh3aGZrNXdVZm9NcTBKMEhYdDZZQT09/password.txt')
    
        async function postData(url) {
       try {
    const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(data)
    });
        if (!response.ok) {
        console.log(response);
          throw new Error(response);
        }
   	console.log(response);
        const responseData = await response.json(); // Parse the JSON response
        return responseData;
      } catch (error) {
      console.log(error);
        console.error('Error fetching the web page:', error);
      }
    }

    // Replace with the URL of the web page you want to fetch
    const apiUrl = 'https://api.uploadedpremiumlink.net/wp-json/api/generate_link';
    const myData = {
      link:"https://www.jumploads.com/file/TWh3aGZrNXdVZm9NcTBKMEhYdDZZQT09/password.txt"
    }
    
 // postData(apiUrl, myData)
//  .then(data => console.log('Success:', data))
 // .catch(error => console.error('Error:', error));


