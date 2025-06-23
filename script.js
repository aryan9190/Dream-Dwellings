document.addEventListener("DOMContentLoaded", () => {
  const cozyHomes = [
    {
      name: "Cozy Treehouse",
      description: "Nestled in the arms of an ancient oak, this home is the perfect skyward retreat.",
      image: "assets/cozy-treehouse.jpg"
    },
    {
      name: "Moonlight Cottage",
      description: "Bathed in moonlight every night, this cottage brings calm to restless minds.",
      image: "assets/moonlight-cottage.jpg"
    }
  ];

  const moreHomes = [
    {
      name: "Floating Hut",
      description: "Hovering gently above a silent lake, this hut is the definition of peace.",
      image: "assets/floating-hut.jpg"
    }
  ];

  const allHomes = [...cozyHomes, ...moreHomes]; // ✅ SPREAD

  const homesContainer = document.getElementById("homes");

  allHomes.forEach(home => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${home.image}" alt="${home.name}">
      <h3>${home.name}</h3>
      <p>${home.description}</p>
    `;
    homesContainer.appendChild(card);
  });
});
