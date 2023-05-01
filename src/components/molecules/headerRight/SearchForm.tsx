import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useCallback, useRef } from 'react'

export const SearchForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleFocus = useCallback(() => {
    containerRef.current?.classList.add('focus')
  }, [])

  const handleBlur = useCallback(() => {
    containerRef.current?.classList.remove('focus')
  }, [])

  return (
    <div
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={containerRef}
      className="hidden sm:flex search-form border bg-gray-50 border-gray-50 items-center rounded-full pr-3"
    >
      <input className="bg-transparent text-gray-600 px-5 w-full py-2.5 manrope text-xs font-semibold outline-none" type="search" name="search" placeholder="Search" />
      <div className="flex items-center gap-2">
        {/* <Icon size={'14px'} className="text-red-300" path={mdiCloseCircle} /> */}
        <Icon size={'24px'} className="text-gray-400" path={mdiMagnify} />
      </div>
    </div>
  )
}
