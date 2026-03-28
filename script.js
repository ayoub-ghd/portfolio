const projects = {
brand1: {
  image: 'darlhout.jpg',
  bg: 'linear-gradient(135deg,#D4F1F9,#A7D8DE)',
  tag: 'Social Media Design',
  title: 'Ocean Bites — Seafood Restaurant Visuals',
  desc: 'Fresh, modern social media visuals crafted for a seafood restaurant, highlighting quality, taste, and coastal vibes.',
  overview: 'Ocean Bites needed engaging and high-quality social media content to attract customers and showcase their fresh seafood offerings. The objective was to create visually appealing posts that reflect freshness, professionalism, and appetite appeal.',
  process: 'I created a consistent visual style using cool ocean tones, clean layouts, and high-quality food imagery. Using Adobe Photoshop, I enhanced textures, lighting, and colors to make dishes look fresh and irresistible while maintaining a premium and modern aesthetic.',
  skills: ['Adobe Photoshop','Social Media Design','Photo Editing','Color Correction','Visual Composition','Brand Consistency'],
  gallery: ['test.jpg']
},
poster1: {
  image: 'isima.jpg',
  bg: 'linear-gradient(135deg,#FACE1D,#FAA51D)', // IEEE SB colors
  tag: 'Event Poster',
  title: 'IEEE ISIMA SB — Webmaster',
  desc: 'Designed a striking poster to promote IEEE ISIMA Student Branch events, workshops, and tech meetups, emphasizing innovation and community engagement.',
  overview: 'IEEE ISIMA SB needed a visually engaging poster that would capture attention both online and in print. The goal was to communicate the branch’s focus on technology, education, and student empowerment while staying true to the IEEE visual identity.',
  process: 'I started by researching IEEE branding and student engagement trends. Using Adobe Photoshop and Illustrator, I combined clean layouts, bold typography, and vibrant branch colors (#FACE1D / #FAA51D). Visual elements highlight workshops, tech talks, and community activities, while maintaining clarity and readability. The design was optimized for social media posts, story formats, and print posters.',
  skills: ['Adobe Photoshop','Adobe Illustrator','Typography','Layout Design','Print Design','Event Branding','Visual Storytelling'],
gallery: ['ramadhanieeet.jpg', '12.jpg', 'examplary INSTA.png', 'STICKER2.jpg', 'STK KBIR.jpg', 'session hadil fcb.png']
},
social1: {
    image: 'rentway.jpg',
    bg: 'linear-gradient(135deg,#FFFBD4,#F5E6C8)',
    tag: 'Social Media',
    title: 'Car Rental Ad Posts',
    desc: 'Designed eye-catching social media ad posts for a Tunisian car rental agency to promote their fleet, offers, and services, boosting engagement and bookings.',
    overview: 'Created multiple ad posts optimized for social platforms, focusing on clear messaging, attractive visuals, and consistent branding to drive customer interest.',
    process: 'Analyzed audience preferences and agency branding to design visually appealing posts. Each post highlights the cars, offers, and ease of booking while maintaining a professional and cohesive look.',
    skills: ['Adobe Photoshop','Social Media Design','Visual Systems','Content Strategy','Ad Post Design','Brand Voice'],
    gallery: ['khlal.jpg','bb.jpg']
},
brand2: {
    image: 'sunset.jpg',
    bg: 'linear-gradient(135deg,#D6BFA3,#EAD7B7)',
    tag: 'Branding & Media',
    title: 'Gaming Agency — Media Designs',
    desc: 'Created dynamic visual designs for a gaming agency, including banners, social posts, and digital assets to engage players and promote games.',
    overview: 'The agency needed visuals that captured the energy and excitement of gaming. Designs were tailored for digital platforms, emphasizing bold colors, striking typography, and immersive graphics.',
    process: 'Developed a series of media assets using vibrant visuals and modular templates to ensure consistency across campaigns, while appealing to a young and enthusiastic gaming audience.',
    skills: ['Adobe Photoshop','Adobe Illustrator','Graphic Design','Social Media Design','Digital Branding','Content Creation'],
    gallery: ['aim labs.jpg','X65pro.jpg','TANK3.jpg']
},
poster2: {
    emoji: 'random.jpg',
    bg: 'linear-gradient(135deg,#F5E6C8,#D6BFA3)',
    tag: 'Poster',
    title: 'Tunisian Vibe Designs',
    desc: 'Creative visuals inspired by Tunisian culture and urban vibes, including posters, social media graphics, and promotional visuals.',
    overview: 'Developed a series of eye-catching designs reflecting local aesthetics, colors, and patterns, perfect for digital campaigns or event promotions.',
    process: 'Combined traditional Tunisian motifs with modern graphic techniques to create lively, culturally resonant visuals. Emphasis was on color harmony, dynamic layouts, and versatile formats for multiple platforms.',
    skills: ['Adobe Photoshop','Adobe Illustrator','Graphic Design','Poster Design','Social Media Graphics','Cultural Branding'],
    gallery: ['moudir.jpg','aa.jpg']
},
ui1: {
    image: 'lespadon.jpg',
    bg: 'linear-gradient(135deg,#EAD7B7,#FFFBD4)',
    tag: 'Social Media',
    title: 'Luxury Restaurant Media Designs',
    desc: 'Created visually elegant social media and promotional designs for a luxury restaurant, showcasing dishes, ambiance, and special offers.',
    overview: 'Developed a series of posts, banners, and digital visuals that reflect the restaurant’s upscale identity and attract high-end clientele.',
    process: 'Focused on rich, sophisticated visuals with warm color palettes, high-quality photography, and polished layouts to convey luxury and exclusivity across all digital platforms.',
    skills: ['Adobe Photoshop','Social Media Design','Graphic Design','Visual Storytelling','Content Creation','Brand Aesthetic'],
    gallery: ['1.jpg']
},
};

function openModal(id) {
  const p = projects[id];
  if (!p) return;
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-hero-img" style="background:${p.bg}">
  <img src="${p.image}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:20px 20px 0 0;">
</div>
    <div class="modal-content">
      <span class="proj-tag modal-tag">${p.tag}</span>
      <div class="modal-title">${p.title}</div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-section">
        <h4>Overview</h4>
        <p>${p.overview}</p>
      </div>
      <div class="modal-section">
        <h4>Process</h4>
        <p>${p.process}</p>
      </div>
      <div class="modal-section">
        <h4>Skills & Tools</h4>
        <div class="skill-tags">${p.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
      </div>
      <div class="modal-section">
        <h4>Gallery</h4>
        <div class="modal-gallery">
          ${p.gallery.map(g=>`
  <div class="gallery-thumb">
    <img src="${g}" alt="">
  </div>
`).join('')}
        </div>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));
