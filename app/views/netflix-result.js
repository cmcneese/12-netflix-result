export default class NetflixView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }
  render() {
    const showTitle = this.el.querySelector('.show-title');
    showTitle.innerText = this.model.show_title;
    const showCategory = this.el.querySelector('.show-genre');
    showCategory.innerText = this.model.category;
    const showRating = this.el.querySelector('.show-rating');
    showRating.innerText = this.model.rating;
    const moviePic = this.el.querySelector('.movie-pic');
    moviePic.src = this.model.poster;
    const movieSummar = this.el.querySelector('.description');
    movieSummar.innerText = this.model.summary;
    const movieStarring = this.el.querySelector('.starring');
    movieStarring.innerText = this.model.show_cast;


    // this.el.queryQuerySelctor('.rating')
    // r.innerText=this.model.rating
  }
}
