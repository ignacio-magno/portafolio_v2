import {IProyectos} from "@/components/proyectosGenerator/IProyector";

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
}

function Body() {
    return <>
        <p>Api Servicios Impuestos Internos (SII) que se conecta con la web oficial y permite obtener datos de los
            contribuyentes.</p>
        <p>Por ejemplo puedes consultar tus ivas, hacer libro compra y ventas, descargar f29, consultar el estado de tu
            renta, etc.</p>
    </>
}

