import './App.css';
import SearchPhotos from './components/SearchPhotos/SearchPhotos';

function App() {
	return (
		<div className="App">
			<h1 className="text-center text-[30px] font-bold mb-3">
				Photo Search App
			</h1>
			<SearchPhotos />
		</div>
	);
}

export default App;
