import {IProyectos} from "@/components/proyectosGenerator/IProyector";
import Image from "next/image"
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import ImportantWord from "@/components/importantWord";

export const SiiApi: IProyectos = {
    Card: {
        href: "/proyectos/api-servicios-impuestos-internos-sii",
        tags: ["Sii", "web scraping", "open source", "api", "console", "contabilidad"],
        title: "Api Servicios Impuestos Internos SII",
        type: "api",
        body: <Body/>,
        pathImage: "/sii.png",
        friendlyName: "api-servicios-impuestos-internos-sii",
    },
    Page: <Page/>,
    Seo: {
        title: "Api Servicios Impuestos Internos SII | Ignacio LP.",
        description: "Puedes obtener en segundos documentos que entrega el servicio de impuestos internos" +
            " de Chile, consultar tus ivas, tus f29, crear libro de compra y ventas a traves de este software open source.",
        author: "Ignacio L. Paycho",
    }
}

function Body() {
    return <>
        <p>Api Servicios Impuestos Internos (SII) que se conecta con la web oficial y permite obtener datos de los
            contribuyentes.</p>
        <p>Por ejemplo puedes consultar tus ivas, hacer libro compra y ventas, descargar f29, consultar el estado de tu
            renta, etc.</p>
    </>
}

function Page() {
    return <>
        <div>
            <div className={"flex gap-x-4 ml-3 items-center"}>
                <Image src={"/sii.png"} alt={"image"} width={50} height={50}/>
                <h1 className={"text-xl font-medium"}>Api Servicios impuestos internos</h1>
            </div>
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

            <Link href={"https://github.com/ignacio-magno/sii-api-cl"} className={""} target={"_blank"} rel={"nofollow"}>
                <div
                    className={"px-5 py-2 bg-green-700 text-white rounded-lg flex gap-x-5 justify-center pt-4 text-md mt-5"}>
                    <CarbonLogoGithub fontSize={25}/> Ir Al código
                </div>
            </Link>
        </div>
    </>
}