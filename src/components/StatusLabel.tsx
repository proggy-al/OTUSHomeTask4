import { Component, ReactElement } from "react";

export interface InfoProp {
    status: boolean;
}

export class StatusLabel extends Component<InfoProp> {
    render() {
        let res: ReactElement = 
        <div>
            {(this.props.status) ? <p style={{color:'black'}}>Авторизация прошла успешно</p> : <p style={{color:'red'}}>Авторизация не выполнена</p>}
        </div>;
        return res;
    }
}
