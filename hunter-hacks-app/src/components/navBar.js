// function Searching (){
//     return(
//         <>
//         </>
//     );
// }
import { useState } from "react";
import SearchableDropdown from "./SearchableDropDown";

export default function SearchSection({
   input1,
   setInput1,
   input2,
   setInput2,
   onSearch,
   options,
}) {
   const [attempted, setAttempted] = useState(false);

   const bothFilled = input1.trim() !== "" && input2.trim() !== "";

   function handleClick() {
      if (!bothFilled) {
         setAttempted(true);
         return;
      }
      onSearch();
   }

   return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
         <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <SearchableDropdown
               options={options}
               value={input1}
               onSelect={(val) => setInput1(val)}
               placeholder='Search first station...'
            />
            <SearchableDropdown
               options={options}
               value={input2}
               onSelect={(val) => setInput2(val)}
               placeholder='Search second station...'
            />

            <button
               onClick={handleClick}
               disabled={!bothFilled}
               style={{
                  opacity: bothFilled ? 1 : 0.4,
                  cursor: bothFilled ? "pointer" : "not-allowed",
               }}
            >
               GO
            </button>
         </div>

         {attempted && !bothFilled && (
            <p style={{ color: "red", fontSize: "13px", margin: 0 }}>
               Please fill in both fields before searching.
            </p>
         )}
      </div>
   );
}
