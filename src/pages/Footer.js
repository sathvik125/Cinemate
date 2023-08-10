import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">Cinemate™</Link>. All Rights Reserved.</span>
    </div>
  )
}
