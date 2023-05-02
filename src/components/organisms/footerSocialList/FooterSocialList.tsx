import {
  mdiFacebook,
  mdiInstagram,
  mdiTwitter,
  mdiWhatsapp,
  mdiYoutube,
} from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export const FooterSocialList: React.FC = () => {
  return (
    <div className="flex gap-6 items-center flex-wrap justify-center">
      <div className="manrope text-xs font-semibold text-gray-500">
        Stay updated with us
      </div>
      <div className="flex gap-3">
        <div className="w-8 h-8 text-gray-600 hover:text-white flex items-center justify-center rounded-full hover:bg-blue-700">
          <Icon path={mdiFacebook} size={'24px'} />
        </div>
        <div className="w-8 h-8 text-gray-600 hover:text-white flex items-center justify-center rounded-full hover:bg-sky-600">
          <Icon path={mdiTwitter} size={'24px'} />
        </div>
        <div className="w-8 h-8 text-gray-600 hover:text-white flex items-center justify-center rounded-full hover:bg-red-700">
          <Icon path={mdiYoutube} size={'24px'} />
        </div>
        <div className="w-8 h-8 text-gray-600 hover:text-white flex items-center justify-center rounded-full hover:bg-gray-600">
          <Icon path={mdiInstagram} size={'24px'} />
        </div>
        <div className="w-8 h-8 text-gray-600 hover:text-white flex items-center justify-center rounded-full hover:bg-teal-700">
          <Icon path={mdiWhatsapp} size={'24px'} />
        </div>
      </div>
    </div>
  )
}
