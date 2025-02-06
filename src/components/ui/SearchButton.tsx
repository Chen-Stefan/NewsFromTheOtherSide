'use client'
// This is a Client compnent
import { Search } from 'lucide-react'

const SearchButton = () => {
    return (
        <button
            aria-label="Search"
            className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
            onClick={() => {/* Implement search functionality */ }}
        >
            <Search className="h-6 w-6" />
        </button>
    )
}

export default SearchButton
