import styled from 'styled-components';
import { AnimatedTextCharacter } from 'components/animation/AnimatedText';
import imgLogin from 'assets/images/img-login.jpg';
import Input from 'components/input/Input';

// import useDataFetch from 'hooks/useDataFetch';

const LoginWrap = styled.div`
    display: flex;
    height: 100vh;
    min-width: 1200px;
`;

const SideLogo = styled.div`
    flex-basis: 600px;
    background: url(${imgLogin}) no-repeat -246px;
    background-size: cover;
`;

const SignWrap = styled.div`
    flex: 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignInner = styled.div`
    width: 500px;
`;

const Login = () => {
    // axios예시임
    // req 따로 필요 없다 했으니 주소 받는 부분만 수정
    // const { data, loading, error } = useDataFetch<{ }>('/api/~~~');

    // if (loading) {
    //   return <p>Loading...</p>;
    // }

    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // }

    return (
        <>
            <LoginWrap>
                <SideLogo />
                <SignWrap>
                    <SignInner>
                        <AnimatedTextCharacter text="Custom Login" size="14px" fontWeight="300" color="#999" />
                        <AnimatedTextCharacter text="커스텀 로그인" size="48px" fontWeight="700" />
                        <Input error="아이디 입력해바아앙" />
                    </SignInner>
                </SignWrap>
            </LoginWrap>
        </>
    );
};

export default Login;
