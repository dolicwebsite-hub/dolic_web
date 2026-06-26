import { contactInfo } from "@/lib/site-data";

type SocialLinksProps = {
  variant?: "inline" | "vertical" | "footer";
  tone?: "light" | "dark";
};

const baseItems = [
  { label: "ZALO", href: contactInfo.socials.zalo, external: true, className: "h-6 w-6", type: "zalo" },
  { label: "f", href: contactInfo.socials.facebook, external: true, className: "h-6 w-6", type: "facebook" },
  { label: "MAIL", href: `mailto:${contactInfo.email}`, external: false, className: "h-6 w-6", type: "email" },
];

const zaloIconUrl = "https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000";
const facebookIconUrl = "https://img.icons8.com/?size=100&id=118497&format=png&color=000000";
const emailIconUrl = "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000";

export function SocialLinks({ variant = "inline", tone = "dark" }: SocialLinksProps) {
  const containerClass =
    variant === "vertical"
      ? "grid justify-items-center gap-5"
      : variant === "footer"
        ? "flex flex-wrap items-center gap-3"
        : "flex items-center gap-7";

  const colorClass = tone === "light" ? "text-cyan-50" : "text-[#202b50]";
  const itemClass =
    variant === "footer"
      ? "inline-flex h-10 min-w-12 items-center justify-center px-2 transition hover:opacity-70"
      : "inline-flex min-h-8 min-w-8 items-center justify-center transition hover:opacity-60";

  return (
    <div className={`${containerClass} ${colorClass}`} aria-label="Liên kết mạng xã hội">
      {baseItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label === "f" ? "Facebook" : item.label === "MAIL" ? "Email" : "Zalo"}
          className={`${itemClass} ${item.className}`}
        >
          {item.type === "zalo" || item.type === "facebook" || item.type === "email" ? (
            <img
              src={item.type === "zalo" ? zaloIconUrl : item.type === "facebook" ? facebookIconUrl : emailIconUrl}
              alt=""
              aria-hidden="true"
              className={`${item.className} object-contain`}
            />
          ) : (
            item.label
          )}
        </a>
      ))}
    </div>
  );
}
