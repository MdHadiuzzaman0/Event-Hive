import { Separator, Button } from "@heroui/react";
import { Search, Calendar, MapPin, Users, Wallet } from "lucide-react"; // আইকন ব্যবহারের জন্য

const Banner = () => {
  return (
    <div className="relative bg-[url('/eventHive_banner.jpg')] bg-no-repeat bg-cover bg-center text-white flex flex-col justify-between items-center h-[700px] overflow-hidden">
      {/* ডার্ক ওভারলে যাতে টেক্সট ভালো বোঝা যায় */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* মেইন কন্টেন্ট সেকশন */}
      <div className="relative z-10 p-10 text-center flex flex-col justify-center items-center gap-6 flex-1 mt-10">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          Epic Events <br /> <span className="text-cyan-400">Start Here.</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium max-w-3xl opacity-90">
          Discover world-class conferences, music festivals, and local workshops. 
          EventHive — where your next big experience awaits.
        </p>

        <div className="flex gap-4 mt-4">
          <Button 
            className="bg-cyan-500 text-white font-bold px-8 py-6 rounded-none uppercase tracking-wider hover:bg-cyan-600 transition-all"
          >
            Explore Events
          </Button>

          <Button 
            variant="bordered"
            className="border-white text-white font-bold px-8 py-6 rounded-none uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            Host Your Own
          </Button>
        </div>
      </div>

      {/* নিচের সার্চ/ফিল্টার বার (EventHive Vibe) */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 flex flex-wrap md:flex-nowrap justify-between w-full max-w-6xl mb-10 items-center shadow-2xl">
        
        {/* লোকেশন ফিল্টার */}
        <div className="flex-1 px-8 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
          <MapPin className="text-cyan-400" size={24} />
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400">Location</h3>
            <p className="text-sm font-semibold">Around the World</p>
          </div>
        </div>

        <Separator variant="tertiary" orientation="vertical" className="h-10 bg-white/20 hidden md:block" />

        {/* তারিখ ফিল্টার */}
        <div className="flex-1 px-8 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
          <Calendar className="text-cyan-400" size={24} />
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400">Event Date</h3>
            <p className="text-sm font-semibold">This Weekend</p>
          </div>
        </div>

        <Separator variant="tertiary" orientation="vertical" className="h-10 bg-white/20 hidden md:block" />

        {/* বাজেট/ক্যাটাগরি */}
        <div className="flex-1 px-8 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
          <Wallet className="text-cyan-400" size={24} />
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400">Budget</h3>
            <p className="text-sm font-semibold">Free to Premium</p>
          </div>
        </div>

        <Separator variant="tertiary" orientation="vertical" className="h-10 bg-white/20 hidden md:block" />

        {/* এটেন্ডি/পিপল */}
        <div className="flex-1 px-8 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
          <Users className="text-cyan-400" size={24} />
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400">Attendees</h3>
            <p className="text-sm font-semibold">Any Size</p>
          </div>
        </div>

        {/* সার্চ বাটন */}
        <button className="bg-cyan-500 self-stretch px-12 flex items-center gap-2 hover:bg-cyan-600 transition-all group">
          <Search size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-black uppercase tracking-widest text-sm">Find</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;