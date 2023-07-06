import Link from "next/link";
import {getBlogs, IBlogs} from "@/components/blogs/iBlogs";

export const metadata = {
    title: "Blog Ignacio LP.",
    description: "Blog personal de Ignacio, donde encontrarás titulares, tutoriales, curiosidades y más. referido al mundo de la programación y otras cosas que se me ocurran.",
}

export default async function Page() {
    const elements = await getBlogs()
    return <main>
        <h1 className={"md:text-2xl font-medium "}>Mi blog personal.</h1>
        <br/>
        <p>Pensamientos, ideas, tutoriales, curiosidades, todo lo escribiré aquí y que crea que pueda ayudar un poco
            a los demás, a veces escribiré solo por la gracia de poder documentar lo que se me ocurre en el momento.</p>
        <br/>
        <div className={"flex flex-col gap-y-4"}>
            {elements.map((item, index) => <Item {...item.Card} key={index}/>)}
        </div>
    </main>
}

function Item({friendlyName, tags, title, body}: IBlogs["Card"]) {
    return <Link href={"/blog/" + friendlyName}>
        <div className={"bg-zinc-700 px-6 py-4 shadow"}>
            <h3 className={"ml-4 text-xl font-medium"}>{title}</h3>
            <p className={"mb-5"}>
                {body}
            </p>
            <div className={"flex flex-wrap gap-x-3 mt-3 gap-y-2"}>
                {tags.map(tag => <Tag item={tag} key={tag}/>)}
            </div>
        </div>
    </Link>
}

function Tag({item}: { item: string }) {
    return <div className={"bg-cyan-600 px-3 rounded"}>{item}</div>
}