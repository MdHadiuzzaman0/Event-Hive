"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// raw data = {
//   title: 'Bussiness seminer',
//   location: 'Dahka',
//   category: 'Workshop',
//   price: '100',
//   duration: '5 hours',
//   date: '2026-05-15',
//   participants: '200',
//   organizer: 'hadi co nad ltd',
//   image: 'https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   highlights: 'Workshop, Networking, Summit',
//   tier1_type: 'General',
//   tier1_price: '10',
//   tier1_quantity: '500',
//   tier2_type: 'Vip',
//   tier2_price: '100',
//   tier2_quantity: '9',
//   description: 'lol'
// }

//create
export async function eventCreate (formData){
    const rawData = Object.fromEntries(formData.entries())
   
    let ticketTiers = []
    for(let i=1; i<=20; i++){
    const type = rawData[`tier${i}_type`];
    const price = Number(rawData[`tier${i}price`]);
    const available = Number(rawData[`tier${i}_quantity`]);
    const ticketTierData = {type, price, available}
    if(type){
        ticketTiers.push(ticketTierData)
    }
    else{
        break
    }
    }

    const highlights = rawData.highlights.split(",").map(h => h.trim())
    const newEvent = {...rawData, highlights, ticketTiers}
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
        return { success: true }
    }
}

//delete
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

//update
export async function eventUpdate(id, formData){
    const rawData = Object.fromEntries(formData.entries())
    const res = await fetch(`http://localhost:8000/events/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rawData)
    })

    const result = await res.json()
    console.log(result)
    if(result.modifiedCount > 0 || result.matchedCount > 0){
        revalidatePath('/events')
        redirect(`/events/${id}`) 
    }
}