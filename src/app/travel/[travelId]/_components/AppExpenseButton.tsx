'use client'
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/Modal";
import { AddExpenseForm } from "./AddExpenseForm";

export default function AppExpenseButton({ travelId, participantsForComponents, session }: any) {
  const modal = useModal();

  return (
    <>

      <button onClick={modal.open} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Agregar Gasto</button>
      <Modal isOpen={modal.isOpen} onClose={modal.close} title="Agregar Gasto">
        <AddExpenseForm
          travelId={travelId}
          participants={participantsForComponents}
          currentUserId={session.user.id}
          onSuccess={modal.close}
        />
      </Modal>
    </>
  )
}