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

    // TEST arithmetic (SAFE VERSION)

    const v1 = 10; // km
    const v2 = 500; // m

    // convert v2 → km (reverse not available, so use direct base logic)
    const conv = await getConversion("km", "m");
    const base = applyConversion(v1, conv); // 10 km → m = 10000

    const v2norm = 500; // already in m

    const result = performArithmetic(base, v2norm, "+");

    console.log("Arithmetic result:", result);
}

async function loadHistory() {
    console.log("Loading history...");

    const history = await getHistory();

    console.log("History fetched:", history);
}

function showError(message) {
    alert(message);
}