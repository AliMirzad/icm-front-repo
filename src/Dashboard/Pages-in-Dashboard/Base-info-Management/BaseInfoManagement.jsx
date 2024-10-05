import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "../../../component/accardion/Accardion";
import Table from "../../../component/table/Table";
import ModalEdit from "./Modal/ModalEdit";
import ModalDelete from "./Modal/ModalDelete";
import ModalInfo from "./Modal/ModalInfo";
export const BaseInfoManagement = () => {
  const [data, setData] = useState({
    accessLevelTypes: [],
    genderTypes: [],
  });

  const [isReadModalOpen, setIsReadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null); 

  const closeModals = () => {
    setIsReadModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const openReadModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsReadModalOpen(true);
  };

  const openEditModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setItemToEdit(content); // ذخیره داده برای ویرایش
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsDeleteModalOpen(true);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accessLevel, gender] = await Promise.all([
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getAccessLevelTypes"),
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getGenderTypes"),
        ]);

        setData({
          accessLevelTypes: accessLevel.data,
          genderTypes: gender.data,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const headers = ["id", "title"]; 

  const handleReadAccessLevel = (row) => {
    openReadModal("Read Access Level", row);
  };

  const handleEditAccessLevel = (row) => {
    openEditModal("Edit Access Level", row);
  };

  const handleDeleteAccessLevel = (row) => {
    openDeleteModal("Delete Access Level", row);
  };

  const handleReadGender = (row) => {
    openReadModal("Read Gender Type", row);
  };

  const handleEditGender = (row) => {
    openEditModal("Edit Gender Type", row);
  };

  const handleDeleteGender = (row) => {
    openDeleteModal("Delete Gender Type", row);
  };


  const sections = [
    { 
      title: "سطوح دسترسی", 
      headers, 
      data: data.accessLevelTypes?.map(item => ({ ...item})) || [],
      onRead: handleReadAccessLevel,
      onEdit: handleEditAccessLevel,
      onDelete: handleDeleteAccessLevel
    },
    { 
      title: "جنسیت", 
      headers:["id" ,"title"], 
      data: data.genderTypes?.map(item=>({...item})) || [],
      onRead: handleReadGender,
      onEdit: handleEditGender,
      onDelete: handleDeleteGender
    }
  ];

  return (
    <div className="container text-center">
      <h1>مدیریت اطلاعات پایه</h1>
      <Accordion sections={sections} />
      
    
      <ModalDelete 
        isOpen={isDeleteModalOpen} 
        // onClose={() => setIsDeleteModalOpen(false)}
        onClose={closeModals}
        title={modalTitle} 
        content={modalContent} 
        onConfirmDelete={() => {
          console.log("Deleting Item:", modalContent);
          // اضافه کردن عملکرد حذف اینجا
          closeModals();
        }} 
      />
          <ModalEdit 
        isOpen={isEditModalOpen} 
        onClose={closeModals} 
        title={modalTitle} 
        content={modalContent} 
        onConfirmEdit={() => {
          console.log("Editing Item:", itemToEdit); 
          // اضافه کردن عملکرد ویرایش اینجا
          closeModals();
        }} 
      />
         <ModalInfo
        isOpen={isReadModalOpen} 
        onClose={closeModals} 
        title={modalTitle} 
        content={modalContent} 
      />
    </div>
  );
};
