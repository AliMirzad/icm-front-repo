import { useEffect, useState } from "react";
import Input from "../../../component/input/Input";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";
import ModalAddCompany from "./Modal/ModalAddCompany";
import ModalDeleteCompany from "./Modal/ModalDeleteCompany";
import getLocation from "../../../Api/CompanyApi/getLocation";
import ModalEditCompany from "./Modal/ModalEditCompany";
import ModalSub from "./Modal/ModalSub";
import getPlan from "../../../Api/CompanyApi/getPan";

const CompanyMang = () => {
  const [managementType, setManagementType] = useState([]); // Data storage
  const [search, setSearch] = useState(""); // Search input value
  const [showBtn, setShowBtn] = useState(false);
  const [deleteType, setDelteType] = useState(false);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true); // Loader state
  const [title, setTitle] = useState([]); // Table headers
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [totalPages, setTotalPages] = useState(0);
  const [addModal, setAddModal] = useState(false);
  const [click, setClick] = useState(false);
  const dataPerPage = 5; // Items per page
  const [showDelteCompanyModal, setShowDelteCompanyModal] = useState(false);
  const [upadteModal, setUpdateModal] = useState(false);
  const [subType, setSubType] = useState(null);
  const [allLocation, setAllLocation] = useState([]);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [locationFold, setlocationFold] = useState([]);
  const [address, setAddress] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [name, setName] = useState(null);
  const [plan, setPlan] = useState([]);
  // Fetch Dat
  // a from API
  const [subPlan, setSubPlan] = useState(false);
  console.log(locationFold);

  const fetchData = async (query = "", page = 1) => {
    setLoading(true);

    let api = click
      ? `http://5.34.206.81:8080/icm/exclusive/company/v1/getCompanyByCode/${query}`
      : `http://5.34.206.81:8080/icm/exclusive/company/v1/getAllCompany`;

    try {
      const response = await axios.get(api, {
        params: {
          search: query,
          pageNumber: page,
          pageSize: 5,
          sortBy: "id",
        },
      });

      if (response.data?.items?.length > 0) {
        setManagementType(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems / dataPerPage));
        setTitle(Object.keys(response.data.items[0]));
      } else {
        setManagementType([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setManagementType([]);
    }

    setLoading(false);
  };
  const fetchLocation = async (
    id,
    name,
    locationFold,
    exactLocation,
    postalCode,
    phone,
    email
  ) => {
    setId(id);
    setName(name);
    setAddress(exactLocation);
    setlocationFold(locationFold);
    setPostalCode(postalCode);
    setPhone(phone);
    setEmail(email);
  };
  const handleOpenModal = () => {
    // setAddModal(()=>et);
    setAddModal(true);
  };
  const handleShowBtn = async (id) => {
    const PlanFn = await getPlan();
    const res = await PlanFn.data.items;
    setPlan(res);
    setSubPlan(true);
    setId(id);
  };
  console.log("paln is " + plan);

  // Run when current page changes
  useEffect(() => {
    fetchData(search, currentPage, id);
    setAddModal();
  }, [currentPage, click, id, showDelteCompanyModal]);

  // Run when user searches
  const handleSearch = () => {
    setClick(true);
    setCurrentPage(1); // Reset to first page on search
    setId(null);
  };

  // Pagination handlers
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelteModal = async (id) => {
    setShowDelteCompanyModal(true);
    setId(id);
  };

  const handleShowById = (id) => {
    setId(id);
  };

  return (
    <>
      {!loading ? (
        <div className="container w-[90%] mx-auto text-center rounded-xl overflow-hidden shadow-xl">
          {/* Header Section */}
          <div className="w-full p-3 bg-white flex justify-between items-center">
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
              elem === "id" || elem === "name" || elem === "code" ? (
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
                    {elem.code}
                  </p>
                  <p className="text-black text-center text-[14px]">
                    {elem.name}
                  </p>
                  <button
                    className="bg-blue-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md"
                    onClick={() => handleShowBtn(elem.id)}
                  >
                    نمایش
                  </button>
                  <button
                    className="bg-yellow-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md"
                    onClick={() =>
                      fetchLocation(
                        elem.id,
                        elem.name,
                        elem.locationInfoId,
                        elem.exactLocation,
                        elem.postalCode,
                        elem.phone,
                        elem.email
                      )
                    }
                  >
                    ویرایش
                  </button>
                  <button
                    onClick={() => handleDelteModal(elem.id)}
                    className="bg-rose-600 w-[85px] mx-auto text-white px-4 py-2 rounded-md"
                  >
                    حذف
                  </button>
                </div>
              ))
            ) : (
              <h2>مقداری یافت نشد</h2>
            )}
          </div>

          {/* Pagination Component */}
          {/* <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageClick={handlePageClick}
            />
   */}
          {/* Add New Manager Button */}
          <div className="w-full p-3 bg-white">
            <button
              onClick={handleOpenModal}
              className="bg-green-600 text-white px-4 py-2 rounded-md w-fit block ml-auto"
            >
              اضافه کردن شرکت
            </button>
          </div>

          {addModal && (
            <ModalAddCompany
              options={managementType}
              addModal={addModal}
              setAddModal={setAddModal}
            />
          )}
          {/*{id && <ModalInfo onClose={""} isOpen={id} title={title}  />}
            settitileItem={setTitleItem} setPriority={setPriority} setSubType={setSubType} setCode={setCode} setId={setId} />} */}
          {showDelteCompanyModal === true ? (
            <ModalDeleteCompany
              showDelteModal={showDelteCompanyModal}
              showDelteModalFn={setShowDelteCompanyModal}
              id={id}
              // refreshData={() => fetchData(search, currentPage)}
            />
          ) : (
            ""
          )}
          {subPlan && (
            <ModalSub id={id} plan={plan} setAddModal={setAddModal} />
          )}
          {/* {upadteModal&&<ModalEditCompany id={id} name={name} phone={phone} email={email} locationFold={locationFold} address={address} postalCode={postalCode} />} */}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircleLoader size={150} color="#2563eb" />
        </div>
      )}
    </>
  );
};

export default CompanyMang;
