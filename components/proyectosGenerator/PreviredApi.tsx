import {IProyectos} from "@/components/proyectosGenerator/IProyector";
import Image from "next/image";
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import ImportantWord from "@/components/importantWord";

export const PreviredApi: IProyectos = {
    Card: {
        href: "proyectos/api-previred",
        title: "Api Previred",
        type: "api",
        pathImage: "/previred.png",
        tags: ["api", "contabilidad", "open source", "previred", "cotizaciones", "descargar planillas"],
        body: <Body/>,
        friendlyName: "api-previred"
    },
    Seo: {
        title: "Api Previred | Ignacio LP.",
        description: "Conecta a previred por medio de un software para poder descargar multiples cotizaciones de forma rapida y sencilla, " +
            "listar las cotizaciones pagadas, y otras implementaciones a futuro.",
        author: "Ignacio L. Paycho",
    },
    Page: <Page/>

}

function Page() {
    return <>
        <div className={"flex gap-x-4 ml-3 items-center"}>
            <Image src={"/previred.png"} alt={"previred logo"} width={50} height={50}/>
            <h1 className={"text-xl font-medium"}>Previred Api</h1>
        </div>
        <br/>
        <p>Siempre es engorroso acceder a la web de previred y descargar planillas que necesitas enviar a los servicios
            que lo requieren,
            o ver si las planillas ya fueron pagadas, dicho esto levante este software que automatiza esta tarea,
            <ImportantWord>descarga las planillas</ImportantWord> pagadas de una empresa o muchas automáticamente, si
            antes debía tomarte 1 hora descargar las planillas de 3
            años ahora tomará 10 segundos.</p>
        <p>Nuevamente invoco a Previred levantar una <ImportantWord>api libre</ImportantWord>, encuentro un error
            prohibir el acceso a los datos de
            forma simple de acuerdo a siglo 21,
            es como estar 20 años despues que salió el teléfono y seguir enviando señales de humo o enviando una paloma
            mensajera siendo no a causa de una guerra que necesita transmitir datos de forma segura.</p>
        <br/>
        <p>Proyecto open source escrito en <ImportantWord>Go</ImportantWord>.</p>

        <Link href={"https://github.com/ignacio-magno/api-previred"} className={""} target={"_blank"} rel={"nofollow"}>
            <div
                className={"px-5 py-2 bg-green-700 text-white rounded-lg flex gap-x-5 justify-center pt-4 text-md mt-5"}>
                <CarbonLogoGithub fontSize={25}/> Ir Al código
            </div>
        </Link>

    </>
}

function Body() {
    return <>
        <p>Conecta a la página web de Previred y extrae datos de manera automatizada como las planillas pagadas en cada
            periodo.</p>
    </>
}