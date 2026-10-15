import React, { useState } from 'react'
import {
  Search,
  Globe,
  ArrowDown,
  Sprout,
  TrendingUp,
  FolderLock,
  Award,
  RefreshCw,
  Store,
  Wrench,
  Palette,
  ArrowUpRight,
  ArrowUp,
  CheckCircle2,
  Check,
  ChevronLeft,
  ChevronRight,
  Handshake,
  Fingerprint,
  Sparkles,
  Shield,
  Star,
  ShieldCheck,
  Users,
  Eye,
  Briefcase,
  UserPlus,
  Share2,
  Play,
  X,
  FileText,
  MapPin,
  ExternalLink,
  LayoutDashboard,
  ClipboardList,
  CreditCard,
  HelpCircle,
  Lock,
  ArrowRight,
  Building,
  Upload,
  BookOpen,
  MessageSquare,
  User,
  LogIn,
  LogOut,
  KeyRound,
  Mail,
  Phone,
  Scale,
  Calculator,
  Coins,
  HeartHandshake
} from 'lucide-react'

// Islamic Non-Interest Platform Datasets
const islamicPillars = [
  {
    title: 'Qard al-Hasan (قرض حسن)',
    arabic: 'الْقَرْضُ الْحَسَنُ',
    sub: 'The Benevolent Loan',
    desc: 'Pure Islamic financing provided to help fellow entrepreneurs prosper without charging or demanding any financial interest or profit.',
    icon: HeartHandshake,
  },
  {
    title: 'Zero Riba (تحريم الربا)',
    arabic: 'تَحْرِيمُ الرِّبَا',
    sub: '100% Interest-Free',
    desc: 'Total prohibition of usury. You borrow what you need and repay strictly what you received. No compounding debt traps or hidden fee percentages.',
    icon: Scale,
  },
  {
    title: 'Mutual Agreement (التراضي والعهد)',
    arabic: 'الْعَهْدُ وَالْمِيثَاقُ',
    desc: 'Repayment schedules are established transparently by mutual consent to match your real business revenue cycle. No punitive surprises.',
    icon: Handshake,
  },
  {
    title: 'Amanah & Barakah (الأمانة والبركة)',
    arabic: 'الأَمَانَةُ وَالْبَرَكَةُ',
    desc: 'Replacing predatory physical collateral with social trust vouchers and mosque endorsements, inviting divine blessing (Barakah) into your commerce.',
    icon: Sparkles,
  },
]

const comparisonPoints = [
  {
    feature: 'Interest Rate (Riba)',
    commercial: '25% to 65% per annum + compounding penalties',
    qardlink: '0.00% Pure Qard Hassan (Zero Interest Ever)',
    highlight: true,
  },
  {
    feature: 'Repayment Terms',
    commercial: 'Inflexible daily deductions regardless of sales',
    qardlink: 'Mutually agreed installment schedule tailored to cashflow',
    highlight: false,
  },
  {
    feature: 'Unforeseen Hardship',
    commercial: 'Asset confiscation, public shaming & compound fines',
    qardlink: 'Islamic forbearance (Inzar) & compassionate restructuring',
    highlight: false,
  },
  {
    feature: 'Collateral Demanded',
    commercial: 'Land titles, vehicle papers, personal guarantees',
    qardlink: 'Social trust vouchers & community character references',
    highlight: false,
  },
  {
    feature: 'Spiritual & Commercial Impact',
    commercial: 'Stressful debt trap that drains business profits',
    qardlink: 'Halal Barakah, economic dignity & community brotherhood',
    highlight: true,
  },
]

const islamicFaqs = [
  {
    q: 'What is QardLink and how does it work?',
    a: 'QardLink is an Islamic non-interest platform where micro and small business owners can borrow capital for inventory, tools, or business expansion, and return only the principal amount based on a transparent, mutually agreed schedule.'
  },
  {
    q: 'Is this truly 0% interest with zero hidden fees?',
    a: 'Yes, absolutely. Under Islamic Sharia law, Qard al-Hasan forbids any interest (Riba) or hidden percentage surcharges. When you borrow ₦200,000, you repay exactly ₦200,000 across your agreed installments. Not a single extra Naira.'
  },
  {
    q: 'How do we decide the repayment agreement?',
    a: 'During your application, we review your business type and cash cycle (e.g. daily food sales, weekly market days, or seasonal harvest). We agree together on whether 3, 6, 9, or 12 monthly installments best fit your business without causing hardship.'
  },
  {
    q: 'What happens if my business faces an unexpected difficulty?',
    a: 'Islam commands granting respite to those experiencing financial strain (Inzar al-Mu’sir). Unlike conventional moneylenders who compound penalties and seize goods, QardLink works with you to compassionately restructure your timeline without fines.'
  },
  {
    q: 'Do I need physical property or land collateral?',
    a: 'No. QardLink operates on social trust (Amanah). Through our Borrower Voucher System, character references from a partner mosque, cooperative guild, or existing respected community members serve as your guarantee.'
  },
  {
    q: 'What types of businesses are eligible for funding?',
    a: 'Any ethical and halal enterprise in retail, agriculture, food production, crafts, tailoring, tech repairs, transport, or trade. Businesses dealing in alcohol, gambling, or non-halal products are strictly ineligible.'
  }
]

// Social Icons
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

// Landing Page (Our Model) Data
const mentorshipCards = [
  {
    title: 'Agri-Business',
    text: 'Connecting smallholder farmers with veteran agricultural experts for yield optimization.',
    icon: Sprout,
  },
  {
    title: 'Retail & Trade',
    text: 'Market-floating supply chain management from established wholesale distributors.',
    icon: Store,
  },
  {
    title: 'Craft & Artisan',
    text: 'Master craftsmen mentoring apprentices in sustainable production and market access.',
    icon: Wrench,
  },
  {
    title: 'Creative Economy',
    text: 'Digital and artisanal creators finding ways to monetize heritage and modern skills.',
    icon: Palette,
  },
]

const stories = [
  {
    title: "Fatima's Fabric Store",
    name: 'Fatima Abdullahi',
    location: 'Kano, Kano State',
    borrowed: '₦80,000',
    duration: '6 months',
    sector: 'Retail & Trade',
    quote: '"Before QardLink I was borrowing from moneylenders at 20% monthly. Now I repay only what I borrowed — zero extra. My shop doubled in six months."',
    result: 'Shop revenue grew 2× · hired 2 assistants',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Musa's Grain Farm",
    name: 'Musa Ibrahim',
    location: 'Jigawa State',
    borrowed: '₦150,000',
    duration: '9 months',
    sector: 'Agriculture',
    quote: '"The agreement was clear from day one. I borrowed ₦150,000, I repay ₦150,000 — nothing more. That clarity gave me peace and my family food security."',
    result: 'Harvest yield increased 60% · debt-free',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Hauwa's Tailoring Hub",
    name: "Hauwa Sa'idu",
    location: 'Kaduna State',
    borrowed: '₦120,000',
    duration: '12 months',
    sector: 'Artisan & Craft',
    quote: '"I had skills but no capital. QardLink funded my five machines and asked for nothing but the principal back. Today I employ four women in my neighborhood."',
    result: '4 women employed · fully repaid on schedule',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Yusuf's Phone Repair Shop",
    name: 'Yusuf Garba',
    location: 'Sokoto State',
    borrowed: '₦60,000',
    duration: '4 months',
    sector: 'Youth Tech',
    quote: '"I used the loan to buy tools and parts. Paid it all back in 4 months. No interest, no stress. Now I am saving to grow to the next tier."',
    result: 'Business stable · applying for 2nd loan',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Aisha's Pepper Stall",
    name: 'Aisha Umar',
    location: 'Katsina State',
    borrowed: '₦40,000',
    duration: '3 months',
    sector: 'Market Trading',
    quote: '"Small amount, big difference. I restocked my stall, stopped borrowing daily from ajo collectors and kept every profit I made. Alhamdulillah."',
    result: 'Daily income up 45% · no informal debt',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Bashir's Poultry Farm",
    name: 'Bashir Aliyu',
    location: 'Kebbi State',
    borrowed: '₦200,000',
    duration: '12 months',
    sector: 'Agri-Business',
    quote: '"A bank would never touch me without collateral. QardLink looked at my character and my community voucher. That is true Islamic finance — dignity first."',
    result: '500 birds · supplying local hotels weekly',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80',
  },
]

// How It Works Data
const steps = [
  {
    step: 1,
    title: 'Secure a Referral',
    boldLead: 'The Foundation of Trust:',
    desc: 'Our system relies on social capital. New beneficiaries must be referred by an existing community leader or partner mosque to ensure mutual accountability.',
    icon: ShieldCheck,
    iconBg: '#093c2d',
    iconColor: '#ffffff',
  },
  {
    step: 2,
    title: 'Onboarding & Validation',
    boldLead: 'Digital Integrity:',
    desc: 'Complete a simple mobile onboarding process. We verify your business intent and create a digital footprint that respects your privacy while establishing credibility.',
    icon: Fingerprint,
    iconBg: '#475569',
    iconColor: '#ffffff',
  },
  {
    step: 3,
    title: 'Flexible Repayment',
    boldLead: 'The Revolving Pool:',
    desc: 'Repay your interest-free loan on a schedule that matches your business cycle. Every Naira returned goes directly into funding the next entrepreneur.',
    icon: RefreshCw,
    iconBg: '#856404',
    iconColor: '#ffffff',
  },
]

const trustTiers = [
  {
    tier: 'BRONZE TIER',
    amount: '₦100,000',
    status: 'Initial Entry',
    highlighted: false,
    items: ['1 Verified Referral', 'ID Verification', 'Digital Wallet Setup'],
    badgeIcon: Award,
    badgeColor: '#a06a28',
  },
  {
    tier: 'SILVER TIER',
    amount: '₦175,000',
    status: 'Consistent Repayer',
    highlighted: false,
    items: ['2 On-time Repayments', 'Active Participation', 'Small Group Support'],
    badgeIcon: Sparkles,
    badgeColor: '#64748b',
  },
  {
    tier: 'GOLD TIER',
    amount: '₦250,000',
    status: 'Community Pillar',
    highlighted: false,
    items: ['6 Months History', 'Zero Missed Deadlines', 'Business Training Cert.'],
    badgeIcon: Shield,
    badgeColor: '#d97706',
  },
  {
    tier: 'PLATINUM TIER',
    amount: '₦350,000+',
    status: 'Impact Leader',
    highlighted: true,
    items: ['12 Months Integrity', 'Mentoring Others', 'Verified Growth Plan'],
    badgeIcon: Star,
    badgeColor: '#cca044',
  },
]

// Team Data
const teamMembers = [
  {
    name: 'Mustapha Sanusi',
    role: 'Co-Founder & Chief Executive Officer',
    bio: 'Dedicated to ethical, non-interest financial equity, Mustapha leads QardLink’s mission to provide dignified capital access to underserved micro-enterprises across Nigeria.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Amina Yusuf',
    role: 'Chief Strategy Officer',
    bio: 'With over 15 years in developmental finance, Amina leads our expansion strategies across the Sahel, structuring scalable microfinance pipelines.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Ibrahim Garba',
    role: 'Head of Sharia Compliance',
    bio: 'A respected authority in Islamic Finance, Ibrahim ensures every QardLink product adheres strictly to non-interest principles and ethical jurisprudence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Samuel Okafor',
    role: 'Chief Technology Officer',
    bio: 'Samuel drives our digital infrastructure, building secure, low-bandwidth mobile solutions that bring financial access to disconnected rural zones.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Usman Bello',
    role: 'Chairman, Advisory Board',
    bio: 'Dr. Bello brings decades of public sector experience to QardLink, guiding our institutional partnerships and high-level regulatory governance.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
]

const trustPrinciples = [
  {
    title: 'Ethical Stewardship',
    desc: "We act as guardians of our community's trust, ensuring that all funds are managed with the highest level of moral integrity and Islamic compliance.",
    icon: ShieldCheck,
  },
  {
    title: 'Radical Inclusion',
    desc: 'Our mission is to reach the "unreachable"—ensuring that gender, location, or economic status never bars anyone from financial opportunity.',
    icon: Users,
  },
  {
    title: 'Total Transparency',
    desc: 'We operate in the light. From our ledger to our impact metrics, every data point is accessible to our donors and beneficiaries alike.',
    icon: Eye,
  },
]

// Impact Page Data
const impactMetrics = [
  { stat: '₦320M+', label: 'Interest-Free Loans Disbursed', sub: 'All repaid at 0% — exactly what was borrowed' },
  { stat: '8,400+', label: 'Business Owners Funded', sub: 'Active Qard Hassan accounts across Nigeria' },
  { stat: '96.2%', label: 'On-Time Repayment Rate', sub: 'Built on mutual agreement, not collateral' },
  { stat: '71%', label: 'Women Entrepreneurs', sub: 'Breaking barriers with dignified halal capital' },
]

const impactSectors = [
  {
    title: 'Retail & Market Trading',
    metric: '3,200+ Traders Funded',
    desc: 'Helping market women and shop owners restock without paying usurious daily interest to informal moneylenders.',
    icon: Store,
  },
  {
    title: 'Agriculture & Smallholders',
    metric: '2,100+ Farmers Empowered',
    desc: 'Interest-free working capital for seeds, fertiliser, and storage — enabling farmers to keep full harvest profits.',
    icon: Sprout,
  },
  {
    title: 'Tailoring & Artisan Work',
    metric: '1,400+ Craft Businesses',
    desc: 'Funding sewing machines, looms, and tools under Qard Hassan — borrowers repay only what they received.',
    icon: Wrench,
  },
  {
    title: 'Youth Digital Services',
    metric: '700+ Tech Startups',
    desc: 'Equipping young entrepreneurs with capital to launch mobile businesses, repair shops, and digital kiosks.',
    icon: Sparkles,
  },
]

const regionalStats = [
  { state: 'Kano State', loans: '2,810 Loans', capital: '₦98M Disbursed' },
  { state: 'Kaduna State', loans: '1,950 Loans', capital: '₦67M Disbursed' },
  { state: 'Sokoto State', loans: '1,430 Loans', capital: '₦49M Disbursed' },
  { state: 'Katsina State', loans: '1,120 Loans', capital: '₦38M Disbursed' },
  { state: 'Jigawa State', loans: '1,090 Loans', capital: '₦68M Disbursed' },
]

export default function App() {
  const [activeNav, setActiveNav] = useState('model')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  // Portal Authentication State (Amanah Finance)
  const [portalTab, setPortalTab] = useState('application') // 'application' or 'dashboard'
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login' or 'signup'
  const [pendingPortalTab, setPendingPortalTab] = useState(null) // tab to open after login
  const [currentUser, setCurrentUser] = useState({
    name: 'Ahmed Musa',
    email: 'ahmed.musa@amanah.ng',
    score: 850,
    memberSince: '2022'
  })
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authFullName, setAuthFullName] = useState('')
  const [authPhone, setAuthPhone] = useState('')

  // Application Step Form State
  const [appStep, setAppStep] = useState(1) // 1 to 4
  const [formData, setFormData] = useState({
    fullName: 'Ahmed Musa',
    nin: '',
    phone: '+234 803 000 0000',
    address: '123 Market Road, Kano',
    businessName: 'Musa Agro-Commodities',
    businessType: 'Grain & Sorghum Wholesale',
    yearsInOperation: '3 Years',
    requestedAmount: '₦250,000',
    refereeName: 'Alhaji Bashir Umar',
    partnerMosque: 'Kano Central Juma’at',
  })

  // Islamic Non-Interest Platform Calculator & FAQ State
  const [calcAmount, setCalcAmount] = useState(250000)
  const [calcDuration, setCalcDuration] = useState(6) // months
  const [openFaq, setOpenFaq] = useState(0)

  const handleApplyWithAmount = (amount) => {
    setFormData((prev) => ({
      ...prev,
      requestedAmount: `₦${amount.toLocaleString()}`
    }))
    openPortal('application')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 4000)
      setEmail('')
    }
  }

  const openPortal = (tab = 'application') => {
    if (!isLoggedIn) {
      // Remember where they wanted to go, then prompt login
      setPendingPortalTab(tab)
      setAuthMode('login')
      setAuthModalOpen(true)
      return
    }
    setPortalTab(tab)
    setActiveNav('portal')
    scrollToTop()
  }

  const handleAuthSubmit = (e) => {
    e.preventDefault()
    if (authMode === 'login') {
      setCurrentUser({
        name: authEmail ? authEmail.split('@')[0] : 'Ahmed Musa',
        email: authEmail || 'ahmed.musa@amanah.ng',
        score: 850,
        memberSince: '2022'
      })
    } else {
      setCurrentUser({
        name: authFullName || 'New Beneficiary',
        email: authEmail || 'beneficiary@amanah.ng',
        score: 750,
        memberSince: '2024'
      })
    }
    setIsLoggedIn(true)
    setAuthModalOpen(false)
    // Redirect to the portal tab they originally requested
    if (pendingPortalTab) {
      setPortalTab(pendingPortalTab)
      setActiveNav('portal')
      setPendingPortalTab(null)
      scrollToTop()
    }
  }

  const handleLogOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="site-shell">

      {/* ============================================================
          GLOBAL AUTH MODAL — renders above everything, any page
          ============================================================ */}
      {authModalOpen && (
        <div className="auth-modal-backdrop" onClick={() => setAuthModalOpen(false)}>
          <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="auth-modal-close"
              onClick={() => setAuthModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="auth-modal-header">
              <span className="auth-modal-badge">SHARIA-COMPLIANT ACCESS</span>
              <h2>{authMode === 'login' ? 'Sign In to Amanah Portal' : 'Create Beneficiary Account'}</h2>
              <p>
                {authMode === 'login'
                  ? 'Access your interest-free loans, trust score rating, and community vouchers.'
                  : 'Register as an ethical entrepreneur to apply for non-interest Qard capital.'}
              </p>
            </div>

            <div className="auth-tabs-toggle">
              <button
                type="button"
                className={`auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
                onClick={() => setAuthMode('login')}
              >
                Log In
              </button>
              <button
                type="button"
                className={`auth-tab-btn ${authMode === 'signup' ? 'active' : ''}`}
                onClick={() => setAuthMode('signup')}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="auth-form-fields">
              {authMode === 'signup' && (
                <div className="auth-field-group">
                  <label>Full Legal Name</label>
                  <div className="auth-input-wrap">
                    <User size={16} />
                    <input
                      type="text"
                      placeholder="e.g. Fatima Abubakar"
                      value={authFullName}
                      onChange={(e) => setAuthFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="auth-field-group">
                <label>{authMode === 'signup' ? 'Email or Phone Number' : 'Email or Phone'}</label>
                <div className="auth-input-wrap">
                  <Mail size={16} />
                  <input
                    type="text"
                    placeholder="ahmed.musa@amanah.ng or +234..."
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-field-group">
                <label>Password / Security PIN</label>
                <div className="auth-input-wrap">
                  <KeyRound size={16} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-auth-submit">
                {authMode === 'login' ? 'Sign In' : 'Register & Enter Portal'}
              </button>

              <div className="auth-quick-demo-row">
                <span>Quick Access:</span>
                <button
                  type="button"
                  className="btn-demo-fill"
                  onClick={() => {
                    setAuthEmail('ahmed.musa@amanah.ng')
                    setAuthPassword('123456')
                    setIsLoggedIn(true)
                    setAuthModalOpen(false)
                    setCurrentUser({
                      name: 'Ahmed Musa',
                      email: 'ahmed.musa@amanah.ng',
                      score: 850,
                      memberSince: '2022'
                    })
                    if (pendingPortalTab) {
                      setPortalTab(pendingPortalTab)
                      setActiveNav('portal')
                      setPendingPortalTab(null)
                      scrollToTop()
                    }
                  }}
                >
                  Fill as Ahmed Musa (Score 850)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          PORTAL VIEW: AMANAH FINANCE (MICROFINANCE APPLICATION & DASHBOARD)
          ------------------------------------------------------------- */}
      {activeNav === 'portal' ? (
        <div className="amanah-portal-layout">
          {/* Top Bar for Portal */}
          <header className="amanah-topbar">
            <div className="amanah-topbar-left">
              <a
                href="#"
                className="amanah-logo"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveNav('model')
                  scrollToTop()
                }}
              >
                Amanah Finance
              </a>
            </div>

            <nav className="amanah-topnav-links">
              <button
                type="button"
                className={`amanah-nav-link ${portalTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setPortalTab('dashboard')}
              >
                Dashboard
                {portalTab === 'dashboard' && <span className="amanah-nav-bar" />}
              </button>
              <button
                type="button"
                className={`amanah-nav-link ${portalTab === 'application' ? 'active' : ''}`}
                onClick={() => setPortalTab('application')}
              >
                My Application
                {portalTab === 'application' && <span className="amanah-nav-bar" />}
              </button>
              <button type="button" className="amanah-nav-link">
                Active Loans
              </button>
              <button type="button" className="amanah-nav-link">
                Support
              </button>
            </nav>

            <div className="amanah-topbar-right">
              {isLoggedIn ? (
                <>
                  <div className="trust-score-pill">
                    Trust Score: {currentUser.score}
                  </div>
                  <div className="user-avatar-wrap" title={currentUser.name}>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                      alt={currentUser.name}
                      className="user-avatar-img"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-auth-action logout"
                    onClick={handleLogOut}
                    title="Log Out"
                  >
                    <LogOut size={14} />
                    <span>Log Out</span>
                  </button>
                </>
              ) : (
                <div className="topbar-auth-btn-group">
                  <button
                    type="button"
                    className="btn-portal-login"
                    onClick={() => {
                      setAuthMode('login')
                      setAuthModalOpen(true)
                    }}
                  >
                    <LogIn size={15} />
                    <span>Log In</span>
                  </button>
                  <button
                    type="button"
                    className="btn-portal-signup"
                    onClick={() => {
                      setAuthMode('signup')
                      setAuthModalOpen(true)
                    }}
                  >
                    <UserPlus size={15} />
                    <span>Sign Up</span>
                  </button>
                </div>
              )}

              <button
                type="button"
                className="btn-exit-portal"
                onClick={() => {
                  setActiveNav('how-it-works')
                  scrollToTop()
                }}
                title="Return to QardLink"
              >
                ← Back to QardLink
              </button>
            </div>
          </header>

          <div className="amanah-body-split">
            {/* Sidebar */}
            <aside className="amanah-sidebar">
              {isLoggedIn ? (
                <div className="sidebar-profile-box">
                  <div className="profile-img-large-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                      alt={currentUser.name}
                      className="profile-img-large"
                    />
                  </div>
                  <h3 className="profile-name">{currentUser.name}</h3>
                  <span className="profile-membership">Member since {currentUser.memberSince}</span>
                </div>
              ) : (
                <div className="sidebar-guest-box">
                  <div className="guest-icon-wrap">
                    <User size={32} color="#0d4e3d" />
                  </div>
                  <h3 className="guest-title">Guest Portal</h3>
                  <p className="guest-sub">Please log in to manage your active loans.</p>
                  <button
                    type="button"
                    className="btn-sidebar-login-prompt"
                    onClick={() => {
                      setAuthMode('login')
                      setAuthModalOpen(true)
                    }}
                  >
                    Log In / Sign Up
                  </button>
                </div>
              )}

              <nav className="sidebar-menu">
                <button
                  type="button"
                  className={`sidebar-menu-btn ${portalTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => setPortalTab('dashboard')}
                >
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </button>
                <button
                  type="button"
                  className={`sidebar-menu-btn ${portalTab === 'application' ? 'active' : ''}`}
                  onClick={() => setPortalTab('application')}
                >
                  <ClipboardList size={18} />
                  <span>My Application</span>
                </button>
                <button type="button" className="sidebar-menu-btn">
                  <CreditCard size={18} />
                  <span>Active Loans</span>
                </button>
                <button type="button" className="sidebar-menu-btn">
                  <HelpCircle size={18} />
                  <span>Support</span>
                </button>
              </nav>

              <div className="sidebar-bottom-actions">
                <button
                  type="button"
                  className="btn-sidebar-new-app"
                  onClick={() => {
                    setPortalTab('application')
                    setAppStep(1)
                  }}
                >
                  New Application
                </button>

                <div className="sidebar-legal-links">
                  <a href="#privacy">
                    <Shield size={14} />
                    <span>Privacy</span>
                  </a>
                  <a href="#compliance">
                    <ShieldCheck size={14} />
                    <span>Compliance</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Portal Content Area */}
            <div className="amanah-main-pane">
              {portalTab === 'application' ? (
                /* =======================================================
                   IMAGE 1: MICROFINANCE APPLICATION PAGE
                   ======================================================= */
                <div className="application-view-container">
                  <div className="app-page-header">
                    <h1 className="app-page-title">Microfinance Application</h1>
                    <p className="app-page-sub">
                      Step into a Sharia-compliant financial partnership. Please provide accurate details to maintain your trust score.
                    </p>
                  </div>

                  {/* 4-Step Stepper */}
                  <div className="stepper-horizontal">
                    <div className={`step-node ${appStep >= 1 ? 'completed' : ''}`}>
                      <div className="step-circle">1</div>
                      <span className="step-label">Personal</span>
                    </div>
                    <div className={`step-line ${appStep >= 2 ? 'active' : ''}`} />

                    <div className={`step-node ${appStep >= 2 ? 'completed' : ''}`}>
                      <div className="step-circle">2</div>
                      <span className="step-label">Business</span>
                    </div>
                    <div className={`step-line ${appStep >= 3 ? 'active' : ''}`} />

                    <div className={`step-node ${appStep >= 3 ? 'completed' : ''}`}>
                      <div className="step-circle">3</div>
                      <span className="step-label">Funding</span>
                    </div>
                    <div className={`step-line ${appStep >= 4 ? 'active' : ''}`} />

                    <div className={`step-node ${appStep >= 4 ? 'completed' : ''}`}>
                      <div className="step-circle">4</div>
                      <span className="step-label">Social</span>
                    </div>
                  </div>

                  {/* Main Form Card */}
                  <div className="app-form-card">
                    {appStep === 1 && (
                      <div className="form-step-content">
                        <div className="form-card-title-row">
                          <User size={18} color="#0d4e3d" />
                          <h2>Personal Information</h2>
                        </div>

                        <div className="form-fields-grid">
                          <div className="form-group">
                            <label>Full Legal Name</label>
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="app-text-input"
                            />
                          </div>

                          <div className="form-group">
                            <label>Identification Number (NIN)</label>
                            <input
                              type="text"
                              placeholder="Enter 11-digit NIN"
                              value={formData.nin}
                              onChange={(e) => setFormData({ ...formData, nin: e.target.value })}
                              className="app-text-input"
                            />
                          </div>

                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="app-text-input"
                            />
                          </div>

                          <div className="form-group">
                            <label>Residential Address</label>
                            <input
                              type="text"
                              value={formData.address}
                              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                        </div>

                        <div className="form-action-row">
                          <button
                            type="button"
                            className="btn-next-step"
                            onClick={() => setAppStep(2)}
                          >
                            <span>Next Step</span>
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {appStep === 2 && (
                      <div className="form-step-content">
                        <div className="form-card-title-row">
                          <Store size={18} color="#0d4e3d" />
                          <h2>Business Details</h2>
                        </div>

                        <div className="form-fields-grid">
                          <div className="form-group">
                            <label>Registered Business Name</label>
                            <input
                              type="text"
                              value={formData.businessName}
                              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                          <div className="form-group">
                            <label>Sector / Category</label>
                            <input
                              type="text"
                              value={formData.businessType}
                              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                          <div className="form-group">
                            <label>Years in Operation</label>
                            <input
                              type="text"
                              value={formData.yearsInOperation}
                              onChange={(e) => setFormData({ ...formData, yearsInOperation: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                          <div className="form-group">
                            <label>Operating Market Location</label>
                            <input
                              type="text"
                              defaultValue="Dawanau Market, Kano"
                              className="app-text-input"
                            />
                          </div>
                        </div>

                        <div className="form-action-row split">
                          <button
                            type="button"
                            className="btn-prev-step"
                            onClick={() => setAppStep(1)}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn-next-step"
                            onClick={() => setAppStep(3)}
                          >
                            <span>Next Step</span>
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {appStep === 3 && (
                      <div className="form-step-content">
                        <div className="form-card-title-row">
                          <CreditCard size={18} color="#0d4e3d" />
                          <h2>Funding Request</h2>
                        </div>

                        <div className="form-fields-grid">
                          <div className="form-group">
                            <label>Requested Qard al-Hasan Amount</label>
                            <input
                              type="text"
                              value={formData.requestedAmount}
                              onChange={(e) => setFormData({ ...formData, requestedAmount: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                          <div className="form-group">
                            <label>Repayment Tenure</label>
                            <select className="app-text-input" defaultValue="6 Months">
                              <option>3 Months (Rotating Pool)</option>
                              <option>6 Months (Standard Rotation)</option>
                              <option>12 Months (Growth Tier)</option>
                            </select>
                          </div>
                          <div className="form-group" style={{ gridColumn: 'span 2' }}>
                            <label>Intended Deployment Purpose</label>
                            <input
                              type="text"
                              defaultValue="Purchase wholesale seasonal sorghum & millet bags for market retail"
                              className="app-text-input"
                            />
                          </div>
                        </div>

                        <div className="form-action-row split">
                          <button
                            type="button"
                            className="btn-prev-step"
                            onClick={() => setAppStep(2)}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn-next-step"
                            onClick={() => setAppStep(4)}
                          >
                            <span>Next Step</span>
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {appStep === 4 && (
                      <div className="form-step-content">
                        <div className="form-card-title-row">
                          <Users size={18} color="#0d4e3d" />
                          <h2>Social Trust Verification</h2>
                        </div>

                        <div className="form-fields-grid">
                          <div className="form-group">
                            <label>Community Guardian / Referee</label>
                            <input
                              type="text"
                              value={formData.refereeName}
                              onChange={(e) => setFormData({ ...formData, refereeName: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                          <div className="form-group">
                            <label>Partner Mosque / Cooperative Guild</label>
                            <input
                              type="text"
                              value={formData.partnerMosque}
                              onChange={(e) => setFormData({ ...formData, partnerMosque: e.target.value })}
                              className="app-text-input"
                            />
                          </div>
                        </div>

                        <div className="form-action-row split">
                          <button
                            type="button"
                            className="btn-prev-step"
                            onClick={() => setAppStep(3)}
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            className="btn-next-step"
                            onClick={() => setPortalTab('dashboard')}
                          >
                            <span>Submit Application</span>
                            <CheckCircle2 size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3 Callout Cards Underneath Form */}
                  <div className="app-help-cards-grid">
                    <div className="app-help-card">
                      <div className="help-icon-circle green">
                        <ShieldCheck size={18} />
                      </div>
                      <h3>Sharia Board Verified</h3>
                      <p>Our contracts are audited by the Amanah Sharia Committee for full compliance.</p>
                    </div>

                    <div className="app-help-card">
                      <div className="help-icon-circle gold">
                        <TrendingUp size={18} />
                      </div>
                      <h3>Boost Your Score</h3>
                      <p>On-time repayment of this loan will increase your Trust Score by +50 points.</p>
                    </div>

                    <div className="app-help-card">
                      <div className="help-icon-circle blue">
                        <HelpCircle size={18} />
                      </div>
                      <h3>Need Assistance?</h3>
                      <p>Contact your regional coordinator via the Support tab if you have questions.</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* =======================================================
                   IMAGE 2: BENEFICIARY DASHBOARD VIEW (WITH AUTH SECTION)
                   ======================================================= */
                <div className="dashboard-view-container">
                  {/* Dashboard Auth Action Bar */}
                  <div className="dashboard-auth-strip">
                    {isLoggedIn ? (
                      <div className="dash-auth-status">
                        <span className="auth-status-indicator" />
                        <span className="auth-status-text">
                          Signed in as <strong>{currentUser.name}</strong> ({currentUser.email})
                        </span>
                        <button
                          type="button"
                          className="btn-auth-switch"
                          onClick={() => {
                            setAuthMode('login')
                            setAuthModalOpen(true)
                          }}
                        >
                          Switch Account
                        </button>
                        <button
                          type="button"
                          className="btn-auth-logout-inline"
                          onClick={handleLogOut}
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="dash-auth-prompt">
                        <div className="auth-prompt-info">
                          <LogIn size={18} color="#0d4e3d" />
                          <span>Sign in to view your live loan applications, trust score updates, and Sharia reviews.</span>
                        </div>
                        <div className="auth-prompt-buttons">
                          <button
                            type="button"
                            className="btn-dash-login"
                            onClick={() => {
                              setAuthMode('login')
                              setAuthModalOpen(true)
                            }}
                          >
                            Log In
                          </button>
                          <button
                            type="button"
                            className="btn-dash-signup"
                            onClick={() => {
                              setAuthMode('signup')
                              setAuthModalOpen(true)
                            }}
                          >
                            Sign Up
                          </button>
                          <button
                            type="button"
                            className="btn-dash-demo"
                            onClick={() => {
                              setIsLoggedIn(true)
                              setCurrentUser({
                                name: 'Ahmed Musa',
                                email: 'ahmed.musa@amanah.ng',
                                score: 850,
                                memberSince: '2022'
                              })
                            }}
                          >
                            Demo Login as Ahmed Musa
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="dash-greeting-row">
                    <div>
                      <span className="dash-eyebrow">BENEFICIARY PORTAL</span>
                      <h1 className="dash-greeting-title">Assalamu Alaikum, {isLoggedIn ? currentUser.name.split(' ')[0] : 'Beneficiary'}</h1>
                    </div>
                    <div className="verified-badge-pill">
                      <ShieldCheck size={16} />
                      <span>Profile Verified: Level 2</span>
                    </div>
                  </div>

                  <div className="dashboard-grid-layout">
                    {/* Left Column of Dashboard */}
                    <div className="dash-left-col">
                      {/* Application Status Card */}
                      <div className="dash-card status-card">
                        <div className="status-card-header">
                          <div>
                            <h2 className="status-title">Application Status</h2>
                            <span className="status-ref">Ref: #AMN-2024-0892 · Micro-Entrepreneur Loan</span>
                          </div>
                          <span className="processing-pill">Processing</span>
                        </div>

                        <div className="status-stepper-row">
                          <div className="status-node done">
                            <div className="status-circle">✓</div>
                            <span className="node-text">Submitted</span>
                          </div>
                          <div className="status-line done" />

                          <div className="status-node done">
                            <div className="status-circle">✓</div>
                            <span className="node-text">Social Verification</span>
                          </div>
                          <div className="status-line current" />

                          <div className="status-node current">
                            <div className="status-circle">
                              <Building size={14} />
                            </div>
                            <span className="node-text active">Sharia Review</span>
                          </div>
                          <div className="status-line" />

                          <div className="status-node">
                            <div className="status-circle">
                              <CreditCard size={14} />
                            </div>
                            <span className="node-text">Disbursement</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Required Banner */}
                      <div className="action-required-card">
                        <div className="action-card-icon">
                          <Upload size={22} color="#cca044" />
                        </div>
                        <div className="action-card-text">
                          <h3>Action Required: Document Upload</h3>
                          <p>
                            To complete the Sharia Review, please upload your 'Statement of Purpose' for the Qard Hassan funds.
                          </p>
                        </div>
                        <button type="button" className="btn-complete-task">
                          Complete Task
                        </button>
                      </div>

                      {/* Upcoming Milestones */}
                      <div className="dash-card milestones-card">
                        <h2 className="milestones-heading">Upcoming Milestones</h2>

                        <div className="milestones-list">
                          <div className="milestone-item active">
                            <span className="milestone-dot gold" />
                            <div className="milestone-details">
                              <h4>Sharia Board Interview</h4>
                              <p>Expected: Oct 24, 2024</p>
                            </div>
                            <ChevronRight size={18} color="#94a3b8" />
                          </div>

                          <div className="milestone-item locked">
                            <span className="milestone-dot gray" />
                            <div className="milestone-details">
                              <h4>Contract Signing (Murabaha/Qard)</h4>
                              <p>Expected: Oct 28, 2024</p>
                            </div>
                            <Lock size={16} color="#94a3b8" />
                          </div>

                          <div className="milestone-item locked">
                            <span className="milestone-dot gray" />
                            <div className="milestone-details">
                              <h4>Funds Disbursement</h4>
                              <p>Expected: Nov 02, 2024</p>
                            </div>
                            <Lock size={16} color="#94a3b8" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column of Dashboard */}
                    <div className="dash-right-col">
                      {/* Trust Score Card with Gauge */}
                      <div className="dash-card trust-score-card">
                        <div className="score-card-header">
                          <h3>Trust Score</h3>
                          <Award size={18} color="#b8860b" />
                        </div>

                        <div className="gauge-center">
                          <div className="circular-score-ring">
                            <div className="score-inner-val">
                              <span className="big-number">{isLoggedIn ? currentUser.score : '---'}</span>
                              <span className="score-grade">EXCELLENT</span>
                            </div>
                          </div>
                        </div>

                        <div className="next-tier-box">
                          <div className="tier-box-head">
                            <TrendingUp size={16} color="#b8860b" />
                            <span>Next Tier: Platinum Beneficiary</span>
                          </div>
                          <p className="tier-req-title">Requirements for 900+ score:</p>
                          <ul className="tier-req-list">
                            <li>✓ Community Endorsement (3/3)</li>
                            <li>⚬ One more on-time repayment</li>
                          </ul>
                        </div>
                      </div>

                      {/* Your Financial Impact */}
                      <div className="dash-card impact-stats-card">
                        <h3>Your Financial Impact</h3>
                        <div className="impact-metrics-dual">
                          <div>
                            <span className="metric-tag">TOTAL FUNDING</span>
                            <div className="metric-figure">₦450,000</div>
                          </div>
                          <div>
                            <span className="metric-tag">CYCLE PROGRESS</span>
                            <div className="metric-figure">Phase 1</div>
                          </div>
                        </div>
                        <div className="impact-quote-box">
                          <Award size={16} color="#6ee7b7" />
                          <p>"Your commitment to the Qard Hassan ethic strengthens our entire community."</p>
                        </div>
                      </div>

                      {/* Quick Resources */}
                      <div className="dash-card quick-resources-card">
                        <h3>Quick Resources</h3>
                        <div className="resources-btns-stack">
                          <button type="button" className="resource-link-btn">
                            <BookOpen size={16} />
                            <span>Understanding Sharia Rules</span>
                          </button>
                          <button type="button" className="resource-link-btn">
                            <MessageSquare size={16} />
                            <span>Talk to an Advisor</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Amanah Footer */}
          <footer className="amanah-portal-footer">
            <div className="amanah-footer-inner">
              <div className="amanah-footer-copy">
                <h3>Amanah Finance</h3>
                <p>© 2024 Amanah Microfinance. All Rights Reserved. Sharia Compliant (Qard Hassan).</p>
              </div>
              <div className="amanah-footer-links">
                <a href="#sharia-board">Sharia Board</a>
                <a href="#terms">Terms of Service</a>
                <a href="#reporting">Reporting</a>
                <a href="#zakat">Zakat Policy</a>
              </div>
            </div>
          </footer>

          {/* Login / Signup Modal now rendered globally above */}
        </div>
      ) : (
        /* -------------------------------------------------------------
            REGULAR MARKETING SITE VIEWS (OUR MODEL, IMPACT, HOW IT WORKS, TEAM)
            ------------------------------------------------------------- */
        <>
          {/* Universal Navbar */}
          <header className="site-navbar">
            <div className="navbar-container">
              <a
                href="#"
                className="brand-link"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveNav('model')
                  scrollToTop()
                }}
              >
                <span className="brand-logo-text">QardLink</span>
              </a>

              <nav className="nav-menu" aria-label="Main Navigation">
                <a
                  href="#model"
                  className={`nav-item ${activeNav === 'model' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveNav('model')
                    scrollToTop()
                  }}
                >
                  Our Model
                  {activeNav === 'model' && <span className="nav-indicator" />}
                </a>
                <a
                  href="#impact"
                  className={`nav-item ${activeNav === 'impact' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveNav('impact')
                    scrollToTop()
                  }}
                >
                  Impact
                  {activeNav === 'impact' && <span className="nav-indicator" />}
                </a>

                <a
                  href="#how-it-works"
                  className={`nav-item ${activeNav === 'how-it-works' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveNav('how-it-works')
                    scrollToTop()
                  }}
                >
                  How It Works
                  {activeNav === 'how-it-works' && <span className="nav-indicator" />}
                </a>
                <a
                  href="#team"
                  className={`nav-item ${activeNav === 'team' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveNav('team')
                    scrollToTop()
                  }}
                >
                  Team
                  {activeNav === 'team' && <span className="nav-indicator" />}
                </a>
              </nav>

              <div className="navbar-actions">
                {activeNav === 'model' && (
                  <>
                    <button type="button" className="icon-btn" aria-label="Search">
                      <Search size={18} strokeWidth={2} />
                    </button>
                    <button type="button" className="icon-btn" aria-label="Select Language">
                      <Globe size={18} strokeWidth={2} />
                    </button>
                    <button type="button" className="btn-outline">
                      Partner
                    </button>
                  </>
                )}
                {isLoggedIn ? (
                  <button
                    type="button"
                    className="btn-nav-account"
                    onClick={() => openPortal('dashboard')}
                  >
                    <User size={15} />
                    <span>{currentUser.name.split(' ')[0]}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-nav-login"
                    onClick={() => { setAuthMode('login'); setAuthModalOpen(true) }}
                  >
                    Sign In / Register
                  </button>
                )}
                <button type="button" className="btn-donate-solid">
                  Donate
                </button>
              </div>
            </div>
          </header>

          {/* VIEW 1: OUR MODEL (LANDING PAGE - ISLAMIC NON-INTEREST PLATFORM) */}
          {activeNav === 'model' && (
            <div className="landing-view">
              {/* Islamic Bismillah Header Banner */}
              <div className="bismillah-bar">
                <div className="bismillah-inner">
                  <span className="bismillah-arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                  <span className="bismillah-divider">·</span>
                  <span className="bismillah-tag">100% SHARIA-COMPLIANT NON-INTEREST PLATFORM · PURE QARD HASSAN (قرض حسن)</span>
                </div>
              </div>

              {/* Islamic Hero Section - Full Width */}
              <section className="islamic-hero-section" id="model-hero">
                <div className="islamic-hero-inner">
                  <div className="hero-content">
                    <div className="islamic-eyebrow-pill">
                      <Scale size={15} color="#cca044" />
                      <span>ZERO RIBA · ETHICAL BUSINESS CAPITAL</span>
                    </div>

                    <h1 className="islamic-hero-title">
                      Borrow Interest-Free Capital for Your Business. <br />
                      <span className="gold-shimmer-text">Repay on Agreed Terms.</span>
                    </h1>

                    <p className="islamic-hero-desc">
                      QardLink is an Islamic non-interest platform where entrepreneurs borrow capital to start, restock, or expand their business, and return only the exact principal based on a transparent mutual agreement. <strong>Zero interest. Zero hidden fees. 100% Halal.</strong>
                    </p>

                    <div className="islamic-hero-btn-group">
                      <button
                        type="button"
                        className="btn-gold-islamic"
                        onClick={() => openPortal('application')}
                      >
                        <HeartHandshake size={18} />
                        <span>Apply for Non-Interest Loan</span>
                      </button>

                      <a href="#repayment-calculator" className="btn-islamic-outline">
                        <Calculator size={18} />
                        <span>Calculate Agreed Repayment</span>
                      </a>

                      <button
                        type="button"
                        className="btn-video-hero-pill"
                        onClick={() => setVideoModalOpen(true)}
                      >
                        <Play size={14} fill="#ffffff" />
                        <span>Watch 4-Min Explainer</span>
                      </button>
                    </div>

                    {/* 4 Islamic Core Badges */}
                    <div className="hero-islamic-pillars-strip">
                      <div className="hero-pillar-chip">
                        <CheckCircle2 size={16} color="#cca044" />
                        <div>
                          <strong>0% Interest (Zero Riba)</strong>
                          <span>Repay exactly what you borrow</span>
                        </div>
                      </div>

                      <div className="hero-pillar-chip">
                        <CheckCircle2 size={16} color="#cca044" />
                        <div>
                          <strong>Mutual Agreement</strong>
                          <span>Terms tailored to your cashflow</span>
                        </div>
                      </div>

                      <div className="hero-pillar-chip">
                        <CheckCircle2 size={16} color="#cca044" />
                        <div>
                          <strong>Character Over Collateral</strong>
                          <span>Social vouchers, no land deeds</span>
                        </div>
                      </div>

                      <div className="hero-pillar-chip">
                        <CheckCircle2 size={16} color="#cca044" />
                        <div>
                          <strong>Sharia-Certified</strong>
                          <span>Governed by Islamic jurisprudence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <main className="main-content">
                {/* Interactive Islamic Agreement & Repayment Calculator */}
                <section className="calculator-section" id="repayment-calculator">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">TRANSPARENT AMANAH CONTRACT</span>
                    <h2 className="serif-title">Calculate Your Agreed Repayment</h2>
                    <p className="serif-subtitle max-w-wide">
                      In Islamic Qard Hassan, you return only what you borrowed. No compound interest, no penalty extortion, and no hidden surcharges. See how your mutually agreed installment schedule works.
                    </p>
                  </div>

                  <div className="calculator-container-card">
                    <div className="calculator-controls-side">
                      <div className="calc-control-group">
                        <div className="calc-label-row">
                          <label>How much capital does your business need?</label>
                          <span className="calc-selected-val">₦{calcAmount.toLocaleString()}</span>
                        </div>

                        {/* Preset Amount Pills */}
                        <div className="amount-preset-pills">
                          {[50000, 100000, 250000, 500000, 1000000].map((amt) => (
                            <button
                              key={amt}
                              type="button"
                              className={`preset-pill ${calcAmount === amt ? 'active' : ''}`}
                              onClick={() => setCalcAmount(amt)}
                            >
                              ₦{(amt / 1000).toFixed(0)}k
                            </button>
                          ))}
                        </div>

                        {/* Amount Slider */}
                        <input
                          type="range"
                          min="20000"
                          max="2000000"
                          step="10000"
                          value={calcAmount}
                          onChange={(e) => setCalcAmount(Number(e.target.value))}
                          className="islamic-calc-slider"
                        />
                        <div className="slider-range-labels">
                          <span>₦20,000 (Micro Starter)</span>
                          <span>₦2,000,000 (Growth Capital)</span>
                        </div>
                      </div>

                      <div className="calc-control-group">
                        <div className="calc-label-row">
                          <label>Agreed Repayment Duration</label>
                          <span className="calc-selected-val">{calcDuration} Months</span>
                        </div>

                        <div className="duration-pills-row">
                          {[3, 6, 9, 12].map((months) => (
                            <button
                              key={months}
                              type="button"
                              className={`duration-pill ${calcDuration === months ? 'active' : ''}`}
                              onClick={() => setCalcDuration(months)}
                            >
                              {months} Months
                            </button>
                          ))}
                        </div>
                        <p className="calc-help-note">
                          ✦ Repayment schedule is finalized jointly to suit your market turnover without distress.
                        </p>
                      </div>
                    </div>

                    <div className="calculator-breakdown-side">
                      <div className="breakdown-card-inner">
                        <div className="breakdown-header">
                          <span className="breakdown-badge">SHARIA CONTRACT BREAKDOWN</span>
                          <h3>Qard al-Hasan Agreement</h3>
                        </div>

                        <div className="breakdown-rows">
                          <div className="breakdown-row">
                            <span className="b-label">Principal Borrowed</span>
                            <span className="b-value">₦{calcAmount.toLocaleString()}</span>
                          </div>

                          <div className="breakdown-row">
                            <span className="b-label">Interest Charged (Riba)</span>
                            <span className="b-value green-badge">₦0 (0.00% Halal)</span>
                          </div>

                          <div className="breakdown-row">
                            <span className="b-label">Admin / Hidden Fees</span>
                            <span className="b-value green-badge">₦0 (Zero Fees)</span>
                          </div>

                          <div className="breakdown-row total-row">
                            <span className="b-label">Total Amount to Return</span>
                            <span className="b-value highlight-gold">₦{calcAmount.toLocaleString()}</span>
                          </div>

                          <div className="breakdown-row monthly-row">
                            <span className="b-label">Agreed Monthly Installment</span>
                            <span className="b-value monthly-amt">
                              ₦{Math.round(calcAmount / calcDuration).toLocaleString()}
                              <span className="per-month"> / month</span>
                            </span>
                          </div>
                        </div>

                        <div className="islamic-covenant-box">
                          <ShieldCheck size={18} color="#0d4e3d" />
                          <span>Strictly Sharia compliant: Return principal as agreed. No late compound interest.</span>
                        </div>

                        <button
                          type="button"
                          className="btn-apply-calc-amount"
                          onClick={() => handleApplyWithAmount(calcAmount)}
                        >
                          <span>Apply for ₦{calcAmount.toLocaleString()} Interest-Free Loan</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How Borrowing on QardLink Works (4 Clear, Simple Steps) */}
                <section className="hiw-simple-section" id="how-it-works-summary">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">SIMPLE &amp; CLEAR PROCESS</span>
                    <h2 className="serif-title">How QardLink Works in 4 Steps</h2>
                    <p className="serif-subtitle max-w-wide">
                      Borrowing for your business without interest is simple, dignified, and rooted in Islamic trust.
                    </p>
                  </div>

                  <div className="simple-steps-grid">
                    <div className="simple-step-card">
                      <div className="step-number-bubble">1</div>
                      <div className="step-icon-box">
                        <Store size={22} color="#0d4e3d" />
                      </div>
                      <h3>Submit Business Need</h3>
                      <p>
                        Tell us about your business, the stock or machinery you need to buy, and your current sales. No bank title deeds required.
                      </p>
                    </div>

                    <div className="simple-step-card">
                      <div className="step-number-bubble">2</div>
                      <div className="step-icon-box">
                        <Handshake size={22} color="#0d4e3d" />
                      </div>
                      <h3>Formulate Mutual Agreement</h3>
                      <p>
                        We sit with you to agree upon a realistic, compassionate repayment timeline that fits your real business revenue cycles.
                      </p>
                    </div>

                    <div className="simple-step-card">
                      <div className="step-number-bubble">3</div>
                      <div className="step-icon-box">
                        <Coins size={22} color="#0d4e3d" />
                      </div>
                      <h3>Receive 100% Halal Funds</h3>
                      <p>
                        Your 0% interest capital (Qard Hassan) is disbursed in full into your account. Every single Naira is put to work in your trade.
                      </p>
                    </div>

                    <div className="simple-step-card">
                      <div className="step-number-bubble">4</div>
                      <div className="step-icon-box">
                        <RefreshCw size={22} color="#0d4e3d" />
                      </div>
                      <h3>Repay as Agreed &amp; Empower</h3>
                      <p>
                        Return the exact principal according to agreement. Your returned funds immediately replenish the pool to help another entrepreneur.
                      </p>
                    </div>
                  </div>
                </section>

                {/* The 4 Sacred Islamic Principles of QardLink */}
                <section className="islamic-pillars-section" id="islamic-principles">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">OUR SHARIA FOUNDATION</span>
                    <h2 className="serif-title">The 4 Islamic Pillars of QardLink</h2>
                    <p className="serif-subtitle max-w-wide">
                      Finance built on brotherhood, justice, and divine blessing — never on usury or exploitation.
                    </p>
                  </div>

                  <div className="pillars-grid-container">
                    {islamicPillars.map((pillar) => {
                      const Icon = pillar.icon
                      return (
                        <div key={pillar.title} className="pillar-islamic-card">
                          <div className="pillar-header-row">
                            <div className="pillar-icon-box">
                              <Icon size={24} color="#cca044" />
                            </div>
                            <span className="pillar-arabic-text">{pillar.arabic}</span>
                          </div>
                          <h3 className="pillar-card-title">{pillar.title}</h3>
                          <p className="pillar-card-desc">{pillar.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </section>

                {/* Side-by-Side Comparison: Conventional vs QardLink */}
                <section className="comparison-section">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">ETHICAL DIFFERENCE</span>
                    <h2 className="serif-title">Conventional Lenders vs. QardLink</h2>
                    <p className="serif-subtitle max-w-wide">
                      See why Muslim entrepreneurs choose QardLink to protect their livelihood from predatory usury.
                    </p>
                  </div>

                  <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Key Feature</th>
                          <th className="th-conventional">Commercial Moneylenders</th>
                          <th className="th-qardlink">QardLink Islamic Platform</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonPoints.map((pt) => (
                          <tr key={pt.feature} className={pt.highlight ? 'row-highlight' : ''}>
                            <td className="col-feature">{pt.feature}</td>
                            <td className="col-commercial">
                              <span className="commercial-cross">✕</span> {pt.commercial}
                            </td>
                            <td className="col-qardlink">
                              <span className="qardlink-check">✓</span> <strong>{pt.qardlink}</strong>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Video Spotlight Section */}
                <section className="video-spotlight-section" id="video-intro">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">DISCOVER OUR MISSION</span>
                    <h2 className="serif-title">Understanding QardLink in 4 Minutes</h2>
                    <p className="serif-subtitle max-w-wide">
                      Executive Director Dr. Farouk Sanusi explains how our interest-free community revolving fund works, why social collateral succeeds, and how Sharia-compliant Waqf creates generational impact.
                    </p>
                  </div>

                  <div className="video-card-container">
                    <div
                      className="youtube-thumbnail-card"
                      onClick={() => setVideoModalOpen(true)}
                      role="button"
                      tabIndex={0}
                      aria-label="Play video explaining QardLink"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1600&q=80"
                        alt="Dr. Farouk Sanusi explaining QardLink"
                        className="video-thumb-img"
                      />

                      <div className="video-thumb-overlay">
                        <div className="video-top-bar">
                          <div className="youtube-badge">
                            <span className="yt-red-dot" />
                            <span>QARDLINK KEYNOTE EXPLAINER</span>
                          </div>
                          <div className="video-duration">4:18</div>
                        </div>

                        <div className="video-center-play">
                          <div className="play-button-outer-pulse">
                            <div className="play-button-inner">
                              <Play size={32} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
                            </div>
                          </div>
                          <div className="play-text-caption">Watch How QardLink Works</div>
                        </div>

                        <div className="video-bottom-bar">
                          <div className="video-author-info">
                            <strong>Dr. Farouk Sanusi</strong>
                            <span>Director of Ethical Finance · QardLink Foundation</span>
                          </div>
                          <div className="video-quality-tag">1080p HD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Eligible Halal Small Businesses We Empower */}
                <section className="mentorship-section" id="businesses-supported">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">HALAL ENTERPRISE FOCUS</span>
                    <h2 className="serif-title">Businesses We Empower</h2>
                    <p className="serif-subtitle max-w-wide">
                      From local open-market vendors to agricultural cooperatives, we fund legitimate halal enterprises that drive real community wealth.
                    </p>
                  </div>

                  <div className="mentorship-grid">
                    {mentorshipCards.map((card) => {
                      const IconComp = card.icon
                      return (
                        <div key={card.title} className="mentorship-card">
                          <div className="mentor-icon-circle">
                            <IconComp size={20} strokeWidth={2.2} />
                          </div>
                          <h3 className="mentor-title">{card.title}</h3>
                          <p className="mentor-desc">{card.text}</p>
                          <button
                            type="button"
                            className="mentor-link-btn"
                            onClick={() => openPortal('application')}
                          >
                            <span>Apply for This Sector</span>
                            <ArrowUpRight size={14} strokeWidth={2.5} />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </section>


                {/* FAQ section follows directly */}
                {/* Frequently Asked Islamic Questions Accordion */}
                <section className="faq-section" id="islamic-faq">
                  <div className="section-header center">
                    <span className="section-eyebrow-pill">CLARITY &amp; PEACE OF MIND</span>
                    <h2 className="serif-title">Frequently Asked Questions</h2>
                    <p className="serif-subtitle max-w-wide">
                      Everything you need to know about borrowing without interest and returning according to agreement.
                    </p>
                  </div>

                  <div className="faq-accordion-container">
                    {islamicFaqs.map((faq, idx) => (
                      <div
                        key={faq.q}
                        className={`faq-item-card ${openFaq === idx ? 'open' : ''}`}
                      >
                        <button
                          type="button"
                          className="faq-question-btn"
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        >
                          <span className="faq-question-text">{faq.q}</span>
                          <span className="faq-toggle-icon">{openFaq === idx ? '−' : '+'}</span>
                        </button>
                        {openFaq === idx && (
                          <div className="faq-answer-panel">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Islamic Closing Call to Action Banner */}
                <section className="islamic-cta-banner-section">
                  <div className="islamic-cta-banner-inner">
                    <div className="cta-banner-content">
                      <span className="cta-eyebrow">READY TO GROW YOUR BUSINESS?</span>
                      <h2 className="cta-banner-title">
                        Begin Your Halal Business Journey Today. <br />
                        Zero Interest. Dignified Partnership.
                      </h2>
                      <p className="cta-banner-desc">
                        Stop paying crippling interest to predatory moneylenders. Join QardLink today to borrow the capital your enterprise needs and repay on an honest, agreed-upon schedule.
                      </p>

                      <div className="cta-btn-group">
                        <button
                          type="button"
                          className="btn-cta-apply-gold"
                          onClick={() => openPortal('application')}
                        >
                          <HeartHandshake size={18} />
                          <span>Apply for Non-Interest Loan Now</span>
                        </button>
                        <button
                          type="button"
                          className="btn-cta-how-it-works"
                          onClick={() => {
                            setActiveNav('how-it-works')
                            scrollToTop()
                          }}
                        >
                          <span>Explore How It Works</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

              {/* Landing Page Footer */}
              <footer className="footer-container">
                <div className="footer-inner">
                  <div className="footer-columns-grid">
                    <div className="footer-brand-col">
                      <h3 className="footer-brand-title">QardLink</h3>
                      <p className="footer-brand-tagline">
                        Empowering micro and small businesses through dignified, interest-free Islamic financing (Qard al-Hasan).
                      </p>
                      <div className="social-icons-row">
                        <a href="#twitter" aria-label="Twitter" className="social-circle-btn">
                          <TwitterIcon />
                        </a>
                        <a href="#linkedin" aria-label="LinkedIn" className="social-circle-btn">
                          <LinkedinIcon />
                        </a>
                        <a href="#instagram" aria-label="Instagram" className="social-circle-btn">
                          <InstagramIcon />
                        </a>
                      </div>
                    </div>

                    <div className="footer-nav-col">
                      <h4 className="footer-heading">Islamic Financing</h4>
                      <ul className="footer-links-list">
                        <li>
                          <a
                            href="#apply"
                            onClick={(e) => {
                              e.preventDefault()
                              openPortal('application')
                            }}
                          >
                            Apply for Qard Loan
                          </a>
                        </li>
                        <li>
                          <a
                            href="#portal"
                            onClick={(e) => {
                              e.preventDefault()
                              openPortal('dashboard')
                            }}
                          >
                            Beneficiary Dashboard
                          </a>
                        </li>
                        <li><a href="#repayment-calculator">Repayment Calculator</a></li>
                        <li><a href="#islamic-principles">Sharia Compliance</a></li>
                      </ul>
                    </div>

                    <div className="footer-nav-col">
                      <h4 className="footer-heading">About &amp; Governance</h4>
                      <ul className="footer-links-list">
                        <li>
                          <a
                            href="#how-it-works"
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveNav('how-it-works')
                              scrollToTop()
                            }}
                          >
                            How It Works
                          </a>
                        </li>
                        <li>
                          <a
                            href="#impact"
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveNav('impact')
                              scrollToTop()
                            }}
                          >
                            Verified Impact
                          </a>
                        </li>
                        <li>
                          <a
                            href="#team"
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveNav('team')
                              scrollToTop()
                            }}
                          >
                            Our Team &amp; Sharia Board
                          </a>
                        </li>
                        <li><a href="#islamic-faq">Frequently Asked Questions</a></li>
                      </ul>
                    </div>

                    <div className="footer-newsletter-col">
                      <div className="newsletter-card">
                        <h4 className="newsletter-title">Stay impactful!</h4>
                        <p className="newsletter-desc">
                          Get monthly updates on revolving community funds and new merchant stories.
                        </p>
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="newsletter-input"
                          />
                          <button type="submit" className="newsletter-submit-btn">
                            {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="footer-bottom-bar">
                    <div className="legal-notice">
                      © 2024 QardLink Foundation. All rights reserved. Registered Islamic Micro-Finance Platform. Sharia Compliant (Qard Hassan).
                    </div>
                    <div className="legal-links">
                      <a href="#privacy">Privacy Policy</a>
                      <a href="#terms">Terms of Service</a>
                      <a href="#sharia-charter">Sharia Charter</a>
                      <a href="#fraud">Fraud Prevention</a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="back-to-top-btn"
                  aria-label="Back to top"
                >
                  <ArrowUp size={18} strokeWidth={2.5} />
                </button>
              </footer>
            </div>
          )}

          {/* VIEW 2: IMPACT PAGE */}
          {activeNav === 'impact' && (
            <main className="impact-page-view">

              {/* Hero */}
              <section className="impact-hero-banner">
                <div className="impact-hero-content">
                  <span className="impact-eyebrow">REAL IMPACT · قرض حسن</span>
                  <h1 className="impact-hero-title">
                    Stories of Real People.<br />
                    <span className="impact-hero-gold">Zero Interest. Real Change.</span>
                  </h1>
                  <p className="impact-hero-desc">
                    Every loan on QardLink is a Qard Hassan — a benevolent, interest-free agreement. No extra fees, no compound interest. Just capital disbursed honestly and returned on agreed terms. These are the people behind the numbers.
                  </p>
                  <div className="impact-hero-badges">
                    <span className="impact-badge-pill">✓ Sharia Board Verified</span>
                    <span className="impact-badge-pill">✓ 0% Interest Always</span>
                    <span className="impact-badge-pill">✓ Mutual Agreement</span>
                    <span className="impact-badge-pill">✓ Character-Based Trust</span>
                  </div>
                </div>
              </section>

              {/* Quick Stats Strip */}
              <section className="impact-quick-stats">
                {impactMetrics.map((item) => (
                  <div key={item.label} className="impact-quick-stat-item">
                    <span className="impact-quick-num">{item.stat}</span>
                    <span className="impact-quick-label">{item.label}</span>
                  </div>
                ))}
              </section>

              {/* Real Borrower Stories — Full Cards */}
              <section className="impact-stories-full-section">
                <div className="impact-stories-header">
                  <span className="section-eyebrow-pill">REAL BORROWER STORIES</span>
                  <h2 className="serif-title">Business Owners Who Borrowed &amp; Repaid — Interest Free</h2>
                  <p className="serif-subtitle max-w-wide">
                    These entrepreneurs came with a business need, not collateral. They borrowed only what they needed and returned only what they borrowed. Every story is a proof that ethical finance works.
                  </p>
                </div>

                <div className="impact-stories-full-grid">
                  {stories.map((story) => (
                    <article key={story.title} className="impact-story-full-card">
                      <div className="impact-story-img-wrap">
                        <img src={story.image} alt={story.title} className="impact-story-img" />
                        <span className="impact-story-sector-badge">{story.sector}</span>
                      </div>
                      <div className="impact-story-body">
                        <div className="impact-story-meta-row">
                          <span className="impact-story-name">{story.name}</span>
                          <span className="impact-story-location">📍 {story.location}</span>
                        </div>
                        <h3 className="impact-story-title">{story.title}</h3>
                        <p className="impact-story-quote">{story.quote}</p>
                        <div className="impact-story-loan-strip">
                          <div className="impact-loan-pill">
                            <span className="loan-pill-label">Borrowed</span>
                            <span className="loan-pill-value">{story.borrowed}</span>
                          </div>
                          <div className="impact-loan-pill">
                            <span className="loan-pill-label">Duration</span>
                            <span className="loan-pill-value">{story.duration}</span>
                          </div>
                          <div className="impact-loan-pill riba-zero">
                            <span className="loan-pill-label">Interest</span>
                            <span className="loan-pill-value">₦0</span>
                          </div>
                        </div>
                        <div className="impact-story-result">
                          <span className="impact-result-icon">✦</span>
                          <span>{story.result}</span>
                        </div>
                        <button
                          type="button"
                          className="impact-story-apply-btn"
                          onClick={() => openPortal('application')}
                        >
                          Apply Like {story.name.split(' ')[0]}
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Where We Operate */}
              <section className="impact-where-section">
                <div className="impact-where-inner">
                  <div className="impact-where-copy">
                    <span className="section-eyebrow-pill light">WHERE WE OPERATE</span>
                    <h2 className="serif-title white-title">QardLink is Active Across Nigeria</h2>
                    <p className="impact-where-desc">
                      We serve business owners in communities where banks demand collateral that most people don't have. QardLink works through partner mosques, trusted community leaders, and simple digital onboarding — bringing halal capital to those who need it most.
                    </p>
                    <div className="impact-where-highlights">
                      <div className="impact-where-badge">
                        <MapPin size={18} color="#cca044" />
                        <span><strong>12+ Nigerian States</strong> currently active</span>
                      </div>
                      <div className="impact-where-badge">
                        <MapPin size={18} color="#cca044" />
                        <span><strong>80+ Partner Mosques</strong> vouching borrowers</span>
                      </div>
                      <div className="impact-where-badge">
                        <MapPin size={18} color="#cca044" />
                        <span><strong>Community leaders</strong> involved in every approval</span>
                      </div>
                    </div>
                  </div>

                  <div className="impact-where-table-card">
                    <h3 className="table-card-heading">Active Loan Deployments (2024)</h3>
                    <div className="regional-list">
                      {regionalStats.map((reg) => (
                        <div key={reg.state} className="regional-row">
                          <span className="reg-state">{reg.state}</span>
                          <span className="reg-loans">{reg.loans}</span>
                          <span className="reg-capital">{reg.capital}</span>
                        </div>
                      ))}
                    </div>
                    <div className="impact-where-note">
                      All figures represent interest-free Qard Hassan loans only. Capital returned is immediately recycled to the next borrower.
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="audit-transparency-section">
                <div className="audit-card">
                  <div className="audit-icon-wrap">
                    <HeartHandshake size={32} color="#0d4e3d" />
                  </div>
                  <div className="audit-text">
                    <h3>Your Story Could Be Next</h3>
                    <p>
                      Join thousands of entrepreneurs who borrow without paying a single kobo in interest. Apply now, agree on repayment terms, and grow your halal business.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-gold"
                    style={{ flexShrink: 0 }}
                    onClick={() => openPortal('application')}
                  >
                    <span>Apply for Qard Hassan</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </section>





              <footer className="footer-container">
                <div className="footer-inner">
                  <div className="footer-columns-grid">
                    <div className="footer-brand-col">
                      <h3 className="footer-brand-title">QardLink</h3>
                      <p className="footer-brand-tagline">
                        Empowering communities through dignified, transparent, and Sharia-compliant financial stewardship.
                      </p>
                    </div>
                    <div className="footer-nav-col">
                      <h4 className="footer-heading">Microfinance</h4>
                      <ul className="footer-links-list">
                        <li><a href="#apply">Apply for Qard</a></li>
                        <li><a href="#sharia">Sharia Compliance</a></li>
                        <li><a href="#voucher">Borrower Voucher System</a></li>
                      </ul>
                    </div>
                    <div className="footer-nav-col">
                      <h4 className="footer-heading">Audited Metrics</h4>
                      <ul className="footer-links-list">
                        <li><a href="#report">2024 Audit Disclosure</a></li>
                        <li><a href="#ledger">Real-time Public Ledger</a></li>
                        <li><a href="#governance">Sharia Advisory Board</a></li>
                      </ul>
                    </div>
                    <div className="footer-nav-col">
                      <h4 className="footer-heading">Support</h4>
                      <ul className="footer-links-list">
                        <li><a href="#contact">Contact Stewardship</a></li>
                        <li><a href="#donate">Contribute to Waqf</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-bottom-bar">
                    <div className="legal-notice">
                      © 2024 QardLink Foundation. All rights reserved. Registered Institutional NGO.
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          )}

          {/* VIEW 3: HOW IT WORKS */}
          {activeNav === 'how-it-works' && (
            <main className="how-it-works-view">
              <section className="hiw-hero">
                <div className="hiw-hero-badge">THE QARDLINK PROCESS</div>
                <h1 className="hiw-hero-title">The Path to Economic Dignity</h1>
                <p className="hiw-hero-desc">
                  Bridging ethical capital and community aspiration through a transparent, interest-free model rooted in Sharia-compliant microfinance.
                </p>
                <div className="hiw-hero-buttons">
                  <button
                    type="button"
                    className="btn-apply-dark"
                    onClick={() => openPortal('application')}
                  >
                    Apply Now
                  </button>
                  <button type="button" className="btn-guide-outline">
                    Download Guide
                  </button>
                </div>
              </section>

              <section className="process-steps-section">
                <div className="steps-container">
                  <div className="steps-connector-line" />
                  <div className="steps-grid">
                    {steps.map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.step} className="step-card">
                          <div
                            className="step-icon-bubble"
                            style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                          >
                            <Icon size={22} strokeWidth={2.2} />
                          </div>
                          <h3 className="step-title">{item.title}</h3>
                          <p className="step-desc">
                            <strong>{item.boldLead}</strong> {item.desc}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              <section className="tiers-section">
                <div className="tiers-header">
                  <h2 className="tiers-title">Trust Score Tiers</h2>
                  <p className="tiers-subtitle">
                    Growth is earned through consistency. As your business succeeds and your trust score rises, you unlock higher funding tiers with fewer requirements.
                  </p>
                </div>

                <div className="tiers-grid">
                  {trustTiers.map((tier) => {
                    const BadgeIcon = tier.badgeIcon
                    return (
                      <div
                        key={tier.tier}
                        className={`tier-card ${tier.highlighted ? 'tier-highlighted' : ''}`}
                      >
                        <div className="tier-top-row">
                          <span className="tier-badge-label">{tier.tier}</span>
                          <div
                            className="tier-badge-icon"
                            style={{ color: tier.badgeColor }}
                          >
                            <BadgeIcon size={18} strokeWidth={2.2} />
                          </div>
                        </div>
                        <div className="tier-amount">{tier.amount}</div>
                        <div className="tier-status">{tier.status}</div>

                        <ul className="tier-checklist">
                          {tier.items.map((it) => (
                            <li key={it}>
                              <span className="tier-bullet">⚬</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section className="communities-banner-wrap">
                <div className="communities-banner">
                  <div className="communities-overlay-content">
                    <h2 className="communities-title">Empowering Real Communities</h2>
                    <p className="communities-desc">
                      Every loan provided through QardLink translates into real-world impact — helping mothers start stalls, craftsmen buy tools, and youth build digital services.
                    </p>
                  </div>
                </div>
              </section>

              <section className="revolution-cta-section">
                <div className="revolution-cta-inner">
                  <div className="revolution-bg-svg" aria-hidden="true">
                    <svg width="220" height="180" viewBox="0 0 200 160" fill="none">
                      <polygon points="100,10 20,50 180,50" stroke="rgba(255,255,255,0.12)" strokeWidth="4" fill="rgba(255,255,255,0.02)" />
                      <rect x="18" y="50" width="164" height="12" stroke="rgba(255,255,255,0.12)" strokeWidth="3" fill="rgba(255,255,255,0.04)" />
                      <rect x="34" y="66" width="18" height="74" rx="2" fill="rgba(255,255,255,0.1)" />
                      <rect x="74" y="66" width="18" height="74" rx="2" fill="rgba(255,255,255,0.1)" />
                      <rect x="114" y="66" width="18" height="74" rx="2" fill="rgba(255,255,255,0.1)" />
                      <rect x="154" y="66" width="18" height="74" rx="2" fill="rgba(255,255,255,0.1)" />
                      <rect x="14" y="142" width="172" height="12" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="3" fill="rgba(255,255,255,0.06)" />
                    </svg>
                  </div>

                  <div className="revolution-cta-content">
                    <h2 className="revolution-title">
                      Join the Ethical Financial Revolution
                    </h2>
                    <p className="revolution-desc">
                      Whether you're looking for interest-free capital or want to support your community, we have a place for you.
                    </p>
                    <div className="revolution-buttons">
                      <button
                        type="button"
                        className="btn-start-app"
                        onClick={() => openPortal('application')}
                      >
                        Start Your Application
                      </button>
                      <button type="button" className="btn-support-fund">
                        Support the Fund
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="hiw-footer">
                <div className="hiw-footer-inner">
                  <div className="hiw-footer-grid">
                    <div className="hiw-brand-name">QardLink</div>
                    <div className="hiw-footer-col">
                      <h4>GOVERNANCE</h4>
                      <ul>
                        <li><a href="#sharia">Sharia Compliance</a></li>
                        <li><a href="#regulatory">Regulatory Disclosures</a></li>
                        <li><a href="#annual">Annual Reports</a></li>
                      </ul>
                    </div>
                    <div className="hiw-footer-col">
                      <h4>RESOURCES</h4>
                      <ul>
                        <li><a href="#handbook">Beneficiary Handbook</a></li>
                        <li><a href="#dashboard">Impact Dashboard</a></li>
                        <li><a href="#stories">Success Stories</a></li>
                      </ul>
                    </div>
                    <div className="hiw-footer-col">
                      <h4>LEGAL</h4>
                      <ul>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="hiw-footer-bottom">
                    <p>© 2024 QardLink Foundation. Sharia-Compliant Interest-Free Microfinance. Registered Institutional NGO.</p>
                  </div>
                </div>
              </footer>
            </main>
          )}

          {/* VIEW 4: TEAM */}
          {activeNav === 'team' && (
            <main className="team-main">
              <section className="team-hero-banner" id="team">
                <div className="team-hero-content">
                  <span className="team-eyebrow">LEADERSHIP &amp; LEGACY</span>
                  <h1 className="team-hero-title">
                    The Visionaries Behind the Mission
                  </h1>
                  <p className="team-hero-desc">
                    Bridging the gap in financial inclusion through Sharia-compliant ethics and
                    modern technology. Meet the team dedicated to empowering Northern
                    Nigeria's underserved communities.
                  </p>
                </div>
              </section>

              <section className="core-leadership-section">
                <div className="leadership-header">
                  <h2 className="leadership-title">Core Leadership</h2>
                  <div className="title-gold-accent" />
                </div>

                <div className="team-cards-grid">
                  {teamMembers.map((member) => (
                    <article key={member.name} className="member-card">
                      <div className="member-image-wrap">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="member-photo"
                        />
                      </div>
                      <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                        <p className="member-bio">{member.bio}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="trust-section">
                <div className="trust-header">
                  <h2 className="trust-title">Our Foundation of Trust</h2>
                  <p className="trust-subtitle">
                    Beyond finance, we are committed to a set of core principles that guide every
                    decision and transaction we make.
                  </p>
                </div>

                <div className="trust-pillars-grid">
                  {trustPrinciples.map((principle) => {
                    const Icon = principle.icon
                    return (
                      <div key={principle.title} className="trust-pillar-card">
                        <div className="trust-icon-circle">
                          <Icon size={20} strokeWidth={2.2} />
                        </div>
                        <h3 className="pillar-title">{principle.title}</h3>
                        <p className="pillar-desc">{principle.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section className="cta-banner-section">
                <div className="cta-banner-inner">
                  <div className="cta-banner-bg-elements" />
                  <div className="cta-banner-content">
                    <h2 className="cta-banner-title">Building the Future Together</h2>
                    <p className="cta-banner-desc">
                      Are you passionate about ethical finance and social impact? QardLink is always
                      looking for dedicated volunteers and professionals to help us scale our mission
                      across Northern Nigeria.
                    </p>
                    <div className="cta-btn-group">
                      <button type="button" className="btn-explore-careers">
                        <Briefcase size={16} strokeWidth={2.2} />
                        <span>Explore Careers</span>
                      </button>
                      <button type="button" className="btn-volunteer-now">
                        <UserPlus size={16} strokeWidth={2.2} />
                        <span>Volunteer Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="team-footer">
                <div className="team-footer-inner">
                  <div className="team-footer-grid">
                    <div className="footer-col-brand">
                      <h3 className="footer-logo">QardLink</h3>
                      <p className="footer-mission-text">
                        Empowering the Sahel through Sharia-compliant microfinance. We provide interest-free capital to foster sustainable economic growth and financial dignity.
                      </p>
                      <button type="button" className="footer-share-btn" aria-label="Share">
                        <Share2 size={14} />
                      </button>
                    </div>

                    <div className="footer-col-nav">
                      <h4 className="footer-col-heading">Quick Links</h4>
                      <ul className="footer-links">
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#sharia">Sharia Compliance</a></li>
                      </ul>
                    </div>

                    <div className="footer-col-nav">
                      <h4 className="footer-heading">Transparency</h4>
                      <ul className="footer-links">
                        <li><a href="#regulatory">Regulatory Disclosure</a></li>
                        <li><a href="#reports">Annual Reports</a></li>
                        <li><a href="#impact">Impact Data</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="team-footer-bottom">
                    <p className="copyright-line">
                      © 2024 QardLink Foundation. Sharia-Compliant Interest-Free Microfinance. Registered Institutional NGO.
                    </p>
                  </div>
                </div>
              </footer>
            </main>
          )}

          {/* Video Modal Player */}
          {videoModalOpen && (
            <div className="video-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
              <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="video-modal-close"
                  onClick={() => setVideoModalOpen(false)}
                  aria-label="Close video"
                >
                  <X size={20} />
                </button>
                <div className="video-player-frame">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="What is QardLink? Ethical Finance Explainer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
