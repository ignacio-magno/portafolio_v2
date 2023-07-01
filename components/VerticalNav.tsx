import Link from "next/link";
import {Routes} from "@/routes/Routes";
import {RoutesExtensions} from "@/routes/RoutesExtensions";
import Image from "next/image";
import ApiImage from "@/public/images/api.png";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export type TVerticalNav = {
    title: string
    current: boolean
    elements: {
        name: string
        href: Routes
        current: boolean
        elements?: {
            name: string
            href: string
            current: boolean
        }[]
    }[]
}

type TReceive = {
    navigation: TVerticalNav[]
}

export default function VerticalNav({navigation}: TReceive) {
    return <>
        <div className={"hidden md:block fixed "}>
            <Image src={ApiImage} alt={"api image"} height={50}/>
            <code>https://api.ignaciolp.cl</code>

            <nav className="space-y-1" aria-label="Sidebar">
                {navigation.map((item, index) =>
                    <div key={item.title} className={`z-[${index}]`}>
                        <Element {...item}/>
                    </div>)
                }
            </nav>
        </div>
    </>
}

function Element(item: TVerticalNav) {


    return <>
        <div
            className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 ',
                'flex items-center px-3 py-2 rounded-md my-2 uppercase ' +
                'w-full'
            )}
            aria-current={item.current ? 'page' : undefined}
        >
            <span className="truncate text-lg font-bold">{item.title}</span>
        </div>


        {item.elements.map(j => {
            const hidden = !(new RoutesExtensions().isCurrent(j.href))

            return <div className={"grid grid-cols-1 gap-y-3 px-3 my-3"} key={j.href}>
                <Link href={j.href} key={j.href}>
                    <div className={classNames()}>
                        <h1 className={classNames()}
                            key={j.name}>
                            {j.name}
                        </h1>
                    </div>
                </Link>

                {
                    !hidden ? j.elements?.map((k, index) => {
                            const isLast = j.elements?.length === index + 1
                            console.log(k.href);

                            return <>
                                <div
                                    className={classNames(hidden ? "h-0" : "", "transition-[height] mx-8", isLast ? " " : "")}>
                                    <Link href={k.href} key={k.href}>
                                        <h1 className={classNames(hidden ? "scale-0" : "scale-100", "origin-top duration-200", "text-sm text-gray-500 font-thin underline underline-offset-2")}
                                            key={k.name}>
                                            {k.name}
                                        </h1>
                                    </Link>
                                </div>
                            </>
                        })
                        : <></>
                }
            </div>
        })}
    </>
}