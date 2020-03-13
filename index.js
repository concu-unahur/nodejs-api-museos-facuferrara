const superagent = require('superagent');
const fs = require('fs')

'----------------------------------Debajo<!!!!> ---------------------------'

function pegarleAApi(next){

  superagent

  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end(next)
  
}

function guardarOEscribirArchivo(error, respuesta){

  let listita=[]

  if (error) {
    
    throw new Error('algo se rompió', error);
  }

  console.log(respuesta.body.results[0].direccion ) 

  const organismo = respuesta.body.results

  for(let i = 0; organismo.length > i; i++){
    
    fs.appendFile('organismos.txt', organismo[i].direccion + '\n' ,terminar);
}



    //console.log(respuesta.body.results[0].direccion )   armar todo y despues guardar todo
    //fs.writeFile('museos.txt', respuesta.body.count ,terminar);
    //fs.writeFile('museos.txt', respuesta.body.ne ,terminar);
}

function terminar(error){

  console.log("listo todo a terminado");

}
'------------------------------------------------------------------------------------------------'
                                        ///ORGANISMOS
'------------------------------------------------------------------------------------------------'
function pegarleAApi2(next){

  superagent

  .get('https://www.cultura.gob.ar/api/v2.0/organismos')
  .query({ format: 'json' })
  .end(next)
  
}

function guardarOEscribirArchivo2(error, respuesta){

  if (error) {
    
    throw new Error('algo se rompió', error);
  }
    
    fs.writeFile('organismos.txt', respuesta.body.results[1].id ,terminar);
}

function terminar2(error){

  console.log("listo todo a terminado");

}


pegarleAApi(guardarOEscribirArchivo)
//pegarleAApi2(guardarOEscribirArchivo2)

//anotaciones:

/*function DespuesDeEscribir(error) {
  if (error) {
    throw new Error('no se pudo escribir');
  console.log('Todo joya ,  anda a leer tu archivo')
  }

fs.write('museos.txt', 'hola que tal ', DespuesDeEscribir); } */
