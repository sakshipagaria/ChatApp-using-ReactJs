import { ChatEngine } from  'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';
const App=() =>{
    if(!localStorage.getItem('username'))
    return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="4350da54-095f-4594-8bf1-fd83acd20ccb"
            //userName="heyitssakshi"
            //userSecret="123456"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App;