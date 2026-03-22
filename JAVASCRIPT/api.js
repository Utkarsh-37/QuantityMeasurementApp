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


async function saveHistory(record) {
    try {
        const res = await fetch(`${BASE_URL}/history`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(record)
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Error saving history:", error);
        // ❗ DO NOT throw — history is non-critical
    }
}

// In api.js
async function getHistory() {
    try {
        // Try the simplest URL first to see if ANY data comes back
        const res = await fetch(`${BASE_URL}/history`);
        
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        
        // Manual sort if the server query fails to do it
        return data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    } catch (error) {
        console.error("Error fetching history:", error);
        return [];
    }
}
