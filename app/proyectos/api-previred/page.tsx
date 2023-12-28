import Image from "next/image";
import ImportantWord from "@/components/importantWord";
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import {Metadata} from "next";
import Shared from "@/components/Shared";

const title = "Api Previred, comunicate con Previred de forma rápida y automatizada | Ignacio LP."
const description = "La conexión a previred ya no será engorrosa, ahora solo un click y automáticamente podrás " +
    "descargar planillas pagadas, consultar el estado de las cotizaciones y mucho más proximamente."

// todo:linkedin not working

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
    const urlPage = process.env.HOST + "/proyectos/api-previred";
    return <main className={"flex flex-col"}>
        <div className={"flex flex-col md:flex-row gap-x-4 ml-3 items-center"}>
            <div className={"relative h-20 w-80 md:h-16 md:w-52 mb-5 md:mb-0"}>
                <Image src={"/previred-api-shared-png.png"} alt={"logo previred"} fill/>
            </div>
            <h1 className={"text-2xl text-center md:text-xl font-medium"}>Previred Api</h1>
        </div>
        <br/>

        <Shared href={urlPage}/>

        <br/>
        <p>
            Siempre es engorroso acceder a la web de previred y descargar planillas o asegurarse que estén pagadas,
            dicho esto levante este software que automatiza esta tarea,<ImportantWord>descarga las
            planillas</ImportantWord> pagadas
            de una empresa, si antes tomaba <ImportantWord>20 minutos</ImportantWord> en descargarlas ahora solo
            será en <ImportantWord>5 segundos.</ImportantWord> aproximado.
        </p>

        <br/>
        <p>
            He implementado esta api para mi otro proyecto <i>Brash</i>, donde ya existen soluciones para estas tareas
            con un solo click, revisa mi proyecto Brash donde tengo estas herramientas y más gratis.
        </p>

        <br/>

        <a className={"py-5 w-full text-center text-white bg-cyan-700 hover:bg-cyan-900 rounded font-bold"}
           href={"https://www.brash.cl"}>Brash.cl</a>

    </main>
}
