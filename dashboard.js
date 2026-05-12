// ===== DASHBOARD SCRIPT =====

// Sample data for demonstration
const sampleCars = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    type: 'sedan',
    price: 45,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=400&auto=format&fit=crop',
    description: 'Comfortable and reliable sedan perfect for city driving.'
  },
  {
    id: 2,
    make: 'BMW',
    model: 'X5',
    year: 2023,
    type: 'suv',
    price: 120,
    status: 'rented',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=400&auto=format&fit=crop',
    description: 'Luxury SUV with premium features and excellent performance.'
  },
  {
    id: 3,
    make: 'Honda',
    model: 'Civic',
    year: 2022,
    type: 'sedan',
    price: 35,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=400&auto=format&fit=crop',
    description: 'Fuel-efficient compact car ideal for daily commuting.'
  }
];

const sampleRentals = [
  {
    id: 1,
    customer: 'John Doe',
    car: 'Toyota Camry',
    pickupDate: '2024-01-15',
    returnDate: '2024-01-20',
    status: 'active'
  },
  {
    id: 2,
    customer: 'Jane Smith',
    car: 'BMW X5',
    pickupDate: '2024-01-10',
    returnDate: '2024-01-18',
    status: 'active'
  }
];

const sampleCustomers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+250 123 456 789',
    totalRentals: 5,
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+250 987 654 321',
    totalRentals: 3,
    status: 'active'
  }
];

// DOM Elements
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const dashboardSections = document.querySelectorAll('.dashboard-section');
const addCarBtn = document.getElementById('add-car-btn');
const addCarModal = document.getElementById('add-car-modal');
const modalClose = document.querySelector('.modal-close');
const addCarForm = document.getElementById('add-car-form');

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
  initializeSidebar();
  loadDashboardData();
  initializeCharts();
  setupEventListeners();
});

// Sidebar navigation
function initializeSidebar() {
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all links
      sidebarLinks.forEach(l => l.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');

      // Hide all sections
      dashboardSections.forEach(section => {
        section.classList.remove('active');
      });

      // Show selected section
      const targetSection = document.getElementById(this.dataset.section);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
}

// Load dashboard data
function loadDashboardData() {
  loadCars();
  loadRentals();
  loadCustomers();
  loadBookings();
  updateStats();
}

// Load cars
function loadCars() {
  const carsGrid = document.getElementById('cars-grid');
  carsGrid.innerHTML = '';

  sampleCars.forEach(car => {
    const carCard = createCarCard(car);
    carsGrid.appendChild(carCard);
  });
}

// Create car card
function createCarCard(car) {
  const card = document.createElement('div');
  card.className = 'car-card';

  card.innerHTML = `
    <img src="${car.image}" alt="${car.make} ${car.model}" class="car-image">
    <div class="car-info">
      <div class="car-header">
        <h3 class="car-title">${car.make} ${car.model} ${car.year}</h3>
        <span class="car-status ${car.status}">${car.status}</span>
      </div>
      <p class="car-details">${car.description}</p>
      <p class="car-price">$${car.price}/day</p>
      <div class="car-actions">
        <button class="btn-small btn-edit" onclick="editCar(${car.id})">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button class="btn-small btn-delete" onclick="deleteCar(${car.id})">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  `;

  return card;
}

// Load rentals
function loadRentals() {
  const rentalsTbody = document.getElementById('rentals-tbody');
  rentalsTbody.innerHTML = '';

  sampleRentals.forEach(rental => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${rental.customer}</td>
      <td>${rental.car}</td>
      <td>${formatDate(rental.pickupDate)}</td>
      <td>${formatDate(rental.returnDate)}</td>
      <td><span class="status-badge ${rental.status}">${rental.status}</span></td>
      <td>
        <button class="btn-small btn-edit" onclick="editRental(${rental.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-small btn-delete" onclick="returnCar(${rental.id})">
          <i class="fas fa-undo"></i> Return
        </button>
      </td>
    `;

    rentalsTbody.appendChild(row);
  });
}

// Load customers
function loadCustomers() {
  const customersTbody = document.getElementById('customers-tbody');
  customersTbody.innerHTML = '';

  sampleCustomers.forEach(customer => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.phone}</td>
      <td>${customer.totalRentals}</td>
      <td><span class="status-badge ${customer.status}">${customer.status}</span></td>
      <td>
        <button class="btn-small btn-edit" onclick="editCustomer(${customer.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn-small btn-delete" onclick="deleteCustomer(${customer.id})">
          <i class="fas fa-ban"></i> Block
        </button>
      </td>
    `;

    customersTbody.appendChild(row);
  });
}

// Load bookings
function loadBookings() {
  const bookingsList = document.getElementById('bookings-list');
  bookingsList.innerHTML = '';

  // Sample bookings data
  const bookings = [
    {
      id: 1,
      customer: 'Alice Johnson',
      car: 'Honda Civic',
      pickupDate: '2024-01-25',
      returnDate: '2024-01-30',
      status: 'pending'
    },
    {
      id: 2,
      customer: 'Bob Wilson',
      car: 'Toyota Camry',
      pickupDate: '2024-01-28',
      returnDate: '2024-02-02',
      status: 'confirmed'
    }
  ];

  bookings.forEach(booking => {
    const bookingCard = document.createElement('div');
    bookingCard.className = 'booking-card';

    bookingCard.innerHTML = `
      <div class="booking-header">
        <h3 class="booking-title">${booking.customer} - ${booking.car}</h3>
        <span class="booking-status ${booking.status}">${booking.status}</span>
      </div>
      <p class="booking-details">
        Pickup: ${formatDate(booking.pickupDate)} | Return: ${formatDate(booking.returnDate)}
      </p>
      <div class="booking-actions">
        <button class="btn-small btn-edit" onclick="editBooking(${booking.id})">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button class="btn-small ${booking.status === 'pending' ? 'btn-primary' : 'btn-secondary'}" onclick="confirmBooking(${booking.id})">
          <i class="fas fa-check"></i> ${booking.status === 'pending' ? 'Confirm' : 'Confirmed'}
        </button>
        <button class="btn-small btn-delete" onclick="cancelBooking(${booking.id})">
          <i class="fas fa-times"></i> Cancel
        </button>
      </div>
    `;

    bookingsList.appendChild(bookingCard);
  });
}

// Update dashboard stats
function updateStats() {
  document.getElementById('total-cars').textContent = sampleCars.length;
  document.getElementById('active-rentals').textContent = sampleRentals.length;
  document.getElementById('total-customers').textContent = sampleCustomers.length;
  // Monthly revenue calculation (simplified)
  const monthlyRevenue = sampleRentals.reduce((total, rental) => {
    const car = sampleCars.find(c => c.make + ' ' + c.model === rental.car);
    const days = Math.ceil((new Date(rental.returnDate) - new Date(rental.pickupDate)) / (1000 * 60 * 60 * 24));
    return total + (car ? car.price * days : 0);
  }, 0);
  document.getElementById('monthly-revenue').textContent = `$${monthlyRevenue.toLocaleString()}`;
}

// Initialize charts
function initializeCharts() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenue-chart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue ($)',
          data: [8500, 9200, 10100, 12450, 11800, 13200],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'var(--text-muted)'
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'var(--text-muted)'
            }
          }
        }
      }
    });
  }

  // Utilization Chart
  const utilizationCtx = document.getElementById('utilization-chart');
  if (utilizationCtx) {
    new Chart(utilizationCtx, {
      type: 'doughnut',
      data: {
        labels: ['Available', 'Rented', 'Maintenance'],
        datasets: [{
          data: [
            sampleCars.filter(c => c.status === 'available').length,
            sampleCars.filter(c => c.status === 'rented').length,
            sampleCars.filter(c => c.status === 'maintenance').length
          ],
          backgroundColor: ['#10b981', '#f59e0b', '#dc2626'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'var(--text-light)',
              padding: 20
            }
          }
        }
      }
    });
  }
}

// Setup event listeners
function setupEventListeners() {
  // Add car modal
  if (addCarBtn) {
    addCarBtn.addEventListener('click', () => {
      addCarModal.classList.add('show');
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === addCarModal) {
      closeModal();
    }
  });

  // Add car form submission
  if (addCarForm) {
    addCarForm.addEventListener('submit', handleAddCar);
  }

  // Filters
  document.getElementById('car-status-filter').addEventListener('change', filterCars);
  document.getElementById('car-type-filter').addEventListener('change', filterCars);
}

// Close modal
function closeModal() {
  addCarModal.classList.remove('show');
}

// Handle add car form
function handleAddCar(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newCar = {
    id: sampleCars.length + 1,
    make: formData.get('car-make'),
    model: formData.get('car-model'),
    year: parseInt(formData.get('car-year')),
    type: formData.get('car-type'),
    price: parseFloat(formData.get('car-price')),
    status: 'available',
    image: formData.get('car-image'),
    description: formData.get('car-description')
  };

  sampleCars.push(newCar);
  loadCars();
  updateStats();
  initializeCharts(); // Reinitialize charts with new data
  closeModal();
  e.target.reset();
}

// Filter cars
function filterCars() {
  const statusFilter = document.getElementById('car-status-filter').value;
  const typeFilter = document.getElementById('car-type-filter').value;

  const carsGrid = document.getElementById('cars-grid');
  carsGrid.innerHTML = '';

  const filteredCars = sampleCars.filter(car => {
    const statusMatch = statusFilter === 'all' || car.status === statusFilter;
    const typeMatch = typeFilter === 'all' || car.type === typeFilter;
    return statusMatch && typeMatch;
  });

  filteredCars.forEach(car => {
    const carCard = createCarCard(car);
    carsGrid.appendChild(carCard);
  });
}

// Car management functions
function editCar(carId) {
  const car = sampleCars.find(c => c.id === carId);
  if (car) {
    alert(`Edit car: ${car.make} ${car.model}`);
    // Implement edit functionality
  }
}

function deleteCar(carId) {
  if (confirm('Are you sure you want to delete this car?')) {
    const index = sampleCars.findIndex(c => c.id === carId);
    if (index > -1) {
      sampleCars.splice(index, 1);
      loadCars();
      updateStats();
      initializeCharts();
    }
  }
}

// Rental management functions
function editRental(rentalId) {
  const rental = sampleRentals.find(r => r.id === rentalId);
  if (rental) {
    alert(`Edit rental for: ${rental.customer}`);
    // Implement edit functionality
  }
}

function returnCar(rentalId) {
  if (confirm('Mark this rental as returned?')) {
    const index = sampleRentals.findIndex(r => r.id === rentalId);
    if (index > -1) {
      sampleRentals.splice(index, 1);
      loadRentals();
      updateStats();
    }
  }
}

// Customer management functions
function editCustomer(customerId) {
  const customer = sampleCustomers.find(c => c.id === customerId);
  if (customer) {
    alert(`Edit customer: ${customer.name}`);
    // Implement edit functionality
  }
}

function deleteCustomer(customerId) {
  if (confirm('Are you sure you want to block this customer?')) {
    const index = sampleCustomers.findIndex(c => c.id === customerId);
    if (index > -1) {
      sampleCustomers.splice(index, 1);
      loadCustomers();
      updateStats();
    }
  }
}

// Booking management functions
function editBooking(bookingId) {
  alert(`Edit booking ID: ${bookingId}`);
  // Implement edit functionality
}

function confirmBooking(bookingId) {
  alert(`Booking ${bookingId} confirmed!`);
  // Implement confirm functionality
  loadBookings();
}

function cancelBooking(bookingId) {
  if (confirm('Are you sure you want to cancel this booking?')) {
    alert(`Booking ${bookingId} cancelled.`);
    // Implement cancel functionality
    loadBookings();
  }
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Logout function
document.querySelector('.admin-logout-btn').addEventListener('click', function() {
  if (confirm('Are you sure you want to logout?')) {
    // In a real application, this would clear session/auth tokens
    window.location.href = 'index.html';
  }
});