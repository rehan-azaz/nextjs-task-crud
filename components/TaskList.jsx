import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { HiChevronDoubleUp } from "react-icons/hi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const getTasks = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/task`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching tasks", error);
  }
};

const TaskList = async () => {
  const { tasks } = (await getTasks()) || [];

  return (
    <>
      {tasks?.length > 0 ? (
        tasks?.map((task, index) => (
          <div
            className={`p-4 border ${
              task?.priority === "high" && "border-red-500"
            }  ${task?.priority === "medium" && "border-green-500"}  ${
              task?.priority === "low" && "border-indigo-500"
            } rounded my-3 flex justify-between gap-5 items-start`}
            key={index}
          >
            <div className="flex">
              {task?.priority === "high" && (
                <span className="p-2 text-red-400">
                  <HiChevronDoubleUp />
                </span>
              )}

              {task?.priority === "medium" && (
                <span className="p-2 text-green-400">
                  <HiChevronDoubleUp />
                </span>
              )}

              {task?.priority === "low" && (
                <span className="p-2 text-indigo-500">
                  <HiOutlineMenuAlt4 />
                </span>
              )}

              <div>
                <h2 className="font-bold text-2xl">{task.title}</h2>
                <div>{task.description}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <DeleteBtn id={task._id} />

              <Link href={`/task/edit/${task._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 rounded my-3 flex justify-center gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">No Tasks Found</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
