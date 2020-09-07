//  Get quote from API
async function getQuote() {

  const proxyURL = 'https://pacific-thicket-16003.herokuapp.com/';
  const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=eng&format=json';
  
  try {
    const response = await fetch(proxyURL + apiURL);
    const data = await response.json();
    console.log(data);
    
  } catch (error){
    getQuote();
    console.log('Whoops, no quote!!!', error);
  }
}



//  On load
getQuote();