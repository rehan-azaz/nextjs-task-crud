"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EditTaskForm = ({ editTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const router = useRouter();

  const handnleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, priority } = task;

    if (!title || !description || !priority) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/task/${task._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, priority }),
        }
      );

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to update a task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTask({ ...editTask });
  }, [editTask]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="title"
        onChange={(e) => handnleChange(e)}
        value={task?.title}
        className="border border-slate-500 rounded px-8 py-2"
        placeholder="Task Title"
      />

      <input
        type="text"
        name="description"
        onChange={(e) => handnleChange(e)}
        value={task?.description}
        className="border border-slate-500 rounded px-8 py-2"
        placeholder="Task Description"
      />

      <div>
        <label className="block font-bold mb-2">Priority</label>
        <div className="flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="priority"
            defaultValue="high"
            onChange={(e) => handnleChange(e)}
            checked={task?.priority === "high" ? true : false}
          />
          <span className="ml-2">High</span>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="priority"
            defaultValue="medium"
            onChange={(e) => handnleChange(e)}
            checked={task?.priority === "medium" ? true : false}
          />
          <span className="ml-2">Medium</span>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="priority"
            defaultValue="low"
            onChange={(e) => handnleChange(e)}
            checked={task?.priority === "low" ? true : false}
          />
          <span className="ml-2">Low</span>
        </div>
      </div>

      <button
        type="submit"
        className="font-bold bg-green-700 text-white px-6 py-3 w-fit rounded"
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTaskForm;
