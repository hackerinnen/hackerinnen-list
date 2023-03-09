let selectedTags = [];
const filterPills = document.querySelectorAll("[data-filter]");
const cards = document.getElementsByClassName("card-selector");
const selectionContainer = document.getElementById("my-selection-selector");

const removeSelectionPill = (ele: Element, selectionPill: Node) => {
  selectedTags = selectedTags.filter(
    (tag) => tag !== ele.getAttribute("data-filter")
  );
  selectionContainer.removeChild(selectionPill);
  filterCards();
};

const addSelectionPill = (ele: Element) => {
  // clone pill and add delete button
  const selectionPill = ele.cloneNode(true);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.classList.add("is-small");
  selectionPill.addEventListener("click", (ele) => {
    removeSelectionPill(ele.currentTarget as Element, selectionPill);
  });

  // add selection pill to selection container
  selectionPill.appendChild(deleteButton);
  selectionContainer.append(selectionPill);
};

const filterCards = () => {
  Array.from(cards).forEach((card) => {
    const cardTags = card.getAttribute("data-tags").split(",");
    if (
      selectedTags.length > 0 &&
      !selectedTags.some((tag) => cardTags.includes(tag))
    ) {
      card.classList.add("is-hidden");
    } else {
      card.classList.remove("is-hidden");
    }
  });
};

filterPills.forEach((pill) => {
  pill.addEventListener("click", (ele) => {
    if (
      !selectedTags.includes(
        (ele.currentTarget as Element).getAttribute("data-filter")
      )
    ) {
      selectedTags.push(
        (ele.currentTarget as Element).getAttribute("data-filter")
      );
      addSelectionPill(ele.currentTarget as Element);
      filterCards();
    }
  });
});

export {};
