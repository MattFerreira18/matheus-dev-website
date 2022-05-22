import { createContext, useMemo, useState } from 'react';

type MouseContextProps = {
  cursorModel: string;
  changeCursorModel: (newCursorModel?: 'hovered' | 'blocked') => void;
};

type MouseProviderProps = {
  children: React.ReactNode;
};

const MouseContext = createContext<MouseContextProps>({} as MouseContextProps);

function MouseProvider({ children }: MouseProviderProps) {
  const [cursorModel, setCursorModel] = useState('');

  function changeCursorModel(newCursorModel?: 'hovered' | 'blocked') {
    setCursorModel(newCursorModel);
  }

  const contextMemoized = useMemo(
    () => ({
      cursorModel,
      changeCursorModel,
    }),
    [cursorModel, changeCursorModel],
  );

  return (
    <MouseContext.Provider value={contextMemoized}>
      {children}
    </MouseContext.Provider>
  );
}

export default MouseProvider;

export { MouseContext };
