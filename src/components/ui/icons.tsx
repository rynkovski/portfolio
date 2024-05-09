import Tooltip from "./tooltip";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import {
  Css3,
  Javascript,
  Html5,
  Typescript,
  Nextdotjs,
  Supabase,
  Firebase,
  Tailwindcss,
  Mui,
  Chakraui,
  Cypress,
} from "@styled-icons/simple-icons";
import { cloneElement } from "react";

const icons = [
  { name: "HTML", icon: <Html5 />, color: "#e34c26" },
  { name: "CSS", icon: <Css3 />, color: "#2965f1" },
  { name: "JavaScript", icon: <Javascript />, color: "#f0db4f" },
  { name: "TypeScript", icon: <Typescript />, color: "#007acc" },
  { name: "React.js", icon: <LogoReact />, color: "#61DBFB" },
  { name: "TailwindCss", icon: <Tailwindcss />, color: "#4FCCFE" },
  { name: "Photoshop", icon: <Adobephotoshop />, color: "#4FCCFE" },
  { name: "ChakraUI", icon: <Chakraui />, color: "#38B2AC" },
  { name: "MUI", icon: <Mui />, color: "#4FCCFE" },
  { name: "Firebase", icon: <Firebase />, color: "#f0db4f" },
  { name: "Supabase", icon: <Supabase />, color: "#4DB33D" },
  { name: "Next.js", icon: <Nextdotjs />, color: "#3f3f3f" },
  { name: "Cypress", icon: <Cypress />, color: "#5bbb94" },
];
function Icons() {
  return (
    <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {icons.map((item) => (
        <Tooltip key={item.name} message={item.name}>
          <div
            className="flex flex-col items-center justify-center gap-1 min-w-[100px]"
            style={{ color: item.color }}
          >
            {cloneElement(item.icon, { size: 48 })}
            <p className="text-xs text-center">{item.name}</p>
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
export default Icons;
