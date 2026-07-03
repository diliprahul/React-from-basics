import { useState, useId } from "react";
import Callback from "./CallBacks/callback";
import "./App.css";

function App() {
  const id = useId();
  const nameid = useId();
  const mailid = useId();
  const passwordid = useId();
  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!(name.trim() === "" || mail.trim() === "" || password.trim() === "")) {
      setDetails([
        ...details,
        {
          usermailid: mailid,
          userpassid: passwordid,
          usernameid: nameid,
          username: name,
          usermail: mail,
          userpass: password,
        },
      ]);
    }
    setName("");
    setMail("");
    setPassword("");
  };
  const Display = () => {
    return details.map((user, index) => {
      return (
        <>
          <div
            key={index}
            className="border-2  w-2xl rounded-2xl p-2 text-gray-500"
          >
            <p> Nameid : {user.usernameid}</p>
            <p>MailId :{user.usermailid}</p>
            <p>PasswordId :{user.userpassid}</p>
            <p>Name :{user.username}</p>
            <p>Mail :{user.usermail}</p>
            <p>Password Length :{user.userpass.length}</p>
          </div>
          <br />
        </>
      );
    });
  };
  return (
    <>
      <div className="w-screen h-154 bg-gray-50 text-black">
        <h1 className="text-center text-5xl">Form</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor={nameid}>Name</label>
          <input
            type="text"
            id={nameid}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 ml-3 "
          />
          <br />
          <br />
          <label htmlFor={mailid}>Mail</label>
          <input
            type="mail"
            id={mailid}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="border-2 ml-3"
          />
          <br />
          <br />
          <label htmlFor={passwordid}>Password</label>
          <input
            type="password"
            id={passwordid}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 ml-3"
          />
          <br />
          <br />
          <button type="submit" className="border-2 p-2 ml-160">
            submit
          </button>
        </form>
        <br />
        <Display />
      </div>
    </>
  );
}

export default App;
