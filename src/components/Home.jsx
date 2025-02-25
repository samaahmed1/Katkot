import Button from "./Button";
import { useState } from "react";
import chickAfter from "/src/images/chick-after.webp";
import chickBefore from "/src/images/chick-before.webp";

function Home() {
  const [change, setChange] = useState(false);
  const [message , setMessage] = useState("")
  const toggleImage = () => {
    setChange(change ? false : true);
    setMessage (message ? "" : "أشطر كتكوت")
  };

  return (
    <section>
      <div className="container px-5 mx-auto flex justify-center items-center flex-col h-screen bg-black">
        <p className="text-[#fcbd02] text-5xl font-extrabold mb-4 animate-bounce">{message}</p>
        <img className="w-64 h-72" src={change ? chickAfter : chickBefore} alt="chick" />
        <Button onClick={toggleImage} />
      </div>
    </section>
  );
}
export default Home;
