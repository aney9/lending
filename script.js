
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      
      if (navLinks) {
        if (navLinks.style.display === 'flex') {
          navLinks.style.display = 'none';
        } else {
          navLinks.style.display = 'flex';
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.width = '100%';
          navLinks.style.backgroundColor = 'white';
          navLinks.style.padding = '20px';
          navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          navLinks.style.zIndex = '1000';
        }
      }
    });
  }
  
  // Tab Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get the tab to show
      const tabToShow = this.getAttribute('data-tab');
      
      // Hide all tab panels
      const tabPanels = document.querySelectorAll('.tab-panel');
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Show the selected tab panel
      document.getElementById(tabToShow).classList.add('active');
    });
  });
  
  // Testimonial Slider
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  
  function showTestimonial(index) {
    // Remove active class from all testimonials and dots
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current testimonial and dot
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentIndex = index;
  }
  
  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
    });
  });
  
  // Event listeners for prev/next buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = testimonialCards.length - 1;
      showTestimonial(newIndex);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonialCards.length) newIndex = 0;
      showTestimonial(newIndex);
    });
  }
  
  // Auto slide testimonials
  setInterval(() => {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonialCards.length) newIndex = 0;
    showTestimonial(newIndex);
  }, 5000);
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks && navLinks.style.display === 'flex') {
          mobileMenuBtn.click();
        }
      }
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Here you would normally send the data to a server
        alert('Спасибо за подписку! Мы будем держать вас в курсе новостей.');
        emailInput.value = '';
      }
    });
  }
  
  // Add animation on scroll
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('animated');
        
        // Optional: Stop observing the element after it's animated
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add animation classes for AOS elements
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      [data-aos] {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      [data-aos].animated {
        opacity: 1;
        transform: translateY(0);
      }
      
      [data-aos-delay="100"].animated {
        transition-delay: 0.1s;
      }
      
      [data-aos-delay="200"].animated {
        transition-delay: 0.2s;
      }
      
      [data-aos-delay="300"].animated {
        transition-delay: 0.3s;
      }
      
      [data-aos-delay="400"].animated {
        transition-delay: 0.4s;
      }
    </style>
  `);
});
