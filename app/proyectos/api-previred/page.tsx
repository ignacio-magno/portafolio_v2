import Image from "next/image";
import ImportantWord from "@/components/importantWord";
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import {Metadata} from "next";
import Shared from "@/components/Shared";

// todo:linkedin not working
export const metadata: Metadata = {
    title: "Api Previred, comunicate con Previred de forma rápida y automatizada | Ignacio LP.",
    description: "La conexión a previred ya no será engorrosa, ahora solo un click y automáticamente podrás " +
        "descargar planillas pagadas, consultar el estado de las cotizaciones y mucho más proximamente.",
    twitter: {
        title: "Api Previred, comunicate con Previred de forma rápida y automatizada | Ignacio LP.",
        description: "La conexión a previred ya no será engorrosa, ahora solo un click y automáticamente podrás " +
            "descargar planillas pagadas, consultar el estado de las cotizaciones y mucho más proximamente.",
        card: "summary_large_image",
        images: "/previred-api-shared.png"
    }
}

export default function Page() {
    const urlPage = process.env.HOST + "/proyectos/api-previred";
    return <>
        <Image src={"/linkedin-card-previred.png"} alt={"image"} hidden width={1080} height={1350}/>

        <div className={"flex flex-col md:flex-row gap-x-4 ml-3 items-center"}>
            <div className={"relative h-20 w-80 md:h-16 md:w-52 mb-5 md:mb-0"}>
                <Image src={"/previred-api-shared-png.png"} alt={"logo previred"} fill/>
            </div>
            <h1 className={"text-2xl text-center md:text-xl font-medium"}>Previred Api</h1>
        </div>
        <br/>

        <Shared href={urlPage}/>

        <br/>
        <p>Siempre es engorroso acceder a la web de previred y descargar planillas o asegurarse que estén pagadas,
            dicho esto levante este software que automatiza esta tarea,<ImportantWord>descarga las
                planillas</ImportantWord> pagadas
            de una empresa, si antes tomaba <ImportantWord>20 minutos</ImportantWord> en descargarlas ahora solo
            será en <ImportantWord>5 segundos.</ImportantWord> aproximado.
        </p>
        <br/>
        <p>Proyecto open source escrito en <ImportantWord>Go</ImportantWord>. Funciona a traves de peticiones https
            luego de iniciar sesión
            el cliente, con guardado de tokens de sesión.</p>

        <Link href={"https://github.com/ignacio-magno/api-previred"} className={""} target={"_blank"} rel={"nofollow"}>
            <div
                className={"px-5 py-2 bg-green-700 text-white rounded-lg flex gap-x-5 justify-center pt-4 text-md mt-8 md:mt-5"}>
                <CarbonLogoGithub fontSize={25}/> Ir Al código
            </div>
        </Link>
    </>
}
