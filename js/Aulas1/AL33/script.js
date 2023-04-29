import fetch from 'node-fetch'

console.clear()
//
//let obj
//
//Promise.all (fetch('https://economia.awesomeapi.com.br/last/USD-BRL'))
//
//  .then(response => response.json())
//  .then(json => {
//    obj = new Object(json)
//    })
//  .catch(error => console.error(error))
//
//

let response

async function obterDados() {

  const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  if (response.status !== 200) console.error(`Error ${response.status}`);
  const data = await response.json()

  return data
}

obterDados().then( data => console.log(data.USDBRL.bid))