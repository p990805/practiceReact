//부모요소에서 html 태그는 children이라는 props로 온다.

const Button = ({text, color,children}) => {
    //이벤트 객체체
    const onClickButton = (e) => {
        console.log(e)
        console.log(text)
    }
    return <button
    onClick={onClickButton}
    //onMouseEnter = 마우스 가져다 대면 발생하는 이벤트트
    // onMouseEnter = {onClickButton}

    style={{color : color}}
    >
        {text} - {color.toUpperCase()}
        {children}
        </button>
};

Button.defaultProps = {
    color: "black",
};

export default Button;