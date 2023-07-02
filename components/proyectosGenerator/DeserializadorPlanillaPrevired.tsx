import {IProyectos} from "@/components/proyectosGenerator/IProyector";

export const deserializadorPlanillaPrevired: IProyectos = {
    Card: {
        href: "/proyectos/extractor-datos-cotizaciones-pdf-previred",
        tags: ["deserializador", "previred", "cotizaciones", "api", "contabilidad"],
        title: "Extractor de datos de cotizaciones Previred.",
        pathImage: "/previred.png",
        body: <Body/>,
        type: "Api",
        friendlyName: "extractor-datos-cotizaciones-pdf-previred"
    },

}

function Body() {
    return <p>Deserializa planillas de previred en un formato json, con datos relevantes como trabajadores,
        movimientos de trabajadores, sueldos, pagos afp, fonasa, etc.</p>
}