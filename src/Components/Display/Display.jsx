import React, { useState } from 'react'

export default function Display() {
    let [current, setCurrent] = useState('0');
    let [prexious, setPrexious] = useState([]);
    let [result, setResult] = useState('');
    let [nextIsReset, setNextIsReset] = useState(false);


    function reset(){
      setCurrent('0');
      setPrexious([]);
      setNextIsReset(false)
        console.log('reset' , result)
    }

    function addToCurrent(e){
      if(["/", "-", "+", "*"].indexOf(e.target.value) > -1     ){
      // let {prexious} = e.target.value;
      let p= prexious.concat(current + e.target.value);
      setPrexious(p)
      setNextIsReset(true)
      } else{
        if(  (current === '0' && e.target.value !== '.' ) ||   nextIsReset      ){
          current = e.target.value ;
          setNextIsReset(false)
        } else{
          current =  current + e.target.value
        }
 setCurrent(current)
}
    }

    function calculate(e){
        if(prexious.length > 0){
        let Crnt = eval(  String(  prexious[prexious.length - 1 ]  + current  )  );
        setCurrent(Crnt);
        setPrexious([]);
        setNextIsReset(true);

      }
    }
    



    console.log(current)

  return (
    <section className='parentOfContainer'>
    <div className='container'>
        {/* {prexious.length > 0 ?   <p>{prexious[prexious.length - 1]}</p>      : null   } */}
        <p className='floaty-p'>{prexious[prexious.length - 1]}   </p>  
        <input type='text' className='result' value={current} disabled />

        <button  className='column-3'   onClick={  ()=>  reset()     } >C</button>
        <button value='/'   className='column-1'   onClick={  (e)=>  addToCurrent(e)     } >/</button>
        <button value='7'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >7</button>
        <button value='8'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >8</button>
        <button value='9'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >9</button>
        <button value='*'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >X</button>
        <button value='4'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >4</button>
        <button value='5'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >5</button>
        <button value='6'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >6</button>
        <button value='-'   className='column-1'   onClick={  (e)=>  addToCurrent(e)     } >-</button>
        <button value='1'   className='column-1'   onClick={  (e)=>  addToCurrent(e)     } >1</button>
        <button value='2'   className='column-1'   onClick={  (e)=>  addToCurrent(e)     } >2</button>
        <button value='3'  className='column-1'    onClick={  (e)=>  addToCurrent(e)     } >3</button>
        <button value='+'   className='column-1'   onClick={  (e)=>  addToCurrent(e)     } >+</button>
        <button value='0'   className='column-2'   onClick={  (e)=>  addToCurrent(e)     } >0</button>
        <button value='.'   className='column-1'   onClick={  (e)=>  addToCurrent(e)     } >.</button>
        <button value='='    className='column-1'  onClick={  (e)=>  calculate(e)     } >=</button>

    </div>
    </section>
  )
}
