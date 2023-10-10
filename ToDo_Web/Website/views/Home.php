<?php include('../includes/header.php'); 
 ?>

<h1>Todo List</h1>

<div class="task-list">
    <!-- You can dynamically generate tasks from your database here -->
    <div class="task">
        <input type="checkbox" id="task1">
        <label for="task1">Task 1</label>
        <button>Delete</button>
    </div>
    <div class="task">
        <input type="checkbox" id="task2">
        <label for="task2">Task 2</label>
        <button>Delete</button>
    </div>

</div>


<form action="add_task.php" method="POST">
    <input type="text" id="newTask" name="newTask" placeholder="Add a new task" required>
    <button type="submit">Add</button>
</form>

