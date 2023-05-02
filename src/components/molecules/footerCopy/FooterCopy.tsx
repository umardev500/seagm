import { mdiHeart } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export const FooterCopy: React.FC = () => {
  return (
    <div className="container px-4 lg:px-0 flex items-center gap-4 footer-copy m-auto mt-6">
      <h3 className="text-xs flex items-center gap-2 text-center text-gray-400 manrope font-semibold">
        © 2023 Built with React by Umar Made with{' '}
        <Icon path={mdiHeart} className="text-red-400" size={'16px'} /> in
        Indonesia
      </h3>
    </div>
  )
}
