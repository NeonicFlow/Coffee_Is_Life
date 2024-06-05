const buttonUp = {
    el: document.querySelector('.button-up'),
    show() {
      this.el.classList.remove('button-up_hide');
    },
    hide() {
      this.el.classList.add('button-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 1040 ? this.show() : this.hide();
      });
      
      document.querySelector('.button-up').onclick = () => {

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  buttonUp.addEventListener();

  function closeOnBackDropClick({
    currentTarget,
    target
  }) {
    const dialogElement = currentTarget
    const isClickedOnBackDrop = target === dialogElement
    if (isClickedOnBackDrop) {
      dialogElement.close()
    }
  }
// slider image
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});

// theme site background color change

const btn = document.querySelector(".theme_hide");

btn.addEventListener("click", function () {

  document.body.classList.toggle("green_theme");
});