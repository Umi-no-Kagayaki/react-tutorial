import styled from 'styled-components';
import {Modal} from './components/modal';

const Container = styled.div`
    padding: 24px 36px;
    
    border-radius: 10px;

    width: 240px;

    background-color: white;
`

const ButtonWrapper = styled.div`
    margin-top: 24px;

    display: flex;

    justify-content: space-between;
`

export const FormModal = ({confirm, cancel}) => {
    return (
        <Modal>
            <Container>

                <div>本当に作成しますか？</div>

                <ButtonWrapper>
                    <button
                        onClick = {cancel}
                    >
                        Cancel
                    </button>

                    <button
                        onClick = {confirm}
                    >
                        OK
                    </button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
};