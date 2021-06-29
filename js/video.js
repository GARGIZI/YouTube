// === Sidebar 

const sidebarVideo = document.querySelector('.sidebarVideo');
const menuButton = document.querySelector('.header-menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

// --- Open SidebarVideo 

menuButton.addEventListener('click', () => {
  sidebarVideo.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('active');
})

// --- Close SidebarVideo 

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  body.classList.remove('active');
  sidebarVideo.classList.remove('active');
})

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

// === Show more 

const descriptionText = document.querySelector('.mainVideo-video__descriptionText');
const buttonShowMore = document.querySelector('.mainVideo-video__showMore');

buttonShowMore.addEventListener('click', () => {
  descriptionText.classList.toggle('showText');
})

// === Search Header 

const searchButton = document.querySelector('.header-search_ada');
const searchParrent = document.querySelector('.header-search_searchInput-ada');


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