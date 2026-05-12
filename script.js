// ===== CAR DATA =====

const cars = [
  {
    name: "Toyota Prado",
    year: 2023,
    seats: 7,
    transmission: "Automatic",
    noDriver: 120,
    withDriver: 170,
    category: "premium",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Range Rover",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    noDriver: 250,
    withDriver: 320,
    category: "premium",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Mercedes Benz",
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    noDriver: 180,
    withDriver: 230,
    category: "premium",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Toyota Rav4",
    year: 2022,
    seats: 5,
    transmission: "Manual",
    noDriver: 90,
    withDriver: 130,
    category: "budget",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "BMW X6",
    year: 2022,
    seats: 5,
    transmission: "Automatic",
    noDriver: 190,
    withDriver: 250,
    category: "premium",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Land Cruiser V8",
    year: 2024,
    seats: 8,
    transmission: "Automatic",
    noDriver: 300,
    withDriver: 370,
    category: "premium",
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Toyota Hilux",
    year: 2021,
    seats: 5,
    transmission: "Manual",
    noDriver: 100,
    withDriver: 140,
    category: "budget",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Hyundai Tucson",
    year: 2021,
    seats: 5,
    transmission: "Manual",
    noDriver: 85,
    withDriver: 120,
    category: "budget",
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Nissan Patrol",
    year: 2023,
    seats: 7,
    transmission: "Automatic",
    noDriver: 180,
    withDriver: 240,
    category: "suv",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Kia Sportage",
    year: 2020,
    seats: 5,
    transmission: "Manual",
    noDriver: 70,
    withDriver: 100,
    category: "budget",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Volkswagen Passat",
    year: 2022,
    seats: 5,
    transmission: "Automatic",
    noDriver: 95,
    withDriver: 135,
    category: "budget",
    image: "https://images.unsplash.com/photo-1533473359331-35acde7260c9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Porsche Cayenne",
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    noDriver: 280,
    withDriver: 350,
    category: "premium",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop"
  }
];

// ===== DOM ELEMENTS =====

const carsContainer = document.getElementById("cars-container");
const filterBtns = document.querySelectorAll(".filter-btn");
let currentFilter = "all";

// ===== RENDER CARS =====

function renderCars(filter = "all") {
  carsContainer.innerHTML = "";

  const filteredCars = filter === "all" 
    ? cars 
    : cars.filter(car => car.category === filter);

  filteredCars.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
      <div class="car-image-container">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        <div class="car-badge">${car.year}</div>
      </div>
      <div class="car-info">
        <div class="car-name">${car.name}</div>
        
        <div class="car-specs">
          <div class="spec">
            <i class="fas fa-users"></i>
            <span>${car.seats} Seats</span>
          </div>
          <div class="spec">
            <i class="fas fa-cog"></i>
            <span>${car.transmission}</span>
          </div>
        </div>

        <div class="car-pricing">
          <div class="price-row">
            <span>Without Driver:</span>
            <strong>$${car.noDriver}/day</strong>
          </div>
          <div class="price-row">
            <span>With Driver:</span>
            <strong>$${car.withDriver}/day</strong>
          </div>
        </div>

        <div class="car-buttons">
          <button class="car-btn book-btn" onclick="bookCar('${car.name}')">
            <i class="fas fa-check-circle"></i> Book Now
          </button>
          <button class="car-btn details-btn" onclick="toggleDetails(this)">
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      </div>
    `;
    
    carCard.style.animation = `slideInUp 0.5s ease forwards`;
    carCard.style.animationDelay = `${index * 0.1}s`;
    carCard.style.opacity = "0";
    
    carsContainer.appendChild(carCard);
  });

  // Update car count
  document.getElementById("carCount").textContent = filteredCars.length;
}

// ===== FILTER FUNCTIONALITY =====

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCars(currentFilter);
  });
});

// ===== BOOKING FUNCTIONALITY =====

function bookCar(carName) {
  // Navigate to booking page with car parameter
  window.location.href = `booking.html?car=${encodeURIComponent(carName)}`;
}

function toggleDetails(btn) {
  const card = btn.closest(".car-card");
  card.classList.toggle("show-details");
  
  if (card.classList.contains("show-details")) {
    btn.innerHTML = '<i class="fas fa-minus-circle"></i> Hide Details';
  } else {
    btn.innerHTML = '<i class="fas fa-info-circle"></i> Details';
  }
}

// ===== SEARCH FUNCTIONALITY =====

function searchCars() {
  const pickupDate = document.getElementById("pickupDate").value;
  const returnDate = document.getElementById("returnDate").value;

  if (!pickupDate || !returnDate) {
    alert("Please select both pickup and return dates!");
    return;
  }

  if (new Date(returnDate) <= new Date(pickupDate)) {
    alert("Return date must be after pickup date!");
    return;
  }

  // Scroll to cars section
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });

  // Show search results feedback
  const days = Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24));
  showNotification(`Found ${cars.length} cars available for ${days} days!`, "success");
}

// ===== NAVBAR ACTIVE LINK =====

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  const sections = ["home", "cars", "services", "pricing", "contact"];

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = id;
      }
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== NOTIFICATION SYSTEM =====

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    if (href !== "#" && href !== "#home") {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// ===== FORM VALIDATION =====

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// ===== ANIMATION ON SCROLL =====

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe dashboard cards
document.querySelectorAll('.dashboard-card').forEach(card => {
  observer.observe(card);
});

// ===== RESPONSIVE MOBILE MENU =====

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".nav-links").classList.remove("active");
    });
  });
}

// ===== SCROLL TO TOP BUTTON =====

const scrollBtn = document.createElement("button");
scrollBtn.className = "scroll-to-top";
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: none;
  background: linear-gradient(135deg, #facc15, #f59e0b);
  color: black;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 999;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(250, 204, 21, 0.4);
`;

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

scrollBtn.addEventListener("mouseenter", () => {
  scrollBtn.style.transform = "translateY(-3px)";
});

scrollBtn.addEventListener("mouseleave", () => {
  scrollBtn.style.transform = "translateY(0)";
});

// ===== INITIALIZE PAGE =====

document.addEventListener("DOMContentLoaded", () => {
  renderCars("all");
  
  // Add notification styles
  const style = document.createElement("style");
  style.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 8px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      transform: translateX(500px);
      transition: all 0.3s ease;
      z-index: 2000;
      font-size: 14px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .notification.show {
      transform: translateX(0);
    }

    .notification-success {
      background: #10b981;
      color: white;
    }

    .notification-error {
      background: #ef4444;
      color: white;
    }

    .notification-info {
      background: #3b82f6;
      color: white;
    }

    @media (max-width: 768px) {
      .notification {
        right: 10px;
        left: 10px;
      }
    }
  `;
  document.head.appendChild(style);
});

// ===== EXPORT FOR BOOKING PAGE =====

window.carDatabase = cars;