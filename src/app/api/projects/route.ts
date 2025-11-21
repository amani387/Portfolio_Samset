import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Project from '@/models/Project';

export async function GET() {
    try {
        await dbConnect();
        const projects = await Project.find({}).sort({ createdAt: -1 });
        return NextResponse.json(projects);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await request.json();
        const project = await Project.create(body);
        return NextResponse.json(project, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}
