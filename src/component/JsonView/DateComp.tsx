import "./DateComp.css";

type DateCompProps = {
    date: Date,
}

export default function DateComp({date}: DateCompProps) {

    let lang = "de";
    let words: boolean = false;
    const monthNamesEngl = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    return (
        <span className={"dateField"}>
            {lang === "de" ? <>
                    {date.getDate()}.&nbsp;
                    {!words ?
                        date.getMonth() + 1 +"."
                        : monthNames[date.getMonth()]
                    }&nbsp;
                    {date.getFullYear()}
                </>
                :
                <>
                    {!words ?
                        date.getMonth() + 1 +"."
                        : monthNamesEngl[date.getMonth()]
                    }&nbsp;
                    {date.getDate()}.&nbsp;
                    {date.getFullYear()}
                </>

            }
        </span>
    )
}
