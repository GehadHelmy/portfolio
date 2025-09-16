document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent default form action

    const formData = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent successfully.");
      contactForm.reset(); // Clear the form
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const headerTitle = document.querySelector(".header-title");

  // Match the duration of the typewriter animation (2s + 0.5s delay)
  setTimeout(() => {
    headerTitle.classList.add("finished");
  }, 2500); // 2.5 seconds total
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85; // trigger point

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible'); // remove if you want it to hide when scrolling up
      }
    });
  }

  // Run on scroll
  window.addEventListener('scroll', checkVisibility);
  // Run on page load
  checkVisibility();
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');
  const serviceCards = document.querySelectorAll('.service-card');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    // Animate sections
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });

    // Animate individual service cards
    serviceCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
