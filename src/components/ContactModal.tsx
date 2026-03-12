import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { X, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<Status>("idle");
  const { register, handleSubmit, reset, formState: { isValid } } = useForm<ContactFormData>({ mode: "onChange" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (status === "success") {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content modal-status">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
          <CheckCircle size={48} className="modal-status-icon modal-status-icon--success" />
          <h3 className="modal-title">Message sent!</h3>
          <p className="modal-status-text">
            Thanks for reaching out. I'll get back to you soon.
          </p>
          <button className="modal-submit" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content modal-status">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
          <AlertCircle size={48} className="modal-status-icon modal-status-icon--error" />
          <h3 className="modal-title">Something went wrong</h3>
          <p className="modal-status-text">
            Please try again or contact me directly at czipa7@gmail.com
          </p>
          <button className="modal-submit" onClick={() => setStatus("idle")}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h3 className="modal-title">Send me a message</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
          <input
            type="text"
            placeholder="Your name"
            className="modal-input"
            disabled={isSending}
            {...register("name", { required: true })}
          />
          <input
            type="email"
            placeholder="Your email"
            className="modal-input"
            disabled={isSending}
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Subject"
            className="modal-input"
            disabled={isSending}
            {...register("subject", { required: true })}
          />
          <textarea
            placeholder="Your message..."
            className="modal-input modal-textarea"
            rows={5}
            disabled={isSending}
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="modal-submit"
            disabled={isSending || !isValid}
          >
            {isSending ? (
              <>
                <Loader2 size={16} className="spinner" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
