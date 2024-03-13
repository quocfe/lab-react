import './App.css';
import ApproveCard from './components/ApproveCard';
import CommentDetail from './components/CommentDetail';

function App() {
	return (
		<>
			<ApproveCard>{<CommentDetail></CommentDetail>}</ApproveCard>
			<ApproveCard>{<CommentDetail></CommentDetail>}</ApproveCard>
			<ApproveCard>{<CommentDetail></CommentDetail>}</ApproveCard>
			<ApproveCard>{<CommentDetail></CommentDetail>}</ApproveCard>
		</>
	);
}

export default App;
