import './App.css'
import Header from './components/Header'
import Editer from './components/Editer'
import List from './components/List'

import {useState, useRef} from 'react'

const mockData=[
  {
    id:0,
    isDone: false,
    content:'react 공부하기기',
    date: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content:'빨래하기기',
    date: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content:'테스트하기기',
    date: new Date().getTime(),
  }
]

function App() {
  
  const[todos,setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo ={
      id: idRef.current++,
      isDone:false,
      content : content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <div className="App">
      <Header />
      <Editer onCreate={onCreate}/>
      <List todos={todos} />
    </div>
  )
}

export default App
