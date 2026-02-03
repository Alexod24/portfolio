"use client";

import { Button } from "@/components/ui/button";
import { useResume } from "@/components/language-provider";
import { Icons } from "@/components/icons/flags";

export function LanguageToggle() {
    const { language, setLanguage } = useResume();

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
        >
            {language === "en" ? (
                <Icons.usa className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Icons.peru className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}
