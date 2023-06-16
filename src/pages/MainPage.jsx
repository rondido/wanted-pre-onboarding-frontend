import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: ceter;
	flex-direction: column;
	align-items: center;
`;

const ButtonItemDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 600px;
	height: 500px;
`;

const LinkButton = styled(Link)`
	border: 1px solid blue;
	border-radius: 5px;
	background-color: transparent;
	width: 200px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: aliceblue;
	}
`;

export default function MainPage() {
	return (
		<Container>
			<ButtonItemDiv>
				<h1>원티드 프리온보딩 인턴십 선발 과제</h1>
				<LinkButton to="/signin" style={{ textDecoration: 'none', color: 'black' }}>
					시작하기
				</LinkButton>
			</ButtonItemDiv>
		</Container>
	);
}
