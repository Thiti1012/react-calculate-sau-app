
import React, { useState } from "react";
import car from "./../assets/car.png";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function Car() {
  // สร้าง State สำหรับเก็บข้อมูล
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [money, setMoney] = useState("15");
  const [months, setMonths] = useState("24");
  const [carValue, setCarValue] = useState("0.00");

  // ฟังก์ชันคำนวณค่างวดรถ
  const handleCalCar = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (
      name.trim() === "" ||
      price === "" ||
      interest === ""
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
    const p = Number(price);
    const i = Number(interest);
    const m = Number(money);
    const n = Number(months);

    // ตรวจสอบค่าที่กรอก
    if (
      !Number.isFinite(p) ||
      !Number.isFinite(i) ||
      p <= 0 ||
      i < 0
    ) {
      Swal.fire({
        icon: "error",
        title: "กรุณากรอกข้อมูลให้ถูกต้อง",
        text: "ราคารถต้องมากกว่า 0 และดอกเบี้ยต้องไม่ติดลบ",
      });
      return;
    }

    // คำนวณเงินดาวน์
    const downPayment = p * (m / 100);

    // คำนวณยอดจัดไฟแนนซ์
    const finance = p - downPayment;

    // คำนวณดอกเบี้ยรวมแบบ Flat Rate
    const totalInterest = finance * (i / 100) * (n / 12);

    // คำนวณค่างวดต่อเดือน
    const result = (finance + totalInterest) / n;

    // อัปเดต State
    setCarValue(result.toFixed(2));
  };

  // ฟังก์ชันล้างข้อมูล
  const handleReset = () => {
    setName("");
    setPrice("");
    setInterest("");
    setMoney("15");
    setMonths("24");
    setCarValue("0.00");
  };

  return (
    <div>
      <div className="mt-10 mx-auto w-200 border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">

        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-bold font-kanit text-center mt-5">
          Car Installment Calculator
        </p>

        <p className="text-xl font-bold font-kanit text-center mt-1 text-gray-500">
          คำนวณ Car Installment
        </p>

        {/* แสดงรูปภาพ */}
        <img src={car} alt="car" className="w-35 mt-5" />

        {/* Form */}
        <form className="w-full" onSubmit={handleCalCar}>

          <label className="font-bold font-kanit">
            ชื่อผู้คำนวณ
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 w-full mb-2 p-1"
          />

          <label className="font-bold font-kanit">
            ราคารถ (บาท)
          </label>
          <input
            type="number"
            name="price"
            step="any"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 w-full mb-2 p-1"
          />

          <label className="font-bold font-kanit">
            ดอกเบี้ยต่อปี (%)
          </label>
          <input
            type="number"
            step="0.01"
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="border-2 w-full mb-2 p-1"
          />

          {/* ตัวเลือกเงินดาวน์ */}
          <div className="mb-4">
            <label className="font-bold font-kanit block mb-2">
              เงินดาวน์ (%):
            </label>

            <div className="flex gap-4 pl-2">
              {[15, 20, 25, 30, 35].map((value) => (
                <label
                  key={value}
                  className="inline-flex items-center gap-1 font-kanit cursor-pointer text-sm"
                >
                  <input
                    type="radio"
                    name="money"
                    value={value}
                    checked={money === String(value)}
                    onChange={(e) => setMoney(e.target.value)}
                    className="accent-gray-600"
                  />
                  {value}%
                </label>
              ))}
            </div>
          </div>

          {/* จำนวนเดือนที่ผ่อน */}
          <div className="mb-4">
            <label className="font-bold font-kanit block mb-1">
              จำนวนเดือนที่ผ่อน
            </label>

            <select
              name="months"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="border-2 w-full p-2 rounded-md font-kanit bg-white cursor-pointer"
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
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
            ผ่อนชำระต่อเดือน:
          </p>

          <p className="font-kanit font-bold mt-5 text-blue-500">
            {carValue} บาท
          </p>
        </div>

        {/* ลิงก์กลับหน้า Home */}
        <Link to="/">
          <button className="mt-2 w-full cursor-pointer bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4">
            กลับไปหน้าหลัก
          </button>
        </Link>

      </div>
    </div>
  );
}
