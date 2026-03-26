import { createContext, useContext } from "react";
import type { TipContextType } from "../types/tipContexts.type";

export const TipContext = createContext<TipContextType | undefined>(undefined);

export const useTip = (): TipContextType => {
  const context = useContext(TipContext);
  if (!context) {
    throw new Error("useTip must be used within TipProvider");
  }
  return context;
};
