import { useState } from "react";
import './style.css'
import axios from 'axios'
import { StatusLabel } from "./StatusLabel";

const AvtoForm= () => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const [status, setStatus] = useState(false);

    function clickReset () {
        setLogin('');
        setPass('');
        setStatus(false);
    }

    function clickSubmit () {
        axios.get('https://catfact.ninja/fact')
            .then(res => {
                console.log(res.data);  
                (login.length>0 && pass.length>0) ? 
                setStatus(true) : setStatus(false);                      
            })
            .catch(error => {
                console.log(error.cause);
                setStatus(false); 
            })
            .then(() => {
                console.log("все готово")
            });
    }
    return (
        <div className="myForm">
        <p><input
            placeholder="Логин"
            type="text"
            name="login"
            value={login}
            onChange={e => setLogin(e.target.value)}/>
        </p>
        <p><input
            placeholder="Пароль"
            type="text"
            name="pass"
            value={pass}
            onChange={e => setPass(e.target.value)}/>
        </p>
        <button type="submit" value="Ok" onClick={clickSubmit}>Ok</button>
        &nbsp;
        <button type="reset" value="Cancel" onClick={clickReset}>Cancel</button>
        <br/>
        <StatusLabel status={status}></StatusLabel>        
        </div>
    );
};

export default AvtoForm;

