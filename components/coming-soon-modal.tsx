"use client"
import { X } from "lucide-react"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
}

export default function ComingSoonModal({ isOpen, onClose, projectTitle }: ComingSoonModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-gray-500/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-full max-w-xl p-8 mx-4 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="py-4">
          <h3 className="text-2xl font-bold mb-4">{projectTitle}</h3>
          <p className="text-lg mb-6">
            Interactive case study coming soon; send me an email and I'm happy to share details with you!
          </p>
          <p className="text-xl">
            <a href="mailto:zachsaul@hey.com" className="text-purple-700 hover:underline">
              zachsaul@hey.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
