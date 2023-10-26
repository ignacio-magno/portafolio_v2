import Image from "next/image";
import Shared from "@/components/Shared";
import ImportantWord from "@/components/importantWord";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Brash, Software para empresas y contabilidad. | Ignacio LP",
    description: "Software para empresas y contabilidad. Permite además la integración con el SII y Previred para obtención de datos.",
}

export default function Page() {
    const urlPage = process.env.HOST + "/proyectos/brash";

    return <>
        <Image src={"/brash-complete.png"} alt={"image"} width={1080} height={1350} hidden/>
        <div className={"flex flex-col md:flex-row gap-x-4 ml-3 items-center"}>
            <div className={"relative h-32 w-60  md:h-20 md:w-50 mb-5 md:mb-0"}>
                <Image src={"/brash-complete.png"} alt={"logo previred"} fill/>
            </div>
            <h1 className={"text-2xl text-center md:text-xl font-medium"}>Brash. Software para empresas y
                contabilidad.</h1>
        </div>
        <br/>
        <Shared href={urlPage}/>
        <br/>
        <div className={"flex flex-col gap-y-6 md:gap-y-4"}>
            <p>
                Maneje contrato, empleados, liquidaciones en un software fácil y simple de usar, con herramientas de
                contabilidad gratuitas para su empresa.
            </p>
            <p>
                El proyecto está desarrollado con <ImportantWord>C#</ImportantWord> para backend, y typescript para el
                frontend con <ImportantWord>Angular</ImportantWord>.
                <br/>
                El backend aunque el corazón es un monolito, se alimenta a su vez de microservicios orquestados en
                docker.
                <br/>
                La parte más difícil del proyecto fue el escribir todo el código con una arquitectura limpia y una base
                de tests sólida.
                Gracias a esto que es lo que más valoro de este proyecto es que actualmente puedo seguir agregando
                nuevas funcionalidad, sin sufrir en el intento.
            </p>

            <a className={"text-cyan-300 underline"} href={"https://www.brash.cl"}>Brash.cl</a>

        </div>

    </>
}