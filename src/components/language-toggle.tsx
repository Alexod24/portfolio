"use client";

import { Button } from "@/components/ui/button";
import { useResume } from "@/components/language-provider";

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
            <span className="text-sm font-bold">
                {language === "en" ? "EN" : "ES"}
            </span>
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}
