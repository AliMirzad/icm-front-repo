import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../../component/input/Input";
import CircleLoader from "react-spinners/CircleLoader";
import Pagination from "../../component/Pagination/Pagition";
import ModalDelete from "./Modal/ModalDelete";
import ModalAdd from "./Modal/ModalAdd";
import getLocation from "../../../Api/CompanyApi/getLocation";
import ModalDeleteAll from "./Modal/ModalDeleteAll";


export const IcmUserMangment = () => {
  const [managementType, setManagementType] = useState([]); // Data storage
  const [search, setSearch] = useState(""); // Search input value
  const [showBtn, setShowBtn] = useState(false);
  const [deleteType,setDelteType]=useState(false)
  const [id, setId] = useState(0);
  const [companyId, setCompanyId] = useState("");
  const [loading, setLoading] = useState(true); // Loader state
  const [title, setTitle] = useState([]); // Table headers
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [totalPages, setTotalPages] = useState(0);
  const [addModal, setAddModal] = useState(false);
  const [click, setClick] = useState(false);
  const dataPerPage = 5; // Items per page
  const [showDelteModal,setShowDelteModal]=useState(false)
  const [showDelteModalAll,setShowDelteModalAll]=useState(false)
  const[upadteModal,setUpdateModal]=useState(false)
  const[titleItem,setTitleItem]=useState(null)
  const[priority,setPriority]=useState(null)
  const[code,setCode]=useState(null)
  const[subType,setSubType]=useState(null)
  const [locationFold,setLocationFold]=useState([])
console.log(managementType.length+"at first");
console.log(companyId+"hi");

  // Fetch Data from API
  
  const fetchData = async (query = "", page = 1, id = null) => {
    setLoading(true);
  
    let api = `http://5.34.206.81:8080/icm/user/v1/getAllUser`;
  
    if (query.trim() !== "") {
      api = `http://5.34.206.81:8080/icm/user/v1/search`;
    } else if (id && addModal === true) {
      api = `http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypes/${id}`;
    }
  
    console.log("Fetching from API:", api, "with query:", query);
  
    try {
      const response = await axios.get(api, {
        params: {
          search: query, // Make sure this is the correct API parameter
          pageNumber: page,
          pageSize: 5,
          sortBy: "id",
        },
      });
  
      if (response.data && response.data.items) {
        setManagementType(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems / dataPerPage));
        if (response.data.items.length > 0) {
          setTitle(Object.keys(response.data.items[0]));
        }
      } else {
        setManagementType([]); // Ensure empty search shows no results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setManagementType([]); // Handle API errors gracefully
    }
  
    setLoading(false);
  };
  
  const handleOpenModal = () => {
    // setAddModal(()=>et);
    setAddModal(true)

  };
 const handleShowBtn=()=>{
  setShowBtn(true)
 }
 const handleLocation=async()=>{
  const locationFold=await getLocation()
  
  setLocationFold(locationFold)
}
  // Run when current page changes
  useEffect(() => {
    fetchData(search, currentPage, id);
    setAddModal()
    handleLocation()
  }, [currentPage, click, id,showDelteModal]);

  // Run when user searches
  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page on search
    fetchData(search, 1,0);
    setClick(true);
    setId(null)
  };

  // Pagination handlers
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelteModal=async (id)=>{
    setShowDelteModal(true)
    setId(id)
   
    
  }
  const handleUpdateModal=(id,code,subType,priority,title)=>{
    
    setUpdateModal(true)
    setId(id)
    setCode(code)
    setSubType(subType)
    setPriority(priority)
    setTitleItem(title)
    
  }
  console.log(id);
  
  const handleShowById=()=>{
    setId(id)
    
    
  }
const handleAllDelte=(companyId)=>{
  setShowDelteModalAll(true)

}
  return (
    <>
      {!loading ? (
        <div className="container w-[90%] mx-auto text-center rounded-xl overflow-hidden shadow-xl">
          {/* Header Section */}
          <div className="w-full p-3 bg-white flex justify-between items-center">
            <h1 className="text-center">مدیریت اطلاعات پایه</h1>
            <div className="flex">
              <Input
                type="text"
                placHolder="جستجو"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                
              />
              <button
                onClick={handleSearch}
                className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                جستجو
              </button>
            </div>
          </div>

          {/* Table Headers */}
          <div className="w-full bg-white p-3 border-b-2 border-zinc-700 grid grid-cols-6 gap-x-1">
            {title.map((elem, index) =>
              elem === "userId" || elem === "username" || elem === "companyName" ? (
                <p className="text-[#828282] text-center" key={index}>
                  {elem}
                </p>
              ) : null
            )}
            <p className="text-[#828282] text-center">نمایش</p>
            <p className="text-[#828282] text-center">ویرایش</p>
            <p className="text-[#828282] text-center">حذف</p>
          </div>

          {/* Table Data */}
          <div className="flex flex-col gap-y-2">
            {managementType.length > 0 ? (
              managementType.map((elem, index) => (
                <div
                  key={index}
                  className="w-full grid grid-cols-6 gap-0 items-center bg-white p-3"
                >
                  <p className="text-black text-center text-[14px]">
                    {elem.userId}
                  </p>
                  <p className="text-black text-center text-[14px]">
                    {elem.username}
                  </p>
                  <p className="text-black text-center text-[14px]">
                    {elem.companyName}
                  </p>
                  <button
                    className="bg-blue-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md"
                    // onClick={() => handleShowById(elem.id)}
                  >
                    نمایش
                  </button>
                  <button
                    className="bg-yellow-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md"
                    onClick={() => handleUpdateModal(elem.id,elem.code,elem.subType,elem.priority,elem.title)}
                  >
                    ویرایش
                  </button>
                  <button
                  onClick={()=>handleDelteModal(elem.userId)}
                  className="bg-rose-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md">
                    حذف
                  </button>
                </div>
              ))
            ) : (
              <h2>مقداری یافت نشد</h2>
            )}
          </div>

          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageClick={handlePageClick}
          />

          {/* Add New Manager Button */}
          <div className="w-full p-3  flex justify-start gap-2 items-center">
            <button
              onClick={handleOpenModal}
              className="bg-green-600 text-white px-4 py-2 rounded-md w-fit block "
            >
              اضافه کردن کاربر جدید
            </button>
            <div className="flex justify-center items-center  gap-2  rounded-md">
            <button
              onClick={handleAllDelte}
              className="bg-rose-600 text-white px-4 py-2 rounded-md w-fit block ml-auto"
            >
              پاک کردن کاربران شرکت
            </button>
              <input type="text" name="" className="outline-none border-0" placeholder="شناسه شرکت " onBlur={e=>setCompanyId(e.target.value)} />

            </div>
          </div>

          {/* {id && <ModalInfo onClose={""} isOpen={id} title={title}  />}
          {upadteModal&&<ModalEdit id={id} title={titleItem} priority={priority} subType={subType} code={code} settitileItem={setTitleItem} setPriority={setPriority} setSubType={setSubType} setCode={setCode} setId={setId} />} */}
         
            {addModal && <ModalAdd locationFold={locationFold} options={managementType} addModal={addModal} setAddModal={setAddModal} />}
            
          {showDelteModal===true?<ModalDelete showDelteModal={showDelteModal} showDelteModalFn={setShowDelteModal} id={id}/>:""}
          {showDelteModalAll&& <ModalDeleteAll showDelteModal={showDelteModal} showDelteModalFn={setShowDelteModal} test={managementType} id={companyId} />}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircleLoader size={150} color="#2563eb" />
        </div>
      )}
    </>
  );
};