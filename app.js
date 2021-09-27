const cafe_list = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");
function rendercafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  li.setAttribute("doc-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  li.appendChild(name);
  li.appendChild(city);
  cafe_list.appendChild(li);
}

function renderfirst() {
  db.collection("cafes").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      rendercafe(doc);
    });
  });
}

renderfirst();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("cafes").add(
    {
      name: form.name.value,
      city: form.city.value,
    },
    {
      onlyOnce: true,
    }
  );
});
