import Image from "next/image";
import ImportantWord from "@/components/importantWord";
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import {Metadata} from "next";
import {headers} from "next/headers";
import Shared from "@/components/Shared";

const title = "Extractor de datos de F29. Obten en segundos  datos relevantes como " +
    " Ppm, credito, débito, impuesto determinado, etc. | Ignacio LP"
const description = "Deserializa y extrae datos de los F29 pagados fácil y rápido, extrayendo datos importantes para tu negocio  como son los " +
    "valos de creditos y debitos, el folio del f29 y periodo tributario, etc"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    },
    twitter: {
        title: title,
        description: description
    }
}

export default function Page() {
    const urlPage = process.env.HOST + "/proyectos/extractor-datos-f29";
    return <div className={"flex flex-col"}>
        <div className={"flex flex-col md:flex-row gap-x-4 ml-3 items-center"}>
            <div className={"relative h-32 w-32 md:h-20 md:w-20 mb-5 md:mb-0"}>
                <Image src={"/f29.png"} alt={"f29 logo"} fill/>
            </div>
            <h1 className={"text-2xl text-center md:text-xl font-medium"}>Extractor de datos de F29.</h1>
        </div>

        <br/>
        <Shared href={urlPage}/>
        <br/>
        <div className={"flex flex-col gap-y-4"}>
            <p>
                Deserializa archivos F29 facilmente con <ImportantWord>software</ImportantWord>, todo automatizado en
                segundos.
            </p>
            <p>
                El proyecto está desarrollado con <ImportantWord>C#, dotnet</ImportantWord>, funciona por comando por
                ahora.
            </p>
            <ImportantWord>¿Y si le enseñamos a una ia a leer F29?</ImportantWord>
        </div>

        <p>
            He implementado esta api para mi otro proyecto <i>Brash</i>, donde ya existen soluciones para estas tareas
            con un solo click, revisa mi proyecto Brash donde tengo estas herramientas y más gratis.
        </p>

        <br/>

        <a className={"py-5 w-full text-center text-white bg-cyan-700 hover:bg-cyan-900 rounded font-bold"}
           href={"https://www.brash.cl"}>Brash.cl</a>
    </div>
}