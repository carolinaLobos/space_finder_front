import React, { SyntheticEvent } from "react";
import {AuthService} from '../services/AuthService'

interface LoginProps{
    authService: AuthService
}

interface LoginState{
    userNameState: string,
    passwordState: string,
    loginAttenpted: boolean,
    loginSuccesfull: boolean
}

interface CustomEvent{
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState>{
    private async handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        const result = await this.props.authService.login(
            this.state.userNameState,
            this.state.passwordState
        )
        if (result){
            console.log(result)
        }else{
            console.log('error al logearse')
        }
    }
    //inicializo el estado del componente
    state: LoginState ={
        userNameState:'',
        passwordState: '',
        loginAttenpted:false,
        loginSuccesfull: false
        }
    
    private setUserName(event: CustomEvent){
        this.setState({
            userNameState:event.target.value
        })
        console.log(' user enter '+event.target.value)
    } 
    private setPassword(event: CustomEvent)  {
        this.setState({
            passwordState: event.target.value
        })
        console.log(' user enter '+event.target.value)
    }

  
    render(){
        return (
                <div>
                    <h2>PorFavor ingrese sus credenciales</h2>
                    <form onSubmit={e=>this.handleSubmit(e)}>
                        <input value={this.state.userNameState} onChange={e => this.setUserName(e)}/><br/>
                        <input value={this.state.passwordState} onChange={e => this.setPassword(e)}type='password'/>
                        <input type='submit'/>
                    </form>
                     </div>
        )
    }
}