import { getAllCourse, addCourse, updateCourseById } from "@/app/model/CourseService"
import { addCordinator } from "@/app/model/cordinatorService"
import { request } from "http"
import { NextResponse } from "next/server"

export async function GET(){
    const courses = await getAllCourse()
    console.log("Acessou GET...")
    return NextResponse.json(courses)
}

export async function POST(request: Request){
    const course = await request.json()
    addCourse(course.ID, course.name, course.email)
    return NextResponse.json({sucess : "ok"})
}