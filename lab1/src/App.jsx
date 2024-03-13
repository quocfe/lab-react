import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';

import './App.css';

const App = () => {
	return (
		<div className="container">
			<div className="grid">
				<div className="left">
					<div className="avatar">
						<div className="img ">
							<img
								src="https://radartasik.disway.id/upload/00cb8eeff96bffaa234a5921987d2fd4.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="contact">
						<h4 className="title">Thông tin liên hệ</h4>
						<ul className="contact_items">
							<li className="flex">
								<FaPhone />
								<p>0383995412</p>
							</li>
							<li className="flex">
								<IoMdMail />
								<p>abc@gmail.com</p>
							</li>
							<li className="flex">
								<FaBirthdayCake />
								<p>xx/xx/xxxx</p>
							</li>
							<li className="flex">
								<FaEarthAmericas />
								<p>Viet Nam</p>
							</li>
						</ul>
					</div>
					<div className="skill">
						<h4 className="title">Thông tin liên hệ</h4>
						<ul className="skill_items">
							<li className="flex">
								<p>Quản lý tài chính</p>
							</li>
							<li className="flex">
								<p>Chăm sóc khách hàng</p>
							</li>
							<li className="flex">
								<p>Sale</p>
							</li>
						</ul>
					</div>
					<div className="language">
						<h4 className="title">Ngôn ngữ</h4>
						<ul className="language_items">
							<li className="flex">
								<p>Tiếng Nhật</p>
							</li>
							<li className="flex">
								<p>Tiếng Hàn</p>
							</li>
							<li className="flex">
								<p>Tiếng Anh</p>
							</li>
						</ul>
					</div>
					<div className="softsKill">
						<h4 className="title">Ngôn ngữ</h4>
						<ul className="softsKill_items">
							<li className="flex">
								<p>Quản lý thời gian</p>
							</li>
							<li className="flex">
								<p>Giải quyết vấn đề</p>
							</li>
							<li className="flex">
								<p>Làm việc nhóm</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="right">
					<div className="infoEmployee">
						<h2 className="fullname">Nguyễn Văn A</h2>
						<h4 className="position">Nhân viên kinh doanh</h4>
					</div>
					<div className="goals">
						<h4 className="title">Mục tiêu nghề nghiệp</h4>
						<p>
							Xin chào nhà Tuyển dụng! Tôi là Trần Nguyễn Tâm Đan, một nhân viên
							khách sạn trẻ tuổi đầy đam mê và nhiệt huyết. Với những kiến thức
							tôi học được cùng với sự nhiệt huyết sáng tạo, kinh nghiệm cùng
							tình thần trách nhiệm trong công việc, tôi hy vọng có thể đóng góp
							một phần nhỏ của mình vào sự phát triển của công ty sáng tạo, kinh
							nghiệm cùng tình thần trách nhiệm trong công việc, tôi hy vọng có
							thể đóng góp một phần nhỏ của mình vào sự phát triển của công ty
						</p>
					</div>
					<div className="experience">
						<h4 className="title">Kinh nghiệm làm việc</h4>
						<div className="experienceContent">
							<h5>Nhân viên kinh doanh</h5>
							<p>2022 - 2023</p>
							<p>Công ty..</p>
							<h5>Nhiệm vụ</h5>
							<ul>
								<li>
									Thực hiện các kế hoạch kinh doanh: tìm kiểm khách hàng, giới
									thiệu sản phẩm dịch vụ, tư vấn sản phẩm và ứng dụng, chăm sóc
									và quản lý quan hệ khách hàng.
								</li>
								<li>
									Lập kế hoạch hoạt động năm, quý, tháng, tuần để đạt được mục
									tiêu được giao
								</li>
							</ul>
						</div>
					</div>
					<div className="knowledge">
						<h4 className="title">Học vấn</h4>
						<div className="knowledgeContent">
							<h5>Quản trị kinh doanh</h5>
							<p>2022 - 2023</p>
							<p>Công ty..</p>
							<p>Tốt nghiệm loại vừa</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
