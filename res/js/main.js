const img = document.getElementsByClassName("img");
const marble = document.getElementById("marble");
const button = document.getElementById("button");

let counter = 0;

window.onload = () => {
    random();
}

button.onclick = () => {
  if (counter > 0) {
    window.location.reload();

  } else {
    random();
  }
};

random = () => {
    let rand = Math.floor(Math.random() * 10);
    console.log(rand);
    if (rand <= 3) {
      marble.style.transform = `translateX(-31em)`;
    } else if (rand > 2 && rand < 7) {
      marble.style.transform = `translateX(0em)`;
    } else {
      marble.style.transform = `translateX(31em)`;
    }
    counter = 0;
}

[...img].forEach((img) => {
  img.onclick = () => {
    counter++;
    img.style.transform = `translateY(-15em)`;
    marble.classList.remove("vis");
  };
});
