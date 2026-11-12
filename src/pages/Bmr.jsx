
import React, { useState } from "react";
import bmr from "./../assets/bmr.png";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Footer from "./../components/Footer";

export default function Bmr() {
  // สร้าง State สำหรับเก็บข้อมูล
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmrValue, setBmrValue] = useState("0.00");

  // ฟังก์ชันคำนวณ BMR
  const handleCalBmr = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล 
    if (
      weight === "" ||
      height === "" ||
      age === "" ||
      gender === ""
    ) {
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
    const h = Number(height);
    const a = Number(age);

    // ตรวจสอบค่าที่กรอก
    if (w <= 0 || h <= 0 || a <= 0) {
      Swal.fire({
        icon: "error",
        title: "กรุณากรอกค่ามากกว่า 0",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // คำนวณ BMR
    let result = 0;

    if (gender === "male") {
      result = 10 * w + 6.25 * h - 5 * a + 5;
    } else if (gender === "female") {
      result = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // อัปเดต State
    setBmrValue(result.toFixed(2));
  };

  // ฟังก์ชันล้างข้อมูล
  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
    setBmrValue("0.00");
  };

  return (
    <div>
      <div className="mt-10 mx-auto w-200 border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">

        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-bold font-kanit text-center mt-5">
          BMR Calculator
        </p>

        <p className="text-xl font-bold font-kanit text-center mt-1 text-gray-500">
          คำนวณ BMR
        </p>

        {/* แสดงรูปภาพ */}
        <img src={bmr} alt="bmr" className="w-35 mt-5" />

        {/* Form */}
        <form className="w-full" onSubmit={handleCalBmr}>

          <label className="font-bold font-kanit">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            step="any"
            placeholder="น้ำหนัก"
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
            placeholder="ส่วนสูง"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border-2 w-full mb-2"
          />

          <label className="font-bold font-kanit">
            ป้อนอายุ (ปี)
          </label>
          <input
            type="number"
            placeholder="อายุ"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-2 w-full mb-2"
          />

          {/* ตัวเลือกเพศ */}
          <div className="mb-4">
            <label className="font-bold font-kanit block text-sm mb-2">
              เพศ:
            </label>

            <div className="flex flex-col gap-1 pl-2">

              <label className="inline-flex items-center gap-2 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="accent-gray-600"
                />
                ชาย
              </label>

              <label className="inline-flex items-center gap-2 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="accent-gray-600"
                />
                หญิง
              </label>

            </div>
          </div>

          {/* ปุ่มคำนวณ */}
          <button
            type="submit"
            className="mt-2 w-full cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4"
          >
            คำนวณ
          </button>

          {/* ปุ่มยกเลิก */}
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 w-full cursor-pointer bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4"
          >
            ยกเลิก
          </button>

        </form>

        {/* ส่วนแสดงผล */}
        <div className="flex items-center justify-center gap-5">
          <p className="font-kanit font-bold mt-5">
            ค่า BMR ที่คำนวณได้
          </p>

          <p className="font-kanit font-bold mt-5 text-blue-500">
            {bmrValue}
          </p>
        </div>

        {/* ลิงก์กลับหน้า Home */}
        <Link to="/">
          <button className="mt-2 w-full cursor-pointer bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4">
            กลับไปหน้าหลัก
          </button>
        </Link>

      </div>
      <Footer />
    </div>
  );
}
