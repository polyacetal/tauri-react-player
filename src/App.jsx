import { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import {desktopDir, join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import "./App.css";

const App = () => {
  const [url, setUrl] = useState('');
  const [src, setSrc] = useState('');
  const [player, setPlayer] = useState('');

  useEffect(() => {
	const fn = async () => {
		const desktopDirPath = await desktopDir();
		const new_url = convertFileSrc(await join(desktopDirPath, src));
		setUrl(new_url);
		const player = <ReactPlayer url={new_url} controls={true} width="100%" height="100%"/>;
		setPlayer(player);
	};
	fn();
  }, [src])

  return (
		<>
		<h1>React Player</h1>
		<div class="react-player">
			{player}
			<br />
			{src}
			<br/>
			{url}
			<br />
			<input type="text" value={src} onChange={e => setSrc(e.target.value)} />
		</div>
		</>
  );
}

export default App;
