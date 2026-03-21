import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

function shouldUseLenis() {
  if (typeof window === 'undefined') return false
  // Disable on touch/mobile devices
  return !window.matchMedia('(pointer: coarse)').matches && window.innerWidth >= 1024
}

export function initLenis() {
  if (!shouldUseLenis()) return

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // Connect Lenis to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    // Show everything immediately
    gsap.set('.hero-tag, .hero-title, .hero-sub, .scroll-hint', { opacity: 1 })
    return
  }

  // ── Hero entrance timeline ──
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  heroTl
    .to('.hero-tag', { opacity: 1, y: 0, duration: 0.8 }, 0.3)
    .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8 }, 0.9)
    .to('.scroll-hint', { opacity: 1, duration: 0.6 }, 1.3)

  // ── Stats counter animation ──
  const statNums = document.querySelectorAll('.stat-num')
  statNums.forEach((el) => {
    const target = parseInt(el.dataset.count, 10)
    if (!target) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate() {
              el.textContent = Math.round(parseFloat(el.innerText))
            },
          }
        )
      },
    })
  })

  // ── Section label reveals ──
  gsap.utils.toArray('.section-label').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })

  // ── Featured card reveal ──
  const featured = document.querySelector('.repo-card.featured')
  if (featured) {
    gsap.fromTo(
      featured,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featured,
          start: 'top 85%',
          once: true,
        },
      }
    )
  }

  // ── Repo card staggered reveal ──
  initCardAnimations()
}

export function initCardAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  // Kill existing card ScrollTriggers
  ScrollTrigger.getAll()
    .filter((st) => st.vars?.id?.startsWith('card-'))
    .forEach((st) => st.kill())

  const cards = document.querySelectorAll('.repo-grid .repo-card')
  if (!cards.length) return

  gsap.fromTo(
    cards,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: {
        id: 'card-reveal',
        trigger: '#repo-grid',
        start: 'top 85%',
        once: true,
      },
    }
  )
}
