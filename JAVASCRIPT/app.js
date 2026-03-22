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

        await loadUnits("length");

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

    const fromInput = document.querySelector(".input-number"); // first input
    const toInput = document.querySelectorAll(".input-number")[1];

    const fromSelect = document.getElementById("fromUnit");
    const toSelect = document.getElementById("toUnit");

    typeCards.forEach(card => {
        card.addEventListener("click", async () => {

            try {
                // 🔹 1. Update state (from dataset)
                state.type = card.dataset.type;

                console.log("Selected type:", state.type);

                // 🔹 2. Update active UI
                setActive(typeContainer, card, ".type-card");

                // 🔹 3. Clear inputs + result
                fromInput.value = "";
                toInput.value = "";
                showResult(null);

                // 🔹 4. Fetch new units
                const units = await getUnits(state.type);

                // 🔹 5. Populate dropdowns
                populateDropdown(fromSelect, units);
                populateDropdown(toSelect, units);

                // 🔹 6. Reset state units
                state.fromUnit = "";
                state.toUnit = "";

            } catch (error) {
                console.error("Error loading units:", error);
                showError("Failed to load units");
            }

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

            toggleOperators(selectedAction === "Arithmetic");
        });
    });
}

function setDefaultActive() {
    document.querySelector(".type-card").classList.add("active");
    document.querySelector(".action-btn").classList.add("active");
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

    renderHistory(history); 
}

function showError(message) {
    alert(message);
}