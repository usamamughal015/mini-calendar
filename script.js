const monthNameEl = document.getElementById("month-name");

const dayNameEl = document.getElementById("day-name");

const dayNumberEl = document.getElementById("day-number");

const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleDateString("en", {
    month: "long"
})

dayNameEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
})

dayNumberEl.innerText = date.toLocaleDateString("en", {
    day: "numeric"
})

yearEl.innerText = date.toLocaleDateString("en", {
    year: "numeric"
})
