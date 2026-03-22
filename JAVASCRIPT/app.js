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

    // TEST history save
    await saveHistory({
        type: "Length",
        action: "Conversion",
        expression: "10 km to m",
        result: "10000",
        timestamp: new Date().toISOString()
    });

    console.log("History saved!");
}

async function loadHistory() {
    console.log("Loading history...");
}

function showError(message) {
    alert(message);
}