class ModalBanner {
  constructor(options) {
    this.options = Object.assign({
      id: 'modalBanner',
      title: 'Modal Title',
      message: 'Your message here.',
      type: 'info', // info, success, warning, danger
      showCloseButton: true,
      buttons: [
        { text: 'Cancel', type: 'secondary', action: 'close' },
        { text: 'Confirm', type: 'primary', action: 'close' }
      ],
      onOpen: null,
      onClose: null
    }, options);

    this.modal = null;
    this.init();
  }

  init() {
    // Get or create modal element
    this.modal = document.getElementById(this.options.id);

    if (!this.modal) {
      this.createModal();
    }

    this.setupModal();
    this.bindEvents();
  }

  btnComponent({ type, text }) {
    return `<button class="modal-banner__button modal-banner__button--${type}">${text}</button>`
  }

  createModal() {
    // Create modal structure
    const modalHTML = `
      <div class="modal-banner__overlay"></div>
        <div class="modal-banner__container">
          <div class="modal-banner__header">
            <h2 class="modal-banner__title">${this.options.title}</h2>
            ${this.options.showCloseButton ? '<button class="modal-banner__close" aria-label="Close modal">&times;</button>' : ''}
          </div>
          <div class="modal-banner__content">
            <p class="modal-banner__message">${this.options.message}</p>
          </div>
          <div class="modal-banner__footer">
            ${this.options.buttons.map(button => this.btnComponent(button)).join('')}
          </div>
      </div>`;

    // Create modal element
    this.modal = document.createElement('div');
    this.modal.className = 'modal-banner';
    this.modal.id = this.options.id;
    this.modal.innerHTML = modalHTML;

    // Add to body
    document.body.appendChild(this.modal);
  }

  setupModal() {
    // Set modal type
    const header = this.modal.querySelector('.modal-banner__header');
    header.classList.add(`modal-banner__header--${this.options.type}`);

    // Set title
    const title = this.modal.querySelector('.modal-banner__title');
    title.textContent = this.options.title;

    // Set message
    const message = this.modal.querySelector('.modal-banner__message');
    message.textContent = this.options.message;

    // Set buttons
    const buttons = this.modal.querySelectorAll('.modal-banner__button');
    buttons.forEach((button, index) => {
      if (this.options.buttons[index]) {
        button.textContent = this.options.buttons[index].text;

        // Set button action
        button.addEventListener('click', () => {
          const action = this.options.buttons[index].action;
          if (typeof action === 'function') {
            action();
          } else if (action === 'close') {
            this.close();
          }
        });
      }
    });

    // Set ARIA attributes for accessibility
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-labelledby', 'modalTitle');
    this.modal.setAttribute('aria-describedby', 'modalMessage');

    const titleElement = this.modal.querySelector('.modal-banner__title');
    titleElement.id = 'modalTitle';

    const messageElement = this.modal.querySelector('.modal-banner__message');
    messageElement.id = 'modalMessage';
  }

  bindEvents() {
    // Close on overlay click
    const overlay = this.modal.querySelector('.modal-banner__overlay');
    if (overlay) {
      overlay.addEventListener('click', () => this.close());
    }

    // Close on close button click
    const closeBtn = this.modal.querySelector('.modal-banner__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('modal-banner--active')) {
        this.close();
      }
    });
  }

  open() {
    // Show modal
    this.modal.classList.add('modal-banner--active');

    // Focus the first button for accessibility
    const firstButton = this.modal.querySelector('.modal-banner__button');
    if (firstButton) {
      setTimeout(() => firstButton.focus(), 300);
    }

    // Disable scrolling on body
    document.body.style.overflow = 'hidden';

    // Call onOpen callback if provided
    if (typeof this.options.onOpen === 'function') {
      this.options.onOpen();
    }
  }

  close() {
    // Hide modal
    this.modal.classList.remove('modal-banner--active');

    // Enable scrolling on body
    document.body.style.overflow = '';

    // Call onClose callback if provided
    if (typeof this.options.onClose === 'function') {
      this.options.onClose();
    }
  }

  update(options) {
    // Update modal options
    this.options = Object.assign(this.options, options);
    this.setupModal();
  }
}