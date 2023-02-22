import styled from "@emotion/styled";
import { IconWrapper } from "../../atoms/Icons";
import CloseIcon from "@mui/icons-material/Close";

interface ModalHeaderProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export default function ModalHeader({ children, onClick }: ModalHeaderProps) {
    return (
        <Header>
            <h2>{children}</h2>
            <IconWrapper onClick={onClick}>
                <CloseIcon />
            </IconWrapper>
        </Header>
    );
}
