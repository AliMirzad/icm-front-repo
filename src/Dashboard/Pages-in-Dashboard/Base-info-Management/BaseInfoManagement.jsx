// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Input from "../../../component/input/Input";
// import CircleLoader from "react-spinners/CircleLoader";
// import Pagination from "../../component/Pagination/Pagition";
// import ModalAdd from "./Modal/ModalAdd";
// export const BaseInfoManagement = (inp) => {
//   const [mangementType, setMangmaentType] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loader, setLoader] = useState(true);
//   const [title, setTitle] = useState([]);
//   const [size, setSize] = useState(0);
//   const [currentPage, setCurrentPage] = useState(0);
//   const dataPerPage = 5;
//   const lastIndex = currentPage * 5;
//   const firstIndex = lastIndex - dataPerPage;
//   const [recoder, setRecoders] = useState(0);
//   const [nPage, setNPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const[addModal,setAddModal]=useState(false)
//   // let size={mangementType!==null?mangementType.data.totalItems:0}
// const handleSearch=(e)=>{
//   setSearch()
// }

//   useEffect(() => {
//     const fetchData = async () => {
//       let url =
//         "http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypes";
//       let response = await axios.get(url);
//       //,{params:{pageNumber:mangementType.data.currentPage}}
//       try {
//         setMangmaentType(response);
//         console.log(mangementType.data.items);
//         const tableTitle = Object.keys(response.data.items[0]);
//         setTitle(tableTitle);
//         console.log(title);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoader(false);
//         setSize(mangementType.data.totalItems);
//         setCurrentPage(mangementType.data.currentPage);
//         setRecoders(mangementType.data.items.slice(firstIndex, lastIndex));
//         setNPage(mangementType.data.totalItems);
//         setTotalPages(Math.ceil(mangementType.data.totalItems/dataPerPage));

//       }
//     };
//     fetchData();
//   }, []);

//   const handlePageClick = (page) => {
//     setCurrentPage(page);

//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       handlePageClick(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       handlePageClick(currentPage - 1);

//     }
//   };
//   const handleOpenModal=()=>{
//     setAddModal(true)
//   }
//   return (
//     <>
//       {loader !== true ? (
//         <div className="container   w-[90%] mx-auto text-center rounded-xl overflow-hidden  shadow-xl">
//           <div className="w-full p-3 bg-white  flex justify-start items-center ">
//             <h1 className="text-center">مدیرت اطلاعات پایه</h1>
//             <form action="">
//               <Input type={"text"} placHolder={"جستجو"} />
//             </form>
//           </div>
//           <div className="w-full    justify-start items-center  overflow-hidden">
//             <div className="w-full bg-white p-3 border-b-[2px] border-b-solid border-b-zinc-700 grid grid-cols-4 gap-x-1">
//               {title.map((elem, index) => {
//                 return elem === "id" || elem === "title" ? (
//                   <p className="text-[#828282] text-center" key={index}>
//                     {elem}
//                   </p>
//                 ) : (
//                   ""
//                 );
//               })}
//               <p className="text-[#828282] text-center">show</p>
//               <p className="text-[#828282] text-center">delete</p>
//             </div>
//             <div className="flex flex-col gap-y-[2px]">
//               {mangementType !== null
//                 ? mangementType.data.items.map((elem, index) => {
//                     return (
//                       <div
//                         key={index}
//                         className={`w-full grid grid-cols-4  items-center bg-white p-3`}
//                       >
//                         <p className="text-black text-center">{elem.id}</p>
//                         <p className="text-black text-center">{elem.title}</p>
//                         <button className="text-[16px] bg-blue-600 text-center text-white px-4 py-4 shadow-md w-[85px] mx-auto rounded-md">
//                           show
//                         </button>
//                         <button className="text-[16px] bg-rose-600 text-center text-white px-4 py-4 shadow-md w-[85px] mx-auto rounded-md ">
//                           delete
//                         </button>
//                       </div>
//                     );
//                   })
//                 : ""}
//             </div>
//           </div>
//           <Pagination
//             currentPage={currentPage}
//             dataPerPage={dataPerPage}
//             recoder={recoder}
//             nPage={nPage}
//             totalPages={totalPages}
//             handleNext={handleNext}
//             handlePrev={handlePrev}
//             handlePageClick={handlePageClick}
//           />
//             <div className=" w-full p-3 bg-white">
//               <button onClick={handleOpenModal} className="text-[16px] bg-green-600 text-center text-white px-4 py-4 shadow-md w-fit ms-auto block rounded-md" >اضافه کردن مدیر جدید</button>
//             </div>
//             {addModal?<ModalAdd/>:""}
//         </div>

//       ) : (
//         <div className="w-full h-full flex justify-center items-center">
//           <CircleLoader size={150} color="#2563eb" />
//         </div>
//       )}
//     </>
//   );
// };

// const [data, setData] = useState({
//   accessLevelTypes: [],
//   genderTypes: [],
// });

// const [isReadModalOpen, setIsReadModalOpen] = useState(false);
// const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
// const [modalTitle, setModalTitle] = useState("");
// const [modalContent, setModalContent] = useState(null);
// const [itemToEdit, setItemToEdit] = useState(null);

// const closeModals = () => {
//   setIsReadModalOpen(false);
//   setIsEditModalOpen(false);
//   setIsDeleteModalOpen(false);
// };

// const openReadModal = (title, content) => {
//   setModalTitle(title);
//   setModalContent(content);
//   setIsReadModalOpen(true);
// };

// const openEditModal = (title, content) => {
//   setModalTitle(title);
//   setModalContent(content);
//   setItemToEdit(content); // ذخیره داده برای ویرایش
//   setIsEditModalOpen(true);
// };

// const openDeleteModal = (title, content) => {
//   setModalTitle(title);
//   setModalContent(content);
//   setIsDeleteModalOpen(true);
// };

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const [accessLevel, gender] = await Promise.all([
//         axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getAccessLevelTypes"),
//         axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getGenderTypes"),
//       ]);

//       setData({
//         accessLevelTypes: accessLevel.data,
//         genderTypes: gender.data,
//       });
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

//   fetchData();
// }, []);

// const headers = ["id", "title"];

// const handleReadAccessLevel = (row) => {
//   openReadModal("Read Access Level", row);
// };

// const handleEditAccessLevel = (row) => {
//   openEditModal("Edit Access Level", row);
// };

// const handleDeleteAccessLevel = (row) => {
//   openDeleteModal("Delete Access Level", row);
// };

// const handleReadGender = (row) => {
//   openReadModal("Read Gender Type", row);
// };

// const handleEditGender = (row) => {
//   openEditModal("Edit Gender Type", row);
// };

// const handleDeleteGender = (row) => {
//   openDeleteModal("Delete Gender Type", row);
// };

// const sections = [
//   {
//     title: "سطوح دسترسی",
//     headers,
//     data: data.accessLevelTypes?.map(item => ({ ...item})) || [],
//     onRead: handleReadAccessLevel,
//     onEdit: handleEditAccessLevel,
//     onDelete: handleDeleteAccessLevel
//   },
//   {
//     title: "جنسیت",
//     headers:["id" ,"title"],
//     data: data.genderTypes?.map(item=>({...item})) || [],
//     onRead: handleReadGender,
//     onEdit: handleEditGender,
//     onDelete: handleDeleteGender
//   }
// ];
//    <Accordion sections={sections} />

// <ModalDelete
//   isOpen={isDeleteModalOpen}
//   // onClose={() => setIsDeleteModalOpen(false)}
//   onClose={closeModals}
//   title={modalTitle}
//   content={modalContent}
//   onConfirmDelete={() => {
//     console.log("Deleting Item:", modalContent);
//     // اضافه کردن عملکرد حذف اینجا
//     closeModals();
//   }}
// />
//     <ModalEdit
//   isOpen={isEditModalOpen}
//   onClose={closeModals}
//   title={modalTitle}
//   content={modalContent}
//   onConfirmEdit={() => {
//     console.log("Editing Item:", itemToEdit);
//     // اضافه کردن عملکرد ویرایش اینجا
//     closeModals();
//   }}
// />
//    <ModalInfo
//   isOpen={isReadModalOpen}
//   onClose={closeModals}
//   title={modalTitle}
//   content={modalContent}
// />
// import Accordion from "../../../component/accardion/Accardion";
// import Table from "../../../component/table/Table";
// import ModalEdit from "./Modal/ModalEdit";
// import ModalDelete from "./Modal/ModalDelete";
// import ModalInfo from "./Modal/ModalInfo";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../../component/input/Input";
import CircleLoader from "react-spinners/CircleLoader";
import Pagination from "../../component/Pagination/Pagition";
import ModalAdd from "./Modal/ModalAdd";
import ModalInfo from "./Modal/ModalInfo";
import deleteType from "../../../Api/BaseInfoApi/deleteType";
import ModalDelete from "./Modal/ModalDelete";
import ModalEdit from "./Modal/ModalEdit";

export const BaseInfoManagement = () => {
  const [managementType, setManagementType] = useState([]); // Data storage
  const [search, setSearch] = useState(""); // Search input value
  const [showBtn, setShowBtn] = useState(false);
  const [deleteType,setDelteType]=useState(false)
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true); // Loader state
  const [title, setTitle] = useState([]); // Table headers
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [totalPages, setTotalPages] = useState(0);
  const [addModal, setAddModal] = useState(false);
  const [click, setClick] = useState(false);
  const [sucessAdd,setSucessAdd]=useState(false)
  const dataPerPage = 5; // Items per page
  const [showDelteModal,setShowDelteModal]=useState(false)
  const[upadteModal,setUpdateModal]=useState(false)
  const[titleItem,setTitleItem]=useState(null)
  const[priority,setPriority]=useState(null)
  const[code,setCode]=useState(null)
  const[subType,setSubType]=useState(null)
  // Fetch Data from API
  console.log(sucessAdd);
  
  const fetchData = async (query = "", page = 1, id =null) => {
    setLoading(true);
    
    let api =
   
         click === false
          ? `http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypes`
          : `http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypes/${query}`
      ;
    if( addModal===true){
     api=`http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypes/${id}`
    }
 
    console.log(api);
    

    try {
      const response = await axios.get(api,{
        params: {
          search: query, 
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
        setManagementType([]); 
      }
      if(id){
        setManagementType(response.data);
      }
      setAddModal(false)
     
    } catch (error) {
      console.error("Error fetching data:", error);
      setManagementType([]);
    }
    setLoading(false);
  };
  const handleOpenModal = () => {
    // setAddModal(()=>et);
    setAddModal(true)

  };

  // Run when current page changes
  useEffect(() => {
    fetchData(search, currentPage, id);
    setAddModal()
  }, [currentPage, click, id,showDelteModal,sucessAdd]);

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
  const reLoadForce=()=>{
    setSucessAdd(prev=>!prev)
  }
  console.log(id);
  

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
              elem === "id" || elem === "title" || elem === "code" ? (
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
                    {elem.id}
                  </p>
                  <p className="text-black text-center text-[14px]">
                    {elem.title}
                  </p>
                  <p className="text-black text-center text-[14px]">
                    {elem.code}
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
                  onClick={()=>handleDelteModal(elem.id)}
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
          <div className="w-full p-3 bg-white">
            <button
              onClick={handleOpenModal}
              className="bg-green-600 text-white px-4 py-2 rounded-md w-fit block ml-auto"
            >
              اضافه کردن تایپ جدید
            </button>
          </div>

          {addModal && <ModalAdd options={managementType} addModal={addModal} setAddModal={setAddModal} reloadFn={reLoadForce} />}
          {id && <ModalInfo onClose={""} isOpen={id} title={title}  />}
          {showDelteModal===true?<ModalDelete showDelteModal={showDelteModal} showDelteModalFn={setShowDelteModal} id={id} reloadFn={reLoadForce}/>:""}
          {upadteModal&&<ModalEdit id={id} title={titleItem} priority={priority} subType={subType} code={code} settitileItem={setTitleItem} setPriority={setPriority} setSubType={setSubType} setCode={setCode} setId={setId} reloadFn={reLoadForce} />}
          
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircleLoader size={150} color="#2563eb" />
        </div>
      )}
    </>
  );
};

// export default BaseInfoManagement;
