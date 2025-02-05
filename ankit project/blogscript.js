const blogContainer = document.querySelector('.blog-section');

function Press() {
    blogContainer.innerHTML = '';
    blogContainer.innerHTML = `
        <div id="category">
            <p>Category - Press</p>
        </div>
        <div id="category-images">  
            <div class="image">
                <img src="blog-1.png">
                <a href="#press">Press</a><br>
                <a href="#" class="para">Agard & Bolding Featured in ‘Arch Mag’s’ New Issue</a>
            </div>
        </div>
    `;
    initialblog();
    executpara();
}

function ArchitectureDesign() {
    blogContainer.innerHTML = '';
    blogContainer.innerHTML = `
        <div id="category">
            <p>Category - Architecture Design</p>
        </div>
        <div id="category-images">  
            <div class="image">
                <img src="blog-2.png">
                <a href="#ArchitectureDesign">Architecture + Design</a><br>
                <a href="#" class="para">Inside ‘The Feed’, New Building in Shanghai</a>
            </div>
            <div class="image">
                <img src="blog-4.png">
                <a href="#ArchitectureDesign">Architecture + Design</a><br>
                <a href="#" class="para">49 of the Most Transformative Before & After Photos of Buildings</a>
            </div>
            <div class="image">
                <img src="blog-5.webp">
                <a href="#ArchitectureDesign">Architecture + Design</a><br>
                <a href="#" class="para">‘Neon House’ in Baku by Agard & Bolding is a Haven for Sustainable Startups</a>
            </div>
            <div class="image">
                <img src="blog-6.webp">
                <a href="#ArchitectureDesign">Architecture + Design</a><br>
                <a href="#" class="para">Inside Ørestad, The Copenhagen Exceptional New Buildings That Blend Into the City</a>
            </div>
        </div>
    `;
    initialblog();
    executpara();
}

function InnovativeDesign() {
    blogContainer.innerHTML = '';
    blogContainer.innerHTML = `
        <div id="category">
            <p>Category - Innovative Design</p>
        </div>
        <div id="category-images">  
            <div class="image">
                <img src="blog-3.png">
                <a href="#InnovativeDesign">Innovative Design</a><br>
                <a href="#" class="para">Max Liemann’s ‘Stockhill’ Will Soon Feature the World’s Tallest Climbing Wall</a>
            </div>
        </div>
    `;
    initialblog();
    executpara();
}

function initialblog() {
    const innovative = document.querySelector('[href="#InnovativeDesign"]');
    if (innovative) {
        innovative.addEventListener('click', InnovativeDesign);
    }
    const press = document.querySelector('[href="#press"]');
    if (press) {
        press.addEventListener('click', Press);
    }
    const architectureLinks = document.querySelectorAll('[href="#ArchitectureDesign"]');
    if (architectureLinks) {
        architectureLinks.forEach(link => {
            link.addEventListener('click', ArchitectureDesign);
        });
    }
    executpara();
}

// Initialize event listeners


function randompara(res,msg) {
    blogContainer.innerHTML = '';
    blogContainer.innerHTML = `
    <div id="para">
    <a href="#${msg}">${msg}</a><br>
    <br><p>Joan Smith</p><br>
    <p>January 25, 2023</p>
    </div>
    <hr>
    <div id="para-list"> 
    <div id="readpara">
    <p>${res}</p>
    </div>
    <div class="image">
    <hr>
    <p>Designed by Agard & Bolding, the structure is one of the most sustainable buildings in the world. </p>
    <p>Order gives due measure to the members of a work considered separately, and symmetrical agreement to the proportions of the whole. It is an adjustment according to quantity. By this I mean the selection of modules from the members of the work itself and, starting from these individual parts of members, constructing the whole work to correspond. Arrangement includes the putting of things in their proper places and the elegance of effect which is due to adjustments appropriate to the character of the work. Its forms of expression are these: groundplan, elevation, and perspective.</p>
    <p>A groundplan is made by the proper successive use of compasses and rule, through which we get outlines for the plane surfaces of buildings. An elevation is a picture of the front of a building, set upright and properly drawn in the proportions of the contemplated work. Perspective is the method of sketching a front with the sides withdrawing into the background, the lines all meeting in the centre of a circle. All three come of reflexion and invention. Reflexion is careful and laborious thought, and watchful attention directed to the agreeable effect of one’s plan. Invention, on the other hand, is the solving of intricate problems and the discovery of new principles by means of brilliancy and versatility. These are the departments belonging under Arrangement.</p>
    <p>Eurythmy is beauty and fitness in the adjustments of the members. This is found when the members of a work are of a height suited to their breadth, of a breadth suited to their length, and, in a word, when they all correspond symmetrically.</p>
    <p>Symmetry is a proper agreement between the members of the work itself, and relation between the different parts and the whole general scheme, in accordance with a certain part selected as standard. Thus in the human body there is a kind of symmetrical harmony between forearm, foot, palm, finger, and other small parts; and so it is with perfect buildings.</p>
    <hr>
    <div class="share-section">
    <div class="share-buttons">
      <a href="#">
        <span class="icon">🐦</span> Twitter
      </a>
      <a href="#">
        <span class="icon">📘</span> Facebook
      </a>
    </div>
    <div class="action-buttons">
      <button>
        <span class="icon">🔁</span> Reblog
      </button>
      <button>
        <span class="icon">⭐</span> Like
      </button>
      <span class="like-text">Be the first to like this.</span>
    </div>
  </div>
    </div>
    
    </div>
    `;
    initialblog();
}
function executpara() {
    const archLinks = document.querySelectorAll('[href="#a1"], [href="#a2"], [href="#a3"], [href="#a4"]');
    const inpara = document.querySelector('[href="#i1"]');
    const p1para = document.querySelector('[href="#p1"]');
    
    if (inpara) {
        inpara.addEventListener('click', () => {
            randompara(inpara.textContent,'InnovativeDesign');
        });
    }
   if (p1para) {
        p1para.addEventListener('click', () => {
            randompara(p1para.textContent,'press');
        });
    }
  if (archLinks.length > 0) {
        archLinks.forEach(link => {
            link.addEventListener('click', () => {
                randompara(link.textContent,'ArchitectureDesign');
            });
        });
    }
}
initialblog(); 
executpara();

