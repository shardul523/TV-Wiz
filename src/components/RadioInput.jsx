import { StyledRadioInput } from './styles/SearchForm.styled';

export const CustomRadioInput = ({ label, ...inputProps }) => (
    <StyledRadioInput>
        <input {...inputProps} />
        <span>{label}</span>
    </StyledRadioInput>
);
