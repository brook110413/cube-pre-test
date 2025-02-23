/** Read about the code below, suggest how to improve the code **/
/** Code block start */
function ParentComponent() {
  const [name, setName] = useState('Naro');
  const [age, setAge] = useState(12);
  return (
    <div>
      <ChildComponent name={name} age={age} />
      <GrandchildComponent name={name} age={age} />
    </div>
  );
}
function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <GrandchildComponent name={name} age={age} />
    </div>
  );
}
function GrandchildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
/** Code block end */

/* 作答區 */
/*

這部分的程式碼，有 props drilling 的問題，這部分可以透過 context API 來解決，這樣就不需要每次都傳遞 props。

修改後的程式碼如下：

import { createContext } from 'react';

const Context = createContext();

function ParentComponent() {
  const [name, setName] = useState('Naro');
  const [age, setAge] = useState(12);

  return (
    <Context.Provider value={{ name, age }}>
      <ChildComponent />
      <GrandchildComponent />
    </Context.Provider>
  );
}

function ChildComponent() {
  const { name, age } = useContext(Context);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <GrandchildComponent />
    </div>
  );
}

function GrandchildComponent() {
  const { name, age } = useContext(Context);
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

*/
