class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('article');

    this.init();
  }

  getPrice = () => {
    const { price, discount } = this.props.data;
  }


  init = () => {
    const { id, title, price, ageRestrictions, discount, imgSrc } = this.props.data;

    this.htmlElement.className = " col-lg-4";
    this.htmlElement.innerHTML = `
        <div class="card position-relative">
          <div class="d-flex justify-content-center p-3">
            <img src="${imgSrc}" style="height:200px">
          </div>
          <h4 class="card-title text-center">${title}</h4>
        </div>
    `;

    const card = this.htmlElement.querySelector(".card");
    if (ageRestrictions) {
      switch (ageRestrictions.from) {
        case 3:
          card.innerHTML += `<div class="position-absolute top-0 end-0 p-1 icon"><img style="height:40px" src="./assets/restriction3+.png"</div>`
          break
        case 18:
          card.innerHTML += `<div class="position-absolute top-0 end-0 p-1 icon"><img style="height:40px" src="./assets/restriction18.png"</div>`
          break
        default:
          break
      }
    }

    if (discount) {
      switch (discount.type) {
        case 'percentage':
          card.innerHTML += `<span id="discount" class="bg-danger fw-bold text-white position-absolute top-0 start-0 p-1">-${discount.amount}%</span>
          <h3 id="price" class="card-title text-center text-danger price"><span class="text-muted h6"><s>${price.amount + price.currency}</s> </span>${(price.amount - (price.amount * discount.amount / 100)) + price.currency}</h3>`
          break
        case 'amount':
          card.innerHTML += `<span id="discount" class="bg-danger fw-bold text-white position-absolute top-0 start-0 p-1">-${discount.amount}${price.currency}</span>
          <h3 id="price" class="card-title text-center text-danger price"><span class="text-muted h6"><s>${price.amount + price.currency}</s> </span>${(price.amount -  discount.amount) + price.currency}</h3>`
          break
        case 'toFixed':
          card.innerHTML += `<span id="discount" class="bg-warning fw-bold position-absolute top-0 start-0 p-1">Akcija</span>
          <h3 id="price" class="card-title text-center text-danger price"><span class="text-muted h6"><s>${price.amount + price.currency}</s> </span>${discount.amount  + price.currency}</h3>`
          break
        default:
          break
      }
    }
  }
}