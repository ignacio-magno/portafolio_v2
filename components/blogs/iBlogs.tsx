import {TestBlog} from "@/components/blogs/tests"

export interface IBlogs {
    Card: {
        friendlyName: string
        body: JSX.Element | JSX.Element[]
        title: string
        tags: string[]
    },
    Page: {
        title: string
        body: JSX.Element | JSX.Element[]
    },
    Seo:{
        title: string
        description: string
    }
}

export const getBlogs = async (): Promise<IBlogs[]> => {
    return [TestBlog];
}

