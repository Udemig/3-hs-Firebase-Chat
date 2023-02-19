import React, { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db, auth } from './../firebase/FirebaseConfig';

const Chat = ({ room }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, 'messages');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await addDoc(messagesRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setMessage('');
  };

  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where('room', '==', room),
      orderBy('createdAt')
    );

    onSnapshot(queryMessage, (snapshot) => {
      let commingMessages = [];

      snapshot.forEach((doc) => {
        commingMessages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(commingMessages);
    });
  }, []);

  return (
    <div className="chat">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a href="/">Farklı Oda</a>
      </header>
      <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName === message.user ? (
              <div key={message.id} className="user-message">
                <span className="text">{message.text}</span>
              </div>
            ) : (
              <div key={message.id} className="message">
                <span className="user">{message.user} : </span>
                <span className="text">{message.text}</span>
              </div>
            )}
          </>
        ))}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={message}
          type="text"
          placeholder="mesajnıızı girin"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
