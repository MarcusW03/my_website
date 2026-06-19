import Image from 'next/image'
import background from '../public/background.jpg'

export default function FixedBackground() {
    return (
      <div className="fixed inset-0 overflow-hidden z-0">
        <Image
          src={background}
          alt="Background Image"
          fill={true}
          quality={75}
        />
      </div>
    );
  }