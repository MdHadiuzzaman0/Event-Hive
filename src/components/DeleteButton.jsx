"use client";
import { eventDelete } from "@/lib/action";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'

const DeleteButton = ({ id, title }) => {
  const router = useRouter()
  async function handleDlt() {
    const result = await eventDelete({ id, title })
    if (result.success) {
      toast.error(`${title} is removed`)
      router.push('/events')
    }
  }

  return (
    <div>
       <AlertDialog>
      <Button variant="danger">Delete Event</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Event permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete "<strong>{title}</strong>" and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onPress={handleDlt} slot="close" variant="danger">
                Delete Event
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

      {/* Normal method
       <Button
        onPress={handleDlt}
        variant="flat"
        className="bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white rounded-none transition-all w-20">
        <Trash2 size={18} /> Delete
      </Button>  */}
    </div>
  );
};

export default DeleteButton;