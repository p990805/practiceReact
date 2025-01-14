import './Editer.css'
import { useState,useRef } from 'react'

const Editer = ({onCreate}) => {
    const [content, setContent] =useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const onKeydown = (e) => {
        if(e.keyCode ===13){
            onSubmit();
        }
    }

    const onSubmit = ()=>{
        if(content === ""){
            contentRef.current.focus();
            alert("빈 칸 입니다.")
            return;
        }
        onCreate(content)
        setContent("");
    }
    return <div className="Editer">
        <input
         ref={contentRef}
         onKeyDown={onKeydown}
         value={content}
         onChange={onChangeContent} 
         placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
    </div>
}
export default Editer;