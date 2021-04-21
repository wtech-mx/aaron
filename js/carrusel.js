const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');

const galleryControls = ['anterior', 'siguiente'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Actualizar las clases css para la galería
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  // Actualizar el orden actual del carrusel Array y la galería
  setCurrentState(direction) {

    if (direction.className == 'gallery-controls-anterior') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }

    this.updateGallery();
  }

  // Construye los controles del carrusel
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      // document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }

  // Agregue un detector de eventos de clic para activar el método setCurrentState para reorganizar el carrusel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls-add') {
          const newItem = document.createElement('img');
          const latestItem = this.carouselArray.length;
          const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

          // Asignar las propiedades necesarias para el nuevo elemento de la galería
          Object.assign(newItem,{
            className: 'gallery-item',
            src: `http://fakeimg.pl/300/?text=${this.carouselArray.length+1}`
          });
          newItem.setAttribute('data-index', this.carouselArray.length+1);

          // Luego agréguelo al carruselArray y actualice la galería
          this.carouselArray.splice(latestIndex, 0, newItem);
          document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
          this.updateGallery();

        } else {
          this.setCurrentState(control);
        }

      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();
