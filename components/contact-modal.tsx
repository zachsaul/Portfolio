"use client"
import { X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
          <h4 className="text-xl font-semibold mb-6">
            I'd love to work with you on your next project, reach out to me via:
          </h4>
          <p className="text-xl mb-2 leading-tight">
            Email:{" "}
            <a href="mailto:zachsaul@hey.com" className="text-purple-700 hover:underline">
              zachsaul@hey.com
            </a>
          </p>
          <p className="text-xl leading-tight">
            Phone:{" "}
            <a href="tel:+14258916556" className="text-purple-700 hover:underline">
              (425)-891-6556
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
