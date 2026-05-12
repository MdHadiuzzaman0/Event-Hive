import { getEventById } from '@/lib/data';
import Image from "next/image";
import { Button, Card, Chip, Tooltip } from "@heroui/react";
import { Calendar, MapPin, Clock, Users, Ticket, CheckCircle2, ChevronLeft, Share2, Info, Edit3, Trash2, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton';
import EditButton from '@/components/EditButton';

const EventDetails = async ({ params }) => {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) 
    return <div className="h-250 bg-black/30 flex items-center justify-center text-cyan-600 font-bold text-4xl tracking-[0.2em]">EVENT_NOT_FOUND</div>;

  return (
    <div className="min-h-screen bg-[#020203] text-zinc-100 pb-20 selection:bg-cyan-500 selection:text-black">

      <div className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/events">
          <Button
            variant="light"
            className="text-zinc-400 hover:text-cyan-400 font-bold uppercase tracking-tighter"
            startContent={<ChevronLeft size={18} />}
          >
            Back to Explore
          </Button>
          </Link>
          
          <div className="flex gap-3 w-65">
            <EditButton id={event._id}/>
            <DeleteButton id={event._id} title={event.title}/>
          </div>
        </div>
      </div>

      {/* হিরো সেকশন */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover scale-105 animate-pulse-slow opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-[#020203]/40 to-transparent"></div>
        
        {/* ফ্লোটিং টাইটেল */}
        <div className="absolute bottom-20 left-0 w-full px-6">
            <div className="max-w-7xl mx-auto space-y-4">
                <Chip className="bg-cyan-500 text-black font-black uppercase rounded-none px-4 text-[10px] tracking-[0.2em]">
                    {event.category}
                </Chip>
                <h1 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-zinc-500">
                    {event.title.split(' ').map((word, i) => (
                        <span key={i} className="block last:text-cyan-500">{word}</span>
                    ))}
                </h1>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-10 relative z-10">
        
        {/* বাম পাশ: কন্টেন্ট */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* দ্রুত তথ্য */}
          <div className="flex flex-wrap gap-10 border-y border-white/5 py-8">
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Location</p>
                <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase italic">{event.location}</div>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Community</p>
                <div className="flex items-center gap-2 text-zinc-200 font-bold uppercase tracking-tighter">{event.reviews}+ Attending</div>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Rating</p>
                <div className="flex items-center gap-1 text-amber-400 font-black italic">★ {event.rating}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic border-b-2 border-cyan-500 w-fit pb-2">Mission_Brief</h2>
            <p className="text-zinc-400 text-xl leading-relaxed font-medium">
              {event.description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {event.highlights?.map((item, index) => (
              <div key={index} className="bg-[#020203] p-6 flex items-start gap-4 group hover:bg-cyan-500/5 transition-colors">
                <ShieldCheck size={24} className="text-cyan-500 group-hover:animate-bounce" />
                <span className="font-bold uppercase text-sm tracking-tight text-zinc-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic border-b-2 border-cyan-500 w-fit pb-2">Timeline</h2>
            <div className="space-y-0 border-l border-white/10 ml-2">
              {event.schedule?.map((item, index) => (
                <div key={index} className="relative pl-8 pb-10 group">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                  <p className="text-cyan-500 font-black text-xs mb-1 tracking-[0.1em]">{item.time}</p>
                  <p className="text-zinc-200 font-bold uppercase text-sm">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ডান পাশ: টিকেট ও বুকিং */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <Card className="bg-[#0a0a0c] border border-white/10 rounded-none overflow-visible p-8 relative">
              {/* গ্লো ইফেক্ট */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Entry Passes</p>
                    <h3 className="text-5xl font-black italic text-white leading-none">${event.price}</h3>
                  </div>
                  <Share2 className="text-zinc-600 hover:text-cyan-500 cursor-pointer" size={20} />
                </div>

                <div className="space-y-3">
                  {event.ticketTiers?.map((t, index) => (
                    <div key={index} className="group border border-white/5 p-4 flex justify-between items-center hover:bg-white/[0.02] cursor-pointer transition-all">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{t.type}</p>
                            <p className="text-xs font-bold text-zinc-300">{t.available} Available</p>
                        </div>
                        <p className="text-lg font-black italic text-cyan-400">${t.price}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-zinc-500">Launch Date:</span>
                        <span className="text-zinc-200">{event.date}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-zinc-500">Operation:</span>
                        <span className="text-zinc-200">{event.duration}</span>
                    </div>
                </div>

                <Button 
                  className="w-full bg-cyan-500 text-black font-black uppercase py-8 rounded-none text-xl tracking-[0.2em] shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50 transition-all"
                  startContent={<Ticket size={24} />}
                >
                  Confirm_Access
                </Button>

                <p className="text-[9px] text-center text-zinc-600 uppercase font-bold tracking-widest">
                    Authorized by {event.organizer}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;