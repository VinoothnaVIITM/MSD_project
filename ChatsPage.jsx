import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage=(props)=>{
    return(
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
            projectId='c5100f71-00c1-4b5c-9643-41de6a004eae'
            username='props.user.username'
            secret='props.user.secret'
            style={{height:'100%'}}
            />
        </div>
    )
}
export default ChatsPage;