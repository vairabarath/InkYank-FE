import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";

interface AccordionContextProps {
  selected: string | null;
  setSelected: (value: string | null) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

interface AccordionProps {
  children: ReactNode;
  value?: string;
  onChange?: (value: string | null) => void;
}

export default function Accordion({
  children,
  value,
  onChange,
  ...props
}: AccordionProps) {
  const [selected, setSelected] = useState<string | null>(value || null);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
}

export function AccordionItem({
  children,
  value,
  trigger,
  ...props
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { selected, setSelected } = context;
  const open = selected === value;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="shadow-lg">
      <li className="border-b border-blue bg-white" {...props}>
        <header
          role="button"
          onClick={() => setSelected(open ? null : value)}
          className="flex justify-between items-center p-4 "
        >
          <div className="md:text-xl font-semibold">{trigger}</div>

          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </header>
        <div
          className="overflow-y-hidden transition-all"
          style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
        >
          <div className="pt-2 p-4" ref={ref}>
            {children}
          </div>
        </div>
      </li>
    </div>
  );
}
