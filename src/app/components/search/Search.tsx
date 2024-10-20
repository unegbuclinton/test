import { SearchIcon } from '@/app/assets/icon/Search'
import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center pl-14 bg-white mt-5 relative max-w-[859px] h-14 lg:h-[78px] rounded-xl'>
      <SearchIcon />
      <input
        type='search'
        className='outline-none border-none w-full h-full bg-transparent ml-7 placeholder:text-text-color'
        placeholder='Search FAQs here'
      />
    </div>
  )
}

export default Search
