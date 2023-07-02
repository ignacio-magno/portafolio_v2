import {IProyectos} from "@/components/proyectosGenerator/IProyector";
import Image from "next/image";

export const deserializadorPlanillaPrevired: IProyectos = {
    Card: {
        href: "/proyectos/extractor-datos-planilla-cotizaciones",
        tags: ["deserializador", "previred", "cotizaciones", "api", "contabilidad"],
        title: "Extractor de datos de cotizaciones Previred.",
        pathImage: "/previred.png",
        body: <Body/>,
        type: "Api",
        friendlyName: "extractor-datos-planilla-cotizaciones"
    },
    Page: <Page/>,
    Seo: {
        title: "Extractor de datos de cotizaciones Previred.",
        description: "Deserializa planillas de previred en un formato json, con datos relevantes como trabajadores, movimientos de trabajadores, sueldos, pagos afp, fonasa, etc." +
            "los sirve desde una web api en formato json, para que puedan ser consumidos por cualquier aplicación cliente.",
        author: "Ignacio L. Paycho",
    }
}

function Body() {
    return <p>Deserializa planillas de previred en un formato json, con datos relevantes como trabajadores,
        movimientos de trabajadores, sueldos, pagos afp, fonasa, etc.</p>
}

function Page() {
    return <>
        <div className={"flex gap-x-4 ml-3 items-center"}>
            <Image src={"/previred.png"} alt={"previred logo"} width={50} height={50}/>
            <h1 className={"text-xl font-medium"}>Extractor de datos de cotizaciones Previred.</h1>
        </div>
        <br/>
        <br/>
        <div className={"flex flex-col gap-y-4"}>
            <p>
                Deserializa planillas de previred en un formato json.
            </p>
            <p>
                El proyecto está desarrollado con Go, desplegado en Aws Lambda y servido a traves de un endpoint por Api
                Gateway.
            </p>
            <p>
                Datos que hasta la fecha puede conseguir
            </p>
            <ul className={"list-disc list-inside"}>
                <li>Trabajadores</li>
                <li>Movimientos de trabajadores</li>
                <li>Sueldos</li>
                <li>Pagos afp</li>
                <li>Pagos fonasa</li>
                <li>Pagos Isapre</li>
            </ul>

            <h3>Uso</h3>

            <div className={"bg-white text-black px-5 py-5 rounded shadow overflow-auto"}>
                <h1>Endpoint para subir un archivo PDF</h1>

                <h2>Método: POST</h2>

                <h2>URL:</h2>
                <code>https://api.ignaciolp.cl/contabilidad/previred/reader-planilla</code>

                <h2>Parámetros del formulario:</h2>
                <ul>
                    <li>
                        <strong>Archivo PDF:</strong>
                        <ul>
                            <li><strong>Nombre del campo:</strong> planilla</li>
                            <li><strong>Tipo de entrada:</strong> Archivo</li>
                            <li><strong>Tipo de contenido:</strong> application/pdf</li>
                        </ul>
                    </li>
                </ul>

                <br/>

                <h2>Ejemplo de solicitud usando cURL:</h2>
                <pre>
                <code>
              curl -X POST -F &quot;planilla=@ruta/al/archivo.pdf&quot; https://api.ignaciolp.cl/contabilidad/previred/reader-planilla
            </code>
          </pre>

            </div>
        </div>
    </>
}