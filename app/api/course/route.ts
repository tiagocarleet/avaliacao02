import { getAllCourse } from "@/app/model/CourseService"
import { NextResponse } from "next/server"

export async function GET(){
    const courses = await getAllCourse()
    console.log("Acessou GET...")
    return NextResponse.json(courses)

}


