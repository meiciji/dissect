
// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = element.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(15, 15, 35, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 15, 35, 0.95)';
  }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.goal-card, .example-card, .skill-item, .reward-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = card.classList.contains('goal-card') || card.classList.contains('example-card') 
        ? 'translateY(-4px)' 
        : 'translateX(8px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });
  });
});

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', () => {
  const joinButtons = document.querySelectorAll('.btn-primary');
  const learnMoreButtons = document.querySelectorAll('.btn-secondary');
  
  joinButtons.forEach(button => {
    if (button.textContent.includes('Join')) {
      button.addEventListener('click', () => {
        // In a real implementation, this would link to the actual sign-up page
        alert('🎉 Ready to join Dissect? This would redirect to the sign-up page!\n\nFor now, join the #dissect channel and visit dissect.athena.hackclub.com');
      });
    }
  });
  
  learnMoreButtons.forEach(button => {
    if (button.textContent.includes('Learn More')) {
      button.addEventListener('click', () => {
        scrollToSection('overview');
      });
    }
    
    if (button.textContent.includes('Starter Templates')) {
      button.addEventListener('click', () => {
        alert('🚀 Starter templates coming soon!\n\nThese will include basic layouts for:\n• Spotify clone\n• Pinterest-style gallery\n• Wordle/game layout');
      });
    }
  });
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.goal-card, .example-card, .timeline-item, .submission-item, .join-step');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Add typing effect to hero title (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.title-dissect');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid #6366f1';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
});
