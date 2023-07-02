import {IProyectos} from "@/components/proyectosGenerator/IProyector";

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
}

function Body() {
    return <>
        <p>Conecta a la página web de Previred y extrae datos de manera automatizada como las planillas pagadas en cada
            periodo.</p>
    </>
}