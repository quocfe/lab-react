import React from 'react';
import { faker } from '@faker-js/faker';

const CommentDetail = () => {
	const randomName = faker.person.lastName();
	const randomImg = faker.image.avatarLegacy();
	const fakeDate = faker.date.recent().toLocaleString();
	const fakeComment = faker.lorem.slug();
	return (
		<div className="flex items-center justify-start gap-3 h-full p-2">
			<img className="h-14 w-14 object-cover" src={randomImg} alt="" />
			<div className="content flex flex-col items-start justify-between">
				<div className="flex items-center gap-2">
					<h4 className="text-[16px] font-bold">{randomName}</h4>
					<p className="text-[12px]">{fakeDate}</p>
				</div>
				<p>{fakeComment}</p>
			</div>
		</div>
	);
};

export default CommentDetail;
