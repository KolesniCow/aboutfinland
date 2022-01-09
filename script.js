let secondBlockContent = document.querySelector('.second-page-content');
let hidenContentBlockSecond = secondBlockContent.querySelector(
  '.hidden-content-mobile'
);

let thirdBlockContent = document.querySelector('.thirt-page-content');
let hidenContentBlockThird = thirdBlockContent.querySelector(
  '.hidden-content-mobile'
);

let morePlaces = document.querySelectorAll('.card-places');

morePlaces.forEach((place) => {
  let placesHiddenContent = place.querySelector('.hidden-content');
  let getHiddenPlaces = place.querySelector('.arrow-down');

  placesHiddenContent.style.display = 'none';
  getHiddenPlaces.addEventListener('click', () => {
    if (placesHiddenContent.style.display == 'none') {
      placesHiddenContent.style.display = 'block';
      let timer = window.setTimeout(() => {
        let heigthHide = placesHiddenContent.clientHeight + 20;
        placesHiddenContent.style.opacity = '1';
        placesHiddenContent.style.transition = '1.5s';
        getHiddenPlaces.style.transform = 'rotateX(180deg)';
        getHiddenPlaces.style.paddingBottom = heigthHide + 'px';
        getHiddenPlaces.style.transition =
          'padding-bottom .7s, transform  0.45s';
        window.clearTimeout(timer);
      }, 50);
    } else {
      getHiddenPlaces.style.transform = 'rotateX(360deg)';
      getHiddenPlaces.style.transition = '0.5s';
      getHiddenPlaces.style.paddingBottom = 'initial';
      placesHiddenContent.style.display = 'none';
      placesHiddenContent.style.opacity = '0';
    }
  });
});

function dropContent(blockContent, hiddenContent) {
  blockContent.style.minWidth = '80%';
  blockContent.style.transition = '0.5s';
  hiddenContent.style.opacity = '1';
  hiddenContent.style.transition = 'opacity 1.5s ease-in-out';
  let timer = window.setTimeout(() => {
    hiddenContent.style.position = 'relative';
    window.clearTimeout(timer);
  }, 200);
}

function hiddenContent(blockContent, hiddenContent) {
  blockContent.style.minHeight = '10%';
  hiddenContent.style.position = 'absolute';
  blockContent.style.minWidth = '10%';
  blockContent.style.display = 'table';
  hiddenContent.style.opacity = '1';
  hiddenContent.style.transition = '0.5s';
  blockContent.style.transition = '0.5s';
  hiddenContent.style.opacity = '0';
}

let isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

if (!isMobile) {
  secondBlockContent.addEventListener('mouseenter', () =>
    dropContent(secondBlockContent, hidenContentBlockSecond)
  );
  thirdBlockContent.addEventListener('mouseenter', () =>
    dropContent(thirdBlockContent, hidenContentBlockThird)
  );

  secondBlockContent.addEventListener('mouseleave', () =>
    hiddenContent(secondBlockContent, hidenContentBlockSecond)
  );
  thirdBlockContent.addEventListener('mouseleave', () =>
    hiddenContent(thirdBlockContent, hidenContentBlockThird)
  );
} else {
  hidenContentBlockThird.style.opacity = '1';
  hidenContentBlockThird.style.position = 'relative';
  hidenContentBlockSecond.style.opacity = '1';
  hidenContentBlockSecond.style.position = 'relative';
}
