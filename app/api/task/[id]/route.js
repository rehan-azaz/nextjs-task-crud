import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
    const { id } = params;
    const { title, description, priority } = await request.json();

    await connectMongoDB();

    const task = await Task.findByIdAndUpdate(id, {
        title,
        description,
        priority
    })

    return NextResponse.json({ message: "Task Updated", task }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;


    await connectMongoDB();

    const task = await Task.findOne({ _id: id })

    return NextResponse.json({ message: "Task", task }, { status: 200 })
}