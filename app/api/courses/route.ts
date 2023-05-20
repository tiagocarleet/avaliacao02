import { getAllCourse, addCourse } from "@/app/model/CourseService"
import { NextResponse } from "next/server"

export async function GET(){
    const courses = await getAllCourse()
    console.log("Acessou GET...")
    return NextResponse.json(courses)
}

export async function POST(request: Request){
    const course = await request.json()
    addCourse(course.ID, course.name, course.description)
    return NextResponse.json({sucess : "ok"})

}

