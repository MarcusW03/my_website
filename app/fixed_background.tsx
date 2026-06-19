import Image from 'next/image'
import background from '../public/background.jpg'

export default function FixedBackground() {
    return (
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <Image
          src={background}
          alt=""
          fill={true}
          quality={75}
          sizes="100vw"
        />
      </div>
    );
  }