"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import MainBanner from "../components/mainBanner";
import UploadFile from "../components/uploadFile";
import Cards from "../components/cards";
import Footer from "../components/footer";

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Navbar/>
      <MainBanner/>
      <UploadFile/>
      <Cards/>
      <Footer/>
    </>


  );
}
