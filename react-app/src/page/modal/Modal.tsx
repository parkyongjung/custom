import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface GlobalStyleProps {
    modalOpen: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    overflow: ${(props) => (props.modalOpen ? 'hidden' : 'auto')};
  }
`;

const bounceIn = keyframes`
    0% {
    opacity: 0;
    transform: scale(.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% { transform: scale(.9); }
  100% { transform: scale(1); }
`;

const ModalContainer = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
    position: relative;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    animation: ${bounceIn} 0.5s ease-out;
`;

const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
`;

interface BouncingModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = (props: BouncingModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (props.isOpen) {
            setIsVisible(true);
        }
    }, [props.isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            props.onClose();
        }, 300);
    };

    return (
        <>
            <GlobalStyle modalOpen={isVisible} />
            {props.isOpen && (
                <ModalContainer style={{ display: isVisible ? 'flex' : 'none' }}>
                    <ModalContent>
                        <CloseButton onClick={handleClose}>&times;</CloseButton>
                        {props.children}
                    </ModalContent>
                </ModalContainer>
            )}
        </>
    );
};

export default Modal;
