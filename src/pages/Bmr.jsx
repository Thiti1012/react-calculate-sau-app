import React from 'react'
import bmr from "./../assets/bmr.png";
import { Link } from "react-router";
export default function Bmr() {
  return (
    <div>
      <div className="mt-10 mx-auto w-200  border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">
        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-bold font-kanit text-center mt-5">
          BMR Calculator
        </p>
        <p className="text-xl font-bold font-kanit text-center mt-1 text-gray-500">
          คำนวณBMR
        </p>

        {/* แสดงรูปภาพ */}
        <img src={bmr} alt="bmr" className="w35 mt-5" />

        {/* ส่วนของ Form ให้ผู้้ใช้กรอกข้อมูล */}
        <form className="w-full">
          <label className="font-bold font-kanit">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input
            type="number"
            name="id"
            className="border-2 w-full mb-2"
          ></input>

          <label className="font-bold font-kanit">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            name="id"
            className="border-2 w-full mb-2"
          ></input>

          <label className="font-bold font-kanit">
            ป้อนอายุ (ปี)
          </label>
          <input
            type="number"
            name="id"
            className="border-2 w-full mb-2"
          ></input>

          {/* ตัวเลือกเพศ */}
          <div className="mb-4">
            <label className="font-bold font-kanit block text-sm mb-2">เพศ:</label>
            <div className="flex flex-col gap-1 pl-2">
              <label className="inline-flex items-center gap-2 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="accent-gray-600"
                />
                ชาย
              </label>
              <label className="inline-flex items-center gap-2 font-kanit cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="accent-gray-600"
                />
                หญิง
              </label>
            </div>
          </div>

          <button className="mt-2 w-full cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 ">
            คํานวณ
          </button>

          <button className="mt-2 w-full cursor-pointer bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 ">
            ยกเลิก
          </button>
        </form>
        {/* ส่วนแสดงผล */}
        <div className='flex items-center justify-center gap-5'>
            <p className='font-kanit font-blod mt-5'>ค่า BMR ที่คำวนวณได้</p>
            <p className='font-kanit font-blod mt-5 text-blue-500'>0.00</p>
        </div>
        {/* ลิ้งกลับไปหน้า Home */}
        <Link to="/">
          <button className="mt-2 w-full cursor-pointer bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4 ">
            กลับไปหน้าหลัก
          </button>
        </Link>
      </div>
    </div>
  )
}
