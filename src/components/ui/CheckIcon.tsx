import Image from 'next/image'
import check_icon from '../../../public/icons/check.svg'

interface CheckIconProps {
  isWhite?: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({ isWhite = false }) => {
    return (
        <Image 
          className={`inline-block ${isWhite ? 'filter brightness-0 invert' : ''}`} 
          src={check_icon} 
          width={14} 
          height={14} 
          alt='check icon' 
          priority
        />
    )
}

export default CheckIcon