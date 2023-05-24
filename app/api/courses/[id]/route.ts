import { deleteCourse } from "@/app/model/CourseService"
import { updateCourse } from "@/app/model/CourseService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {

    console.log(params.id)
    deleteCourse(params.id)
    return NextResponse.json({sucess: "ok"})
    
}

export async function UPDATE(request:Request, {params}: any){

    console.log(params.id)
    updateCourse(params.id)
    return NextResponse.json({UPDATE: "ok"})
}