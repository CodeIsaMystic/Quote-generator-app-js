//  Get quote from API
async function getQuote() {

  const proxyUrl = 'https://arcane-mesa-70168.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=eng&format=json';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);

  } catch (error) {
    getQuote();
    console.log('Whoops, no quote!!!', error);
  }
}



//  On load
//getQuote();