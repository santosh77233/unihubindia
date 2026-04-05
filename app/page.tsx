'use client'

import { useState, useEffect } from 'react'

interface State {
  rank: number
  name: string
  count: number
  file: string
  highlights: string[]
}

export default function Home() {
  const [states, setStates] = useState<State[]>([])
  const [filteredStates, setFilteredStates] = useState<State[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const statesData: State[] = [
    {
      rank: 1,
      name: 'West Bengal',
      count: 620,
      file: 'UNIHUB-west-bengal-COMPLETE.html',
      highlights: ['IIT KGP', 'Presidency', 'Jadavpur'],
    },
    {
      rank: 2,
      name: 'Tamil Nadu',
      count: 503,
      file: 'UNIHUB-tamil-nadu-COMPLETE.html',
      highlights: ['IIT Madras', 'Anna Univ', 'NIT Trichy'],
    },
    {
      rank: 3,
      name: 'Madhya Pradesh',
      count: 492,
      file: 'UNIHUB-madhya-pradesh-COMPLETE.html',
      highlights: ['IIT Indore', 'IIM Indore', 'AIIMS Bhopal'],
    },
    {
      rank: 4,
      name: 'Gujarat',
      count: 471,
      file: 'UNIHUB-gujarat-COMPLETE.html',
      highlights: ['IIT Gandhinagar', 'IIM Ahmedabad', 'PDPU'],
    },
    {
      rank: 5,
      name: 'Andhra Pradesh',
      count: 468,
      file: 'UNIHUB-andhra-pradesh-COMPLETE.html',
      highlights: ['IIT Tirupati', 'NIT AP', 'GITAM'],
    },
    {
      rank: 6,
      name: 'Uttar Pradesh',
      count: 466,
      file: 'UNIHUB-uttar-pradesh-COMPLETE.html',
      highlights: ['IIT Kanpur', 'IIT BHU', 'AMU'],
    },
    {
      rank: 7,
      name: 'Telangana',
      count: 459,
      file: 'UNIHUB-telangana-COMPLETE.html',
      highlights: ['IIT Hyderabad', 'IIIT Hyderabad', 'NALSAR'],
    },
    {
      rank: 8,
      name: 'Karnataka',
      count: 451,
      file: 'UNIHUB-karnataka-COMPLETE.html',
      highlights: ['IISc', 'IIM Bangalore', 'NLSIU'],
    },
    {
      rank: 9,
      name: 'Maharashtra',
      count: 448,
      file: 'UNIHUB-maharashtra-COMPLETE.html',
      highlights: ['IIT Bombay', 'VJTI', 'SPPU'],
    },
    {
      rank: 10,
      name: 'Rajasthan',
      count: 438,
      file: 'UNIHUB-rajasthan-COMPLETE.html',
      highlights: ['IIT Jodhpur', 'BITS Pilani', 'NLU Jodhpur'],
    },
    {
      rank: 11,
      name: 'Bihar',
      count: 429,
      file: 'UNIHUB-bihar-COMPLETE.html',
      highlights: ['IIT Patna', 'NIT Patna', 'AIIMS Patna'],
    },
    {
      rank: 12,
      name: 'Kerala',
      count: 423,
      file: 'UNIHUB-kerala-COMPLETE.html',
      highlights: ['IIT Palakkad', 'IIM Kozhikode', 'NIT Calicut'],
    },
    {
      rank: 13,
      name: 'Odisha',
      count: 414,
      file: 'UNIHUB-odisha-COMPLETE.html',
      highlights: ['IIT Bhubaneswar', 'AIIMS', 'KIIT'],
    },
    {
      rank: 14,
      name: 'Punjab',
      count: 398,
      file: 'UNIHUB-punjab-COMPLETE.html',
      highlights: ['IIT Ropar', 'PU', 'Thapar'],
    },
    {
      rank: 15,
      name: 'Haryana',
      count: 386,
      file: 'UNIHUB-haryana-COMPLETE.html',
      highlights: ['NIT Kurukshetra', 'IIM Rohtak', 'Ashoka'],
    },
    {
      rank: 16,
      name: 'Manipur',
      count: 378,
      file: 'UNIHUB-manipur-COMPLETE.html',
      highlights: ['NSU', 'JNIMS', 'RIMS'],
    },
    {
      rank: 17,
      name: 'Jammu & Kashmir',
      count: 329,
      file: 'UNIHUB-jammu-kashmir-COMPLETE.html',
      highlights: ['IIT Jammu', 'NIT Srinagar', 'IIM Jammu'],
    },
    {
      rank: 18,
      name: 'Nagaland',
      count: 317,
      file: 'UNIHUB-nagaland-COMPLETE.html',
      highlights: ['NIT Nagaland', 'NU', 'Baptist'],
    },
    {
      rank: 19,
      name: 'Arunachal Pradesh',
      count: 295,
      file: 'UNIHUB-arunachal-pradesh-COMPLETE.html',
      highlights: ['NIT AP', 'NERIST', 'RGU'],
    },
    {
      rank: 20,
      name: 'Jharkhand',
      count: 288,
      file: 'UNIHUB-jharkhand-COMPLETE.html',
      highlights: ['IIT ISM', 'NIT Jamshedpur', 'BIT Mesra'],
    },
    {
      rank: 21,
      name: 'Delhi NCT',
      count: 275,
      file: 'UNIHUB-delhi-COMPLETE.html',
      highlights: ['IIT Delhi', 'DU', 'JNU'],
    },
    {
      rank: 22,
      name: 'Assam',
      count: 252,
      file: 'UNIHUB-assam-COMPLETE.html',
      highlights: ['IIT Guwahati', 'Cotton Univ', 'Tezpur'],
    },
    {
      rank: 23,
      name: 'Meghalaya',
      count: 249,
      file: 'UNIHUB-meghalaya-COMPLETE.html',
      highlights: ['IIM Shillong', 'NIT', 'NEHU'],
    },
    {
      rank: 24,
      name: 'Chhattisgarh',
      count: 241,
      file: 'UNIHUB-chhattisgarh-COMPLETE.html',
      highlights: ['IIT Bhilai', 'NIT Raipur', 'HNLU'],
    },
    {
      rank: 25,
      name: 'Tripura',
      count: 227,
      file: 'UNIHUB-tripura-COMPLETE.html',
      highlights: ['NIT Agartala', 'TU', 'ICFAI'],
    },
    {
      rank: 26,
      name: 'Uttarakhand',
      count: 215,
      file: 'UNIHUB-uttarakhand-COMPLETE.html',
      highlights: ['IIT Roorkee', 'NIT UK', 'AIIMS'],
    },
    {
      rank: 27,
      name: 'Goa',
      count: 211,
      file: 'UNIHUB-goa-COMPLETE.html',
      highlights: ['IIT Goa', 'BITS Goa', 'NIFTEM'],
    },
    {
      rank: 28,
      name: 'Himachal Pradesh',
      count: 200,
      file: 'UNIHUB-himachal-pradesh-COMPLETE.html',
      highlights: ['IIT Mandi', 'NIT Hamirpur', 'AIIMS'],
    },
  ]

  useEffect(() => {
    setStates(statesData)
    setFilteredStates(statesData)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeModal = () => {
    setIsModalClosing(true)
    setTimeout(() => {
      setIsModalOpen(false)
    }, 300)
  }

  const filterStates = (query: string) => {
    setSearchInput(query)
    const lowerQuery = query.toLowerCase()
    const filtered = statesData.filter(
      (state) =>
        state.name.toLowerCase().includes(lowerQuery) ||
        state.highlights.some((h) => h.toLowerCase().includes(lowerQuery))
    )
    setFilteredStates(filtered)
  }

  const categories = [
    '🔧 Engineering',
    '⚕️ Medical (MBBS/BDS)',
    '💼 Management (MBA/BBA)',
    '⚖️ Law (LLB/BA LLB)',
    '🎨 Arts & Humanities',
    '🔬 Science (BSc/MSc)',
    '💰 Commerce (BCom/MCom)',
    '💊 Pharmacy (B.Pharm/D.Pharm)',
    '🌿 Agriculture & Allied',
    '🏥 Nursing & Allied Health',
    '🏗️ Architecture & Planning',
    '👨‍🏫 Education (B.Ed/M.Ed)',
    '💻 Computer Applications (BCA/MCA)',
    '🏨 Hotel Management',
    '📊 Chartered Accountancy',
    '🎬 Mass Communication',
    '🎭 Fine Arts & Design',
    '🧪 Biotechnology',
    '🔋 Electronics & Telecom',
    '⚡ Electrical Engineering',
    '🏭 Mechanical Engineering',
    '👔 Civil Engineering',
    '💾 IT & Software',
    '🌐 Cyber Security',
    '🤖 Artificial Intelligence',
    '📈 Data Science',
    '🦷 Dental (BDS/MDS)',
    '🌱 Ayurveda (BAMS)',
    '💉 Homeopathy (BHMS)',
    '🧘 Yoga & Naturopathy',
    '🔬 Physiotherapy (BPT/MPT)',
    '🩺 Paramedical Sciences',
    '🎓 Research Programs (PhD)',
    '📚 Library Science',
    '🗣️ Social Work (MSW)',
    '🌍 Environmental Science',
    '🔭 Physics & Astronomy',
    '🧬 Chemistry & Biochemistry',
    '📐 Mathematics & Statistics',
    '🏀 Physical Education',
  ]

  const institutions = [
    { name: 'IIT Bombay', location: 'Mumbai, Maharashtra', badge: 'NIRF #1' },
    { name: 'IIT Delhi', location: 'New Delhi', badge: 'NIRF #2' },
    { name: 'IIT Madras', location: 'Chennai, Tamil Nadu', badge: 'NIRF #3' },
    { name: 'IIT Kanpur', location: 'Kanpur, Uttar Pradesh', badge: 'NIRF #4' },
    { name: 'IIT Kharagpur', location: 'Kharagpur, West Bengal', badge: 'NIRF #5' },
    { name: 'IIT Roorkee', location: 'Roorkee, Uttarakhand', badge: 'NIRF #6' },
    { name: 'IIT Guwahati', location: 'Guwahati, Assam', badge: 'NIRF #7' },
    { name: 'AIIMS Delhi', location: 'New Delhi', badge: 'PREMIER MEDICAL' },
    { name: 'IIM Ahmedabad', location: 'Ahmedabad, Gujarat', badge: 'NIRF #1 MGMT' },
    { name: 'IIM Bangalore', location: 'Bangalore, Karnataka', badge: 'NIRF #2 MGMT' },
    { name: 'NALSAR Hyderabad', location: 'Hyderabad, Telangana', badge: 'NLU #2' },
    { name: 'NLU Delhi', location: 'New Delhi', badge: 'NLU #1' },
  ]

  return (
    <>
      {/* Disclaimer Modal */}
      {isModalOpen && (
        <div
          className={`modal-overlay ${isModalClosing ? 'opacity-0' : ''}`}
          style={{
            opacity: isModalClosing ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
          onClick={closeModal}
        >
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <div className="modal-icon">⚠️</div>
              <h2 className="modal-title">Important Notice</h2>
            </div>
            <div className="modal-body">
              <p>
                <strong>UNIHUB INDIA is currently in the development phase.</strong>
              </p>
              <p>Please read the following important disclaimers carefully:</p>

              <ul className="modal-list">
                <li>
                  The data and information displayed on this platform may be{' '}
                  <strong>incomplete or incorrect</strong> as we are still in development.
                </li>

                <li>
                  We <strong>DO NOT guarantee admission</strong> to any college or institution listed on this
                  platform.
                </li>

                <li>
                  Browsing and searching colleges on UNIHUB INDIA is <strong>100% FREE</strong>. You only pay
                  when submitting applications.
                </li>

                <li>
                  All information is provided for <strong>reference purposes only</strong>. Please verify details
                  directly with respective institutions.
                </li>
              </ul>

              <div className="modal-note">
                <p style={{ margin: 0 }}>
                  <strong>Note:</strong> By continuing to use this platform, you acknowledge that you have read
                  and understood this disclaimer.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-btn" onClick={closeModal}>
                I Understand & Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`header ${isHeaderScrolled ? 'scrolled' : ''}`}>
        <div className="logo">UNIHUB INDIA</div>
        <nav className="nav-menu">
          <a href="#states">Browse States</a>
          <a href="#pricing">Pricing</a>
          <a href="#admission">Get Admission</a>
          <a href="#institutions">Top Colleges</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="search-icon" onClick={() => document.getElementById('searchInput')?.focus()}>
          🔍
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Your Gateway to College Admissions</h1>
        <p>Browse 10,343+ Institutions Across 28 States & UTs | Free to Search | Pay Only When You Apply</p>
        <a href="#admission" className="hero-cta">
          Get Admission Now
        </a>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">28</div>
          <div className="stat-label">States & UTs Covered</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">10,343</div>
          <div className="stat-label">Colleges Available</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Free to Browse</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Admission Support</div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section" id="pricing">
        <div className="pricing-content">
          <h2 className="pricing-title">💰 Simple & Transparent Pricing</h2>
          <p className="pricing-subtitle">Browse colleges for FREE. Pay only when you decide to apply.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-icon">🆓</div>
              <div className="pricing-label">Free Browsing</div>
              <div className="pricing-amount">₹0</div>
              <div className="pricing-info">
                • Search all colleges
                <br />• Compare institutions
                <br />• Save favorites
                <br />• View complete details
                <br />• No hidden charges
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-icon">📝</div>
              <div className="pricing-label">Application Package</div>
              <div className="pricing-amount">₹299</div>
              <div className="pricing-info">
                • Apply to up to 5 colleges
                <br />• Platform processing fee
                <br />• Application tracking
                <br />• Email & WhatsApp support
                <br />• Includes GST
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-icon">➕</div>
              <div className="pricing-label">Additional College</div>
              <div className="pricing-amount">₹49</div>
              <div className="pricing-info">
                • Each college beyond 5
                <br />• Same features as package
                <br />• Apply to unlimited colleges
                <br />• All-inclusive pricing
                <br />• GST included
              </div>
            </div>
          </div>

          <div className="pricing-note">
            <p>
              <strong>💡 How It Works:</strong> Creating an account and browsing colleges on UniHub is completely
              free. There is no charge to search, compare colleges, or save your favorites. You only pay when you
              decide to submit applications. The application fee is ₹299 for up to 5 colleges, with each additional
              college costing ₹49. This includes the platform fee, college application processing, and GST.
            </p>
          </div>
        </div>
      </div>

      {/* Admission Categories Showcase */}
      <div className="categories-showcase">
        <div className="categories-content">
          <h2 className="categories-title">🎓 Admission Categories We Cover</h2>
          <p className="categories-subtitle">Comprehensive coverage across all major educational streams</p>
        </div>

        <div className="categories-marquee">
          <div className="categories-track">
            {/* First set of categories */}
            {categories.map((cat, i) => (
              <div key={`${i}-1`} className="category-badge">
                {cat}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {categories.map((cat, i) => (
              <div key={`${i}-2`} className="category-badge">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission CTA Section */}
      <div className="admission-section" id="admission">
        <div className="admission-content">
          <h2 className="admission-title">🎓 Want to Get Admission?</h2>
          <p className="admission-subtitle">
            Connect with us for direct college admissions - Engineering, Medical, Management, Law & More!
          </p>

          <div className="contact-grid">
            <div className="contact-card" onClick={() => (window.location.href = 'tel:7783885537')}>
              <div className="contact-icon">📞</div>
              <div className="contact-label">Call Us</div>
              <div className="contact-info">
                <a href="tel:7783885537">7783885537</a>
              </div>
            </div>

            <div className="contact-card" onClick={() => window.open('https://wa.me/917783885537', '_blank')}>
              <div className="contact-icon">💬</div>
              <div className="contact-label">WhatsApp</div>
              <div className="contact-info">
                <a href="https://wa.me/917783885537" target="_blank" rel="noopener noreferrer">
                  7783885537
                </a>
              </div>
            </div>

            <div
              className="contact-card"
              onClick={() => (window.location.href = 'mailto:santoshkumarmehta5537@gmail.com')}
            >
              <div className="contact-icon">✉️</div>
              <div className="contact-label">Email Us</div>
              <div className="contact-info">
                <a href="mailto:santoshkumarmehta5537@gmail.com">santoshkumarmehta5537@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📷</div>
              <div className="contact-label">Instagram</div>
              <div className="contact-info" style={{ color: '#b3b3b3', fontSize: '14px' }}>
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            id="searchInput"
            placeholder="Search for colleges, states, courses..."
            value={searchInput}
            onChange={(e) => filterStates(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* States Grid */}
      <div id="states">
        <h2 className="section-title">Browse Colleges by State</h2>
        <div className="states-grid">
          {filteredStates.map((state) => (
            <div key={state.rank} className="state-card" onClick={() => (window.location.href = state.file)}>
              <div className="state-rank">#{state.rank}</div>
              <div className="state-name">{state.name}</div>
              <div className="state-count">{state.count}</div>
              <div className="state-label">Colleges Available</div>
              <div className="state-highlights">
                {state.highlights.map((h, i) => (
                  <span key={i} className="highlight-badge">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Institutions */}
      <div className="top-institutions" id="institutions">
        <h2 className="section-title" style={{ padding: 0, marginBottom: '40px' }}>
          Get Admission in Top Institutions
        </h2>
        <div className="institutions-grid">
          {institutions.map((inst, i) => (
            <div key={i} className="institution-card">
              <div className="inst-name">{inst.name}</div>
              <div className="inst-location">{inst.location}</div>
              <span className="inst-badge">{inst.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About UNIHUB INDIA</h3>
            <p>Your trusted admission partner for 10,343 institutions across 28 states and union territories.</p>
            <p>We provide direct admission assistance in Engineering, Medical, Management, Law, Arts & Science colleges.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#states">Browse States</a>
            <a href="#pricing">Pricing</a>
            <a href="#admission">Get Admission</a>
            <a href="#institutions">Top Colleges</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-section">
            <h3>Legal & Policies</h3>
            <a href="UNIHUB-privacy-policy.html">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
            <a href="#">Disclaimer</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>
              📞 Phone:{' '}
              <a href="tel:7783885537" style={{ color: '#e50914' }}>
                7783885537
              </a>
            </p>
            <p>
              💬 WhatsApp:{' '}
              <a href="https://wa.me/917783885537" style={{ color: '#e50914' }} target="_blank" rel="noopener noreferrer">
                7783885537
              </a>
            </p>
            <p>
              ✉️ Email:{' '}
              <a href="mailto:santoshkumarmehta5537@gmail.com" style={{ color: '#e50914' }}>
                santoshkumarmehta5537@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UNIHUB INDIA. Your Gateway to College Admissions. All Rights Reserved.</p>
          <p style={{ marginTop: '10px', color: '#666' }}>
            Covering 28 States & UTs: West Bengal • Tamil Nadu • Madhya Pradesh • Gujarat • Andhra Pradesh • Uttar
            Pradesh • Telangana • Karnataka • Maharashtra • Rajasthan • Bihar • Kerala • Odisha • Punjab • Haryana •
            Manipur • Jammu & Kashmir • Nagaland • Arunachal Pradesh • Jharkhand • Delhi NCT • Assam • Meghalaya •
            Chhattisgarh • Tripura • Uttarakhand • Goa • Himachal Pradesh
          </p>
        </div>
      </div>
    </>
  )
}
