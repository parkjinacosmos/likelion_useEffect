import React, { useEffect, useState } from "react";

const HookStructure = () => {
  const[count, setCount] = useState(0);
  const[text, setText] = useState("");

 useEffect(() => {
    console.log()
  },[]);

  useEffect(() => {
    console.log("컴포넌트가 마운트 됨");
  },[count]);

  useEffect(()=> {
    console.log("텍스트가 변경됨: ", text);
  }, [text]);

  useEffect(() => {
    console.log("매 랜더링마다 실행됨");
  }, []);


    return (
    <div>
        <h2 className = "text-2xl">Count: {count} </h2>
        <button onClick = {() => setCount(count + 1)} className = "border">
            Increment
        </button>
        <hr className = "text-gray-300"/>
        <h2 className="text-2xl"> Typed text: {text}</h2>
         <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
      />
    
    </div>
  )
}

export default HookStructure;