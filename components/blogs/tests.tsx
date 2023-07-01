import {IBlogs} from "@/components/blogs/iBlogs";

export const TestBlog: IBlogs = {
    Card: {
        title: "¿Qué es un sistema operativo?",
        body: <p>Un sistema operativo es un software que actúa de interfaz entre los dispositivos físicos y el usuario.
            Es
            decir, es el software que se encarga de gestionar los recursos de un ordenador y proveer de una interfaz
            para
            que el usuario pueda interactuar con el ordenador.</p>,
        tags: ["Sistemas operativos", "Informática"],
        friendlyName: "test"
    },
    Page: {
        body: <Body/>,
        title: "Test Blog"
    },
    Seo: {
        title: "Test Blog",
        description: "Test Blog"
    }
}

function Body() {
    return <>
        <h2>¿Qué es un sistema operativo?</h2>
        <p>Un sistema operativo es un software que actúa de interfaz entre los dispositivos físicos y el usuario. Es
            decir, es el software que se encarga de gestionar los recursos de un ordenador y proveer de una interfaz
            para que el usuario pueda interactuar con el ordenador.</p>
        <h2>¿Qué es un sistema operativo?</h2>
        <p>Un sistema operativo es un software que actúa de interfaz entre los dispositivos físicos y el usuario. Es
            decir, es el software que se encarga de gestionar los recursos de un ordenador y proveer de una interfaz
            para que el usuario pueda interactuar con el ordenador.</p>
        <h2>¿Qué es un sistema operativo?</h2>
        <p>Un sistema operativo es un software que actúa de interfaz entre los dispositivos físicos y el usuario. Es
            decir, es el software que se encarga de gestionar los recursos de un ordenador y proveer de una interfaz
            para que el usuario pueda interactuar con el ordenador.</p>
    </>
}