import styled from 'styled-components';
import { AnimatedTextCharacter } from 'components/animation/AnimatedText';
import imgLogin from 'assets/images/img-login.jpg';
import Input from 'components/input/Input';
import Button from 'components/button/Button';

// import useDataFetch from 'hooks/useDataFetch';

const LoginWrap = styled.div`
    display: flex;
    height: 100vh;
    min-width: 1200px;
`;

const SideLogo = styled.div`
    flex-basis: 600px;
    background: url(${imgLogin}) no-repeat -380px;
    // background-size: cover;
`;

const SignWrap = styled.div`
    flex: 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignInner = styled.div`
    width: 400px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    & + & {
        margin-top: 40px;
    }
`;

const FormLabel = styled.label`
    display: block;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
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
                        <AnimatedTextCharacter text="커스텀 로그인" size="40px" fontWeight="700" margin="0 0 40px 0" />
                        <FormGroup>
                            <FormLabel>아이디</FormLabel>
                            <Input error="아이디를 다시 입력해 주세요." />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>비밀번호</FormLabel>
                            <Input error="비밀번호를 다시 입력해 주세요.(영문, 숫자, 특기호의 조합으로 8~16자리)" />
                        </FormGroup>
                        <Button text={'로그인'} />
                    </SignInner>
                </SignWrap>
            </LoginWrap>
        </>
    );
};

export default Login;
