/** Read the code below, please figure out why after “Switch Person” button clicked, the
tasks state doesn’t update correctly, and how to make it update as we expected **/
/** Code block start */
import { useState } from 'react';
export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  return (
    <div>
      {isPersonAlice ? (
        <TaskCounter name="Alice" />
      ) : (
        <TaskCounter name="Bob" />
      )}
      <button
        onClick={() => {
          setIsPersonAlice(!isPersonAlice);
        }}
      >
        Switch Person
      </button>
    </div>
  );
}
function TaskCounter({ name }) {
  const [tasks, setTasks] = useState(0);
  return (
    <>
      <h1>
        {name}'s tasks: {tasks}
      </h1>
      <button onClick={() => setTasks(tasks + 1)}>Complete Task</button>
    </>
  );
}
/** Code block end */

/* 作答區 */
/*
這裡沒有如預期的在切換人物時，重置 tasks 的數量，主要的原因是因為當點擊 Switch Person 按鈕時，雖然 props 中的 name 從 “Alice” 變成 “Bob”，但因為兩個渲染的條件和位置都是同一個元件，而且沒有提供唯一的 key，所以 React 會重用相同的元件實例，只更新 props 的值，而不會將元件 unmount 並重新 mount。這表示 TaskCounter 內部的 state 不會被重設，導致切換人物之後後的 tasks 數量不符合預期。

因此要解決這個問題的關鍵就是在這樣的情況下，提供唯一的 key 給元件，這樣 React 在切換人物時，會將舊的元件 unmount 並重新 mount，這樣就可以重置 tasks 的數量。

修改後的程式碼如下：

import { useState } from 'react';
export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  return (
    <div>
      {isPersonAlice ? (
        <TaskCounter key="Alice" name="Alice" />
      ) : (
        <TaskCounter key="Bob" name="Bob" />
      )}
      <button
        onClick={() => {
          setIsPersonAlice(!isPersonAlice);
        }}
      >
        Switch Person
      </button>
    </div>
  );
}
function TaskCounter({ name }) {
  const [tasks, setTasks] = useState(0);
  return (
    <>
      <h1>
        {name}'s tasks: {tasks}
      </h1>
      <button onClick={() => setTasks(tasks + 1)}>Complete Task</button>
    </>
  );
}

*/
