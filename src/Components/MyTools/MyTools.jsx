import React from "react";
import "./MyTools.scss";
import { MdOutlineChat } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { BsJournalCheck } from "react-icons/bs";
import { MdChecklist } from "react-icons/md";


const tools = [
  { icon: <MdOutlineChat size={22} color="#1e88ff"/>, label: "Chatbotu başlat" },
  { icon: <SlEarphones size={22} color="#1e88ff"/>, label: "VR sessiyasını başlat" },
  { icon: <BsJournalCheck size={22} color="#1e88ff"/>, label: "Jurnalı aç" },
  { icon: <MdChecklist size={22} color="#1e88ff"/>, label: "Məqsədlərim" },
];

const MyTools = () => {
  return (
    <div className="my-tools-card">
      <h2>Alətlər</h2>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-box">
            <div className="icon">{tool.icon}</div>
            <span>{tool.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTools;
