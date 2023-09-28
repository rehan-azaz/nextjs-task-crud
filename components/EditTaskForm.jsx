import React from "react";

const EditTaskForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 rounded px-8 py-2"
        placeholder="Task Title"
      />

      <input
        type="text"
        className="border border-slate-500 rounded px-8 py-2"
        placeholder="Task Description"
      />

      <div>
        <label className="block font-bold mb-2">Priority</label>
        <div className="flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="taskPriority"
            value="urgent"
          />
          <span className="ml-2">Urgent</span>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="taskPriority"
            value="important"
          />
          <span className="ml-2">Important</span>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="taskPriority"
            value="urgent_important"
          />
          <span className="ml-2">Urgent and Important</span>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="taskPriority"
            value="neither"
          />
          <span className="ml-2">Neither</span>
        </div>
      </div>

      <button className="font-bold bg-green-700 text-white px-6 py-3 w-fit rounded">
        Update Task
      </button>
    </form>
  );
};

export default EditTaskForm;
