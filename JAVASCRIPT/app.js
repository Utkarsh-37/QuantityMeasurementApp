console.log("App.js loaded");

const state = {
    type: "Length",
    action: "Conversion",
    fromVal: null,
    fromUnit: "",
    toVal: null,
    toUnit: "",
    operator: "+"
};

document.addEventListener("DOMContentLoaded", async () => {

    try {
        attachEventListeners();

        await loadUnits("Length");

        setDefaultActive();

        toggleOperators(false);

        await loadHistory();

    } catch (error) {
        console.error("Initialization Error:", error);
        showError(error.message)
    }

});

function attachEventListeners() {
    console.log("Event listeners attached");

    // 🔹 Type cards
    const typeContainer = document.querySelector(".row.g-4");
    const typeCards = document.querySelectorAll(".type-card");

    typeCards.forEach(card => {
        card.addEventListener("click", () => {
            setActive(typeContainer, card, ".type-card");

            const selectedType = card.innerText.trim();
            console.log("Selected type:", selectedType);

            state.type = selectedType;

            loadUnits(selectedType);
        });
    });

    // 🔹 Action buttons
    const actionContainer = document.querySelector(".row.g-3");
    const actionButtons = document.querySelectorAll(".action-btn");

    actionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            setActive(actionContainer, btn, ".action-btn");

            const selectedAction = btn.innerText.trim();
            console.log("Selected action:", selectedAction);

            state.action = selectedAction;
        });
    });
}

function setDefaultActive() {
    document.querySelector(".type-card").classList.add("active");
    document.querySelector(".action-btn").classList.add("active");
}

function toggleOperators(show) {
    console.log("Operator visibility:", show);
}

async function loadUnits(type) {
    console.log("Loading units for:", type);

    const units = await getUnits(type);
    console.log("Units fetched:", units);

    // 🔹 Get dropdown elements
    const fromSelect = document.getElementById("fromUnit");
    const toSelect = document.getElementById("toUnit");

    // 🔹 Populate both dropdowns
    populateDropdown(fromSelect, units);
    populateDropdown(toSelect, units);

}

async function loadHistory() {
    console.log("Loading history...");

    const history = await getHistory();

    console.log("History fetched:", history);
}

function showError(message) {
    alert(message);
}