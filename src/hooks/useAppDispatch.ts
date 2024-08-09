import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";

// Типизиированный диспатч
export const useAppDispatch: () => AppDispatch = useDispatch