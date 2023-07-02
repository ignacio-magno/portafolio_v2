import {IProyectos} from "@/components/proyectosGenerator/IProyector";

export const F29Deserialize: IProyectos = {
    Card: {
        href: "/proyectos/extractor-datos-f29",
        tags: ["deserializador", "f29", "api", "contabilidad", "sii"],
        title: "Extractor de datos de F29.",
        pathImage: "/f29.png",
        body: <Body/>,
        type: "Console",
        friendlyName: "extractor-datos-f29"
    },

}

function Body() {
    return <p>Lee los archivos F29 y retorna una clase con los datos obtenidos con fácil acceso a el usuario.</p>
}


