// "use client";
import { Button, Input, Select, SelectItem, Textarea, Card } from "@heroui/react";
import { Calendar, MapPin, Tag, DollarSign, Clock, ImageIcon, AlignLeft, PlusCircle, XCircle } from "lucide-react";

export default function AddEventPage( ) {
  // ইভেন্ট ক্যাটাগরি লিস্ট
  // const categories = [
  //   { label: "Music Festival", value: "music" },
  //   { label: "Tech Conference", value: "tech" },
  //   { label: "Workshop", value: "workshop" },
  //   { label: "Business Seminar", value: "business" },
  //   { label: "Art Exhibition", value: "art" },
  // ];

  return (
    // <div className="min-h-screen bg-zinc-50 py-12 px-4 flex justify-center items-center">
    //   <Card className="w-full max-w-3xl p-8 shadow-xl border border-zinc-200 rounded-none">
    //     <div className="mb-8 border-b border-zinc-100 pb-4">
    //       <h1 className="text-3xl font-black uppercase tracking-tighter text-zinc-800">
    //         Post a New <span className="text-cyan-500">Event</span>
    //       </h1>
    //       <p className="text-zinc-500 text-sm">Fill in the details to launch your next big experience.</p>
    //     </div>

    //     <form action={createEventAction} className="flex flex-col gap-6">
    //       {/* ১. ইভেন্ট টাইটেল (Destination Name এর বদলে) */}
    //       <Input
    //         isRequired
    //         name="title"
    //         label="Event Title"
    //         placeholder="e.g. Global Tech Summit 2024"
    //         labelPlacement="outside"
    //         startContent={<Tag size={18} className="text-zinc-400" />}
    //         className="font-medium"
    //       />

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {/* ২. লোকেশন (Country এর বদলে) */}
    //         <Input
    //           isRequired
    //           name="location"
    //           label="Location / Venue"
    //           placeholder="City, State or Full Address"
    //           labelPlacement="outside"
    //           startContent={<MapPin size={18} className="text-zinc-400" />}
    //         />

    //         {/* ৩. ক্যাটাগরি */}
    //         <Select
    //           isRequired
    //           name="category"
    //           label="Category"
    //           placeholder="Select Event Type"
    //           labelPlacement="outside"
    //           startContent={<PlusCircle size={18} className="text-zinc-400" />}
    //         >
    //           {categories.map((cat) => (
    //             <SelectItem key={cat.value} value={cat.value}>
    //               {cat.label}
    //             </SelectItem>
    //           ))}
    //         </Select>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {/* ৪. প্রাইস */}
    //         <Input
    //           isRequired
    //           name="price"
    //           type="number"
    //           label="Ticket Price (USD)"
    //           placeholder="0.00 (Put 0 for Free)"
    //           labelPlacement="outside"
    //           startContent={<DollarSign size={18} className="text-zinc-400" />}
    //         />

    //         {/* ৫. ডিউরেশন */}
    //         <Input
    //           isRequired
    //           name="duration"
    //           label="Duration"
    //           placeholder="e.g. 3 Hours / 2 Days"
    //           labelPlacement="outside"
    //           startContent={<Clock size={18} className="text-zinc-400" />}
    //         />
    //       </div>

    //       {/* ৬. ইভেন্ট ডেট (Departure Date এর বদলে) */}
    //       <Input
    //         isRequired
    //         name="date"
    //         type="date"
    //         label="Event Date"
    //         labelPlacement="outside"
    //         startContent={<Calendar size={18} className="text-zinc-400" />}
    //       />

    //       {/* ৭. ইমেজ ইউআরএল */}
    //       <Input
    //         isRequired
    //         name="image"
    //         type="url"
    //         label="Event Banner URL"
    //         placeholder="https://example.com/banner.jpg"
    //         labelPlacement="outside"
    //         startContent={<ImageIcon size={18} className="text-zinc-400" />}
    //       />

    //       {/* ৮. ডেসক্রিপশন */}
    //       <Textarea
    //         isRequired
    //         name="description"
    //         label="Event Description"
    //         placeholder="Describe what makes this event special..."
    //         labelPlacement="outside"
    //         minRows={4}
    //         startContent={<AlignLeft size={18} className="text-zinc-400 mt-2" />}
    //       />

    //       {/* বাটন সেকশন */}
    //       <div className="flex justify-end gap-4 mt-4 border-t border-zinc-100 pt-6">
    //         <Button 
    //           variant="flat" 
    //           color="danger" 
    //           className="rounded-none font-bold uppercase px-8"
    //           startContent={<XCircle size={18} />}
    //         >
    //           Cancel
    //         </Button>
    //         <Button 
    //           type="submit" 
    //           className="bg-cyan-500 text-white rounded-none font-bold uppercase px-8 hover:bg-cyan-600"
    //           startContent={<PlusCircle size={18} />}
    //         >
    //           Publish Event
    //         </Button>
    //       </div>
    //     </form>
    //   </Card>
    // </div>
   <>add event</>
  );
}
