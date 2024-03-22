import { useState } from "react";
import ReactPlayer from 'react-player';

function App() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=RS6x4GBQu-4");

  return (
		<>
		<ReactPlayer url={url} controls={true} />
		<input type="text" value={url} onChange={e => setUrl(e.target.value)} />
		</>
  );
}

export default App;
