import './styles/style.css';
import Auth from './components/Auth';
import { useRef, useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom] = useState(null);
  const inputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Odası</h1>
          <label>Hangi Odaya Gireceksin ?</label>
          <input ref={inputRef} type="text" />
          <button
            onClick={() => {
              setRoom(inputRef.current.value);
            }}
          >
            Odaya Gir
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
