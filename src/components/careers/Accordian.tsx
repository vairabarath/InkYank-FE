import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";

// Define the context for the Accordion
interface AccordionContextProps {
  selected: string | null;
  setSelected: (value: string | null) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

// Accordion component
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
  const [selected, setSelected] = useState<null | string>(
    value || "Enrollment"
  );

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

// AccordionItem component
interface AccordionItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
  color?: "blue" | "purple" | "emerald" | "amber";
}

export function AccordionItem({
  children,
  value,
  trigger,
  color = "blue",
  ...props
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const colorClasses = {
    blue: {
      text: "from-blue-500 to-blue-500",
      hover: "group-hover:text-blue",
      icon: "group-hover:text-blue",
      border: "border-blue-500",
    },
    purple: {
      text: "from-violet to-violet",
      hover: "group-hover:text-purple",
      icon: "group-hover:text-purple",
      border: "border-purple-500",
    },
    emerald: {
      text: "from-emerald-500 to-emerald-500",
      hover: "group-hover:text-emerald",
      icon: "group-hover:text-emerald",
      border: "border-emerald-500",
    },

    amber: {
      text: "from-amber-400 to-amber-400",
      hover: "group-hover:text-amber",
      icon: "group-hover:text-amber",
      border: "border-amber-500",
    },
  };

  const { selected, setSelected } = context;
  const open = selected === value;
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && ref.current) {
      setHeight(ref.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  const handleClick = () => {
    if (open) {
      setSelected(null);
    } else {
      setSelected(value);
    }
  };

  return (
    <div className="shadow-lg group">
      <li className="border-b border-blue bg-white " {...props}>
        <header
          role="button"
          onClick={handleClick}
          className="flex justify-between items-center p-4 cursor-pointer"
        >
          <div
            className={`md:text-xl font-semibold bg-gradient-to-r ${
              colorClasses[color].text
            }
                   bg-[length:0%_100%] bg-no-repeat transition-all duration-700  ${
                     open ? "bg-[length:100%_100%] text-transparent" : ""
                   }
                   group-hover:bg-[length:100%_100%] group-hover:text-transparent 
                   bg-clip-text`}
          >
            {trigger}
          </div>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              colorClasses[color].icon
            } ${open ? "rotate-180" : ""}`}
          />
        </header>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div ref={ref} className="pt-2 p-4">
            {children}
          </div>
        </div>
      </li>
    </div>
  );
}
