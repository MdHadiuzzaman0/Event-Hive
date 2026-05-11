import Image from "next/image";
import { Card, Button, Chip } from "@heroui/react";
import { Calendar, MapPin, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function EventCard({ event }) {
  const { _id, title, location, category, price, duration, date, image, description } = event;

  return (
    <Card className="w-full max-w-[400px] group border border-zinc-200 rounded-none bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow">

      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <Chip
          className="absolute top-4 left-4 bg-cyan-500 text-white rounded-none font-bold uppercase text-[10px] tracking-widest border-none"
          size="sm"
        >
          {category}
        </Chip>
      </div>


      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1 text-zinc-500">
            <MapPin size={14} className="text-cyan-500" />
            <span className="text-xs font-medium uppercase tracking-wider">{location}</span>
          </div>

          <div className="flex items-center gap-1 bg-zinc-100 px-2 py-0.5">
            <Star size={12} className="fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-bold">4.9</span>
          </div>
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight text-zinc-800 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-zinc-600 border-y border-zinc-100 py-3 my-1">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-cyan-500" />
            <span className="text-[11px] font-bold uppercase">{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-cyan-500" />
            <span className="text-[11px] font-bold uppercase">{duration}</span>
          </div>
        </div>

        <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
          {description}
        </p>


        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Starting from</p>
            <p className="text-2xl font-black text-cyan-600 leading-none mt-1">
              ${price}
            </p>
          </div>
          <Button
            className="bg-zinc-900 text-white rounded-none font-bold uppercase tracking-widest text-xs px-6 hover:bg-cyan-500 transition-colors"
          >
            Get Ticket
          </Button>
        </div>
      </div>

      <Link href={`/events/${_id}`}>
        <Button className="w-full mx-auto bg-amber-400 text-white rounded-none font-bold uppercase tracking-widest text-xs px-6 hover:bg-amber-500 transition-colors">
          View Details
        </Button>
      </Link>
    </Card>
  );
}