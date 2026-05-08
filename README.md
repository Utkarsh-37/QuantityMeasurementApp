# JavaScript Use Cases – Quantity Measurement App

## UC-JS-01

Created `db.json` with:

- Units collection
- Conversions collection
- History collection

This data is used by `json-server` for all measurement operations.

---

## UC-JS-02

Initialized the application on page load using `DOMContentLoaded`.

Implemented:

- Default application state
- Loading units and history
- Base event listeners

---

## UC-JS-03

Fetched unit data from `json-server` using type-based filtering.

Enabled dynamic dropdown population based on selected measurement type.

---

## UC-JS-04

Fetched conversion records for selected unit pairs from `json-server`.

Handled array responses and returned the correct conversion object.

---

## UC-JS-05

Saved calculation history using a `POST` request.

Ensured history save failures do not interrupt the user workflow.

---

## UC-JS-06

Loaded history records sorted by timestamp in descending order.

Handled:

- Empty history
- API errors

Returned an empty list safely when needed.

---

## UC-JS-07

Applied conversions using:

- Multiplication factor
- Formula-based evaluation

Rounded results to 6 decimal places for precision.

---

## UC-JS-08

Compared two values after converting them to a common base unit.

Returned readable comparison results:

- GREATER
- LESS
- EQUAL

---

## UC-JS-09

Performed arithmetic operations after converting values into the same unit.

Handled edge cases such as:

- Divide by zero
- Invalid operators

---

## UC-JS-10

Dynamically populated dropdown options with unit data.

Included:

- Default disabled option
- Safe handling for empty datasets

---

## UC-JS-11

Managed active states for buttons and cards.

Ensured only one item remains active within a group.

---

## UC-JS-12

Displayed calculation results in the result panel.

Added:

- Highlight effect
- Support for null or string results

---

## UC-JS-13

Toggled visibility of operator selection based on selected action.

Displayed operators only during arithmetic operations.

---

## UC-JS-14

Rendered history records dynamically in the UI.

Handled:

- Empty state
- Timestamp formatting

---

## UC-JS-15

Handled measurement type card selection.

Updated application state by:

- Reloading units
- Clearing inputs
- Resetting results

---

## UC-JS-16

Handled action tab selection and updated the operation mode.

Also:

- Toggled operator section
- Reset result display

---

## UC-JS-17

Executed:

- Conversion operations
- Comparison operations
- Arithmetic operations

Displayed results, saved history, and refreshed history dynamically.

---
