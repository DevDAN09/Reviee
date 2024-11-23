import { StepIndicatorContainer, StepDescription } from "../DashBoardPage.style";

interface StepIndicatorProps {
    currentStep: number;
}

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => (
    <StepIndicatorContainer>
        <StepDescription>Step {currentStep}/2</StepDescription>
    </StepIndicatorContainer>
);

