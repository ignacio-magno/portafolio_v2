import {IProyectos} from "@/components/proyectosGenerator/IProyector";

export const brashProyecto: IProyectos = {
    Card: {
        href: "/proyectos/brash",
        tags: ["brash", "api", "contabilidad", "empresas"],
        title: "Brash, Software para administrar empleados y con herramientas de contabilidad.",
        pathImage: "/brash.png",
        body: <Body/>,
        type: "Software web",
        friendlyName: "brash"
    }
}

function Body() {
    return <p>
        Software para empresas y contabilidad.
        <br/>
        Permite además la integración con el SII y Previred para obtención de datos.
    </p>
}