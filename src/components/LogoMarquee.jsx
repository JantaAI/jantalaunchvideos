import './LogoMarquee.css'

function LogoMarquee() {
  const logos = [
    { name: 'Freenet', src: '/Freenet.png', alt: 'Freenet' },
    { name: 'Waterdrop', src: '/Waterdrop.png', alt: 'Waterdrop' },
    { name: 'Trivago', src: '/Trivago.png', alt: 'Trivago' },
    { name: 'MrBeast Burger', src: '/Mr Beast Burger.png', alt: 'MrBeast Burger' },
    { name: 'Cluely', src: '/Cluely.png', alt: 'Cluely' },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="logo-marquee-container">
      <h2 className="logo-marquee-headline">Who we worked with:</h2>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="logo-item">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee

