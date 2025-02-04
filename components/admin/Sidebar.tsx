import Image from 'next/image'
import React from 'react'
import { adminSideBarLinks } from '../constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  return (
    <div className='admin-sidebar'>
        <div>
            <div className='logo'>
                <Image src='/icons/admin/logo.svg' alt='logo' height={37} width={37} />
                <h1>Bookwise</h1>
            </div>
            <div className='mt-10 flex flex-col gap-5'>
                {adminSideBarLinks.map((link) => {
                    const isSelected = false;

                    return (
                        <Link href={link.route} key={link.route} >
                            <div className={cn('link', isSelected && "bg-primary-admin shadow-sm")} >
                                <div></div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Sidebar