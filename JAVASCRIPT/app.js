console.log("App.js loaded");
// ✅ Global State (ONLY ONCE)
const state = {
    type: "Length",
    action: "Conversion",
    fromVal: null,
    fromUnit: "",
    toVal: null,
    toUnit: "",
    operator: "+"
};

// ✅ Single DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {

    try {
        attachEventListeners();

        await loadUnits("Length");

        setDefaultActive();

        toggleOperators(false);

        await loadHistory();

    } catch (error) {
        console.error("Initialization Error:", error);
        showError("Server unavailable");
    }

});

// ✅ Functions

function attachEventListeners() {
    console.log("Event listeners attached");
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
}

async function loadHistory() {
    console.log("Loading history...");
}

function showError(message) {
    alert(message);
}