class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('article');

    this.init();
  }

  init = () => {
    this.htmlElement.className = "card p-3 shadow-sm col-lg-4";
    this.htmlElement.innerHTML = "Kortelės turinys"
  }
}