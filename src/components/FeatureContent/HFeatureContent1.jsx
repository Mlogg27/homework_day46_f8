import Himg from "../Image/Himage.jsx"
import HInput from "../Input/Hinput.jsx"
import HButton from "../Button/HomePageButton.jsx"

function HFContent1 (){
    return (
        <div className="mt-[176px] flex justify-between mx-auto" style={{width: "1320px"}}>
            <div className="mt-[72px] flex flex-col gap-y-[16px]">
                <span className="text-[#263238] font-roboto font-semibold text-[var(--demos-creative-tim-com-outer-space)] text-[48px] leading-[60px] ">Welcome to my Web Development Portofolio!</span>
                <p className="text-[#9E9E9E] font-roboto font-normal text-[var(--demos-creative-tim-com-silver-chalice)] text-[20px] leading-[32.5px]">I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
                <label className="text-[#212121] font-medium text-[14px] leading-[21px] self-stretch">Your Email</label>
                <div className="flex gap-x-[23px]">
                    <HInput type={"email"} placeholder={'Enter Your Email'} className={"box-border flex justify-center items-start p-[24px_13px] flex-[1_0_0] self-stretch rounded-[6px] border border-solid border-[#B0BEC5] max-w-[454px] h-[14px] text-[#607D8B] text-[14px] font-normal leading-[57.4px] font-roboto outline-none"}/>
                    <HButton textBtn={"require offer"} className={"flex w-[144px] p-[14px_22.68px_14px_22.65px] flex-col justify-center items-center rounded-lg bg-[#212121] shadow-md text-white text-center font-roboto text-[12px] font-bold leading-[16px] uppercase"}/>
                </div>
                <span className="text-[#9E9E9E] font-roboto text-[14px] font-normal leading-[21px]">Read my <span className="text-[#9E9E9E] font-roboto text-[14px] font-medium leading-[21px] underline">Terms and Conditions</span></span>
            </div>
            <Himg link={"https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/image-7.svg"} className={"flex w-[640px] h-[640px] justify-center items-center flex-shrink-0 opacity-100"}/>
        </div>
    )
}

export default HFContent1