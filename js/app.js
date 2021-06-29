// === Scroll Header 

const header = document.querySelector('header');
const searchIcon = document.querySelector('.header-search_ada');

window.addEventListener('scroll', function () {
  header.classList.add('active', window.scrollY > 0);

  if (header.classList.contains('false')) {
    header.classList.remove('active');
    header.classList.remove('false');
  }
});

// === Search Header 

const searchButton = document.querySelector('.header-search_ada');
const searchParrent = document.querySelector('.header-search_searchInput-ada');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');


// --- Open Search 
searchButton.addEventListener('click', function () {
  searchParrent.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('active');
});

// --- Close Search 
overlay.addEventListener('click', function () {
  searchParrent.classList.remove('active');
  overlay.classList.remove('activeSearch');
  body.classList.remove('active');
})

// === Sidebar 

const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.header-menu');

// --- Open Sidebar 

menuButton.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('active');
  sidebarVideo.classList.add('active');
})

// --- Open SidebarVideo 

// --- Close Sidebar 

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('active');
  sidebarVideo.classList.remove('active');
})

