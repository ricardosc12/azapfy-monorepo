import { useState } from "react";
import WindowedSelect from "react-windowed-select";
import Dropdown from "./component";

const WSelect:any = WindowedSelect

const options:any = [];

for (let i = 0; i < 1000; i += 1) {
  options.push({
    label: `teste ${i}`,
    value: i
  });
}

const Select_=()=>{
    const [value, setValue] = useState()

    return <Dropdown input={{value:value,onChange:(e:any)=>setValue(e)}} data={options} label="Options" meta={{}}/>

}

export default function Select(){

    return (
        <div>
            <Select_/>
            <WSelect options={options} />
        </div>

    )
}