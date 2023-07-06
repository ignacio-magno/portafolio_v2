import './globals.css'
import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
        <div className="fixed inset-0 flex justify-center sm:px-3 bg-zinc-900">
            <div className="flex w-full md:max-w-[70rem]  lg:px-8">
                <div className="w-full ring-1 ring-zinc-100 bg-zinc-800 ring-zinc-300/20"/>
            </div>
        </div>

        <div
            className={"font-roboto-mono font-light max-w-[90rem] mx-auto px-4 md:px-9 w-full lg:px-20 flex flex-col h-screen text-white text-base"}>
            <div className={"flex-1 md:w-[50rem] m-auto text-xl md:text-base"}>
                <div className={"relative mt-16 mb-16"}>
                    <div className={"w-full flex justify-between items-center pb-16"}>
                        <div></div>
                        <div className={"flex gap-x-5 "}>
                            <Link href={"/"} rel={"canonical"}>Sobre mi</Link>
                            <Link href={"/blog"}>Blog</Link>
                            <Link href={"/proyectos"}>Proyectos</Link>
                            {/*
                            <Link href={""}>Música</Link>
                            */}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
        </html>
    )
}
