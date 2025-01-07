import Controller from'./components/controller'
import Viewer from './components/viewer'
import Even from './components/even'
import './App.css'
import {useState, useEffect, useRef} from 'react'

function App() {
  
  const [count,setCount] = useState(0);
  const [input,setInput] =useState('')

  const isMount = useRef(false);
  //1. 마운트 : 탄생 // 마운트 되고 처음에는 진행되는거거
  useEffect(()=>{
    console.log("mount")
  },[])
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  })
  // 3. 언마운트 : 죽음

  useEffect(() =>{
   
  },[count,input])
  //의존성 배열
  //dependecy array
  //deps

  const onClickButton = (value) =>{
    setCount(count + value);
  };

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) =>{
        setInput(e.target.value)
      }} />
    </section>
    <section>
    <Viewer count={count}/>
    {count%2===0 ?<Even /> : null}
    </section>

    <section>
    <Controller onClickButton={onClickButton} />
    </section>
    </ div>
  )
}

export default App
