import { deleteCourse, getCourseById, updateCourseById } from "@/app/model/CourseService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    console.log(params.id)
    deleteCourse(params.id)
    return NextResponse.json({delete: "ok"})    
}

export async function GET(request: Request, {params}: any) {
    const course = await getCourseById(params.id)
    return NextResponse.json(course)    
}

export async function PUT(request: Request, { params }: any) {
    const course = await request.json()
    await updateCourseById(params.id, course.name, course.description)
    return NextResponse.json(await getCourseById(params.id))
}