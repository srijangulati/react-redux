import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../slices/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  }

  const sub = () => {
    dispatch(decrement());
  }

  const increaseBy5 = () => {
    dispatch(incrementByAmount(5));
  }

  return (
    <>
    <h3 onClick={increaseBy5}> {count}</h3>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    </>
  )
}