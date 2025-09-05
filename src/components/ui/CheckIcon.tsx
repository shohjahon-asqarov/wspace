import Image from 'next/image'

import check_icon from '../../../public/icons/check.svg'
const CheckIcon = () => {
    return (
        <Image className='inline-block' src={check_icon} width={14} height={14} alt='check icon' priority/>
    )
}

export default CheckIcon