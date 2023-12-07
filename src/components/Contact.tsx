import { Github, Mail } from "lucide-react";
const icons = [
  { href: "https://github.com/rynkovski", icon: <Github size={32} /> },
  // {
  //   href: "https://pl.linkedin.com/in/karol-rynkowski-050022263",
  //   icon: <Linkedin size={32} />,
  // },
  { href: "mailto:rynkowski.it@gmail.com", icon: <Mail size={32} /> },
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
