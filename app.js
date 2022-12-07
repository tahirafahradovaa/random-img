const container = document.querySelector("div");
const newFunc = setInterval(async () => {
  const res = await axios.get("https://dog.ceo/api/breeds/image/random");
  const source = await res.data.message;
  add(source);
}, 1000);

const add = function (src) {
  container.innerHTML = "";
  const img = document.createElement("img");
  img.setAttribute("src", src);
  container.append(img);
};
