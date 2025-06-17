
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const logoMerge = document.querySelector('.logo-merge');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
            logoMerge.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
            logoMerge.classList.remove('scrolled');
        }
    });
});


const specialties = {
  regenerative: {
    title: "Regenerative & Stem‑Cell Therapy",
    text: `Dr. Tatiana is a pioneer in advanced stem-cell treatments targeting joint pain, heart disease, and anti-aging using both PRP and cellular therapy.`,
    image: "images/regenerative.jpg"
  },
  cardio: {
    title: "Cardiovascular Health",
    text: `Comprehensive management of heart disease and hypertension, blending modern cardiology with preventative care strategies.`,
    image: "images/cardio.jpg"
  },
  hormonal: {
    title: "Hormonal Balance",
    text: `Personalized hormone therapies to optimize mood, energy levels, and overall vitality.`,
    image: "images/hormonal.jpg"
  },
  integrative: {
    title: "Integrative Medicine",
    text: `Blending conventional diagnostics with holistic treatments for a complete and patient-centered healing journey.`,
    image: "images/integrative.jpg"
  },
  antiaging: {
    title: "Anti-Aging Solutions",
    text: `Strategic approaches (IV therapy, antioxidants, lifestyle planning) for improved longevity, skin health, and energy.` ,
    image: "images/antiaging.jpg"
  },
  online: {
    title: "Online Consultations",
    text: `Virtual medical consultations to deliver trusted, international healthcare from anywhere in the world.`,
    image: "images/online.jpg"
  }
};

document.querySelectorAll('.service-card').forEach(card => {
  const key = card.dataset.specialty;
  card.addEventListener('click', () => {
    if (specialties[key]) showModal(key);
  });
});


document.querySelectorAll('.service-card').forEach(card => {
  const key = card.dataset.specialty;
  card.addEventListener('click', () => showModal(key));
});

function showModal(key) {
  const { title, text, image } = specialties[key];
  const modals = document.getElementById('modals-container');
  modals.innerHTML = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="close" onclick="closeModal()">×</button>
        <div class="modal-body">
          <div class="modal-text">
            <h3>${title}</h3>
            <p>${text}</p>
          </div>
          <div class="modal-image">
            <img src="${image}" alt="${title}">
          </div>
        </div>
      </div>
    </div>
  `;
}

function closeModal() {
  document.getElementById('modals-container').innerHTML = '';
}
