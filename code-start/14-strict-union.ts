type LoadingState = { isLoading: true; }
type SuccessState = { isLoading: false; isSuccess: true; }
type ErrorState =   { isLoading: false; isSuccess: false; errorMessage: string; }

type State = LoadingState | SuccessState | ErrorState;


const testState: State = {
    isLoading: true,
    isSuccess: true,
    errorMessage: "Error!"
}
