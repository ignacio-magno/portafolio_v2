import Image from "next/image";
import {Metadata} from "next";
import ImportantWord from "@/components/importantWord";
import {headers} from "next/headers";
import Shared from "@/components/Shared";

export const metadata: Metadata = {
    title: "Extractor de datos de cotizaciones Previred. Deserialize cotizaciones fácil y en cuestión de segundos. | IgnacioLP",
    description: "Deserializa las planillas de previred automáticamente para obtener datos de los trabajadores, movimientos, sueldos, afp, fonasa, " +
        " días de licencias, etc. Todo fácil y accesible en un endpoint.",
    twitter: {
        title: "Extractor de datos de cotizaciones Previred. Deserialize cotizaciones fácil y en cuestión de segundos. | IgnacioLP",
        description: "Deserializa las planillas de previred automáticamente para obtener datos de los trabajadores, movimientos, sueldos, afp, fonasa, " +
            " días de licencias, etc. Todo fácil y accesible en un endpoint.",
        card: "summary_large_image",
        site: "@ignaciolp",
        creator: "@ignaciolp",
        images: "/cotizaciones-to-json.png"
    }
}

export default function Page() {
    const urlPage = process.env.HOST + "/proyectos/extractor-datos-cotizaciones-pdf-previred";

    return <>
        <Image src={"/cotizaciones-to-json-linkedin.png"} alt={"image"} width={1080} height={1350} hidden/>
        <div className={"flex flex-col md:flex-row gap-x-4 ml-3 items-center"}>
            <div className={"relative h-32 w-32 md:h-20 md:w-20 mb-5 md:mb-0"}>
                <Image src={"/previred.png"} alt={"logo previred"} fill/>
            </div>
            <h1 className={"text-2xl text-center md:text-xl font-medium"}>Extractor de datos de cotizaciones Previred.</h1>
        </div>
        <br/>
        <Shared href={urlPage}/>
        <br/>
        <div className={"flex flex-col gap-y-6 md:gap-y-4"}>
            <p>
                <ImportantWord>Transforme</ImportantWord> planillas de previred en un formato json.
            </p>
            <p>
                El proyecto está desarrollado con <ImportantWord>Go</ImportantWord>, desplegado en Aws Lambda y servido
                a traves de un endpoint por Api
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

            <h3 className={"text-xl my-4"}>Ejemplo de uso en Curl</h3>
            <div className={"relative h-[800px] md:h-auto"}>
                <div className={"absolute md:static overflow-auto bg-white w-full md:w-auto"}>
                    <div className={"text-black px-5 py-5 rounded shadow"}>
                        <h1>Endpoint para subir un archivo PDF</h1>

                        <h2>Método: POST</h2>

                        <h2>URL:</h2>
                        <pre>
                    <code>https://api.ignaciolp.cl/contabilidad/previred/reader-planilla</code>
                    </pre>

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
                        <pre><code>
                  curl -X POST -F &quot;planilla=@ruta/al/archivo.pdf&quot; https://api.ignaciolp.cl/contabilidad/previred/reader-planilla
                    </code></pre>
                    </div>
                </div>
            </div>

        </div>

    </>
}