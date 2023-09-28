import React from "react";
import EditTaskForm from "@/components/EditTaskForm";

const EditTask = ({ params }) => {
  const { id } = params;
  console.log({ id });
  return <EditTaskForm />;
};

export default EditTask;
