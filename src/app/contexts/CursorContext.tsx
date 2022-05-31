import { createContext, useCallback, useMemo, useState } from 'react';

type CursorContextProps = {
  cursorModel: string;
  onChangeCursorModel: (newCursorModel?: 'hovered' | 'blocked') => void;
};

type CursorProviderProps = {
  children: React.ReactNode;
};

const CursorContext = createContext<CursorContextProps>(
  {} as CursorContextProps,
);

function CursorProvider({ children }: CursorProviderProps) {
  const [cursorModel, setCursorModel] = useState('');

  const onChangeCursorModel = useCallback(
    (newCursorModel?: 'hovered' | 'blocked') => {
      setCursorModel(newCursorModel);
    },
    [],
  );

  const contextMemoized = useMemo(
    () => ({
      cursorModel,
      onChangeCursorModel,
    }),
    [cursorModel, onChangeCursorModel],
  );

  return (
    <CursorContext.Provider value={contextMemoized}>
      {children}
    </CursorContext.Provider>
  );
}

export default CursorProvider;

export { CursorContext };
