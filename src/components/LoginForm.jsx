import { useState } from "react";
import axios from 'axios';

const LoginForm =() => {
    const [username , setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [error,setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const authObject = {'Project-Id':'4350da54-095f-4594-8bf1-fd83acd20ccb','User-Name': username ,'User-Secret':password};
        try {

            //username / password => chatengine -> give messages
            //await
            axios.get('https://api.chatengine.io/chats',{ header : authObject });

            //worked out -> logged in
            localStorage.setItem('username' , username);
            localStorage.setItem('password' , password);

            window.location.reload();
            
        }
        catch(err){
            //error -> try with new username
            setError('Oops, incorrect credentials!');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value )} className="input" placeholder="Enter Username" required />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value )} className="input" placeholder="Enter Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Get Started..</span>
                        </button>
                    </div>
                    <h2>
                        {error}
                    </h2>                 
                </form>    
            </div>
        </div>
    );
}
export default LoginForm;