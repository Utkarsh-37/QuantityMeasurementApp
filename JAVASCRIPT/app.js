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
        showError("Server unavailable");
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

    // TEST comparison
    const conv1 = await getConversion("km", "m");

    const base1 = applyConversion(10, conv1); // 10 km → m
    const base2 = 500; // already in meters

    const result = compareValues(10, "km", 500, "m", base1, base2);

    console.log("Comparison:", result);
}

async function loadHistory() {
    console.log("Loading history...");

    const history = await getHistory();

    console.log("History fetched:", history);
}

function showError(message) {
    alert(message);
}