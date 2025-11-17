const concepts = [
  {
    id: "concept-four-root",
    label: "Concept four – angular rail (root)",
    path: "/index.html",
  },
  {
    id: "concept-one",
    label: "Concept one – glassy spotlight",
    path: "/concepts/concept-one/index.html",
  },
  {
    id: "concept-two-kinetic",
    label: "Concept two – kinetic React + Tailwind",
    path: "/concepts/concept-two-kinetic/index.html",
  },
  {
    id: "concept-two-react",
    label: "Concept two (reactive static)",
    path: "/concepts/concept-two-react/index.html",
  },
  {
    id: "concept-three-halo",
    label: "Concept three – minimal halo",
    path: "/concepts/concept-three-halo/index.html",
  },
  {
    id: "concept-five-parallax",
    label: "Concept five – parallax orb",
    path: "/concepts/concept-five-parallax/index.html",
  },
  {
    id: "concept-six-trendline",
    label: "Concept six – refined halo",
    path: "/concepts/concept-six-trendline/index.html",
  },
  {
    id: "concept-four-archive",
    label: "Concept four – archive",
    path: "/concepts/concept-four-rail/index.html",
  },
];

const conceptSelect = document.getElementById("concept-select");
const frame = document.getElementById("concept-frame");

const conceptMap = new Map(concepts.map((concept) => [concept.id, concept]));

concepts.forEach((concept, index) => {
  const option = document.createElement("option");
  option.value = concept.id;
  option.textContent = concept.label;
  if (index === 0) {
    option.selected = true;
  }
  conceptSelect.appendChild(option);
});

function setConcept(conceptId) {
  const concept = conceptMap.get(conceptId);
  if (!concept) {
    return;
  }

  frame.src = concept.path;
}

conceptSelect.addEventListener("change", (event) => {
  setConcept(event.target.value);
});

setConcept(conceptSelect.value || concepts[0].id);
