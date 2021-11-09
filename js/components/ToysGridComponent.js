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

  deleteToy = (id) => {
    this.render();
    API.deleteToys(
      this.fetchToys,
      this.showError,
      id
    );
  };
  
  init = () => {
    this.state.loading = true;
    setTimeout(() => this.fetchToys(), 1000)
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"></div>`;
    } else {
      this.htmlElement.innerHTML = "";
      this.htmlElement.className = "card-grid row g-3";
      this.state.toys.forEach((toys) => {
        const cardComponent = new ToyCardComponent({
          data: toys,
          onDelete: this.deleteToy,
        });
        this.htmlElement.append(cardComponent.htmlElement);
      });
    }
  }
}

