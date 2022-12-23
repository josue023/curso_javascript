const parrafos = document.querySelectorAll(".parrafo")
const papelera = document.getElementById("papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
    papelera.style.border = "1px solid darkslategrey"
})

papelera.addEventListener("dragleave", () => {
    papelera.style.border = "none"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    parrafo.style.display = "none"
    papelera.style.border = "none"
})