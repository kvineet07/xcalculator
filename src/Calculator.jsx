import React,{useState} from "react";
import styles from "./Calculator.module.css"

const Calculator =() =>{

    const [inputValue, setInputValue] = useState("");
    const [result,setResult] = useState("");

    const handleClick =(e)=>{
        setInputValue(inputValue + e)
    }   
    const handleClear =()=>{
        setInputValue("");
        setResult("");
    } 
    const handleResult =()=>{
        try {
            // Evaluate the input expression
            const evalResult = eval(inputValue);
      
            // Check for division by zero and NaN
            if (inputValue.includes('0/0') && !evalResult) {
              setResult('NaN')
            } else if (inputValue.includes('/0') && !evalResult) {
              setResult('Infinity');
            } else if (isNaN(evalResult)) {
              setResult('Error');
            } else {
              setResult(evalResult.toString());
            }
          } catch {
            setResult('Error');
          }
    }
    return(
        <div className={styles.main}>
        <h2 style={{margin:"10px"}}>React Calculator</h2>
        <input style={{margin :"10px"}} type="text" value={inputValue}></input>
        {result && (
            <div className={styles.result}>
                <h4>{result}</h4>
            </div>   
        )}
        
        <div className={styles.button}>
            <button onClick={()=>handleClick("7")}>7</button>
            <button onClick={()=>handleClick("8")}>8</button>
            <button onClick={()=>handleClick("9")}>9</button>
            <button onClick={()=>handleClick("+")}>+</button>
        </div>
        <div className={styles.button}>
            <button onClick={()=>handleClick("4")}>4</button>
            <button onClick={()=>handleClick("5")}>5</button>
            <button onClick={()=>handleClick("6")}>6</button>
            <button onClick={()=>handleClick("-")}>-</button>
        </div>
        <div className={styles.button}>
            <button onClick={()=>handleClick("1")}>1</button>
            <button onClick={()=>handleClick("2")}>2</button>
            <button onClick={()=>handleClick("3")}>3</button>
            <button onClick={()=>handleClick("*")}>*</button>
        </div>
        <div className={styles.button}>
            <button onClick={()=>handleClear()}>C</button>
            <button onClick={()=>handleClick("0")}>0</button>
            <button onClick={()=>handleResult()}>=</button>
            <button onClick={()=>handleClick("/")}>/</button>
        </div>
        </div>
        
    )
}

export default Calculator;
