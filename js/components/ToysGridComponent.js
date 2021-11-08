class ToysGridComponent {
  constructor() {
    this.state = {
      toys: [],
      loading: false
    };
    this.init();
  }

  fetchToys = () => {
    this.state.loading = true;
    API.getToys(this.saveToys, this.showError);
  }

  saveToys = (toys) => {
    this.state.toys = toys;
    this.state.loading = false;
    this.render();
  }

  showError = error => console.error(error);

  init = () => {
    this.fetchToys();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `NĖRA DUOMENŲ`;
    } else {
      this.htmlElement.innerHTML = "<pre>" + JSON.stringify(this.state.toys) + "</pre>";
    };
  }
}

