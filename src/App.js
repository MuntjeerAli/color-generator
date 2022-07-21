import React, {useState} from 'react';
import Values from 'values.js';
import SingleColor from './component/SingleColor';

const App = () => {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values ('#1c3403').all(10));
  const submitHandler = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }catch (error){
      setIsError(true);
      console.log(error)
    }
  }


  return (
    <>
      <section>
      <h3>Color Generator</h3>
      <form onSubmit={submitHandler}>
        <input
        type='text'
        value='color'
        onChange={(e) => setColor(e.target.value)}
        placeholder='#1c3403'/>
        <button type='submit' className='btnAdd'>Search</button>
      </form>
      </section>
      <section>
        {list.map((color), (index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
    
  )
}

export default App;