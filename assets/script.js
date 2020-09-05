//  Get quote from API
async function getQuote() {

  const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=eng&format=json';
};

try {
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);

} catch (error){
  console.log('Whoops, nno quote!!!', error);
}



//  On load
getQuote();