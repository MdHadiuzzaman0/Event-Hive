"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function eventCreate (formData){
    const newEvent = Object.fromEntries(formData.entries())
    const res = await fetch('http://localhost:8000/events',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
    const data = await res.json()
    // console.log(data)
    if(data.acknowledged){
        revalidatePath('/events')
        redirect('/events')
    }
}

export async function eventDelete ({id, title}){
    const res = await fetch(`http://localhost:8000/events/${id}`,{
        method: "DELETE",
    })
    const data = await res.json()
    console.log(data)
    if(data.deletedCount > 0){
        revalidatePath('/events')
        return { success: true, message: `${title} is removed!` }
        redirct("/users")
    }
}