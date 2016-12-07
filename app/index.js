import 'whatwg-fetch';

fetch(`${apiUrl}?q = ${input.value}`)
  .then((r) => response.json())
  .then((data) => {
    view.model = data;
    view.render();
  });
