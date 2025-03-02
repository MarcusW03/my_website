import Image from 'next/image'
import background from '../public/background.jpg'

export default function FixedBackground() {
    return (
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0 // Ensure the background stays behind other content
      }}>
        <Image
          src={background}
          alt="Background Image"
          fill={true}
          quality={100}
        />
      </div>
    );
  }