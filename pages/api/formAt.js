const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const tiposValores = ["Resilencia", "Honestidad", "Empatia", "Adaptabilidad", "Gestion de tiempo", "Control de estres", "Proactividad", "Flexibilidad",
"Inteligencia Emocional", "Razonamiento Logico", "Disciplina", "Perseverancia"];

//Contadores para los valores
let resilencia = 0;
let honestidad = 0;
let empatia = 0;
let adaptabilidad = 0;
let gestionTiempo = 0;
let controlEstres = 0;
let proactividad = 0;
let flexibilidad = 0;
let inteligenciaEmocional = 0;
let razonamientoLogico = 0;
let disciplina = 0;
let perseverancia = 0;

//Create a function that takes an array of two valores, search for the corresponding counter and 
//add 10 points to the first valor and 3 points to the second valor
function addPoints(array) {
    switch (array[0]) {
        case "Resilencia":
            resilencia += 10;
            break;
        case "Honestidad":
            honestidad += 10;
            break;
        case "Empatia":
            empatia += 10;
            break;
        case "Adaptabilidad":
            adaptabilidad += 10;
            break;
        case "Gestion de tiempo":
            gestionTiempo += 10;
            break;
        case "Control de estres":
            controlEstres += 10;
            break;
        case "Proactividad":
            proactividad += 10;
            break;
        case "Flexibilidad":
            flexibilidad += 10;
            break;
        case "Inteligencia Emocional":
            inteligenciaEmocional += 10;
            break;
        case "Razonamiento Logico":
            razonamientoLogico += 10;
            break;
        case "Disciplina":
            disciplina += 10;
            break;
        case "Perseverancia":
            perseverancia += 10;
            break;
    }
    switch (array[1]) {
        case "Resilencia":
            resilencia += 3;
            break;
        case "Honestidad":
            honestidad += 3;
            break;
        case "Empatia":
            empatia += 3;
            break;
        case "Adaptabilidad":
            adaptabilidad += 3;
            break;
        case "Gestion de tiempo":
            gestionTiempo += 3;
            break;
        case "Control de estres":
            controlEstres += 3;
            break;
        case "Proactividad":
            proactividad += 3;
            break;
        case "Flexibilidad":
            flexibilidad += 3;
            break;
        case "Inteligencia Emocional":
            inteligenciaEmocional += 3;
            break;
        case "Razonamiento Logico":
            razonamientoLogico += 3;
            break;
        case "Disciplina":
            disciplina += 3;
            break;
        case "Perseverancia":
            perseverancia += 3;
            break;
    }
}

export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
    console.log('Data: ', body.Valores0)
    // console.log('Length: ', body.Valores0.prope)
  
    //Take the body and iterate over all the values of the RadioButtons and add the points to the corresponding counter in the ones that are checked on the form
    for (let i = 0; i < 12; i++) {
        if (!!body.Valores0) {
            console.log(addPoints([body.Valores0]));
        }
    }

    
    // Found the name.
    // Sends a HTTP success code
    //res.status(200).json({ data: `${body.first} ${body.last}` })
  }