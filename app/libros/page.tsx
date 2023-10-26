import Image from "next/image";

import UnitTesting from "@/public/unitTesting.png";
import PatternDesign from "@/public/patternDesign.png";
import CleanCode from "@/public/cleanCode.webp";
import CleanArchitecture from "@/public/cleanArchitecture.jpg";

export default function Page() {
    const data = [
        {
            title: "Unit Testing.",
            body: <p>
                Mi 1° libro sobre testing, luego de leerlo tuve que destruir un proyecto completo causa de mis
                horrendos
                tests.
                <br/><br/>
                Lo que más destaco que obtuve de este libro es sobre como el test es un indicador de que tu código
                es correcto y fácil de entender, tests que se expresan solos, es un buen indicador de que vas por el
                camino correcto.
            </p>,
            image: UnitTesting
        },
        {
            title: "Design Patterns",
            body: <p>
                Este libro fue el primero que compré de programación. Y fue un punto inicial para entender como es que
                se pueden utilizar las interfaces y abstracciones. Dentro del desarrollo de software lo más complicado
                que se me ha dado es darle uso a las abstracciones, y este libro da ejemplos específicos de casos de uso
                para esto.
                <br/><br/>
                Luego de su lectura pude aplicar patrones de diseño en mi trabajo, y poder identificar algunos que ya
                usaba como el más típico, el patrón factory.
                <br/><br/>
                Hasta ahora mi patrón favorito es el <b>Proxy</b>, debe ser causa de que lo que más desarrollo son apis
                para microservicios y me gusta cachear algunos datos.
            </p>,
            image: PatternDesign,
        },
        {
            title: "Clean Code",
            body: <p>
                Creo que este libro es lo básico para cualquier programador, lo lei por su popularidad y no me
                arrepiento, un excelente libro.
                <br/><br/>
                Algo que me marcó fue acerca de el identado, una función no debe tener más de 3 niveles de identado,
                regla que siempre respeto y es un indicador de que mi código está mal estructurado <i>A excepción de en
                html</i>.
                <br/><br/>
                Otra regla que sigo al pie de la letra es de clases demasiado grandes, por lo general mis clases no
                superan las 50 lineas, si por alguna razón la superan es porque es un controlador, en caso contrario se
                debe dividir la clase en diferentes clases.
            </p>,
            image: CleanCode,
        },
        {
            title: "Clean Architecture",
            body: <p>
                Este libro es de mis favoritos, de Robert Martin denuevo, creo que es el punto inicial para poder
                escribir proyectos de gran cantidad de lineas de código y que sean escalables. <br/><br/>
                Antes de leerlo estaba en un proyecto en el que al llegar a una cierta cantidad de lineas de código
                (12.000) sentía que no podía seguir más. Buscando soluciones es que escuche el término <i>Arquitecto de
                software</i> y me leí este libro que siempre era mencionado. Luego de su lectura llevó un proyecto de
                50.000 lineas de código, y hasta ahora puedo agregar funcionalidades sin problemas.

                <br/><br/>
                Lo que más me gustó fue lo de las capas y la inversión de dependencias, aplicando la inversión es que
                puedo separar el proyecto en varios mini proyectos, y aplicar test a cada uno de ellos de forma
                independiente.
            </p>,
            image: CleanArchitecture,
        }
    ]
    return <>
        <p className={"font-bold text-xl"}>Comparto mis libros de programación que más me han servido en mi
            aprendizaje.</p>
        <br/>
        <br/>

        <div className={"flex flex-col gap-y-10"}>
            {
                data.map((item, index) => {
                    return <Item key={index} title={item.title} body={item.body} image={item.image}/>
                })
            }
        </div>
    </>
}

function Item(props: { title: string, body: any, image: any }) {
    return <div className={"grid md:grid-cols-2 gap-x-5 gap-y-4"}>
        <div>
            <h2 className={"font-bold"}>{props.title}</h2>
            <br/>
            {props.body}
        </div>
        <div className={"m-auto max-w-[15rem]"}>
            <Image src={props.image} alt={""}/>
        </div>
    </div>;
}
