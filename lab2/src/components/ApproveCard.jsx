import React from 'react';

const ApproveCard = ({ children }) => {
	return (
		<div className="flex items-center flex-col justify-center">
			<div className="h-[150px] w-[400px] border border-gray-400 rounded-lg mt-3  overflow-hidden">
				<div className="top border border-b-gray-400  flex-1 h-[60%]">
					{children}
				</div>
				<div className="btn p-2 flex items-center justify-center gap-2 h-[40%]">
					<button className="rounded-lg w-[50%] font-medium bg-transparent border border-green-500 text-green-500 px-3 py-2">
						Approve
					</button>
					<button className="rounded-lg w-[50%] font-medium bg-transparent border border-red-500 text-red-500 px-3 py-2">
						Reject
					</button>
				</div>
			</div>
		</div>
	);
};

export default ApproveCard;
