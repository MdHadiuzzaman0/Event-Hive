import Image from "next/image";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100 flex justify-between items-center px-9 py-5 font-medium text-gray-700">

      <div className="hidden sm:flex gap-5">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/">My Bookings</NavLink>
        <NavLink href="/addEvent">Add Event</NavLink>
      </div>

      {/* <Image
        src="/Wanderlast.png" alt=''
        width={500} height={500}
        className="w-30 h-full" /> */}
        <div>
          <h1 className="font-bold text-2xl bg-gradient text-gray-700">Event<span className="italic">Hive</span></h1>
        </div>

      <div className="gap-5 flex">
        <NavLink href='/testPage'> Profile</NavLink>
        <NavLink href="/">Login</NavLink>
        <NavLink href="/">Sign Up</NavLink>
      </div>
    </div>
  );
}