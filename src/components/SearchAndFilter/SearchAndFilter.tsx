
import { useState, useEffect, useRef } from "react";




interface BreadcrumbProps {
  title: string
  searchFunc: () => void
}

const SearchAndFilter = ({ title, searchFunc }: BreadcrumbProps) => {
  //   const [searchText, setSearchText] = useState("");
  //   const [modelOpen, setModelOpen] = useState(false)
  //   const [clients, setClients] = useState(false)

  //   useEffect(() => {
  //     const time = setTimeout(async () => {
  //       await searchFunc(searchText);
  //     }, 1000);
  //     return clearTimeout
  //   }, [searchText]);

  //   const trigger = useRef(null)
  //   const searchFunc = async (text) => {
  //     try {
  //         const config = {
  //             method: 'post',
  //             url: '',
  //             data: {
  //                 search:text
  //             }
  //         }
  //         const res = await axios(config)
  //         console.log(res)
  //     } catch (error) {
  //         console.log(error)
  //     }
  //   }

  const [popupOpen, setPopupOpen] = useState(false);

  const trigger = useRef<any>(null);
  const popup = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!popup.current) return;
      if (
        !popupOpen ||
        popup.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setPopupOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!popupOpen || keyCode !== 27) return;
      setPopupOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="text"
        placeholder="Search here"
        //placeholder={title}
        //value={searchText}
        //onChange={(e) => setSearchText(e.target.value)}
        className="w-full rounded-full py-2 pl-9 pr-4 font-medium focus:outline-none xl:w-125 shadow-lg"
      />
     

      <div>
        

       
      </div>
    </div>
  );
};

export default SearchAndFilter;
