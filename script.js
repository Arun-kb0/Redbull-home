const adjustBottomImgContainerSize = () => {
  const bottomItemImageContainers = document.getElementsByClassName('bottom__img-container');
  const bottomItemTitles = document.getElementsByClassName('bottom__item-title')

  const lineHeight = parseFloat(window.getComputedStyle(bottomItemTitles[0]).lineHeight);
  const maxHeight = lineHeight * 2;

  for (let i = 0; i < bottomItemTitles.length; i++) {
    const titleElement = bottomItemTitles[i]
    const lineHeight = titleElement.offsetHeight;
    if (lineHeight > maxHeight) {
      bottomItemImageContainers[i].style.height = 'auto';
    }
  }
}


const headerOnScroll = () => {
  const header = document.querySelector('.header')
  let prevScrollPos = window.scrollY
  console.log(header)
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY

    console.log(currentScrollPos)
    if ( currentScrollPos < 324) {
      header.classList.add('header-transparent')
    } else if (prevScrollPos < currentScrollPos) {
      header.classList.add('header-hide')
    } else {
      header.classList.remove('header-hide')
      header.classList.remove('header-transparent')
    }
    prevScrollPos = currentScrollPos
  })
}


// * header scroll
headerOnScroll()

// * adjusts image size 
adjustBottomImgContainerSize()
