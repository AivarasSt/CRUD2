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
        <div class="card shadow position-relative">
          <div class="card-inner">
            <div class="d-flex justify-content-center p-3">
              <img src="${imgSrc}" style="height:200px">
            </div>
            <h4 class="card-title text-center">${title}</h4>
          </div>
          <div class="d-flex align-items-center justify-content-center">
              <button class="btn btn-sm btn-secondary position-absolute bottom-0 end-0 m-2"><i class="bi bi-trash"></i></button>
          </div>
        </div>
    `;

    const delBtn = this.htmlElement.querySelector('.btn');
    delBtn.addEventListener('click', () => this.props.onDelete(id));

    const card = this.htmlElement.querySelector(".card-inner");
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
          card.innerHTML += `<h4><span class="badge bg-danger fw-bold text-white position-absolute top-0 start-0 p-1">-${discount.amount}%</span></h4>
          <h3 id="price" class="card-title text-center text-danger price"><sup class="text-muted h6"><s>${price.amount + price.currency}</s> </sup>${(price.amount - (price.amount * discount.amount / 100)) + price.currency}</h3>`
          break
        case 'amount':
          card.innerHTML += `<h4><span class="badge bg-danger fw-bold text-white position-absolute top-0 start-0 p-1">-${discount.amount}${price.currency}</span></h4>
          <h3 id="price" class="card-title text-center text-danger price"><sup class="text-muted h6"><s>${price.amount + price.currency}</s> </sup>${(price.amount -  discount.amount) + price.currency}</h3>`
          break
        case 'toFixed':
          card.innerHTML += `<h4><span class="badge bg-warning fw-bold position-absolute top-0 start-0 p-1">Akcija</span></h4>
          <h3 id="price" class="card-title text-center text-danger price"><sup class="text-muted h6"><s>${price.amount + price.currency}</s> </sup>${discount.amount  + price.currency}</h3>`
          break
        default: 
          break
      }
    } else {
      card.innerHTML += `<h3 id="price" class="card-title text-center text-muted price">${price.amount + price.currency}</h3>`
    }
  }
}