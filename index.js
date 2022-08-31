// const toDosStore = ["Shopping", "Home work", "Go to the gym"];

class toDoStore {
    constructor() {
        this.toDos = []
    }

    addItem(item) {
        this.toDos.push(item);
    }

    addItems(...items) {
        this.toDos.push(...items);
    }

    removeItem(idx) {
        this.toDos.splice(idx - 1, 1);

    }

    editItem(idx, itemValue) {
        this.toDos.splice(idx - 1, 1, itemValue);

    }

    RenderToDosListTemplate() {
        if (this.toDos.length === 0) {
            console.log("Hooray, you completed your to-do list!");
        } else {
            this.toDos.forEach((item, idx) =>
                console.log(`${idx + 1} - ${item}`)

            );

        }
    }
}


const toDoList = new toDoStore;


toDoList.addItem("test1");
toDoList.addItem("test2");
toDoList.addItem("test4");
toDoList.addItem("test5");
toDoList.removeItem(3);
toDoList.removeItem(5);
toDoList.addItem("Call Alex");
toDoList.editItem(3, "Pay bills");
toDoList.editItem(5, "Visiting Tommy");
toDoList.addItems(["Go to supermarket", "Meet with Ghassan", "New test"]);
toDoList.RenderToDosListTemplate()

console.log(toDoList);