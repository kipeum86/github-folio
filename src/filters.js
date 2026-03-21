import { gsap } from 'gsap'
import { categories } from './repos.js'

let currentCategory = 'All'
let onFilterCallback = null

export function getCurrentCategory() {
  return currentCategory
}

export function initFilters(onFilter) {
  onFilterCallback = onFilter
  const nav = document.getElementById('category-nav')
  if (!nav) return

  categories.forEach((cat) => {
    const btn = document.createElement('button')
    btn.className = 'cat-pill'
    btn.textContent = cat
    btn.setAttribute('aria-pressed', cat === 'All' ? 'true' : 'false')
    btn.addEventListener('click', () => selectCategory(cat))
    nav.appendChild(btn)
  })
}

function selectCategory(cat) {
  if (cat === currentCategory) return
  currentCategory = cat

  // Update pill states
  document.querySelectorAll('.cat-pill').forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.textContent === cat ? 'true' : 'false')
  })

  // Animate filter transition
  const cards = document.querySelectorAll('.repo-grid .repo-card')
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    onFilterCallback?.(cat)
    return
  }

  // Fade out current cards
  gsap.to(cards, {
    opacity: 0,
    duration: 0.15,
    onComplete: () => {
      onFilterCallback?.(cat)

      // Fade in new cards
      const newCards = document.querySelectorAll('.repo-grid .repo-card')
      gsap.fromTo(
        newCards,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          stagger: 0.04,
        }
      )
    },
  })
}
