const packagesData = [
  {
    category: "arunachal",
    state: "Arunachal Pradesh",
    title: "Romance in Breathtaking Arunachal Pradesh",
    description:
      "With its emerald meadows and sparkling rivers, Arunachal Pradesh is a perfect getaway for all couples.",
    duration: 10,
    page: "./package.arunachal-romance.html",
    image: "arunachal.cover.jpg",
  },
  {
    category: "assam",
    state: "Assam",
    title: "Up Close Wildlife in Kaziranga National Park",
    description:
      "The home of the one-horned rhinos, Kaziranga National Park is a must-see place in the Assam.",
    duration: 8,
    page: "./package.assam-kaziranga.html",
    image: "kaziranga.cover.jpg",
  },
  {
    category: "meghalaya",
    state: "Meghalaya",
    title: "Explore the Scotland of East Shillong",
    description:
      "If you are a nature lover and an adventure seeker, then this trip to Shillong is perfect for you.",
    duration: 8,
    page: "./package.meghalaya-scotland.html",
    image: "meghalaya.cover.jpg",
  },
  {
    category: "assam",
    state: "Assam",
    title: "Explore the River Island of Majuli",
    description:
      "Majuli is an environment-friendly, lush green, pristine, freshwater island on mighty Brahmaputra river.",
    duration: 9,
    page: "./package.assam-majuli.html",
    image: "majuli.cover.jpg",
  },
  {
    category: "nagaland",
    state: "Nagaland",
    title: "Enjoy the Hornbill Festival in the land of festivals",
    description:
      "Hornbill Festival attracts people from everywhere, showcasing a mélange of cultures together.",
    duration: 10,
    page: "./package.nagaland-hornbill.html",
    image: "hornbill.cover.jpg",
  },
  {
    category: "arunachal",
    state: "Arunachal Pradesh",
    title: "Relaxing Arunachal with Nameri National Park Tour",
    description:
      "Be prepared to wander in the mighty Himalayas found on the land of Arunachal Pradesh.",
    duration: 8,
    page: "./package.arunachal-nameri.html",
    image: "arunachal-2.cover.jpg",
  },
  {
    category: "arunachal",
    state: "Arunachal Pradesh",
    title: "Tawang Excursion Tour Package.",
    description:
      "Tawang is one of the most beautiful districts of Arunachal Pradesh.",
    duration: 8,
    page: "./package.arunachal-tawang.html",
    image: "tawang.cover.jpg",
  },
  {
    category: "meghalaya",
    state: "Meghalaya",
    title: "The Best of Meghalaya's Natural Beauty",
    description:
      "Nature has blessed the state of Meghalaya generously; its landscape bears ample evidence to that.",
    duration: 5,
    page: "./package.meghalaya-natural.html",
    image: "meghalaya-2.cover.jpg",
  },
  {
    category: "nagaland",
    state: "Nagaland",
    title: "The Mesmerizing Traditions of Nagaland",
    description:
      "None can disagree the fact that Nagaland is truly a land of wonders.",
    duration: 11,
    page: "./package.nagaland-traditional.html",
    image: "nagaland-2.cover.jpg",
  },
  {
    category: "assam",
    state: "Assam",
    title: "Relaxing Golfing with GetSetGo",
    description:
      "It is about time you let our team create the legendary experience that you never imagined was possible.",
    duration: 5,
    page: "./package.assam-golf.html",
    image: "assam-package-1.cover.jpg",
  },
];

function filterPackages(destination) {
  return destination === "all"
    ? packagesData
    : packagesData.filter((item) => item.category === destination);
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedState = new URLSearchParams(document.location.search).get(
    "destination"
  );

  const template = document.querySelector("template#packageTempolate");
  const listContainer = document.getElementById("packageList");
  const row = document.createElement("div");
  row.classList.add("row");

  const packages = filterPackages(selectedState || "all");
  packages.forEach((item) => {
    const card = template.content.cloneNode(true);
    card
      .querySelector("img")
      .setAttribute("src", `../static/images/${item.image}`);
    card.querySelector("h4").textContent = item.title;
    card.querySelector("p#description").textContent = item.description;
    card.querySelector("span#duration").textContent = item.duration;
    card.querySelector(".badge#state").textContent = item.state;
    card.querySelector("a.btn").setAttribute("href", item.page);

    row.appendChild(card);
  });

  listContainer.appendChild(row);
  template.remove();
  document
    .getElementById(selectedState ? selectedState : "allPackages")
    .classList.add("active");
});
