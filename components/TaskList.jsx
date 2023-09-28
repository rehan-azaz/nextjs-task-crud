import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TaskList = ({ priority }) => {
  return (
    <>
      <div className="p-4 border border-slate-300 rounded my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Task Heading</h2>
          <div>Task Description</div>
        </div>

        <div className="flex gap-2">
          <DeleteBtn />

          <Link href={`/task/edit/1`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskList;
