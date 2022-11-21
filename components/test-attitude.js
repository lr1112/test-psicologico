import { Label, TextInput, Checkbox, Button, Radio } from "flowbite-react";
import { Input } from "postcss";
import { useState } from "react";
import { Formik, Field, Form } from 'formik';


//Preguntas para el formulario(
//Se considera usted una persona con pensamiento positivo hacia el futuro? valor: Resilencia
// Se considera usted una persona que sobrepone los valores ante todo? valor: Resilencia
// Se considera usted una persona que sobrepone los intereses de los demás antes que los suyos? valor: Honestidad
// Considera usted que es una persona capaz de prestar atención a los sentimientos de los demás? valor: Honestidad
// Considera usted que es una persona que se alegra cuando tiene contacto con demás personas? valor: Empatía
// Considera usted que es una persona que tiene la capacidad de acostumbrase rápidamente a los cambios? valor: Adaptabilidad
// Considera usted que es una persona a la cual los cambios le afectan de manera positiva? valor: Adaptabilidad
// Considera usted que es una persona que tiene responsabilidad y manejo de su tiempo? valor: Responsabilidad
// Considera usted que es una persona que puede autogestionar su propia jornada laboral en caso de ser requerido? 
// Considera usted que es una persona susceptible al estrés? 
// Considera usted que es una persona que le cuesta mucho trabajo dejar de lado situaciones estresantes? 
// Se considera usted una persona con buena iniciativa?
// Se considera usted una persona que le gusta tomar el mando de la situación e innovar?
// Se considera usted una persona tosca a la hora de realizar cambios en su ambiente de trabajo?
// Se considera usted una persona con capacidad de realizar lo que es requerido de usted en su ambiente laboral?
// Se considera usted una persona capaz de mantener el temple antes las distintas situaciones que se le presentan?
// Se considera usted una persona con control de sus emociones?
// Considera usted que es una persona que le da mas peso a los hechos previamente comprobados y funcionales antes que a las innovaciones?
// Considera usted que es mejor idea usar lo viejo y funcional antes que lo moderno e inestable?
// Se considera usted una persona capaz de mantener un enfoque continuo en las asignaciones que se le ponen?
// Considera usted que es una persona que no se distrae fácilmente?
// Considera usted que tiene la facultad de mantenerse realizando algo repetidamente hasta conseguirlo?
// Considera usted que es una persona con la capacidad de mantenerse motivado durante procesos largos o extensos?
// Considera usted que la honestidad es uno de las cualidades mas importantes en un ser humano?
// Considera usted que es una persona que siempre intenta mantener la transparencia sin importar la situación?)

//Tomar las preguntas de los comentarios y llenar el arreglo con las mismas
const arrayPreguntas = ["Se considera usted una persona capaz de adaptarse a momentos críticos?",
  "Se considera usted una persona con pensamiento positivo hacia el futuro?", "Se considera usted una persona que sobrepone los valores ante todo?",
  "Se considera usted una persona que sobrepone los intereses de los demás antes que los suyos?",
  "Considera usted que es una persona capaz de prestar atención a los sentimientos de los demás?",
  "Considera usted que es una persona que se alegra cuando tiene contacto con demás personas?",
  "Considera usted que es una persona que tiene la capacidad de acostumbrase rápidamente a los cambios?",
  "Considera usted que es una persona a la cual los cambios le afectan de manera positiva?",
  "Considera usted que es una persona que tiene responsabilidad y manejo de su tiempo?",
  "Considera usted que es una persona que puede autogestionar su propia jornada laboral en caso de ser requerido?",
  "Considera usted que es una persona susceptible al estrés?",
  "Considera usted que es una persona que le cuesta mucho trabajo dejar de lado situaciones estresantes?",
  "Se considera usted una persona con buena iniciativa?",
  "Se considera usted una persona que le gusta tomar el mando de la situación e innovar?",
  "Se considera usted una persona tosca a la hora de realizar cambios en su ambiente de trabajo?",
  "Se considera usted una persona con capacidad de realizar lo que es requerido de usted en su ambiente laboral?",
  "Se considera usted una persona capaz de mantener el temple antes las distintas situaciones que se le presentan?",
  "Se considera usted una persona con control de sus emociones?",
  "Considera usted que es una persona que le da mas peso a los hechos previamente comprobados y funcionales antes que a las innovaciones?",
  "Considera usted que es mejor idea usar lo viejo y funcional antes que lo moderno e inestable?",
  "Se considera usted una persona capaz de mantener un enfoque continuo en las asignaciones que se le ponen?",
  "Considera usted que es una persona que no se distrae fácilmente?",
  "Considera usted que tiene la facultad de mantenerse realizando algo repetidamente hasta conseguirlo?",
  "Considera usted que es una persona con la capacidad de mantenerse motivado durante procesos largos o extensos?"];

const tiposValores = ["Resilencia", "Honestidad", "Empatia", "Adaptabilidad", "Gestion de tiempo", "Control de estres", "Proactividad", "Flexibilidad",
  "Inteligencia Emocional", "Razonamiento Logico", "Disciplina", "Perseverancia"];

class valores {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}

//Crear todos los valores en base al arreglo de tipos de valores
const arrayValores = [];

for (let i = 0; i < tiposValores.length; i++) {
  arrayValores.push(new valores(tiposValores[i], 0));
}

//Crear una clase de preguntas que contenga un constructor para la pregunta, los distintios valores a los que se le van a asignar putos y la suma de puntos en base a la respuesta de si o no
class Pregunta {
  constructor(pregunta, valores, checked) {
    this.pregunta = pregunta;
    this.valores = valores;
    this.checked = checked;
  }
}

const pregunta1 = new Pregunta(arrayPreguntas[0], [arrayValores[0].nombre, arrayValores[10].nombre], false);
const pregunta2 = new Pregunta(arrayPreguntas[1], [arrayValores[0].nombre, arrayValores[10].nombre], false);
const pregunta3 = new Pregunta(arrayPreguntas[2], [arrayValores[1].nombre, arrayValores[2].nombre], false);
const pregunta4 = new Pregunta(arrayPreguntas[3], [arrayValores[1].nombre, arrayValores[2].nombre], false);
const pregunta5 = new Pregunta(arrayPreguntas[4], [arrayValores[2].nombre, arrayValores[1].nombre], false);
const pregunta6 = new Pregunta(arrayPreguntas[5], [arrayValores[2].nombre, arrayValores[1].nombre], false);
const pregunta7 = new Pregunta(arrayPreguntas[6], [arrayValores[3].nombre, arrayValores[7].nombre], false);
const pregunta8 = new Pregunta(arrayPreguntas[7], [arrayValores[3].nombre, arrayValores[7].nombre], false);
const pregunta9 = new Pregunta(arrayPreguntas[8], [arrayValores[4].nombre, arrayValores[3].nombre], false);
const pregunta10 = new Pregunta(arrayPreguntas[9], [arrayValores[4].nombre, arrayValores[3].nombre], false);
const pregunta11 = new Pregunta(arrayPreguntas[10], [arrayValores[5].nombre, arrayValores[8].nombre], false);
const pregunta12 = new Pregunta(arrayPreguntas[11], [arrayValores[5].nombre, arrayValores[8].nombre], false);
const pregunta13 = new Pregunta(arrayPreguntas[12], [arrayValores[6].nombre, arrayValores[3].nombre], false);
const pregunta14 = new Pregunta(arrayPreguntas[13], [arrayValores[6].nombre, arrayValores[3].nombre], false);
const pregunta15 = new Pregunta(arrayPreguntas[14], [arrayValores[7].nombre, arrayValores[3].nombre], false);
const pregunta16 = new Pregunta(arrayPreguntas[15], [arrayValores[7].nombre, arrayValores[3].nombre], false);
const pregunta17 = new Pregunta(arrayPreguntas[16], [arrayValores[8].nombre, arrayValores[4].nombre], false);
const pregunta18 = new Pregunta(arrayPreguntas[17], [arrayValores[8].nombre, arrayValores[4].nombre], false);
const pregunta19 = new Pregunta(arrayPreguntas[18], [arrayValores[9].nombre, arrayValores[8].nombre], false);
const pregunta20 = new Pregunta(arrayPreguntas[19], [arrayValores[9].nombre, arrayValores[8].nombre], false);
const pregunta21 = new Pregunta(arrayPreguntas[20], [arrayValores[10].nombre, arrayValores[0].nombre], false);
const pregunta22 = new Pregunta(arrayPreguntas[21], [arrayValores[10].nombre, arrayValores[0].nombre], false);
const pregunta23 = new Pregunta(arrayPreguntas[22], [arrayValores[11].nombre, arrayValores[4].nombre], false);
const pregunta24 = new Pregunta(arrayPreguntas[23], [arrayValores[11].nombre, arrayValores[4].nombre], false);

//Crear un arreglo con todas las preguntas
const PREGUNTAS = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10,
  pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18, pregunta19, pregunta20,
  pregunta21, pregunta22, pregunta23, pregunta24];

// function answeryes(){
//     return(
//       <div className="flex items-center gap-2">
//       <Radio
//         id="Si"
//         name="yes"
//         value="Si"
//         defaultChecked={true}
//       />
//       <Label htmlFor="Si">
//         Si
//       </Label>
//     </div>
//     );
// }

// function answerno(){
//     return(
//         <div className="flex items-center gap-2">
//         <Radio
//           id="No"
//           name="No"
//           value="No"
//         />
//         <Label htmlFor="No">
//           No
//         </Label>
//       </div>
//     );
// }

// function answers(){
//     return(
//         <div>
//             <answeryes/>
//             <answerno/>
//         </div>
//     );
// }

export default function AttitudeTest() {
  
  // const [questions, setQuestions] = useState({
  // });

  // const handleChange = (e)=>{
  //   console.log('handleChange' ,e.target.value, e.target.checked);
  //   setQuestions({
  //     ...questions,
  //     [e.target.name]: e.target.value
  //   });
  // }


  // return (
  //   <div>
  //     <form className="flex flex-col gap-4" method="post" action="/api/formAt">

  //       <fieldset className="flex flex-col gap-4" id="radio">
  //         <legend>
  //           Preguntas para test de actitud
  //         </legend>
  //         {/* Tomar las preguntas del array y llenar lo demas tomando en cuenta el mismo formato de la que ya esta */}
  //         {PREGUNTAS.map((pregunta, index) => (
  //           <div className="flex flex-col gap-4" key={index}>
  //             <Label htmlFor={pregunta.id} >
  //               {pregunta.pregunta}
  //             </Label>

  //             <div className="flex items-center gap-2">
  //               <input
  //                 id={"Valores" + index}
  //                 type="radio"
  //                 name={"Valores" + index}
  //                 checked={pregunta.valores}
  //                 onChange={handleChange}
  //               />
  //               <Label htmlFor="Si">
  //                 Si
  //               </Label>
  //             </div>

  //             <div className="flex items-center gap-2">
  //               <input
  //                 id={pregunta.valores + " " + index + "N"}
  //                 type="radio"
  //                 name={"Valores" + index}
  //                 value={pregunta.valores[index]}
  //               />
  //               <Label htmlFor="No">
  //                 No
  //               </Label>
  //             </div>

  //           </div>

  //         ))}
  //         <Button type="submit">
  //           Submit
  //         </Button>
  //       </fieldset>
  //     </form>
  //   </div>
  // );

  return(
    <div>
      <Formik
          initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }} 
        >

        {({ isSubmitting }) => (
          <Form>
            
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Jacob " />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Simons" />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Jacobs@gmail.com" type="email" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
         

            <div className="flex flex-col gap-4" key={index}>
              <Label htmlFor={pregunta.id} >
                {pregunta.pregunta}
              </Label>

              <div className="flex items-center gap-2">
                <input
                  id={"Valores" + index}
                  type="radio"
                  name={"Valores" + index}
                  checked={pregunta.valores}
                  onChange={handleChange}
                />
                <Label htmlFor="Si">
                  Si
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id={pregunta.valores + " " + index + "N"}
                  type="radio"
                  name={"Valores" + index}
                  value={pregunta.valores[index]}
                />
                <Label htmlFor="No">
                  No
                </Label>
              </div>

            </div>

          </Form>
        )}
  

      </Formik>
    </div>
  );

}