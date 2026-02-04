"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { DATA_EN, DATA_ES } from "@/data/resume";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    data: typeof DATA_EN;

}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    // Optional: Persist language to localStorage
    // useEffect(() => {
    //   const savedLang = localStorage.getItem("language") as Language;
    //   if (savedLang) setLanguage(savedLang);
    // }, []);

    // useEffect(() => {
    //   localStorage.setItem("language", language);
    // }, [language]);

    const data = (language === "en" ? DATA_EN : DATA_ES) as typeof DATA_EN;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, data }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useResume() {
    const context = useContext(LanguageContext);
    if (context === undefined) {

        throw new Error("useResume must be used within a LanguageProvider");
    }
    return context;
}
