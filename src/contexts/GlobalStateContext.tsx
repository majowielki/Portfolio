import { createContext, useState, useContext } from 'react';
import { GlobalState, GlobalStateProviderProps } from '@/types/types';

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(prevState => !prevState);
  };

  const exitMenu = (): void => {
    setMenuOpen(false);
  };

  const value: GlobalState = {
    isMenuOpen,
    toggleMenu,
    exitMenu,
  };
  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};