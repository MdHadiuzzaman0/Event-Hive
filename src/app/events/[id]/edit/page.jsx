
import { eventUpdate } from '@/lib/action';
import { getEventById } from '@/lib/data';
import { Button, Input, Select, Label, ListBox, TextArea, Card, TextField, FieldError } from "@heroui/react";
// import { useEffect, useState } from 'react';

const EventEdit = async ({ params }) => {
    const { id } = await params;
    const user = await getEventById(id)

    const handleUpdate = async (formData) => {
        'use server'
        return eventUpdate(id, formData)
    }

    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     async function fetchData() {
    //         const { id } = await params;
    //         const userData = await getEventById(id);
    //         setUser(userData)
    //     }
    //     fetchData();
    // }, [params]);
    // console.log(user)
    // const [totalTiers, setTotalTiers] = useState(0)

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // };

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-4 flex justify-center items-center">
            <Card className="w-full max-w-4xl p-8 shadow-xl border border-zinc-200 rounded-none">
                <div className="mb-8 border-b border-zinc-100 pb-4">
                    <h1 className="text-3xl font-black uppercase tracking-tighter text-zinc-800">
                        Update your <span className="text-cyan-500">Event</span>
                    </h1>
                    <p className="text-zinc-500 text-sm">Fill in the details to launch your next big experience.</p>
                </div>

                <form action={handleUpdate} className="p-4 md:p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Title */}
                        <div className="md: col-span-2">
                            <TextField name="title" type="text" defaultValue={user?.title}>
                                <Label>Event Title</Label>
                                <Input placeholder="e.g. Global Tech Summit 2026" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                            <p className="text-[10px] font-bold text-red-300 my-1">Make sure, there is no space present at the beginning & end point of this Sentence</p>
                        </div>

                        {/* Location */}
                        <TextField type="text" name="location" defaultValue={user?.location}>
                            <Label>Location / Venue</Label>
                            <Input placeholder="Silicon Valley, CA" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Price */}
                        <TextField name="price" type="number" defaultValue={user?.price}>
                            <Label>Price (USD)</Label>
                            <Input type="number" placeholder="499" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField type="text" name="duration" defaultValue={user?.duration}>
                            <Label>Duration</Label>
                            <Input placeholder="e.g. 3 Days" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Date */}
                        <TextField name="date" type="date" defaultValue={user?.date}>
                            <Label>Event Date</Label>
                            <Input placeholder="Enter Date" />
                        </TextField>

                        {/* Participants */}
                        <TextField name="participants" type="number" defaultValue={user?.participants?.toString()}>
                            <Label>Max Participants</Label>
                            <Input placeholder="200" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Organizer */}
                        <TextField type="text" name="organizer" defaultValue={user?.organizer}>
                            <Label>Organizer Name</Label>
                            <Input placeholder="Tech Innovators Hub" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField type="url" name="image" defaultValue={user?.image}>
                                <Label>Image URL</Label>
                                <Input placeholder="https://..." className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField type="text" name="description" defaultValue={user?.description}>
                                <Label>Description</Label>
                                <TextArea placeholder="Describe your event in detail..." className="h-32 w-full" />
                                <FieldError />
                            </TextField>
                        </div>



                        {/* Highlights */}
                        {/* {user?.highlights?.map((h, index) =>
                            <div className="md:col-span-2" key={index}>
                                <TextField type="text" name="highlights" defaultValue={h}>
                                    <Label>Highlights (Comma separated)</Label>
                                    <Input placeholder="Keynote, Workshops, Networking" className="rounded-2xl" />
                                    <FieldError />
                                </TextField>
                            </div>
                        )} */}

                        {/* Ticket Tier, Simple method */}
                        {/* <div className="md:col-span-2 space-y-6">
                            <div className="flex justify-between items-center border-b pb-2">
                                <h3 className="font-bold uppercase text-zinc-700 text-sm">Ticket Tiers</h3>
                                {totalTiers > 0 ? (
                                    <div>
                                        <Button
                                            type="button"
                                            onPress={() => setTotalTiers(totalTiers + 1)}
                                            className="bg-cyan-600 text-white rounded-none px-4 mr-3"
                                        >
                                            + Add Tier
                                        </Button>

                                        <Button
                                            type="button"
                                            onPress={() => setTotalTiers(totalTiers === 1 ? 1 : totalTiers - 1)} // ১ এর নিচে নামবে না
                                            className="bg-red-600 text-white rounded-none px-4"
                                        >
                                            Delete Tier
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        type="button"
                                        onPress={() => setTotalTiers(1)}
                                        className="bg-cyan-600 text-white rounded-none px-4"
                                    >
                                        + Add First Tier
                                    </Button>
                                )}
                            </div>
                            {[...Array(totalTiers)].map((_, index) =>
                                <div className="md:col-span-2 grid grid-cols-3 gap-4 bg-zinc-100 p-4 border-l-4 border-cyan-500" key={index}>
                                    <TextField name={`tier${index + 1}_type`}>
                                        <Label>Tier 1 Name</Label>
                                        <Input placeholder="General" />
                                    </TextField>
                                    <TextField name={`tier${index + 1}_price`} type="number">
                                        <Label>Price</Label>
                                        <Input placeholder="0" />
                                    </TextField>
                                    <TextField name={`tier${index + 1}_quantity`} type="number">
                                        <Label>Quantity</Label>
                                        <Input placeholder="0" />
                                    </TextField>

                                </div>
                            )}

                        </div> */}

                        <div>
                            {/* Ticket Tier 1: General */}
                            {/* <div className="md:col-span-2 grid grid-cols-3 gap-4 bg-zinc-100 p-4 border-l-4 border-amber-500">
                      <TextField name="tier1_type">
                        <Label>Tier 1 Name</Label>
                        <Input placeholder="General" />
                      </TextField>
                      <TextField name="tier1_price" type="number">
                        <Label>Price</Label>
                        <Input placeholder="0" />
                      </TextField>
                      <TextField name="tier1_qty" type="number">
                        <Label>Quantity</Label>
                        <Input placeholder="0" />
                      </TextField>
                    </div> */}

                            {/* Ticket Tier 2: VIP */}
                            {/* <div className="md:col-span-2 grid grid-cols-3 gap-4 bg-zinc-100 p-4 border-l-4 border-amber-500">
                      <TextField name="tier2_type">
                        <Label>Tier 2 Name</Label>
                        <Input placeholder="VIP" />
                      </TextField>
                      <TextField name="tier2_price" type="number">
                        <Label>Price</Label>
                        <Input placeholder="0" />
                      </TextField>
                      <TextField name="tier2_qty" type="number">
                        <Label>Quantity</Label>
                        <Input placeholder="0" />
                      </TextField>
                    </div> */}

                            {/* Ticket Tier 3: VVIP */}
                            {/* <div className="md:col-span-2 grid grid-cols-3 gap-4 bg-zinc-100 p-4 border-l-4 border-amber-500">
                      <TextField name="tier3_type">
                        <Label>Tier 2 Name</Label>
                        <Input placeholder="VVIP" />
                      </TextField>
                      <TextField name="tier3_price" type="number">
                        <Label>Price</Label>
                        <Input placeholder="0" />
                      </TextField>
                      <TextField name="tier3_qty" type="number">
                        <Label>Quantity</Label>
                        <Input placeholder="0" />
                      </TextField>
                    </div> */}
                        </div>

                    </div>

                    <Button type="submit" variant="outline" className="rounded-none w-full bg-cyan-500 text-white">
                        Update Info
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EventEdit;