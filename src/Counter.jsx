import { useStore } from "./store";


export default function Counter() {

  const { count, inc, dec, setInput, incByInput, input } = useStore();
  return (
    <div>
      <span>{count}</span>

      <div>
        <button onClick={inc}>one up</button>
      </div>
      <div>
        <button onClick={dec}>one down</button>
      </div>
      <div>
        <input type="number"  placeholder="Enter Number....." 
        value={input} 
        onChange={(e) => setInput(e.target.value)}/>
      </div>
      <div>
        <button onClick={incByInput} >incerement by value</button>
      </div>
    </div>
  );
}
