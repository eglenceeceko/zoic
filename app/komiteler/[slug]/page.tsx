'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Tüm komitelerin verileri ve Google Drive Rehber Linkleri
const committeeData: Record<string, {
  name: string;
  category: string;
  description: string;
  driveLink: string;
  pdfName: string;
  topics: { title: string; content: string; questions?: string[] }[];
}> = {
  'who': {
    name: 'World Health Organization',
    category: 'Academic Committee',
    description: 'The WHO committee serves as a collaborative global platform where delegates debate public health policies, address international medical crises, and formulate comprehensive strategies to ensure equitable healthcare access worldwide.',
    driveLink: 'https://drive.google.com/drive/folders/zimock',
    pdfName: 'WHO',
    topics: [] // Zamanla eklenecek
  },
  'unwomen': {
    name: 'UnWomen',
    category: 'Academic Committee',
    description: 'The UN Women committee empowers delegates to advocate for gender equality, protect womens rights globally, and formulate actionable policies against systemic discrimination and violence.',
    driveLink: 'https://drive.google.com/drive/folders/zimock',
    pdfName: 'UNWOMEN',
    topics: []
  },
  'unicef': {
    name: 'Unicef',
    category: 'Academic Committee',
    description: 'The UNICEF committee brings delegates together to protect childrens rights, expand access to quality education and healthcare, and create sustainable solutions for vulnerable youth across the globe.',
    driveLink: 'https://drive.google.com/drive/folders/zomick',
    pdfName: 'UNİCEF',
    topics: []
  },
  'sochum': {
    name: 'Sochum',
    category: 'Academic Committee',
    description: 'The SOCHUM committee provides a diplomatic forum where delegates address pressing social, humanitarian, and cultural issues, safeguard fundamental human rights, and promote global social justice.',
    driveLink: 'https://drive.google.com/drive/folders/zomick',
    pdfName: 'SOCHUM',
    topics: []
  }
};

export default function KomiteDetaySayfasi() {
  const params = useParams();
  const slug = params?.slug as string;
  const committee = committeeData[slug];

  if (!committee) {
    return (
      <main style={{ backgroundColor: '#0c233c', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Komite Bulunamadı</h1>
        <Link href="/committee" style={{ color: '#00bfff', textDecoration: 'underline' }}>Return to the committees page</Link>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: '#0c233c', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
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
                style={{ color: item.name === 'Committees' ? '#00bfff' : '#fff', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

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
            borderRadius: '4px'
          }}
        >
          Başvur
        </motion.button>
      </motion.nav>

      {/* Hero / Üst Başlık */}
      <header style={{ padding: '80px 50px 60px 50px', backgroundColor: '#0a1d32', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#d4af37', display: 'block', marginBottom: '10px' }}>Zimoic - Committees</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>{committee.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0b0b0', lineHeight: '1.6' }}>{committee.description}</p>
        </div>
      </header>

      {/* İçerik ve Konular (Zamanla Eklenecektir Alanı) */}
      <section style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', minHeight: '200px' }}>
        <h3 style={{ fontSize: '1rem', color: '#00bfff', letterSpacing: '2px', marginBottom: '10px' }}>Contents</h3>
        <h2 style={{ fontSize: '2rem', marginBottom: '35px', fontWeight: 'bold' }}>Committee Topics</h2>

        <div style={{ 
          backgroundColor: 'rgba(18, 48, 80, 0.4)', 
          border: '1px solid rgba(212, 175, 55, 0.2)', 
          borderRadius: '12px', 
          padding: '50px 30px', 
          textAlign: 'center' 
        }}>
          <p style={{ fontSize: '1.2rem', color: '#d4af37', fontWeight: '500', letterSpacing: '0.5px' }}>
            The topics have not yet been determined and will be added..
          </p>
        </div>
      </section>

      {/* Komite Rehberi Banner (Google Drive Yönlendirmeli) */}
      <section style={{ maxWidth: '1100px', margin: '60px auto 100px auto', padding: '0 20px' }}>
        <div style={{ 
          backgroundColor: '#0a1d32', 
          border: '1px solid rgba(212, 175, 55, 0.4)', 
          borderRadius: '15px', 
          padding: '40px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px', fontWeight: 'bold' }}>Committee Guide</h3>
            <p style={{ color: '#b0b0b0', fontSize: '0.95rem', letterSpacing: '0.5px' }}>Google Drive · {committee.name.toUpperCase()} · 2027</p>
          </div>

          <a
            href={committee.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#0c233c',
              border: '1px solid #d4af37',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4af37'; e.currentTarget.style.color = '#0c233c'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0c233c'; e.currentTarget.style.color = '#fff'; }}
          >
            <span style={{ fontSize: '1rem' }}>■</span> Open the Guide
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#061826', color: '#fff', padding: '70px 80px 30px 80px', borderTop: '1px solid #1a365d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr 1.2fr', gap: '40px', maxWidth: '1100px', margin: '0 auto', marginBottom: '50px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '45px', height: '45px', border: '2px solid #d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', color: '#d4af37', fontWeight: 'bold', fontSize: '0.8rem' }}>
                N
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', lineHeight: '1.3', letterSpacing: '0.5px' }}>
                Zeytinburnu AIHLc<br />Model Organization of Islamic Cooperation
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#b0b0b0', lineHeight: '1.6' }}>
An intellectual MUN platform centered on critical debate, diplomatic thinking, and academic excellence for young leaders
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Quick Communication</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Sponsors', href: '/sponsor' },
            { name: 'Committees', href: '/committee' },
            { name: 'Communication', href: '/communication' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Communication</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <span style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>Zeytinburnu AIHL.</span>
              <span style={{ color: '#b0b0b0', fontSize: '0.95rem', wordBreak: 'break-all' }}>zimockmoic26@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Social Media</h4>
            <span style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>@zimoic.official</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: '#888888', fontSize: '0.85rem' }}>
          <div>© 2027 Zimoic – All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <span style={{ color: '#00bfff', fontWeight: '600' }}>Built by</span>
            <a href="https://instagram.com/ccenkyaman" target="_blank" rel="noopener noreferrer" style={{ color: '#ffcc00', fontWeight: '600', textDecoration: 'none' }}>ccenkyaman</a>
          </div>
        </div>
      </footer>
    </main>
  );
}