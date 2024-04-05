import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  // Group tasks by status
  const tasksByStatus = tasks.reduce((acc, task) => {
    acc[task.status] = acc[task.status] || [];
    acc[task.status].push(task);
    return acc;
  }, {});

  return (
    <div className="task-list">
      {Object.entries(tasksByStatus).map(([status, tasks]) => (
        <div key={status} className="task-column">
          <h2>{status}</h2>
          {tasks.map(task => (
            <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
