import { CChart } from "@coreui/react-chartjs"

export default function Chart({labels,colors,data}){
    return (
        <CChart
            type="polarArea"
            data={{
                labels: labels,
                datasets: [
                {
                    data: data,
                    backgroundColor: colors,
                },
                ],
            }}
        />
    )
}
