/** Read about the code below, please describe the issues and how you will be going to improve it **/

/** Code block start */
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習 React', completed: false, studyPoint: 3 },
    { id: 2, text: '建立專案', completed: false, studyPoint: 1 },
  ]);
  const { id, text, studyPoint } = todos;
  const [basePoints, setbasePoints] = useState(3);
  const [sumPoints, setSumPoints] = useState(0);
  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
    setTodos(todos);
  };
  const handleStudyPointsChange = (e) => {
    basePoints(e.target.value);
    setSumPoints(parseInt(value1) + parseInt(e.target.value));
  };
  return (
    <div>
      <p>課程名稱: {text}</p>
      <label>學習點數: </label>
      <input
        type="number"
        value={studyPoint}
        onChange={handleStudyPointsChange}
      />
      <p>總累積點數: {sumPoints}</p>
      <button onClick={toggleTodo(id)}>篩選課程</button>
    </div>
  );
};
/** Code block end */

/* 作答區 */
/*

問題1:
目前程式碼使用了 const { id, text, studyPoint } = todos，但 todos 是一個陣列，直接對陣列進行物件解構會導致錯誤或取得錯誤的資料。

修改後的程式碼如下：
將 const { id, text, studyPoint } = todos 移除

並且使用 map 方法來遍歷 todos 陣列，並將每個 todo 的 id、text 和 studyPoint 分別綁定到 input 的 value 和 onChange 事件上。

return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>課程名稱: {todo.text}</p>
          <label>學習點數: </label>
          <input type="number" value={todo.studyPoint} />
        </div>
      ))}
    </div>
  );

問題2:
在 React 中處理 state 時，需要使用 immutable 的狀態更新方式，而不是直接對 state 進行修改。在 toggleTodo 函數中，直接對 todos 陣列進行修改，這樣會導致無法正確地更新狀態，無法觸發 react 的 re-render。

修改後的程式碼如下：

const toggleTodo = (id) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
};

問題3:
在 handleStudyPointsChange 函數中，basePoints 並不是更新 state 的方法，應該使用 setBasePoints 來更新 state，並且並沒有定義 value1 的值是什麼，這裡的 value1 應該是指 basePoints 的值。

修改後的程式碼如下：

const handleStudyPointsChange = (e) => {
  setbasePoints(e.target.value);
  setSumPoints(parseInt(basePoints) + parseInt(e.target.value));
};

問題4:
在事件綁定上應該使用 callback，而不是直接呼叫函數，這樣可以避免在事件綁定時就立即執行函數，而是等到事件被觸發時才執行函數。

修改後的程式碼如下：

<button onClick={() => toggleTodo(todo.id)}>篩選課程</button>

*/
