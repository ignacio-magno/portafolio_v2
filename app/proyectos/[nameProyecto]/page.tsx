import {getProyectos} from "@/components/proyectosGenerator/IProyector";

export async function generateMetadata({params}: { params: { nameProyecto: string } }) {
    const blog = await getProyectos().then(j => j.find(k => k.Card.friendlyName === params.nameProyecto))
    return {
        title: blog?.Seo?.title,
        description: blog?.Seo?.description,
    }
}

export async function generateStaticParams() {
    const blogs = await getProyectos()
    return blogs.map(item => ({nameProyecto: item.Card.friendlyName}))
}

export default async function Page({params: {nameProyecto}}: { params: { nameProyecto: string } }) {
    const proyecto = await getProyectos().then(j => j.find(k => k.Card.friendlyName === nameProyecto))
    return <main>
        <div className={"flex flex-col gap-y-4"}>
            {proyecto?.Page}
        </div>
    </main>
}