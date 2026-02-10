import { DATA_EN as DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 mb-20 md:mb-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 order-2 md:order-1">
                    <Image
                        src="/logos/logo-black.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="dark:invert"
                    />
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground order-1 md:order-2">
                    <Link
                        href={DATA.contact.social.GitHub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        Built by {DATA.name}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
