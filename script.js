document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('animate__fadeInDown');
        });
    }
    
    // Form submission handling
    const loginForm = document.querySelector('#secure form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login logic here
            showNotification('Login successful! Redirecting to dashboard...', 'success');
        });
    }
    
    // Demo buttons functionality
    const demoButtons = document.querySelectorAll('[data-demo]');
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Check your email for the demo link!', 'info');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

function initCharts() {
    // Chart 1 - Doughnut with gradient
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const gradient1 = ctx1.createLinearGradient(0, 0, 0, 200);
    gradient1.addColorStop(0, '#3B82F6');
    gradient1.addColorStop(1, '#6366F1');
    
    const gradient2 = ctx1.createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, '#10B981');
    gradient2.addColorStop(1, '#059669');
    
    const gradient3 = ctx1.createLinearGradient(0, 0, 0, 200);
    gradient3.addColorStop(0, '#F59E0B');
    gradient3.addColorStop(1, '#D97706');
    
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Utilities'],
            datasets: [{
                data: [35, 25, 15, 10, 15],
                backgroundColor: [
                    gradient1,
                    gradient2,
                    gradient3,
                    '#EF4444',
                    '#8B5CF6'
                ],
                borderWidth: 0,
                hoverBorderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    usePointStyle: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
    
    // Chart 2 - Bar with gradient
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const incomeGradient = ctx2.createLinearGradient(0, 0, 0, 200);
    incomeGradient.addColorStop(0, '#3B82F6');
    incomeGradient.addColorStop(1, '#6366F1');
    
    const expenseGradient = ctx2.createLinearGradient(0, 0, 0, 200);
    expenseGradient.addColorStop(0, '#10B981');
    expenseGradient.addColorStop(1, '#059669');
    
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Income',
                data: [3200, 3400, 3000, 3700, 4200, 4000],
                backgroundColor: incomeGradient,
                borderRadius: 6
            }, {
                label: 'Expenses',
                data: [2400, 2600, 2300, 3000, 3500, 3300],
                backgroundColor: expenseGradient,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    usePointStyle: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                delay: function(context) {
                    return context.dataIndex * 100;
                }
            }
        }
    });
    // Floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0';
    document.body.appendChild(particlesContainer);
  
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
  }
  
  // Hover effects for cards
  function enhanceCards() {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${-(x - rect.width/2)/20}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  }
  
  // Call these in DOMContentLoaded
  createParticles();
  enhanceCards();
    
    // Chart 3 - Line with gradient fill
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const lineGradient = ctx3.createLinearGradient(0, 0, 0, 200);
    lineGradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
    lineGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Confidence Score',
                data: [60, 65, 70, 75, 80, 85],
                fill: true,
                backgroundColor: lineGradient,
                borderColor: '#8B5CF6',
                tension: 0.4,
                pointBackgroundColor: '#8B5CF6',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    usePointStyle: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        display: true
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Service Worker Registration (add this last)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
            console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
}
