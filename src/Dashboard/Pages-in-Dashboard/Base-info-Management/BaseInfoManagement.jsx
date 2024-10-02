import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "../../../component/accardion/Accardion";
export const BaseInfoManagement = () => {
  const [data, setData] = useState({
    accessLevelTypes: [],
    contentTypes: [],
    fileTypes: [],
    genderTypes: [],
    locationTypes: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accessLevel, content, file, gender, location] = await Promise.all([
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getAccessLevelTypes"),
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getContentTypes"),
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getFileTypes"),
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getGenderTypes"),
          axios.get("http://5.34.207.195:8080/icm/baseInfo/v1/getLocationTypes")
        ]);

        setData({
          accessLevelTypes: accessLevel.data,
          contentTypes: content.data,
          fileTypes: file.data,
          genderTypes: gender.data,
          locationTypes: location.data
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const headers = ["id", "title"]; 

  const sections = [
    { title: "سطوح دسترسی", headers, data: data.accessLevelTypes.map(item => ({ ...item, canEdit: true, canDelete: false })) },
    { title: "محتوای صفحات", headers, data: data.contentTypes },
    { title: "File Types", headers, data: data.fileTypes },
    { title: "جنسیت", headers, data: data.genderTypes },
    { title: "مکان", headers, data: data.locationTypes }
  ];
console.log({sections})
  return (
    <div className="container">
      <h1>Base Info Management</h1>
      <Accordion sections={sections} />
    </div>
  );
};

