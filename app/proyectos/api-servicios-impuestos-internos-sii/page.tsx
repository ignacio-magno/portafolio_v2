import Image from "next/image";
import ImportantWord from "@/components/importantWord";
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import {Metadata} from "next";
import {headers} from "next/headers";
import Shared from "@/components/Shared";

const title = "Api Servicios Impuestos Internos SII, Resumen Iva, Libro Compra ventas, Descarga F29, Estado de Renta y más" +
    " todo en un software rápido y útil | Ignacio LP."

const description = "A traves de una api consulta tus consulta tus ivas, tus f29, crear libro de compra y ventas, verifica el pago de F29, todo" +
    " a traves de este software open source."

// TODO: 1350 y 1080 parece que deben ser las imagenes.
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
    const urlPage = process.env.HOST + "/proyectos/api-servicios-impuestos-internos-sii";
    return <>
        <div>
            <div className={"flex flex-col md:flex-row gap-x-4 ml-3 items-center"}>
                <div className={"relative h-32 w-32 md:h-20 md:w-20 mb-5 md:mb-0"}>
                    <Image src={"/sii.png"} alt={"image"} fill/>
                </div>
                <h1 className={"text-2xl text-center md:text-xl font-medium"}>Api Servicios impuestos internos</h1>
            </div>
            <br/>
            <Shared href={urlPage}/>
            <br/>
            <p>
                Este proyecto permite obtener datos desde la web del sii de forma automática.
                <br/>
                He implementado un proyecto donde esta api es un agregado, puedes revisar entre mi proyectos el
                proyecto <i>Brash</i> y acceder a herramientas que aprovechan esta cualidad gratis y ya implementadas.
            </p>
        </div>
    </>
}