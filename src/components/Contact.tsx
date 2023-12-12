import { Github, Mail } from "lucide-react";
const icons = [
  {
    href: "https://github.com/rynkovski",
    icon: <Github size={32} />,
    text: "Github",
  },
  // {
  //   href: "https://pl.linkedin.com/in/karol-rynkowski-050022263",
  //   icon: <Linkedin size={32} />,
  // },
  {
    href: "mailto:rynkowski.it@gmail.com",
    icon: <Mail size={32} />,
    text: "e-mail",
  },
];
function Contact() {
  return (
    <div id="contact" className="bg-sky-600 p-8 scroll-mb-10">
      <h2 className="text-white text-center py-4 text-xl">
        Choose <span className=" text-black">your</span> way to contact{" "}
        <span className=" text-black">me</span>
      </h2>
      <ul className="flex items-center justify-center gap-16">
        {icons.map((icon) => {
          return (
            <li>
              <a
                href={icon.href}
                className="text-white hover:text-black text-center flex items-center flex-col"
              >
                {icon.icon}
                <span className="cursor-pointer">{icon.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Contact;
