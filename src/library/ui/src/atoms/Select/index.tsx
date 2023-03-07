export default function Select(){
    return <input type="text" />
}

// import { useEffect, useRef, useState } from "react";
// import WindowedSelect from "react-windowed-select";
// import Dropdown from "./component";
// import styled from "@emotion/styled";
// import TextField from "../../atoms/TextField";

// const Main = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	grid-gap: 2rem;
// 	& #input_area {
// 		input {
// 			width: 8rem;
// 		}
// 	}
// `;

// const WSelect: any = WindowedSelect;

// // const options: any = [];

// // for (let i = 0; i < 100000; i += 1) {
// //     options.push({
// //         label: `teste ${i}`,
// //         value: i,
// //     });
// // }

// const Select_ = ({data}:any) => {
//     const [value, setValue] = useState();

//     return (
//         <Dropdown
//             input={{ value: value, onChange: (e: any) => setValue(e) }}
//             data={data}
//             label="Options"
//             meta={{}}
//         />
//     );
// };

// export default function Select() {

//     const [data, setData] = useState([])
//     const refDefault = useRef(1000)

//     const refInput:any=useRef()

//     function getData(num:any){
//         const options: any = [];
//         for (let i = 0; i < num; i += 1) {
//             options.push({
//                 label: `teste ${i}`,
//                 value: i,
//             });
//         }
//         return options
//     }

//     useEffect(()=>{
//         setData(getData(refDefault.current))
//     },[])

//     function getValue(){
//         setData(getData(refInput.current.value))
//     }

//     return (
//         <Main>
//             <h1>Data: {data.length}</h1>
//             <div>
//                 <Select_ data={data}/>
//                 <WSelect options={data} />
//             </div>
//             <div id="input_area">
//                 <TextField inputRef={refInput} id="data" defaultValue={refDefault.current}/>
//                 <button onClick={getValue}>set_data</button>
//             </div>
//         </Main>
//     );
// }
