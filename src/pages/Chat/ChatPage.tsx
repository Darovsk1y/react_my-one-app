import { Button } from 'antd';
import { useEffect, useState } from 'react';
const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export type ChatMessageType = {
	message: string
	photo: string
	userId: number
	userName: string
}
const ChatPage:React.FC = ()=>{
	return (
		<div className="">
			<Chat/>
		</div>
	)
}
export default ChatPage;

const Chat:React.FC = ()=>{
	return (
		<div>
			<Messages/>
			<AddMessageForm/>
		</div>
	)
}
const AddMessageForm:React.FC = ()=>{

	const [message, setMessage] = useState('');
	const [readyStatus, setReadyStatus] = useState<'pending'|'ready'>('pending')
	//todo скажет когда соединение установлено
	useEffect(() => {
		wsChanel.addEventListener('open', ()=>{
			setReadyStatus('ready')
		})
	}, []);
	const sendMessage = ()=>{
		if(!message){
			return
		}
		//todo send() так отсылается сообщение по Вэбсокет каналу
		wsChanel.send(message);
		setMessage('');
	}
	return (
		<div>
			<div>
				{/* обычная работа с локал.стэйтом */}
				<textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message} 
				name="messages" cols={50} rows={10}></textarea>
				</div>
			<div>
				<Button disabled={readyStatus !== 'ready'} onClick={sendMessage}>Send</Button>
				</div> 
		</div>
	)
}
const Messages:React.FC = ()=>{
	const [messages, setMessages] = useState<ChatMessageType[]>([]);

	//todo сработает единожды
	useEffect(()=>{

		wsChanel.addEventListener('message',(e)=>{
			let newMessages = JSON.parse(e.data);
			// setMessages([...messages, ...newMessages]);
			//todo что бы не брал пустой массив каждый раз надо так
			setMessages((prevMessages)=>[...prevMessages, ...newMessages]);
		})
	}, [])

	return (
		<div style={{height:400, overflowY:'auto'}}>
			{messages.map((m, index)=> <Message key={index} message={m}/>)}
		</div>
	)
}
const Message:React.FC<{message: ChatMessageType}> = ({message})=>{
	return (
		<div>
			<img src={message.photo} style={{maxWidth:40, marginRight:5}}></img>
			<span>{message.userName}</span>
			<div>{message.message}</div>
			<br />
			<hr style={{borderColor:'blue', borderWidth:1, borderStyle:'solid'}}/>
			<br />
		</div>
	)
}