
import React, { useState } from "react";
import bmi from "./../assets/bmi.png";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Footer from "./../components/Footer";

export default function Bmi() {
  // สร้าง State สำหรับเก็บข้อมูล
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState("0.00");

  // ฟังก์ชันคำนวณ BMI
  const handleCalBmi = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (weight === "" || height === "") {
      Swal.fire({
        icon: "error",
        title: "กรุณากรอกข้อมูลให้ครบ",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // แปลงข้อมูลเป็นตัวเลข
    const w = Number(weight);
    const h = Number(height) / 100;

    // ตรวจสอบค่าที่กรอก
    if (w <= 0 || h <= 0) {
      Swal.fire({
        icon: "error",
        title: "กรุณากรอกค่ามากกว่า 0",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // คำนวณ BMI
    const result = w / (h * h);

    // อัปเดต State
    setBmiValue(result.toFixed(2));
  };

  // ฟังก์ชันล้างข้อมูล
  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmiValue("0.00");
  };

  return (
    <div>
      <div className="mt-10 mx-auto w-200 border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">

        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-bold font-kanit text-center mt-5">
          BMI (ดัชนีมวลกาย)
        </p>

        <p className="text-xl font-bold font-kanit text-center mt-1 text-gray-500">
          คำนวณดัชนีมวลกาย
        </p>

        {/* แสดงรูปภาพ */}
        <img src={bmi} alt="bmi" className="w-35 mt-5" />

        {/* Form */}
        <form className="w-full" onSubmit={handleCalBmi}>

          <label className="font-bold font-kanit">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>

          <input
            type="number"
            step="any"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border-2 w-full mb-2"
          />

          <label className="font-bold font-kanit">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>

          <input
            type="number"
            step="any"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border-2 w-full mb-2"
          />

          <button
            type="submit"
            className="mt-2 w-full cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4"
          >
            คำนวณ
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="mt-2 w-full cursor-pointer bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4"
          >
            ยกเลิก
          </button>

        </form>

        {/* แสดงผล BMI */}
        <div className="flex items-center justify-center gap-5">
          <p className="font-kanit font-bold mt-5">
            ค่า BMI ที่คำนวณได้
          </p>

          <p className="font-kanit font-bold mt-5 text-blue-500">
            {bmiValue}
          </p>
        </div>

        {/* กลับหน้า Home */}
        <Link to="/">
          <button className="mt-2 w-full cursor-pointer bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4">
            กลับไปหน้าหลัก
          </button>
        </Link>

      </div>
      {/* แสดง Footer */}
        <Footer />
    </div>
  );
}
