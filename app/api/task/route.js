import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, priority } = await request.json();

    await connectMongoDB();

    const task = await Task.create({
        title,
        description,
        priority
    });

    return NextResponse.json({ message: "Task Created", task }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();

    const tasks = await Task.find();

    return NextResponse.json({ message: "Tasks", tasks }, { status: 200 })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB();

    await Task.findByIdAndDelete(id);

    return NextResponse.json({ message: "Task Deleted" }, { status: 200 })
}