import React, { FC, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
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
  website?: string;
}

type Status = "idle" | "sending" | "success" | "error";

const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

const MIN_SUBMIT_MS = 3000;

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const openedAtRef = useRef<number>(Date.now());
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ContactFormData>({ mode: "onChange" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      openedAtRef.current = Date.now();
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
      setTurnstileToken(null);
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: ContactFormData) => {
    if (data.website) {
      setStatus("success");
      reset();
      return;
    }

    const elapsedMs = Date.now() - openedAtRef.current;
    if (elapsedMs < MIN_SUBMIT_MS) {
      setStatus("error");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          turnstileToken,
          elapsedMs,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      reset();
      setTurnstileToken(null);
    } catch {
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (status === "success") {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content modal-status">
          <button className="modal-close" onClick={onClose} aria-label={t("contact.closeAria")}>
            <X size={20} />
          </button>
          <CheckCircle
            size={48}
            className="modal-status-icon modal-status-icon--success"
          />
          <h3 className="modal-title">{t("contact.successTitle")}</h3>
          <p className="modal-status-text">{t("contact.successText")}</p>
          <button className="modal-submit" onClick={onClose}>
            {t("contact.close")}
          </button>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content modal-status">
          <button className="modal-close" onClick={onClose} aria-label={t("contact.closeAria")}>
            <X size={20} />
          </button>
          <AlertCircle
            size={48}
            className="modal-status-icon modal-status-icon--error"
          />
          <h3 className="modal-title">{t("contact.errorTitle")}</h3>
          <p className="modal-status-text">{t("contact.errorText")}</p>
          <button className="modal-submit" onClick={() => setStatus("idle")}>
            {t("contact.tryAgain")}
          </button>
        </div>
      </div>
    );
  }

  const isSending = status === "sending";
  const canSubmit = isValid && !!turnstileToken && !isSending;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label={t("contact.closeAria")}>
          <X size={20} />
        </button>
        <h3 className="modal-title">{t("contact.title")}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
          <input
            type="text"
            placeholder={t("contact.namePlaceholder")}
            className="modal-input"
            disabled={isSending}
            {...register("name", { required: true })}
          />
          <input
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            className="modal-input"
            disabled={isSending}
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder={t("contact.subjectPlaceholder")}
            className="modal-input"
            disabled={isSending}
            {...register("subject", { required: true })}
          />
          <textarea
            placeholder={t("contact.messagePlaceholder")}
            className="modal-input modal-textarea"
            rows={5}
            disabled={isSending}
            {...register("message", { required: true })}
          />
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="modal-honeypot"
            {...register("website")}
          />
          <div className="modal-turnstile">
            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              options={{ theme: "dark" }}
            />
          </div>
          <button type="submit" className="modal-submit" disabled={!canSubmit}>
            {isSending ? (
              <>
                <Loader2 size={16} className="spinner" />
                {t("contact.sending")}
              </>
            ) : (
              <>
                <Send size={16} />
                {t("contact.send")}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
