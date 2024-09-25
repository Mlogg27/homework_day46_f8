import Himg from "../Image/Himage.jsx"
import HInput from "../Input/Hinput.jsx"
import HButton from "../Button/HomePageButton.jsx"

function HFContent1 (){
    return (
        <div className="pt-[176px] flex justify-between" style={{width: "1320px"}}>
            <div>
                <span>Welcome to my Web Development Portofolio!</span>
                <p>I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
                <label>Your Email</label>
                <div className="form">
                    <HInput/>
                <   HButton/>
                </div>
                <span>Read my Terms and Conditions</span>
            </div>
            <Himg link={"https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/image-7.svg"} className={"flex w-[640px] h-[640px] justify-center items-center flex-shrink-0 opacity-100"}/>
        </div>
    )
}

export default HFContent1