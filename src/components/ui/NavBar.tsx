import Link from 'next/link'
import { Globe } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const siteMetadata = {
    stickyNav: true,
    headerTitle: 'NewsFromTheOtherSide',
}

const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/trending', title: 'Trending' },
    { href: '/sources', title: 'Sources' },
    { href: '/spectrum-guide', title: 'Spectrum Guide' },
    { href: '/about', title: 'About' },
]

const NavBar = () => {
    const headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
        + (siteMetadata.stickyNav ? ' sticky top-0 z-50' : '')

    return (
        <header className={headerClass}>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                    <div className="mr-3">
                        <Globe className="h-8 w-8 text-primary-500" />
                    </div>
                    <div className="hidden h-6 text-2xl font-semibold sm:block">
                        {siteMetadata.headerTitle}
                    </div>
                </div>
            </Link>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
                    {headerNavLinks
                        .filter((link) => link.href !== '/')
                        .map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                            >
                                {link.title}
                            </Link>
                        ))}
                </div>
                <SearchButton />
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default NavBar