class NetflixView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }
  render() {
    const showTitle = this.el.querySelector('.show_title');
    showTitle.innerText = this.model.show_title;
    const showCategory = this.el.querySelector('.Category');
    showTitle.innerText = this.model.show_title;
    const showRating = this.el.querySelector('.Rating');
    showTitle.innerText = this.model.show_title;
    // this.el.queryQuerySelctor('.rating')
    // r.innerText=this.model.rating
  }
}
