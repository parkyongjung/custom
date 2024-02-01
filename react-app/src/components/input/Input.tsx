import styled from 'styled-components';

interface InputProps {
    placeholder?: string;
    fontSize?: string;
    fontWeight?: string;
    type?: string;
    maxLength?: number;
    error?: string;
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWrap = styled.div`
    position: relative;
`;

const InputStyle = styled.input<InputProps>`
    width: 100%;
    height: 48px;
    padding: 0 20px;
    border: 1px solid #ddd;
    font-size: ${({ fontSize = 18 }) => fontSize}px;
    font-weight: ${({ fontWeight = 300 }) => fontWeight};
    background-color: #fff;
    border-radius: 8px;
    color: #000;
`;

const InputError = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #ff0000;
    margin-top: 15px;
`;

const Input = (props: InputProps) => {
    return (
        <>
            <InputWrap>
                <InputStyle
                    type={props.type ? props.type : 'text'}
                    max-length={props.maxLength ? props.maxLength : ''}
                    placeholder={props.placeholder ? props.placeholder : '텍스트를 입력하세요.'}
                    onChange={props.handleInputChange}
                />
                {props.error && <InputError>{props.error}</InputError>}
            </InputWrap>
        </>
    );
};

export default Input;
