import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 99); 
    window.navigator.clipboard.writeText(password)
  },[password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}<>?";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto  rounded-lg px-4 my-12 bg-gray-600 ">
      <div className="bg-gray-800 rounded-lg shadow-md p-2">
        <h1 className="text-white text-center text-lg font-medium mb-2">
          Password generator
        </h1>

        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          className="w-full px-3 py-2 rounded-md outline-none text-black mb-4 bg-white shadow-sm"
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="absolute right-120 px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-800 shadow-sm">Copy</button>

        <div className="flex gap-4 items-center text-white text-sm">
          <label>
            Length: {length}
            <input
              type="range"
              min={4}
              max={40}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="ml-2"
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />{" "}
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />{" "}
            Special
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
