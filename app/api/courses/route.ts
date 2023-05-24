import { getAllCourse, addCourse, updateCourse } from "@/app/model/CourseService"
import { request } from "http"
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

export async function PUT(request: Request){
    const course = await request.json()
    updateCourse(course.ID)
    return NextResponse.json({sucess : "ok"})
}
