import {LupaPoliticaProyecto} from "@/components/proyectosGenerator/lupaPolitica";
import {deserializadorPlanillaPrevired} from "@/components/proyectosGenerator/DeserializadorPlanillaPrevired";
import {SiiApi} from "@/components/proyectosGenerator/SiiApi";
import {PreviredApi} from "@/components/proyectosGenerator/PreviredApi";
import {F29Deserialize} from "@/components/proyectosGenerator/F29Deserialize";

export interface IProyectos {
    Card: {
        href: string
        tags: string[]
        title: string
        pathImage: string
        body: JSX.Element | JSX.Element[]
        type?: string
        friendlyName?: string
    },
    Page?: JSX.Element | JSX.Element[],
    Seo?: {
        title: string
        description: string,
        [key: string]: string
    }
}

export const getProyectos = async (): Promise<IProyectos[]> => {
    return [LupaPoliticaProyecto, deserializadorPlanillaPrevired, SiiApi, PreviredApi, F29Deserialize];
}