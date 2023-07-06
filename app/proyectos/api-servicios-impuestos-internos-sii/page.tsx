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
                Este proyecto viene a solucionar la problemática del servicios impuestos internos que no ha implementado
                una <ImportantWord>Api pública</ImportantWord> para que los Chilenos puedan acceder facilmente a sus
                datos
                tributarios.
            </p>
            <p>
                Una persona debe ingresar a la web, navegar por la web, descargar el documento, abrirlo, y como a veces
                sucede la web
                está caida o demora en responder, ¿no será que estamos atrasado en lo básico que es rapidez de vender y
                comprar?.
            </p>
            <p>
                Dicho esto esta web hace eso, una forma fácil de automatizar tareas repetitivas por medio de un software
                que facilita el acceso a los clientes u usuario finales.
                Si antes descargar los documentos de impuestos internos te tomaba 5 minutos, con este software tomaría 4
                segundos.
            </p>

            <br/>
            <p>Este software está escrito en <ImportantWord>Go</ImportantWord>, hace solicitudes por medio de
                la <ImportantWord>librería http</ImportantWord> nativa, está disponible
                para
                distribuir en la nube, como docker y correr en modo local con go run.</p>
            <p>Proyecto <ImportantWord>open source</ImportantWord>, bajo licencia MIT. Aún en desarrollo con las
                siguientes cualidades.</p>
            <br/>
            <ul className={"list-disc list-inside"}>
                <li>Consultar ivas</li>
                <li>Descargar f29</li>
                <li>Consultar estado de renta</li>
                <li>Hacer libro de compra y ventas</li>
                <li>Ver estado de F29</li>
            </ul>

            <Link href={"https://github.com/ignacio-magno/sii-api-cl"} className={""} target={"_blank"}
                  rel={"nofollow"}>
                <div
                    className={"px-5 py-2 bg-green-700 text-white rounded-lg flex gap-x-5 justify-center pt-4 text-md mt-8 md:mt-5"}>
                    <CarbonLogoGithub fontSize={25}/> Ir Al código
                </div>
            </Link>
        </div>
    </>
}