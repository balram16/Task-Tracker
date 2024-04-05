import React, { useState } from 'react';

const Task = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(editedTask);
    setIsEditing(false);
  };

  const toggleCompletion = () => {
    const updatedTask = { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' };
    editTask(updatedTask);
  };

  const renderEditForm = () => {
    return (
      <form onSubmit={handleEditSubmit}>
        <input
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleEditChange}
          required
        />
        <input
          type="text"
          name="description"
          value={editedTask.description}
          onChange={handleEditChange}
          required
        />
        <input
          type="text"
          name="assignee"
          value={editedTask.assignee}
          onChange={handleEditChange}
          required
        />
        <select
          name="priority"
          value={editedTask.priority}
          onChange={handleEditChange}
          required
        >
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <select
          name="status"
          value={editedTask.status}
          onChange={handleEditChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Deployed">Deployed</option>
          <option value="Deferred">Deferred</option>
        </select>
        <button type="submit">Save</button>
      </form>
    );
  };

  return (
    <div className={task.status === 'Completed' ? 'task completed' : 'task'}>
      {!isEditing ? (
        <>
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Assignee: {task.assignee}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <input
            type="checkbox"
            checked={task.status === 'Completed'}
            onChange={toggleCompletion}
          />
          <label>Completed</label>
        </>
      ) : (
        renderEditForm()
      )}
    </div>
  );
};

export default Task;
