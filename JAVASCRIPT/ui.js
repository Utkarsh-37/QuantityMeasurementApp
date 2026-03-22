function populateDropdown(selectEl, units) {

    // ❌ Safety check
    if (!selectEl) {
        console.warn("Dropdown element not found");
        return;
    }

    // 🔹 Clear existing options
    selectEl.innerHTML = "";

    // 🔹 Default option
    const defaultOpt = document.createElement("option");
    defaultOpt.textContent = "-- Select Unit --";
    defaultOpt.disabled = true;
    defaultOpt.selected = true;

    selectEl.appendChild(defaultOpt);

    // 🔹 Add unit options
    units.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.symbol;
        opt.textContent = `${u.label} (${u.symbol})`;
        selectEl.appendChild(opt);
    });
}

function setActive(parentEl, clickedEl, childSelector) {

    // ❌ Safety check
    if (!parentEl) {
        console.warn("Parent element not found");
        return;
    }

    // 🔹 Remove active from all children
    parentEl.querySelectorAll(childSelector).forEach(el => {
        el.classList.remove("active");
    });

    // 🔹 Add active to clicked element
    clickedEl.classList.add("active");
}