import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'

export const HeaderRightMini: React.FC = () => {
  return (
    <div className="flex items-center gap-6 sm:hidden">
      <Icon
        path={mdiMagnify}
        className="text-gray-600 cursor-pointer"
        size={'24px'}
      />
      <img
        src="avatars/avatar.png"
        className="w-7 h-7 cursor-pointer"
        alt="avatar"
      />
    </div>
  )
}
