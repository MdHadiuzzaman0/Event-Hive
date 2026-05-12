"use client";
import { eventDelete } from "@/lib/action";
import { AlertDialog, Button } from "@heroui/react";
import { Edit3 } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const EditButton = ({id}) => {
    return (
        <div>
            <Link href={`/events/${id}/edit`}>
            <Button
                variant="primary"
                className="hover:border-cyan-500 hover:text-cyan-300 rounded-full text-center w-30">
                <Edit3 size={18} /> Edit
            </Button>
            </Link>
        </div>
    );
};

export default EditButton;