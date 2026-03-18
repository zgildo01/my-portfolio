"use client";

export default function Footer() {
  return(
    <footer 
      className="font-UI" 
    >
      <div>
        &copy; {new Date().getFullYear()} Zeus Zaragoza-Gildo. All rights reserved.
      </div>
    </footer>
  );
}