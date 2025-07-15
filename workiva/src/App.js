import './App.css';
import ChatUI from './components/ChatUI';

function App() {
	return (
		<div className="container mt-5 py-8">
			<header className="text-center mb-8">
				<h1 className="font-bold mb-2">Open AI Chat</h1>
				<p>Ask me anything buy entering a prompt</p>
			</header>

			{/* Chat and conversation Section */}
			<ChatUI />
		</div>
	)
}

export default App;
