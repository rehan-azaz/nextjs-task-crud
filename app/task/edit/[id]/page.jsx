import React from "react";
import EditTaskForm from "@/components/EditTaskForm";

const getTaskById = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/task/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch task");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTask = async ({ params }) => {
  const { id } = params;

  const { task } = await getTaskById(id);

  return <EditTaskForm editTask={task} />;
};

export default EditTask;
