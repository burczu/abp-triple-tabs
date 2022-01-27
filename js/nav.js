const NAV_ITEM_ACTIVE_CLASS = 'App__nav-item--active';
const CONTENT_ACTIVE_CLASS = 'App__content--active';

const swapNavbarClasses = (currentElement) => {
  // remove active class from the current nav link
  const previousLink = document.querySelector(`.${NAV_ITEM_ACTIVE_CLASS}`);
  previousLink.classList.remove(NAV_ITEM_ACTIVE_CLASS);

  // add active active class on the clicked nav item
  currentElement.classList.add(NAV_ITEM_ACTIVE_CLASS);
};

const swapContentClasses = () => {
  // to handle content visibility, find both content elements first
  const previousContent = document.querySelector(`.${CONTENT_ACTIVE_CLASS}`);
  const newContent = document.querySelector(event.target.hash);

  // next, swap active classes
  previousContent.classList.remove(CONTENT_ACTIVE_CLASS);
  newContent.classList.add(CONTENT_ACTIVE_CLASS);
};

const handleSidebarLinkClick = (event) => {
  event.preventDefault();

  // swap classes
  swapNavbarClasses(event.target.parentNode);
  swapContentClasses();
};

export const initSidebar = () => {
  // find all the nav links
  const sidebarLinks = document.querySelectorAll('.App__nav-link');

  // handle all the link's click event
  if (sidebarLinks && sidebarLinks.length > 0) {
    sidebarLinks.forEach((link) => {
      link.addEventListener('click', handleSidebarLinkClick);
    });
  }
};
