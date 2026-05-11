import { Label, ListBox, Select, Input } from "@heroui/react";
import { Search } from "lucide-react";
import { getAllEvents } from "@/lib/data";
import EventCard from "@/components/EventCard";

export default async function AllEventsPage() {
    const events = await getAllEvents();
    console.log(events)

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">

                       
                <div className="mb-10">
                    <h1 className="text-5xl font-black uppercase tracking-tighter text-zinc-900">
                        Explore All <span className="text-cyan-500">Events</span>
                    </h1>
                    <p className="text-zinc-500 mt-2 font-medium">
                        Find your next big experience from our curated collection of global events.
                    </p>
                </div>

                {/* স্ট্যাটিক ফিল্টার এবং সর্ট সেকশন (রেফারেন্স ইমেজ অনুযায়ী) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 bg-white p-4 shadow-sm border border-zinc-200">
                    <div className="md:col-span-1">
                        <Select className="w-[256px]" placeholder="All Categories" variant="bordered">
                            <Label className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Category</Label>
                            <Select.Trigger className="rounded-none border-zinc-200 hover:border-cyan-500 transition-colors">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className="rounded-none">
                                    <ListBox.Item id="music" textValue="Music">
                                        Music Festivals
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="tech" textValue="Tech">
                                        Tech Conferences
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="workshop" textValue="Workshop">
                                        Educational Workshops
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="arts" textValue="Arts">
                                        Art Exhibitions
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <div className="md:col-span-1">
                        <Select className="w-[256px]" placeholder="Any Price" variant="bordered">
                            <Label className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Price Range</Label>
                            <Select.Trigger className="rounded-none border-zinc-200">
                                <Select.Value className="text-blue-500" />
                                <Select.Indicator className="text-amber-400" />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className="rounded-none">
                                    <ListBox.Item id="free" textValue="Free">Free Events</ListBox.Item>
                                    <ListBox.Item id="low" textValue="Under $50">Under $50</ListBox.Item>
                                    <ListBox.Item id="mid" textValue="$50 - $200">$50 - $200</ListBox.Item>
                                    <ListBox.Item id="high" textValue="Premium">Premium ($200+)</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <div className="md:col-span-1">
                        <Select className="w-[256px]" placeholder="Any Price" variant="bordered">
                            <Label className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Sort By</Label>
                            <Select.Trigger className="rounded-none border-zinc-200">
                                <Select.Value className="text-blue-500" />
                                <Select.Indicator className="text-amber-400" />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className="rounded-none">
                                    <ListBox.Item id="low" textValue="Price: Low to High">Price: Low to High</ListBox.Item>
                                    <ListBox.Item id="high" textValue="Price: High to Low">Price: High to Low</ListBox.Item>
                                    <ListBox.Item id="date" textValue="Upcoming Date">Upcoming Date</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>


                    <div className="md:col-span-1 flex items-end">
                        <Input
                            placeholder="Search events..."
                            aria-label="Name"
                            className='w-full'

                        />

                    </div>
                </div>

                {/* ইভেন্ট গ্রিড সেকশন */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {events.length > 0 ? (
                        events.map((event) => (
                            <EventCard key={event._id} event={event} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-zinc-400 text-xl font-bold uppercase tracking-widest">
                                No Events Found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}