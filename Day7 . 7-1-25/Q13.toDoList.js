// //Create a toDoList that add task, delete task , Display Task,Task Status;

function toDoList(){
    let task = [];
    return {
        add: function(taskTitle, taskStatus="Not started") {
            task.push({ title: taskTitle, status: taskStatus });
            console.log(`${taskTitle} added in the Task`);
        },
        delete: function(taskTitle) {
            let index = task.findIndex((t) => t.title === taskTitle);
            if (index !== -1) {
                task.splice(index, 1); // Removes  task if index is found
                console.log(`${taskTitle} has been deleted.`);
            } else {
                console.log(`"${taskTitle}" is not in Task List.`);
            }
        },
        status: function(taskTitle, newStatus) {
            const taskItem = task.find((t) => t.title === taskTitle);
            if (taskItem) {
                taskItem.status = newStatus;
                console.log(`Task "${taskTitle}" status updated  "${newStatus}".`);
            } else {
                console.log(`Task "${taskTitle}" not found.`);
            }
        },
        displayTask: function() {
            console.log("------------Displaying Task----------")
            if (task.length === 0) {
                console.log('No tasks available.');
            } else {
                task.forEach((t, index) => {
                    console.log(`${index + 1}. ${t.title} - Status: ${t.status}`);
                });
            }
        }
    };
}

let myTodoList = toDoList();
myTodoList.add('a');
myTodoList.add('b');
myTodoList.add('c');
myTodoList.add('d');
myTodoList.add('e');
myTodoList.add('f');
myTodoList.add('g');
myTodoList.add('h');

myTodoList.displayTask();

myTodoList.status('b', 'Completed');
myTodoList.status('f', 'in progess');
myTodoList.status('c', 'complate');

myTodoList.displayTask();

myTodoList.delete('b');
myTodoList.delete('c');
myTodoList.delete('e');

 myTodoList.displayTask();

