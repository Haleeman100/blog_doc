import React, {useContext}from 'react'
import Link from 'next/link';

const Categories = [{ name: ' React', slug: 'react'}, 
                    { name: 'Web Development', slug: 'web-dev'} ]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
              <Link href='/'>
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        BLOG DOC
                    </span>
               </Link>
                <div className='hidden md:float-left md:contents'>

                    {Categories.map((cattegory) => (
                        <Link key={cattegory.slug} href={'/cattegory/${cattegory.slug}'}>
                        <span className='md:float-right mt2 align-middle text-white ml=4 font-semibold cursor-pointer'>
                            {cattegory.name}
                        </span>

                        </Link>
                    ))}
                </div>

            </div>

        </div>

    </div>
  );
}

export default Header