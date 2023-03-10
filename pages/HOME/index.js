const home = () => {
    return (
        <div className="container w-full h-full">
            <div className="banner relative ">
                <div className="">
                    <img src="../home/banner.jpg"/>
                </div>
                <div className="absolute flex
                2xl:w-[390.33px] 2xl:h-[99.91px] 2xl:top-[16px] 2xl:left-[96px]
                w-[168.14px] h-[42.97px] top-[12px] left-[15px]">
                    <div className="2xl:shrink-0 2xl:w-[58px] 2xl:h-[83.91px] 2xl:mt-[16px] mt-[8px]">
                        <img src="../home/logo.png" className="2x:w-[58px] 2xl:h-[83.91px] 	"/>
                    </div>
                    <div className="2xl:mt-[16px] 2xl:h-[78.72px] mt-[8px] h-[33.85px] w-[0] bg-[#FFFFFF] 2x:border-[1.33333px] border-[0.57338px]
                        2xl:mx-[17.33px] mx-[7.4px]"></div>
                    <div className="2x:w-[297px]  2xl:h-[93.33px]">
                        <img src="../home/logo2.png" className=""/>
                    </div>
                </div>
                <div className="text-[#FFFFFF] absolute 
                2xl:text-2xl  2xl:top-[54px] 2xl:left-[1579px] 2xl:w-[245px]  2xl:tracking-[1.33px]
                w-[128px] tracking-[1px] text-xs top-[28px] left-[238px]">
                    LOGIN / REGISTER
                </div>
                <div className="absolute flex flex-col items-start  2xl:w-[1680px] 2xl:h-[309px]  2xl:top-[562px] 2xl:left-[120px]">
                <p className="text-[#FFFFFF] 2xl:text-[96px] text-[36px] 2xl:leading-[117px] font-bold	">Welcome To Academy Of Arts, Design & Strategy.</p> 
                <p className="text-[#FFFFFF] 2xl:text-[32px] 2xl:leading-[39px] text-[12px] font-medium	2xl:mt-[36px]">Empowering you to be changemakers through design.</p>
                </div>
            </div>

        <section className="2xl:flex bg-[#F0F0F0] 2xl:h-[392px]">
            <div className="2xl:pt-[86px] 2xl:px-[120px]">
                    <p className="text-[#A21436] 2xl:text-[28px] 2xl:leading-[40px] font-semibold">ABOUT US</p>
                    <p className="text-[#222127] 2xl:text-[56px] 2xl:leading-[68px] font-semibold 2xl:mt-[6px]">Who are we</p>
                    <p className="text-[#1A1A1D] 2xl:text-[24px] 2xl:leading-[48px] font-normal 2xl:mt-[10px]">We are an Advanced Tech design studio and Institution lead by the industry’s most respected “Good Design” Strategist, Inventors, UX Designers, Industrial Psychologists, Creative geniuses, story tellers, builders, makers, developers, visionaries and Researchers</p>
            </div>
        </section>

       {/*  <div className="2xl:flex bg-[#A21436] 2xl:w-full 2xl:h-[796.83px]">
          <div className="2xl:pt-[96px] 2xl:mx-[260px] 2xl:w-[1400px] 2xl:h-[604.83px] text-center ">
                    <p className="text-[#FFFFFF] 2xl:text-[56px] 2xl:leading-[68.26px] font-semibold 2xl:mt-[96px]">Our Alliances</p>
                    <p className="text-[#FFFFFF] 2xl:text-[24px] 2xl:leading-[48px] font-normal 2xl:mt-[6px] 2xl:mt-[10px]">
                        HFR&D, through its partnership and alliance with world renowned organizations, offers training and certification programmes to help you and your enterprise learn the latest design methods and processes</p>           
            
            <div className="2xl:w-[1226.67px] 2xl:h-[366.83px] 2xl:mt-[64px]">
                <div className="flex flex-row items-center 2xl:w-[1226.67px] 2xl:h-[148px] gap-[196px] ">
                    <img src="../home/Google_for_Startups_logo.png" className=""/>
                    <img src="../home/mural.png" className=""/>
                    <img src="../home/summit.png" className=""/>
                </div>
                <div className="flex flex-row items-center 2xl:w-[1118.67px] 2xl:h-[182.67px] 2xl:mt-[36px] 2xl:ml-[49px] gap-[140px] ">
                    <img src="../home/UX.png" className=""/>
                    <img src="../home/world.png" className=""/>
                    <img src="../home/MIT-Technology.png" className=""/>
                </div>
            </div>
          </div>
        </div>
 */}
        </div>
    )
}
export default home