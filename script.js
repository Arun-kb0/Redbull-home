const adjustBottomImgContainerSize = () => {
  const bottomItemImageContainers = document.getElementsByClassName('bottom__img-container');
  const bottomItemTitles = document.getElementsByClassName('bottom__item-title')

  const lineHeight = parseFloat(window.getComputedStyle(bottomItemTitles[0]).lineHeight);
  const maxHeight = lineHeight * 2;

  for (let i = 0; i < bottomItemTitles.length; i++) {
    const titleElement = bottomItemTitles[i]
    const lineHeight = titleElement.offsetHeight;
    if (lineHeight > maxHeight) {
      console.log('line height exceeded')
      console.log(titleElement)
      bottomItemImageContainers[i].style.height = 'auto';
    }
  }
}



adjustBottomImgContainerSize()
