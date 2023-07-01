import Link from 'next/link'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <div>
            <div className="sm:block">
                <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                    <Nav/>
                </nav>
            </div>
        </div>
    )
}

function Nav() {
    const paths: { name: string, route: string }[] = [
        {
            name: 'Sobre mi',
            route: ""
        },
        {
            name: 'Apis',
            route: ""
        },
        {
            name: 'Librería/Bibliotecta',
            route: ""
        },
        {
            name: 'Contacto',
            route: "contacto"
        },
    ]

    const tabs = paths.map(path => {
        return {
            name: path.name,
            href: path.route,
            current: path.route
        }
    })

    return <>
        {tabs.map((tab, tabIdx) => (
            <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                    tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                    tabIdx === 0 ? 'rounded-l-lg' : '',
                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                    'group relative min-w-0  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                )}
                aria-current={tab.current ? 'page' : undefined}
            >
                <span>{tab.name}</span>
                <span
                    aria-hidden="true"
                    className={classNames(
                        tab.current ? 'bg-indigo-500' : 'bg-transparent',
                        'absolute inset-x-0 bottom-0 h-0.5'
                    )}
                />
            </Link>
        ))}
    </>
}