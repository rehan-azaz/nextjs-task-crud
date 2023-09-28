"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }) => {
  const router = useRouter();

  const deleteTask = async () => {
    const confirmd = confirm("Are you sure?");

    if (confirmd) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/task?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={() => deleteTask()} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default DeleteBtn;
