export class Note {

    #name = ''
    #done = false

    constructor(container, name = "", done = false) {
        this.item = document.createElement("div")
        this.buttonGroup = document.createElement("div")
        this.nameSpan = document.createElement("span")
        this.doneButton = document.createElement("button")
        this.deleteButton = document.createElement("button")

        this.item.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        )

        this.buttonGroup.classList.add("btn-group", "btn-group-sm")
        this.doneButton.classList.add("btn", "btn-success")
        this.doneButton.textContent = "Готово"
        this.deleteButton.classList.add("btn", "btn-danger")
        this.deleteButton.textContent = "Удалить"

        this.doneButton.addEventListener('click', () => {
            this.done = !this.done
        })

        this.deleteButton.addEventListener('click', () => {
            if (confirm('A u shure?')) {
                this.delete()
            }
        })


        this.buttonGroup.append(this.doneButton)
        this.buttonGroup.append(this.deleteButton)
        this.item.append(this.nameSpan)
        this.item.append(this.buttonGroup)

        this.name = name
        this.done = done

        container.append(this.item)
    }

    set name(value) {
        this.#name = value
        this.nameSpan.textContent = value

    }

    get name() {
        return this.#name
    }


    set done(value) {
        this.#done = value

        if (value) {
            this.item.classList.add('list-group-item-success')
        } else {
            this.item.classList.remove('list-group-item-success')
        }
    }

    get done() {
        return this.#done
    }

    delete() {
        this.item.remove()
    }
}