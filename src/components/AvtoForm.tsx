import { ReactElement, useState } from "react";
import './style.css'
import axios from 'axios'

interface FancyProps {
    tlogin: string;
    tpass: string;
  }

export function AvtoForm() {
    const [tlogin, setLogin] = useState("");
    const [tpass, setPass] = useState("");

        function getData() {
               axios.get('https://catfact.ninja/fact')
              .then(res => {
                console.log(res.data);
                alert('Ответ получен');
                })
                .catch(error => {
                    console.log(error.cause);
                    alert('Ответ не получен');
                })
                .then(() => {
                    console.log("все готово")
                });                      
        };

        const click = () =>
            {
                setLogin("");
                setPass("");
            }
          
    let res: ReactElement =
        <div className="myForm">
            <div className="myField">
                <p>Логин <br />
                    <input
                        id="tLogin"
                        placeholder="Введите логин"
                        type="text"
                        value={tlogin}
                        onChange={e => setLogin(e.target.value)}>
                    </input></p>
                <p>Пароль <br />
                    <input
                        id="tPassword"
                        placeholder="Введите пароль"
                        type="password"
                        value={tpass}
                        onChange={e => setPass(e.target.value)}>
                    </input></p>
                <br />
                <div className="myButton">
                    <button id="bOk" onClick={getData}>Ок</button>&nbsp;
                    <button id="bCancel" onClick={click}>Отмена</button>
                </div>
            </div>
        </div>
    return res;
}
