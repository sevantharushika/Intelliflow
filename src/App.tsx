import { useEffect, useState } from 'react'

import blankOne from './assets/team/blank-1.svg'
import blankTwo from './assets/team/blank-2.svg'
import blankThree from './assets/team/blank-3.svg'
import blankFour from './assets/team/blank-4.svg'
import blankFive from './assets/team/blank-5.svg'

const teamMembers = [
  { name: 'Sisura', image: blankOne },
  { name: 'Sevan', image: blankTwo },
  { name: 'Lenmini', image: blankThree },
  { name: 'Oshan', image: blankFour },
  { name: 'Nirosh', image: blankFive },
]

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Problem', id: 'problem' },
  { label: 'System', id: 'system' },
  { label: 'Technology', id: 'technology' },
  { label: 'Results', id: 'results' },
  { label: 'Team', id: 'team' },
]

const problemCards = [
  {
    icon: '◌',
    title: 'Manual Monitoring',
    text: 'Conventional IV monitoring often requires repeated observation of the drip chamber.',
  },
  {
    icon: '↗',
    title: 'Flow Variation',
    text: 'Changes in physical conditions can affect the actual infusion flow rate.',
  },
  {
    icon: '⚑',
    title: 'Delayed Detection',
    text: 'Continuous monitoring can help detect abnormal operating conditions more quickly.',
  },
]

const systemNodes = [
  'IV Drip Chamber',
  'Optical Sensor',
  'STM32',
  'Servo Flow Control',
  'ESP-01',
  'Firebase',
  'Flutter App',
]

const workflowSteps = [
  {
    number: '01',
    title: 'Detect',
    text: 'Optical sensing captures individual IV drops.',
  },
  {
    number: '02',
    title: 'Calculate',
    text: 'STM32 processes the signal and estimates the flow rate.',
  },
  {
    number: '03',
    title: 'Compare & Control',
    text: 'The measured flow is compared with the desired value and the control mechanism adjusts the tubing.',
  },
  {
    number: '04',
    title: 'Transmit',
    text: 'ESP-01 sends the system data wirelessly.',
  },
  {
    number: '05',
    title: 'Monitor',
    text: 'Firebase and the Flutter application display measurements, device status, and warnings.',
  },
]

const hardwareCards = [
  {
    title: 'Optical Drop Sensor',
    text: 'Detects individual drops passing through the IV drip chamber.',
    image: '/images/hardware/optical-drop-sensor-placeholder.svg',
  },
  {
    title: 'STM32 Embedded Controller',
    text: 'Performs signal acquisition, flow calculations, decision logic, and control.',
    image: '/images/hardware/stm32-controller-placeholder.svg',
  },
  {
    title: 'Servo Pinch Mechanism',
    text: 'Mechanically adjusts the IV tubing to regulate the flow.',
    image: '/images/hardware/servo-pinch-mechanism-placeholder.svg',
  },
  {
    title: 'Wireless Communication Module',
    text: 'ESP-01 transfers system measurements and status data to cloud services.',
    image: '/images/hardware/esp-01-wireless-module-placeholder.svg',
  },
]

const appHighlights = [
  'Current flow rate',
  'IV remaining/status indication',
  'System status',
  'Alerts and warnings',
  'Real-time data synchronization',
  'Monitoring dashboard',
]

const technologyCards = [
  { title: 'Optical Sensor', text: 'Drop detection for real-time IV monitoring.' },
  { title: 'STM32', text: 'Real-time signal processing, flow calculation, and actuator control.' },
  { title: 'Servo Mechanism', text: 'Physical flow regulation through controlled tube compression.' },
  { title: 'ESP-01', text: 'Wi-Fi communication between the embedded system and cloud.' },
  { title: 'Firebase', text: 'Real-time synchronization of measurements, system status, and alerts.' },
  { title: 'Flutter', text: 'Cross-platform user interface for monitoring and system interaction.' },
]

const resultMetrics = [
  { label: 'Prototype Testing Data', value: 'Flow stability' },
  { label: 'Prototype Testing Data', value: 'Setpoint response' },
  { label: 'Prototype Testing Data', value: 'Wireless sync' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35, rootMargin: '0px 0px -20% 0px' },
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="app">

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          Intelli<span>Flow</span>
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>


      <section id="home" className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            SMART HEALTHCARE IoT
          </p>

          <h1>
            Smarter monitoring
            <br />
            for <span>IV infusion.</span>
          </h1>

          <p className="hero-description">
            IntelliFlow is an IoT-based IV fluid monitoring and
            alert system that connects embedded hardware,
            wireless communication, cloud data and a dedicated
            monitoring interface.
          </p>

          <div className="hero-buttons">

            <a className="primary-button" href="#system">
              Explore the System
            </a>

            <a
              className="secondary-button"
              href="/videos/placeholder-video.mp4"
              target="_blank"
              rel="noreferrer"
            >
              See How It Works
            </a>

          </div>

          <div className="technology-tags">

            <span>STM32</span>
            <span>ESP-01</span>
            <span>Firebase</span>
            <span>Flutter</span>

          </div>

        </div>


        <div className="hero-visual">

          <div className="device-panel">
            <div className="device-header">
              <span className="device-dot green"></span>
              <span>System online</span>
            </div>

            <div className="device-metric">
              <div>
                <span>IV level</span>
                <strong>72%</strong>
              </div>
              <div className="status-badge">Stable</div>
            </div>

            <div className="fluid-bar">
              <span className="fluid-fill"></span>
            </div>

            <div className="device-grid">
              <div>
                <label>Flow rate</label>
                <strong>40</strong>
                <small>mL/h</small>
              </div>
              <div>
                <label>Alert</label>
                <strong>Low</strong>
                <small>Normal</small>
              </div>
            </div>

            <div className="device-status-row">
              <span className="mini-dot"></span>
              Monitoring active
            </div>
          </div>

          <div className="mini-monitor-card">
            <span className="mini-label">Current flow</span>
            <strong>40 mL/h</strong>
            <small>Device status: online</small>
          </div>

        </div>

      </section>


      <section id="problem" className="section">

        <p className="eyebrow">
          THE CHALLENGE
        </p>

        <h2>
          IV monitoring should not depend
          <br />
          <span>only on manual checks.</span>
        </h2>

        <div className="problem-cards">
          {problemCards.map((card) => (
            <div key={card.title} className="problem-card">
              <span className="problem-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </section>


      <section id="system" className="section dark-section">

        <p className="eyebrow">
          THE SOLUTION
        </p>

        <h2>
          One connected system from
          <br />
          <span>sensor to screen.</span>
        </h2>

        <div className="system-arch" aria-label="System architecture diagram">
          {systemNodes.map((node, index) => (
            <div className="arch-node" key={node}>
              <span>{node}</span>
              {index < systemNodes.length - 1 && <span className="arch-arrow">→</span>}
            </div>
          ))}
        </div>

        <div className="solution-grid">
          <div className="solution-block">
            <span className="solution-tag">Sense</span>
            <p>
              Optical sensing detects IV drops and provides measurements to the embedded controller.
            </p>
          </div>

          <div className="solution-block">
            <span className="solution-tag">Control</span>
            <p>
              STM32 processes the measurements and controls the servo-based tube restriction mechanism.
            </p>
          </div>

          <div className="solution-block">
            <span className="solution-tag">Monitor</span>
            <p>
              ESP-01 and Firebase send measurements and status information to the IntelliFlow mobile interface.
            </p>
          </div>
        </div>

      </section>


      <section id="workflow" className="section">

        <p className="eyebrow">
          HOW IT WORKS
        </p>

        <h2>
          A five-step control workflow for
          <br />
          <span>continuous IV regulation.</span>
        </h2>

        <div className="workflow-grid">
          {workflowSteps.map((step) => (
            <div className="workflow-card" key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

      </section>


      <section id="hardware" className="section dark-section">

        <p className="eyebrow">
          ENGINEERING
        </p>

        <h2>
          Engineered from <span>sensing to control.</span>
        </h2>

        <div className="hardware-grid">
          {hardwareCards.map((card) => (
            <div className="hardware-card" key={card.title}>
                <img className="hardware-image" src={card.image} alt={`${card.title} image placeholder`} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </section>


      <section id="app" className="section">

        <p className="eyebrow">
          APPLICATION
        </p>

        <div className="app-showcase">
          <img
            className="app-screenshot-placeholder"
            src="/images/application/intelliflow-mobile-app-screenshot-placeholder.svg"
            alt="Blank placeholder for the IntelliFlow mobile app screenshot"
          />

          <div className="app-copy">
            <h2>
              IntelliFlow mobile monitoring for <span>continuous oversight.</span>
            </h2>
            <ul>
              {appHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </section>


      <section id="technology" className="section dark-section">

        <p className="eyebrow">
          TECHNOLOGY
        </p>

        <h2>
          Built across
          <br />
          <span>hardware, IoT and software.</span>
        </h2>

        <div className="technology-grid">
          {technologyCards.map((card) => (
            <div className="technology-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </section>


      <section id="results" className="section">

        <p className="eyebrow">
          VALIDATION
        </p>

        <h2>
          Designed. Built. <span>Tested.</span>
        </h2>

        <div className="results-layout">
          <div className="results-graph">
            <div className="graph-header">
              <span>Prototype Testing Data</span>
            </div>

            <div className="graph-layout">
              <div className="graph-y-axis" aria-hidden="true">Flow</div>

              <div className="graph-canvas" aria-hidden="true">
                <span className="grid-line g1"></span>
                <span className="grid-line g2"></span>
                <span className="grid-line g3"></span>
                <span className="grid-line g4"></span>
                <span className="plot-line"></span>
              </div>

              <div className="graph-x-axis" aria-hidden="true">Time</div>
            </div>
          </div>

          <div className="metric-stack">
            {resultMetrics.map((metric) => (
              <div key={metric.value} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

      </section>


      <section id="team" className="section dark-section">

        <p className="eyebrow">
          ENGINEERING PROJECT
        </p>

        <h2>
          Intelli<span>Flow</span>
        </h2>

        <p className="section-description">
          A practical engineering project combining
          embedded systems, sensors, wireless communication,
          cloud services and application development.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-photo-frame">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>

      </section>


      <footer>

        <div className="logo">
          Intelli<span>Flow</span>
        </div>

        <p>
          Smart IV Monitoring & Alert System
        </p>

      </footer>

    </div>
  )
}

export default App