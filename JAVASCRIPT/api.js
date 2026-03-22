const BASE_URL = "http://localhost:3000";

async function getUnits(type) {
    try {
        const res = await fetch(`${BASE_URL}/units?type=${type.toLowerCase()}`);

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Error fetching units:", error);
        return [];
    }
}

async function getConversion(from, to) {
    try {
        const res = await fetch(
            `${BASE_URL}/conversions?from=${from}&to=${to}`
        );

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json(); // always array

        if (!data.length) {
            throw new Error("No conversion found");
        }

        return data[0]; // return first match

    } catch (error) {
        console.error("Error fetching conversion:", error);
        throw error; // IMPORTANT: let caller handle it
    }
}

