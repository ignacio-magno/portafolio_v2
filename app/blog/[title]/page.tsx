import {getBlogs} from "@/components/blogs/iBlogs";

export async function generateMetadata({params}: { params: { title: string } }) {
    const blog = await getBlogs().then(j => j.find(k => k.Card.friendlyName === params.title))
    return {
        title: blog?.Seo.title,
        description: blog?.Seo.description,
    }
}


export async function generateStaticParams() {
    const blogs = await getBlogs()
    return blogs.map(item => ({params: {title: item.Card.friendlyName}}))
}

export default async function Page({params: {title}}: { params: { title: string } }) {
    const blog = await getBlogs().then(j => j.find(k => k.Card.friendlyName === title))

    return <main>
        <div className={"flex flex-col gap-y-4"}>
            <h1>{blog?.Page.title}</h1>
            {blog?.Page.body}
        </div>
    </main>
}