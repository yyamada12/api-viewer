import "./App.css";
import { useState } from "react";

import axios from "axios";

function App() {
  const [name, setName] = useState("grapefruit");
  const [queryString, setQueryString] = useState("");
  const [messages, setMessages] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQueryString(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get(`http://localhost:3010/user/${name}?q=${queryString}`)
      .then(function (res) {
        console.log(res);
        if (res.data && res.data.messages !== undefined) {
          setMessages(res.data.messages);
        } else {
          console.log("`messages` is undefiend: response  ", res);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <form>
        <label>
          name:
          <select value={name} onChange={handleNameChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          q=
          <input type="text" value={queryString} onChange={handleQueryChange} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          送信
        </button>
      </form>
      <ul>
        {messages.map((v) => (
          <li>{v.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
