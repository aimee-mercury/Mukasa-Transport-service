const cars = [
  {
    name: 'Toyota Land Cruiser V8',
    year: 2023,
    seats: 7,
    transmission: 'Automatic',
    noDriver: 180,
    withDriver: 230,
    category: 'suv',
    description:
      'Powerful 4x4 for safaris, business travel, and upcountry routes.',
    image:
      'https://images.unsplash.com/photo-1533473359331-35acde7260c9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota Prado TXL',
    year: 2022,
    seats: 7,
    transmission: 'Automatic',
    noDriver: 130,
    withDriver: 170,
    category: 'suv',
    description:
      'Comfortable, trusted SUV for Kigali, Musanze, Rubavu, and Akagera.',
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota RAV4',
    year: 2021,
    seats: 5,
    transmission: 'Automatic',
    noDriver: 75,
    withDriver: 105,
    category: 'budget',
    description: 'Smart choice for daily Kigali movement and weekend trips.',
    image:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Hyundai Tucson',
    year: 2021,
    seats: 5,
    transmission: 'Automatic',
    noDriver: 80,
    withDriver: 110,
    category: 'budget',
    description:
      'Clean, stylish crossover for couples, families, and city errands.',
    image:
      'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota Hilux Double Cabin',
    year: 2022,
    seats: 5,
    transmission: 'Manual',
    noDriver: 95,
    withDriver: 130,
    category: 'suv',
    description:
      'Strong pickup for project work, site visits, and rougher roads.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota Hiace',
    year: 2020,
    seats: 14,
    transmission: 'Manual',
    noDriver: 120,
    withDriver: 160,
    category: 'van',
    description:
      'Ideal for teams, families, church groups, and airport transfers.',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota Coaster',
    year: 2019,
    seats: 29,
    transmission: 'Manual',
    noDriver: 200,
    withDriver: 260,
    category: 'van',
    description:
      'Reliable group transport for tours, events, and company movement.',
    image:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota Corolla',
    year: 2022,
    seats: 5,
    transmission: 'Automatic',
    noDriver: 55,
    withDriver: 80,
    category: 'sedan',
    description:
      'Affordable sedan for meetings, airport pickups, and city travel.',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Suzuki Swift',
    year: 2021,
    seats: 5,
    transmission: 'Automatic',
    noDriver: 45,
    withDriver: 70,
    category: 'budget',
    description:
      'Easy to park, fuel-friendly, and perfect for Kigali city driving.',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Toyota Quantum',
    year: 2020,
    seats: 15,
    transmission: 'Manual',
    noDriver: 150,
    withDriver: 190,
    category: 'van',
    description:
      'Spacious minibus for groups, events, school trips, and airport shuttles.',
    image:
      'https://images.unsplash.com/photo-1558980664-10f8dffe5400?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Yamaha YBR 125',
    year: 2023,
    seats: 2,
    transmission: 'Manual',
    noDriver: 25,
    withDriver: 35,
    category: 'motorcycle',
    description:
      'Quick motorcycle transport for single riders and fast city errands in Kigali.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
]

const carsContainer = document.getElementById('cars-container')
const filterButtons = document.querySelectorAll('.filter-btn')
const navLinks = document.querySelectorAll('.nav-link')
const mobileMenuButton = document.querySelector('.mobile-menu-btn')
const navigation = document.querySelector('.nav-links')

const heroSection = document.querySelector('.hero')
const aboutSection = document.querySelector('.about-image')

function applySavedWebsiteImages() {
  const heroImage = localStorage.getItem('mts_hero_image')
  const aboutImage = localStorage.getItem('mts_about_image')

  if (heroImage) {
    document.documentElement.style.setProperty(
      '--hero-bg',
      `url('${heroImage}')`,
    )
  }
  if (aboutImage) {
    document.documentElement.style.setProperty(
      '--about-bg',
      `url('${aboutImage}')`,
    )
  }
}

function renderCars(filter = 'all') {
  if (!carsContainer) return

  const filteredCars =
    filter === 'all' ? cars : cars.filter((car) => car.category === filter)

  carsContainer.innerHTML = filteredCars
    .map(
      (car) => `
        <article class="car-card">
          <div class="car-image-container">
            <img src="${car.image}" alt="${car.name}" loading="lazy">
            <span class="car-badge">${car.year}</span>
          </div>
          <div class="car-info">
            <h3 class="car-name">${car.name}</h3>
            <p class="car-desc">${car.description}</p>
            <div class="car-specs">
              <div class="spec"><i class="fas fa-users"></i><span>${car.seats} seats</span></div>
              <div class="spec"><i class="fas fa-gears"></i><span>${car.transmission}</span></div>
            </div>
            <div class="car-pricing">
              <div class="price-row"><span>Self-drive</span><strong>$${car.noDriver}/day</strong></div>
              <div class="price-row"><span>With driver</span><strong>$${car.withDriver}/day</strong></div>
            </div>
            <div class="car-buttons">
              <button class="car-btn book-btn" type="button" data-car="${car.name}">Book now</button>
              <button class="car-btn details-btn" type="button" data-details="${car.name}">Details</button>
            </div>
          </div>
        </article>
      `,
    )
    .join('')
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `notification notification-${type}`
  notification.innerHTML = `<i class="fas fa-circle-info"></i><span>${message}</span>`
  document.body.appendChild(notification)

  window.requestAnimationFrame(() => notification.classList.add('show'))

  window.setTimeout(() => {
    notification.classList.remove('show')
    window.setTimeout(() => notification.remove(), 300)
  }, 3200)
}

function handleCarButtonClick(event) {
  const bookButton = event.target.closest('[data-car]')
  const detailsButton = event.target.closest('[data-details]')

  if (bookButton) {
    const carName = bookButton.dataset.car
    showNotification(
      `Great choice. Contact us to reserve the ${carName}.`,
      'success',
    )
  }

  if (detailsButton) {
    const carName = detailsButton.dataset.details
    const car = cars.find((item) => item.name === carName)
    showNotification(`${car.name}: ${car.description}`, 'info')
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'))
    button.classList.add('active')
    renderCars(button.dataset.filter)
  })
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigation?.classList.remove('active')
  })
})

mobileMenuButton?.addEventListener('click', () => {
  navigation?.classList.toggle('active')
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href')
    const target = targetId ? document.querySelector(targetId) : null

    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const sections = document.querySelectorAll('section[id], footer[id]')

function updateActiveLink() {
  let currentSection = 'home'

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      currentSection = section.id
    }
  })

  navLinks.forEach((link) => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${currentSection}`,
    )
  })
}

const scrollButton = document.createElement('button')
scrollButton.className = 'scroll-to-top'
scrollButton.type = 'button'
scrollButton.setAttribute('aria-label', 'Scroll to top')
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
document.body.appendChild(scrollButton)

window.addEventListener('scroll', () => {
  updateActiveLink()
  scrollButton.style.display = window.scrollY > 360 ? 'flex' : 'none'
})

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

carsContainer?.addEventListener('click', handleCarButtonClick)

document.addEventListener('DOMContentLoaded', () => {
  applySavedWebsiteImages()
  renderCars()
  updateActiveLink()
})

window.carDatabase = cars
