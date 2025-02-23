/** Read about the code below, achieving that make input element in “SearchInput” to be
focused while search button on click **/
/** Code block start */
function SearchButton() {
  return <button> Search </button>;
}
function SearchInput() {
  return <input />;
}
export default function Page() {
  return (
    <>
      <nav>
        <SearchButton />
      </nav>
      <SearchInput />
    </>
  );
}
/** Code block end */

/* 作答區 */
/*

因為 SearchInput 是個子元件，所以使用 forwardRef 來轉發父元件的 ref，以達成聚焦輸入框的效果。

import { useRef, forwardRef } from "react";

function SearchButton({ handleClick }) {
  return <button onClick={handleClick}>Search</button>;
}

const SearchInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default function Page() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <nav>
        <SearchButton handleClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}

*/
