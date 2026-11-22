'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hakkimizda() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navItems = [
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Sponsors', href: '/sponsor' },
            { name: 'Committees', href: '/committee' },
            { name: 'Communication', href: '/communication' }
  ];

  const faqData = [
    {
      question: 'Who can join Zimoic?',
      answer:
        'Zimoic is open to the participation of all visionary students at the high school level or equivalent..',
    },
    {
      question: 'Is there a participation fee for the event, and will a certificate be provided?',
      answer:
        'Participation terms and details can be found in the application form. At the end of the event, all participants will be presented with an official certificate of participation.',
    },
    {
      question: 'Is there a dress code?',
      answer:
        'Smart-casual attire is recommended for the duration of the event.',
    },
    {
      question: 'When will the application results be announced?',
      answer:
        'Once applications close, the evaluation process is completed, and the results are announced via our social media accounts and by email.',
    },
  ];

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#0c233c',
        color: '#fff',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      {/* NAVBAR */}
{/* Navbar */}
<motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#0c233c',
    color: '#d4af37',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #d4af37',
  }}
>
  {/* Logo - SOL */}
  <Link
    href="/"
    style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifySelf: 'start',
    }}
  >
    <div
      style={{
        width: '42px',
        height: '42px',
        border: '2px solid #d4af37',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#d4af37',
        fontWeight: 'bold',
        fontSize: '0.9rem',
      }}
    >
      N
    </div>

    <span
      style={{
        marginLeft: '10px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        lineHeight: '1.2',
      }}
    >
                Zeytinburnu AIHL<br />Model Organization of Islamic Cooperation
    </span>
  </Link>

  {/* Masaüstü Menü - TAM ORTA */}
  <div
    className="desktop-nav"
    style={{
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
    }}
  >
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        style={{
          color:
            item.name === 'About Us'
              ? '#00bfff'
              : '#fff',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: '500',
          whiteSpace: 'nowrap',
        }}
      >
        {item.name}
      </Link>
    ))}
  </div>

  {/* SAĞ TARAF */}
  <div
    style={{
      justifySelf: 'end',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    }}
  >
    {/* Başvur - Desktop */}
    {!isMobile && (
      <Link href="/app" style={{ textDecoration: 'none' }}>
        <button
          style={{
            backgroundColor: '#d4af37',
            border: 'none',
            color: '#0c233c',
            padding: '10px 25px',
            fontWeight: 'bold',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          App
        </button>
      </Link>
    )}

    {/* Hamburger - Mobile */}
    {isMobile && (
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '28px',
          height: '21px',
          cursor: 'pointer',
          zIndex: 1100,
        }}
      >
        <span
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#d4af37',
            borderRadius: '2px',
            transition: '0.3s',
            transform: menuOpen
              ? 'rotate(45deg) translate(5px, 5px)'
              : 'none',
          }}
        />

        <span
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#d4af37',
            borderRadius: '2px',
            opacity: menuOpen ? 0 : 1,
            transition: '0.3s',
          }}
        />

        <span
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#d4af37',
            borderRadius: '2px',
            transition: '0.3s',
            transform: menuOpen
              ? 'rotate(-45deg) translate(5px, -5px)'
              : 'none',
          }}
        />
      </div>
    )}
  </div>
</motion.nav>

      {/* MOBİL MENÜ */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              width: '100%',
              backgroundColor: '#0c233c',
              borderBottom: '1px solid #d4af37',
              padding: '20px 0',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
              }}
            >
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => setMenuOpen(false)}
                >
                  <Link
                    href={item.href}
                    style={{
                      color:
                        item.name === 'About Us'
                          ? '#00bfff'
                          : '#fff',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li
                style={{ marginTop: '10px' }}
                onClick={() => setMenuOpen(false)}
              >
                <Link
                  href="/app"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <button
                    style={{
                      backgroundColor: '#d4af37',
                      border: 'none',
                      color: '#0c233c',
                      padding: '10px 30px',
                      fontWeight: 'bold',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    App
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <header
        style={{
          padding: isMobile
            ? '55px 20px 45px'
            : '80px 50px 60px',
          textAlign: 'center',
          backgroundColor: '#0a1d32',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            Who Are We?
          </h3>

          <h1
            style={{
              fontSize: isMobile ? '2.4rem' : '3.5rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '20px',
            }}
          >
            About Us
          </h1>

          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: '#b0b0b0',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Driven by ideas, defying convention, and shaping the future through collective intellect at ZIMOIC.
          </p>
        </motion.div>
      </header>

      {/* 1. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 20px' : '100px',
          backgroundColor: '#f4f7f9',
          color: '#0c233c',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '0.9rem',
            letterSpacing: '3px',
            color: '#0c233c',
            marginBottom: '20px',
          }}
        >
          Our Origins
        </h3>

        <h2
          style={{
            fontSize: isMobile ? '2rem' : '3.2rem',
            marginBottom: isMobile ? '25px' : '40px',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#0c233c',
          }}
        >
          &quot;The story behind our name&quot;
        </h2>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            fontSize: isMobile ? '1rem' : '1.15rem',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'justify',
          }}
        >
          <p style={{ marginBottom: '20px' }}>
            The name ZIMOCK was created by combining our school’s name, Zeytinburnu Imam Hatip, with the concept of Model Conference, which forms the foundation of our event.
          </p>
        </div>
      </motion.section>

      {/* 2. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 20px' : '100px',
          backgroundColor: '#0c233c',
          color: '#fff',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            Our Difference
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Why Zimoic
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {[
            {
              title: 'A Groundbreaking Conference Model',
              desc: 'Unlike ordinary and monotonous academic activities, we prioritize active participation, critical discussion, and original production.',
            },
            {
              title: 'Academic Competence',
              desc: 'Through content prepared by a team of experts in their respective fields, we offer participants the opportunity to develop solutions for real-world problems.',
            },
            {
              title: 'Strong Social Network',
              desc: 'You come together with exceptional young people who share similar visions and dreams, forging lifelong friendships and professional connections.',
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: isMobile ? '30px 25px' : '35px 30px',
                backgroundColor: 'rgba(18, 48, 80, 0.6)',
                border: '1px solid #d4af37',
                borderRadius: '15px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  color: '#d4af37',
                  marginBottom: '15px',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  color: '#e0e0e0',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 20px' : '100px',
          backgroundColor: '#fff',
          color: '#0c233c',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            Our Principles
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#0c233c',
            }}
          >
            Vision and Mission
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            gap: isMobile ? '25px' : '80px',
            maxWidth: '1100px',
            margin: '0 auto',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          {[
            {
              title: 'Our Vision',
              text: 'As Zeytinburnu İmam Hatip High School, our vision is to foster an educational environment that supports students academic, social, and personal growth, preparing them to become conscious, responsible, and well-equipped individuals for the future. Through our MockMOIC event, we aim to enhance students awareness of international relations, diplomacy, and global issues while cultivating critical thinking, problem-solving, effective communication, and teamwork skills. By bringing education and diplomacy together, we strive to raise young people who uphold their national and spiritual values alongside universal principles such as justice, peace, human rights, and mutual respect, enabling them to engage constructively with diverse cultures and global developments.',
            },
            {
              title: 'Our Mission',
              text: 'In line with our mission, we encourage students to research global political, social, economic, humanitarian, and environmental issues, analyze state policies, and develop realistic, diplomatic solutions. Through MockMOIC, we aim to cultivate essential skills such as research, public speaking, critical thinking, negotiation, leadership, and teamwork, while supporting foreign language proficiency—particularly in English—so students can express themselves confidently in international settings. We prioritize an inclusive environment built on mutual respect, equal representation, and constructive dialogue, encouraging participants to understand opposing perspectives and reach common ground. Grounded in our İmam Hatip High School identity, we combine core values like justice, honesty, tolerance, and respect for human dignity with universal principles of peace and global solidarity. Ultimately, by bringing together students from diverse schools, we seek to foster academic and cultural exchange, strengthen educational collaboration, and create a shared learning community where young minds can grow together.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                flex: 1,
                minWidth: isMobile ? '0' : '300px',
                width: isMobile ? '100%' : undefined,
                boxSizing: 'border-box',
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                padding: isMobile ? '30px 25px' : '45px',
                borderRadius: '15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  marginBottom: '20px',
                  color: '#d4af37',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: '1.8',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  color: '#333',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. BÖLÜM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 15px' : '100px',
          backgroundColor: '#0a1d32',
          color: '#fff',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#d4af37',
              marginBottom: '15px',
            }}
          >
            Period
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Event Flow
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '25px' : '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[
            {
              day: 'Day 1',
              items: [
                ['08.30 - 09.15', 'Registration and Breakfast'],
                ['09.15 - 09.40', 'Opening Ceremony'],
                ['09.40 - 10.40', 'Session 1'],
                ['10.40 - 11.00', 'Coffee Break'],
                ['11.00 - 12.00', 'Session 2'],
                ['12.00 - 12.20', 'Coffee Break'],
                ['12.20 - 13.20', 'Session 3'],
                ['13.20 - 14.20', 'Coffee Break'],
                ['13.40 - 14.40', 'Session 4'],
                ['14.40 - 15.40', 'Lunch'],
                ['15.40 - 16.40', 'Session 5'],
                ['16.40 - 17.00', 'Coffee Break'],
                ['17.00 - 18.00', 'Session 6'],
                ['18.00 - 18.20', 'Food Breaks'],
              ],
            },
            {
              day: 'Day 2',
              items: [
                ['09.00 - 09.20', 'Breakfast'],
                ['09.20 - 10.20', 'Session 7'],
                ['10.20 - 10.40', 'Coffee Break'],
                ['10.40 - 11.40', 'Session 8'],
                ['11.40 - 12.00', 'Coffee Break'],
                ['12.00 - 13.00', 'Session 9'],
                ['13.00 - 13.20', 'Coffee Break'],
                ['13.20 - 14.20', 'Session 10'],
                ['14.20 - 15.20', 'Lunch'],
                ['15.20 - 16.20', 'Session 11'],
                ['16.20 - 16.40', 'Coffee Break'],
                ['16.40 - 17.30', 'Closing Ceremony'],
                ['17.30 - 17.50', 'Food Breaks'],
              ],
            },
          ].map((day) => (
            <div
              key={day.day}
              style={{
                backgroundColor: 'rgba(12, 35, 60, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '15px',
                padding: isMobile ? '25px 18px' : '40px 30px',
              }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  color: '#d4af37',
                  marginBottom: '30px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderBottom:
                    '1px solid rgba(212, 175, 55, 0.2)',
                  paddingBottom: '15px',
                }}
              >
                {day.day}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                {day.items.map(([time, title], index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '10px',
                      borderBottom:
                        '1px solid rgba(255, 255, 255, 0.05)',
                      paddingBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        color: '#d4af37',
                        fontWeight: '600',
                        fontSize: isMobile
                          ? '0.8rem'
                          : '0.95rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {time}
                    </span>

                    <span
                      style={{
                        color: '#fff',
                        fontSize: isMobile
                          ? '0.85rem'
                          : '0.95rem',
                        textAlign: 'right',
                      }}
                    >
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: isMobile ? '60px 15px' : '100px',
          backgroundColor: '#f4f7f9',
          color: '#0c233c',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '35px' : '60px',
          }}
        >
          <h3
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: '#0c233c',
              marginBottom: '15px',
            }}
          >
            Frequently Asked Questions
          </h3>

          <h2
            style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              color: '#0c233c',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: isMobile
                    ? '18px 16px'
                    : '20px 25px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '15px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  fontWeight: 'bold',
                  color: '#0c233c',
                }}
              >
                <span>{faq.question}</span>

                <span
                  style={{
                    color: '#d4af37',
                    fontSize: '1.5rem',
                    fontWeight: 'normal',
                    flexShrink: 0,
                  }}
                >
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      style={{
                        padding: isMobile
                          ? '0 16px 20px'
                          : '0 25px 25px',
                        color: '#555',
                        lineHeight: '1.6',
                        fontSize: isMobile
                          ? '0.9rem'
                          : '1rem',
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: '#061826',
          color: '#fff',
          padding: isMobile
            ? '50px 20px 25px'
            : '70px 80px 30px',
          borderTop: '1px solid #1a365d',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : '1.5fr 1fr 1.2fr 1.2fr',
            gap: isMobile ? '35px' : '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            marginBottom: isMobile ? '35px' : '50px',
            alignItems: 'start',
          }}
        >
          {/* Footer Logo */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  border: '2px solid #d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: '#d4af37',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                }}
              >
                N
              </div>

              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  lineHeight: '1.3',
                  letterSpacing: '0.5px',
                }}
              >
                Zeytinburnu AIHL<br />Model Organization of Islamic Cooperation
              </h3>
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#b0b0b0',
                lineHeight: '1.6',
              }}
            >
             An intellectual MUN platform centered on critical debate, diplomatic thinking, and academic excellence for young leaders.
            </p>
          </div>

          {/* Hızlı İletişim */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Quick Communication
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Committees', href: '/committee' },
            { name: 'Communication', href: '/communication' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color:
                        link.name === 'Hakkımızda'
                          ? '#00bfff'
                          : '#b0b0b0',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Communication
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#b0b0b0',
                  fontSize: '0.95rem',
                }}
              >
                <span style={{ color: '#d4af37' }}>⌖</span>

                <span>
                  Zeytinburnu AIHL
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#b0b0b0',
                  fontSize: '0.95rem',
                }}
              >
                <span style={{ color: '#d4af37' }}>✉</span>

                <span style={{ wordBreak: 'break-all' }}>
                  zimockmoic26@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Social Media
            </h4>

            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#b0b0b0',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              <span style={{ color: '#d4af37' }}>◎</span>
                <span>@zimoic.official</span>
            </a>
          </div>
        </div>

        {/* Footer Alt */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: '15px',
            color: '#888',
            fontSize: '0.85rem',
          }}
        >
          <div>
          <div>© 2027 Zimoic – All rights reserved.</div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.95rem',
            }}
          >
            <span
              style={{
                color: '#00bfff',
                fontWeight: '600',
              }}
            >
              Built by
            </span>

            <a
              href="https://instagram.com/ccenkyaman"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#ffcc00',
                fontWeight: '600',
              }}
            >
              @ccenkyaman
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}