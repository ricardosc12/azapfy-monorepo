import { 
    CRow, CCol, CWidgetStatsB
} from "@coreui/react"


export default function Widget({widgets}){
    
    return (
        <CRow>
            <CCol xs={6}>
                <CWidgetStatsB
                className="mb-3"
                progress={{ color: 'success', value: widgets?.[0].percent }}
                text={widgets?.[0].text}
                title={widgets?.[0].title}
                value={widgets?.[0].value}
                />
            </CCol>
            <CCol xs={6}>
                <CWidgetStatsB
                className="mb-3"
                color="secondary"
                inverse
                progress={{color:'success', value: widgets?.[1].percent }}
                text={widgets?.[1].text}
                title={widgets?.[1].title}
                value={widgets?.[1].value}
                />
            </CCol>
        </CRow>
    )
}

