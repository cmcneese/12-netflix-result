class NetflixView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }
  render() {
    const showTitle = this.el.querySelector('.show-title');
    showTitle.innerText = this.model.show_title;
    const showCategory = this.el.querySelector('.show-genre');
    showTitle.innerText = this.model.show_title;
    const showRating = this.el.querySelector('.show-rating');
    showTitle.innerText = this.model.show_title;
    const moviePic = this.el.querySelector('.movie-pic');
    showTitle.innerText = this.model.show_title;
    const movieSummar = this.el.querySelector('.description');
    showTitle.innerText = this.model.show_title;
    const movieStarring = this.el.querySelector('.starring');
    showTitle.innerText = this.model.show_title;


    // this.el.queryQuerySelctor('.rating')
    // r.innerText=this.model.rating
  }
}
