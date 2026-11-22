/**
 * GCC STAT Official Website Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));
        // If it wasn't open, open it
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Support Form Handler
  const supportForm = document.getElementById('supportForm');
  const formSuccess = document.getElementById('formSuccess');

  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = supportForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Submitting Request...';
      submitBtn.disabled = true;

      setTimeout(() => {
        supportForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        if (formSuccess) {
          formSuccess.style.display = 'block';
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 6000);
        } else {
          alert('Thank you. Your support request has been logged. The GCC-STAT IT Help Desk will contact you shortly.');
        }
      }, 900);
    });
  }
});
