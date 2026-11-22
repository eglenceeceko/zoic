'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Sponsorlar() {
  // Önceki gibi doğrudan kategori isimleriyle 15 adet sponsor verisi
  const sponsors = [
    {
      name: 'Main Sponsor Name',
      category: 'Main Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'The main supporter and strategic partner of our event.',
      website: '#'
    },
    {
      name: 'Platinum Sponsor Name 1',
      category: 'Platinum Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Our platinum sponsor of education and development processes..',
      website: '#'
    },
    {
      name: 'Platinum Sponsor Name 1',
      category: 'Platinum Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Our partner for technology infrastructure and software solutions.',
      website: '#'
    },
    {
      name: 'Gold Sponsor Name 1',
      category: 'Gold Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'A gold sponsor who supports us with their valuable contributions.',
      website: '#'
    },
    {
      name: 'Gold Sponsor Name 2',
      category: 'Gold Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Academic content and publication support.',
      website: '#'
    },
    {
      name: 'Gold Sponsor Name 3',
      category: 'Gold Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Our sponsor, who provides resources and financial support.',
      website: '#'
    },
    {
      name: 'Media Sponsor Name 1',
      category: 'Media Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Our event communication and press partner.',
      website: '#'
    },
    {
      name: 'Media Sponsor Name 2',
      category: 'Media Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Exclusive interview and media sponsorship.',
      website: '#'
    },
    {
      name: 'Media Sponsor Name 3',
      category: 'Media Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Partner for live broadcasts and audio streaming.',
      website: '#'
    },
    {
      name: 'Silver Sponsor Name 1',
      category: 'Silver Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Event catering and hospitality sponsor.',
      website: '#'
    },
    {
      name: 'Silver Sponsor Name 2',
      category: 'Silver Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Supplier of design and artistic materials.',
      website: '#'
    },
    {
      name: 'Silver Sponsor Name 3',
      category: 'Silver Sponsor',
      logo: '/sponsors/placeholder.png',
      description: 'Sponsor for eco-friendly attendee bags.',
      website: '#'
    }
  ];

  return (
    <main style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: '#0c233c', color: '#fff', overflowX: 'hidden' }}>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '15px 50px', 
          backgroundColor: '#0c233c', 
          color: '#d4af37', 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000,
          borderBottom: '1px solid #d4af37' 
        }}
      >
        <div style={{ width: '40px', height: '40px' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', gap: '50px', margin: 0, padding: 0 }}>
          {[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Sponsors', href: '/sponsor' },
            { name: 'Committees', href: '/committee' },
            { name: 'Communication', href: '/communication' }
          ].map((item) => (
            <motion.li 
              key={item.name} 
              whileHover={{ scale: 1.1 }}
              style={{ cursor: 'pointer', fontWeight: '500' }}
            >
              <Link 
                href={item.href} 
                style={{ color: item.name === 'Sponsorlar' ? '#00bfff' : '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = item.name === 'Sponsorlar' ? '#00bfff' : '#fff')}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link href="/app" style={{ textDecoration: 'none' }}>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#d4af37', color: '#0c233c' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid #d4af37', 
              color: '#d4af37', 
              padding: '10px 30px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              borderRadius: '4px',
              transition: 'background-color 0.2s, color 0.2s'
            }}
          >
            App
          </motion.button>
        </Link>
      </motion.nav>

      {/* Hero / Üst Başlık */}
      <header style={{ padding: '80px 50px 60px 50px', textAlign: 'center', backgroundColor: '#0a1d32' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '3px', color: '#d4af37', marginBottom: '15px' }}>BİZE DESTEK OLANLAR</h3>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Sponsorlar</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            The esteemed institutions and organizations that contributed to bringing our event to life.
          </p>
        </motion.div>
      </header>

      {/* Sponsor Kartları Alanı (15 Adet) */}
      <section style={{ padding: '60px 80px 100px 80px', backgroundColor: '#0c233c', minHeight: '400px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                backgroundColor: 'rgba(18, 48, 80, 0.6)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '15px',
                overflow: 'hidden',
                textAlign: 'center',
                padding: '35px 25px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Logo Kutusu */}
                <div style={{ width: '100%', height: '140px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', marginBottom: '20px', backgroundColor: '#0a1d32', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '1.1rem', color: '#d4af37', fontWeight: 'bold', position: 'absolute', zIndex: 1, padding: '0 10px', textAlign: 'center' }}>
                    {sponsor.name}
                  </span>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15px', position: 'absolute', top: 0, left: 0, zIndex: 2, backgroundColor: '#0a1d32' }} 
                    onError={(e)=>{
                      e.currentTarget.style.display = 'none';
                    }} 
                  />
                </div>

                <span style={{ display: 'inline-block', fontSize: '0.85rem', color: '#00bfff', backgroundColor: 'rgba(0, 191, 255, 0.1)', padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', fontWeight: '500' }}>
                  {sponsor.category}
                </span>

                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '10px', fontWeight: 'bold' }}>{sponsor.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#b0b0b0', marginBottom: '25px', lineHeight: '1.5' }}>{sponsor.description}</p>
              </div>

              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-block', width: '100%', padding: '10px 0', borderRadius: '8px', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold', backgroundColor: 'transparent', transition: 'all 0.2s' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4af37';
                  e.currentTarget.style.color = '#0c233c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#d4af37';
                }}
              >
                Website
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#061826', color: '#fff', padding: '70px 80px 30px 80px', borderTop: '1px solid #1a365d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr 1.2fr', gap: '40px', maxWidth: '1200px', margin: '0 auto', marginBottom: '50px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '45px', height: '45px', border: '2px solid #d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', color: '#d4af37', fontWeight: 'bold', fontSize: '0.8rem' }}>
                N
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', lineHeight: '1.3', letterSpacing: '0.5px' }}>
                Zeytinburnu AIHL<br />Model Organization of Islamic Cooperation
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#b0b0b0', lineHeight: '1.6' }}>
An intellectual MUN platform centered on critical debate, diplomatic thinking, and academic excellence for young leaders.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Hızlı İletişim</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Committees', href: '/committee' },
            { name: 'Communication', href: '/communication' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#b0b0b0')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>İletişim</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#b0b0b0', fontSize: '0.95rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Zeytinburnu AIHL</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#b0b0b0', fontSize: '0.95rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span style={{ wordBreak: 'break-all' }}>zimockmoic26@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Social Media</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="#" 
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#b0b0b0')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#social-ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="social-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@zimoic.official</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: '#888888', fontSize: '0.85rem' }}>
          <div>© 2027 Zimoic – All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <span style={{ color: '#00bfff', fontWeight: '600', fontFamily: 'inherit' }}>Built by</span>
            <a href="https://instagram.com/ccenkyaman" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#footer-ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                <defs>
                  <linearGradient id="footer-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span style={{ color: '#ffcc00', fontWeight: '600', fontFamily: 'inherit' }}>ccenkyaman</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}