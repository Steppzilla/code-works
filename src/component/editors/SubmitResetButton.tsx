type SubmitResetButtonProps = {
    disabledSubmit: boolean,
    disabledReset: boolean,
}

export default function SubmitResetButton(props: SubmitResetButtonProps) {
    return (
        <>
            <button type={"reset"} disabled={props.disabledReset}>
                &#10005;
            </button>
            <button type={"submit"} disabled={props.disabledSubmit}>
                &#10003;
            </button>
        </>
    )
}
