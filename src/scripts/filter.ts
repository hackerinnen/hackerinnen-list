let selectedTags: Element[] = [];
const filterPills = document.querySelectorAll("[data-filter]");
const cards = document.getElementsByClassName("card-selector");
const selectionContainer = document.getElementById("my-selection-selector");

const removeSelectionPill = (ele: Element, selectionPill: Node) => {
  selectedTags = selectedTags.filter(
    (tag) => tag.getAttribute("data-filter") !== ele.getAttribute("data-filter")
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

const showCards = (cardsArray: Element[]) => {
  cardsArray.forEach((card) => {
    card.classList.remove("is-hidden");
  });
}

const hideCards = (cardsArray: Element[]) => {
  cardsArray.forEach((card) => {
    card.classList.add("is-hidden");
  });
}

const filterCards = () => {
  let allCards = Array.from(cards);
  let filteredCards = allCards;

  if (selectedTags.length === 0) {
    showCards(allCards);
    return
  }

  if (selectedTags.length > 0) {
    const languageSelection = selectedTags.filter((ele) => {
      return ele.getAttribute("data-group") === "language";
    });

    const audienceSelection = selectedTags.filter((ele) => {
      return ele.getAttribute("data-group") === "audience";
    });

    const tagSelection = selectedTags.filter((ele) => {
      return ele.getAttribute("data-group") === "tag";
    });

    if (languageSelection.length > 0) {
      filteredCards = allCards.filter((card) => {
        const cardLanguage = card.getAttribute("data-language").split(",");
        return languageSelection.some((tag) =>
          cardLanguage.includes(tag.getAttribute("data-filter"))
        );
      });
    }

    if (audienceSelection.length > 0) {
      filteredCards = filteredCards.filter((card) => {
        const cardAudience = card.getAttribute("data-audience").split(",");
        return audienceSelection.some((tag) =>
          cardAudience.includes(tag.getAttribute("data-filter"))
        );
      });
    }

    if (tagSelection.length > 0) {
      filteredCards = filteredCards.filter((card) => {
        const cardTags = card.getAttribute("data-tags").split(",");
        return tagSelection.some((tag) =>
          cardTags.includes(tag.getAttribute("data-filter"))
        );
      });
    }

    hideCards(allCards);
    showCards(filteredCards);
  }
};

filterPills.forEach((pill) => {
  pill.addEventListener("click", (ele) => {
    if (!selectedTags.includes(ele.currentTarget as Element)) {
      selectedTags.push(ele.currentTarget as Element);
      addSelectionPill(ele.currentTarget as Element);
      filterCards();
    }
  });
});

export {};
