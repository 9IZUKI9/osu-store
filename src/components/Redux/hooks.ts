import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState } from './rootState.ts';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();
