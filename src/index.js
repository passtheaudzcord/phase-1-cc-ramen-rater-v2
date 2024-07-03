const url = 'http://localhost:3000/ramens';
const menu = document.getElementById('ramen-menu');
const newRamenForm = document.getElementById('new-ramen');

//fetch ramens from api
fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Error";
      }
    })
    .then(data => renderRamens(data));

function renderRamens(ramens) {
  ramens.forEach(ramen => {
    ramenImage(ramen);
  });
}

  function ramenImage(ramen) {
    const image = document.createElement('img')
    image.src = ramen.image;
    menu.append(image);
  
    image.addEventListener('click', (e) => ramenDetails(ramen))
  }
 
  function ramenDetails(ramen) {
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const restaurant = document.getElementById('detail-restaurant');
    const ramenRating = document.getElementById('rating-display');
    const commentInput = document.getElementById('comment-display');
  
    detailImage.src = ramen.image;
    detailName.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    ramenRating.textContent = ramen.rating;
    commentInput.textContent = ramen.comment;
  }
  
  newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault()
      const newRamen = {
      image: e.target.image.value,
      restaurant: e.target.restaurant.value,
      name: e.target.name.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
      }
    });
ramenImage(newRamen);

    // function ramenImage() {
    // fetch("http://localhost:3000/ramens", {
        // method: "POST",
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     name: detailName.value,
        //     restaurant: restaurant.value,
        //     image: detailImage.value,
        //     ramenRating: ramenRating.value,
        //     commentInput: commentInput.value
        // })
  //   })
  //  .then((res) => {
	// 			if (res.ok) {
	// 				return res.json();
	// 			} else {
	// 				throw "no";
	// 			}
	// 		})
	// 		.then(ramenImage)
    // }
		// 	});
  ramenImage();
