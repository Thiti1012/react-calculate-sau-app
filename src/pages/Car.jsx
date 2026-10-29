import React from 'react'
import car from "./../assets/car.png";
import { Link } from "react-router";

export default function Car() {
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
        <img src={car} alt="car" className="w35 mt-5" />

        {/* ส่วนของ Form ให้ผู้ใช้กรอกข้อมูล */}
        <form className="w-full">
          <label className="font-bold font-kanit">ชื่อผู้คำนวณ</label>
          <input
            type="text"
            name="name"
            className="border-2 w-full mb-2 p-1"
          />

          <label className="font-bold font-kanit">
            ราคารถ (บาท)
          </label>
          <input
            type="number"
            name="price"
            className="border-2 w-full mb-2 p-1"
          />

          <label className="font-bold font-kanit">
            ดอกเบี้ยต่อปี (%)
          </label>
          <input
            type="number"
            step="0.01"
            name="interest"
            className="border-2 w-full mb-2 p-1"
          />

          {/* ตัวเลือกเงินดาวน์ (%)*/}
          <div className="mb-4">
            <label className="font-bold font-kanit block mb-2">เงินดาวน์ (%):</label>
            <div className="flex gap-4 pl-2">
              <label className="inline-flex items-center gap-1 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="money"
                  value="15"
                  className="accent-gray-600"
                  defaultChecked
                />
                15%
              </label>
              <label className="inline-flex items-center gap-1 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="money"
                  value="20"
                  className="accent-gray-600"
                />
                20%
              </label>
              <label className="inline-flex items-center gap-1 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="money"
                  value="25"
                  className="accent-gray-600"
                />
                25%
              </label>
              <label className="inline-flex items-center gap-1 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="money"
                  value="30"
                  className="accent-gray-600"
                />
                30%
              </label>
              <label className="inline-flex items-center gap-1 font-kanit cursor-pointer text-sm">
                <input
                  type="radio"
                  name="money"
                  value="35"
                  className="accent-gray-600"
                />
                35%
              </label>
            </div>
          </div>

          {/* จำนวนเดือนที่ผ่อน */}
          <div className="mb-4">
            <label className="font-bold font-kanit block mb-1">
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              name="months"
              className="border-2 w-full p-2 rounded-md font-kanit bg-white cursor-pointer"
              defaultValue="24"
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          <button className="mt-2 w-full cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4">
            คำนวณ
          </button>

          <button type="button" className="mt-2 w-full cursor-pointer bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4">
            ยกเลิก
          </button>
        </form>

        {/* ส่วนแสดงผล */}
        <div className='flex items-center justify-center gap-5'>
            <p className='font-kanit font-bold mt-5'>ผ่อนชำระต่อเดือน: </p>
            <p className='font-kanit font-bold mt-5 text-blue-500'>0.00</p>
        </div>

        {/* ลิงก์กลับไปหน้า Home */}
        <Link to="/">
          <button className="mt-2 w-full cursor-pointer bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4">
            กลับไปหน้าหลัก
          </button>
        </Link>
      </div>
    </div>
  )
}