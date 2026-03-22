function applyConversion(value, convObj) {

    // ❌ Invalid number check
    if (isNaN(value)) {
        throw new Error("Invalid number");
    }

    // 🔹 Same unit case (handled optionally by caller, but safe here)
    if (!convObj) {
        throw new Error("Conversion object missing");
    }

    // 🔹 Factor-based conversion
    if (convObj.factor !== null) {
        return parseFloat((value * convObj.factor).toFixed(6));
    }

    // 🔹 Formula-based conversion
    else {
        try {
            const expr = convObj.formula.replace("x", value);
            const result = eval(expr); // safe because from db.json
            return parseFloat(result.toFixed(6));
        } catch (err) {
            throw new Error("Bad formula");
        }
    }
}