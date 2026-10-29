import React from "react";
import calculate from "./../assets/calculate.png";
import CardMenu from "./../components/CardMenu";
import bmi from "./../assets/bmi.png";
import bmr from "./../assets/bmr.png";
import car from "./../assets/car.png";
import Footer from "./../components/Footer";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* แสดงรูป */}
        <img src={calculate} alt="calculate" className="w30 mt-20" />

        {/* แสดงชื่อเว็บ */}
        <p className="fomt-kanit text-3xl font-bold mt-5">
          เครื่องคำนวณออนไลน์
        </p>
        <p className="font-itim text-xl text-gray-700">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>

        {/* แสดงเมนู 3 รายการ */}
        <div className="mt-10 flex gap-10 ">
          <Link to="/bmi">
          <CardMenu
            imgShow={bmi}
            titleShow="BMI (ดัชนีมวลกาย)"
            stitleShow="คำนวณว่าน้ำหนักส่วนสูงเหมาะสมหรือไม่"
          />
          </Link>
          <Link to="/bmr">
          <CardMenu
            imgShow={bmr}
            titleShow="BMR (อัตราการเผาผลาญ)"
            stitleShow="คำนวณอัตราการเผาผลาญที่ร่างกายต้องการ"
          />
          </Link>
          <Link to="/car">
          <CardMenu
            imgShow={car}
            titleShow="เงินผ่อนต่อเดือน"
            stitleShow="คำนวณเงินผ่อนรถยนต์ต่อเดือน"
          />
          </Link>
        </div>

        {/* แสดง Footer */}
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
