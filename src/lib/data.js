export async function getAllEvents(){
    const res = await fetch ('http://localhost:8000/events')
    return await res.json();
}

export async function getEventById(id){
    const res = await fetch (`http://localhost:8000/events/${id}`)
    return await res.json();
}