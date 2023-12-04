import { Github, Linkedin, Mail } from "lucide-react";
const icons = [
  { href: "github.com/rynkovski", icon: <Github size={32} /> },
  { href: "github.com/rynkovski", icon: <Linkedin size={32} /> },
  { href: "github.com/rynkovski", icon: <Mail size={32} /> },
];
function Contact() {
  return (
    <div id="contact" className="bg-sky-600 p-8">
      <ul className="flex items-center justify-center space-x-16">
        {icons.map((icon) => {
          return (
            <li>
              <a href={icon.href} className="text-white hover:text-black">
                {icon.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Contact;
