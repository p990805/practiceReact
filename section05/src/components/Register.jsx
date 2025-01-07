import {useState, useRef} from "react"

//간단한 회원가입 폼
// 1. 사용자 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개개

const Register = ()=>{

    const countRef= useRef(0);

    const inputRef = useRef()


    // const [name,setName] = useState("이름");
    // const [birth,setBirth] = useState("")
    // const [country,setCountry] =useState("")
    // const [bio, setBio] = useState("");
    const [input,setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    })
    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio : e.target.value
    //     })
    // }

    // const onChangeCountry =(e)=>{
    //     setInput({
    //         ...input,
    //         country:e.target.value
    //     })
    // }

    // const onChangeBirth =(e) =>{
    //     setInput({
    //         ...input,
    //         birth : e.target.value
    //     })
    // }

    // const onChangeName=(e)=>{
    //     setInput({
    //         ...input,
    //         name : e.target.value
    //     })
    // }

    const onChange= (e) =>{
        countRef.current++;
        // console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit=(e) =>{
        if(input.name===""){
            // 이름을 입력하는 DOM 요소에 포커스스
            inputRef.current.focus();
    }
}
    
return (
    <div>

        <div>
        <input
        ref={inputRef}
        name="name"
        value= {input.name} 
        onChange={onChange}
        placeholder={"이름"} />
        </div>

        <div>
        <input 
        name="birth"
        value = {input.birth}
        type="date"
        onChange={onChange}
        />

        <div>
            <select 
            name="country"
            value ={input.country}
            onChange={onChange}
            >
                <option ></option>
                <option value="KR" >한국</option>
                <option value="US" > 미국</option>
                <option value="JP"> 일본</option>
            </select>
            {input.country}
        </div>

        <div>
            <textarea
            name="bio"
            onChange = {onChange}
            value = {input.bio}
            />
            {input.bio}

        </div>

        <button onClick={onSubmit} >제출</button>
        </div>
    </div>

)

}

export default Register;