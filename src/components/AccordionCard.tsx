import React, {
  FC,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ChevronDown } from "lucide-react";

interface AccordionCardProps {
  title: string;
  subtitle: string;
  date: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const AccordionCard: FC<AccordionCardProps> = ({
  title,
  subtitle,
  date,
  isOpen,
  onToggle,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpen) updateHeight();
  }, [isOpen, children, updateHeight]);

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

  return (
    <div
      className={`accordion${isOpen ? " accordion--open" : ""}`}
      onClick={onToggle}
    >
      <div className="accordion-header">
        <div>
          <div className="accordion-title">{title}</div>
          <div className="accordion-subtitle">{subtitle}</div>
          <div className="accordion-date">{date}</div>
        </div>
        <ChevronDown
          size={20}
          className={`accordion-chevron${isOpen ? " accordion-chevron--open" : ""}`}
        />
      </div>
      <div
        className="accordion-body"
        style={{ height: isOpen ? height : 0 }}
      >
        <div ref={contentRef}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
