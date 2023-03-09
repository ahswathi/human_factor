const Contact = () => {
  return (
    <div className="main relative bg-[#FFFFFF] relative w-[375px] 2xl:w-[1920px] h-[1618.5px] 2xl:w-[1665px] ">
        <img src="image.jpg" className=" 2xl:w-[960px] 2xl:h-[1080px]"/>
        <div className="absolute top-[123px] w-[289px] h-[76px] left-[43px] flex items-center  text-[32px]
        2xl:w-[577px]  2xl:h-[154px]  2xl:top-[212px]  2xl:left-[160px] 2xl:text-[64px] 2xl:leading-[77px] 2xl:font-medium ">Create Experiences That Matters!</div>
        
        <div className="w-[375px] h-[483px]">
        <div className="absolute w-[220px] h-[22px]  flex items-center text-[18px] leading-[43.2px]
        text-[#1A1A1A] 2xl:font-medium	mt-[36px] pl-[18px]
        2xl:w-[227px] 2xl:h-[43px] 2xl:top-[246px] 2xl:left-[1021px] flex items-center 2xl:text-[36px] 2xl:leading-[43.2px]">
          Let’s Talk</div>
        <div className="absolute left-[-70px] top-[484px] w-[214px] h-[2px] border-[#1A1A1A] 2xl:border-t-[5px]  2xl:top-[330px] 2xl:left-[820px] border-t-[2.5px] mt-[6px]
        2xl:w-[428px] 2xl:h-[4px]"></div>
        
            <div className="absolute form w-[330px] h-[467px] mt-[42px] left-[18px] top-[460px]
             2xl:w-[684px] 2xl:h-[363px] 2xl:top-[331px] 2xl:left-[1076px]">
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  	
                top-[0] left-[0] border-b-[1.5px]	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">NAME</label>
                  </div>  
                  <div className="">
                    <input type="text"  placeholder='Enter your name' className="text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  	
                top-[84px] left-[0] border-b-[1.5px]  2xl:top-[0] 2xl:left-[354px] 	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">EMAIL</label>
                  </div>  
                  <div className="">
                    <input type="text"  placeholder='Enter your email address' className="text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  	
                top-[168px] left-[0] border-b-[1.5px]	  2xl:top-[105px] 2xl:left-[0]">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">COMPANY</label>
                  </div>  
                  <div className="">
                    <input type="text"  placeholder='Enter your company name' className="text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  	
                top-[252px] left-[0] border-b-[1.5px]  2xl:top-[105px] 2xl:left-[354px]	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">HOW CAN WE HELP YOU?</label>
                  </div>  
                  <div className="">
                  <select  className="text-base w-[330px] text-[#767676] leading-[21.6px] font-normal	">
                      <option value="option" className="text-base w-[330px] text-[#767676] leading-[21.6px] font-normal	">Choose from options</option>
                      <option value="option">option</option>
                    </select>
                  </div>
                </div>
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  2xl:w-[684px] 2xl:h-[61px] 	
                top-[336px] left-[0] border-b-[1.5px]	 2xl:top-[210px] 2xl:left-[0]">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">MESSAGE</label>
                  </div>  
                  <div className="">
                    <input type="text"  placeholder='Write your message here' className="text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>
                <div className="button-wrap absolute w-[106px] h-[42px] gap-[32px] border-[#0146EE] border-[1px] rounded-[375px]
            flex flex-row items-center	top-[425px]  gap-[24px] px-[7.5px] py-[15px]
            2xl:w-[141px] 2xl:h-[56px] 2xl:gap-[32px] 	2xl:top-[307px] 2xl:left-[543px] 2xl:right-[160px] 2xl:gap-[32px] 2xl:px-[20px] 2xl:py-[10px]">
                    <button className="flex flex-col items-center  gap-[24px] pl-[16px] py-[16px] text-[15px] text-[#0146EE] font-medium tracking-[.75px]
                    2xl:gap-[24px] 2xl:pl-[12px] 2xl:py-[16px] 2xl:text-[20px] 2xl:tracking-[1px]">Submit</button>
            </div>
        </div> 
        </div>

          <div className="absolute  w-[220px] h-[50px] 	top-[515px] left-[18px]
          2xl:w-[440px] 2xl:h-[98px] 	2xl:top-[805px] 2xl:left-[1076px]">
            <div className="absolute w-[220px] h-[22px] top-[515px] 2xl:w-[440px] 2xl:h-[43px] flex items-center 2xl:text-[32px] text-[#1A1A1A] opacity-[.6]
            font-medium 2xl:text-[32px] 2xl:top-[5px] 2xl:leading-[21.6px]">
            Or Email Us At
            </div>
              <div className="absolute  w-[189px] h-[24px]  top-[541px] 2xl:w-[378px] 2xl:h-[48px] flex flex-row items-center 	2xl:top-[50px] text-[#1A1A1A]">
                <div className=" 2xl:w-[48px] 2xl:h-[48px]">  <svg  className="absolute w-[18.49px] h-[18.49px] 2xl:w-[36.97px] 2xl:h-[36.979px] top-[5.51px] left-[5.51px]" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.18 21.82C17 22.6 17 23.88 16.18 24.66C15.4 25.44 14.12 25.44 13.34 24.66C11.4668 22.784 10.4146 20.2412 10.4146 17.59C10.4146 14.9389 11.4668 12.3961 13.34 10.52L20.42 3.44003C22.2961 1.56679 24.8389 0.514648 27.49 0.514648C30.1412 0.514648 32.684 1.56679 34.56 3.44003C36.4333 5.31609 37.4854 7.85888 37.4854 10.51C37.4854 13.1612 36.4333 15.704 34.56 17.58L31.58 20.56C31.6 18.92 31.34 17.28 30.78 15.72L31.72 14.76C32.2807 14.2054 32.7258 13.5451 33.0296 12.8173C33.3334 12.0895 33.4898 11.3087 33.4898 10.52C33.4898 9.73138 33.3334 8.95057 33.0296 8.22277C32.7258 7.49498 32.2807 6.83466 31.72 6.28003C31.1654 5.71936 30.5051 5.27425 29.7773 4.97047C29.0495 4.66669 28.2687 4.51028 27.48 4.51028C26.6914 4.51028 25.9106 4.66669 25.1828 4.97047C24.455 5.27425 23.7947 5.71936 23.24 6.28003L16.18 13.34C15.6194 13.8947 15.1742 14.555 14.8705 15.2828C14.5667 16.0106 14.4103 16.7914 14.4103 17.58C14.4103 18.3687 14.5667 19.1495 14.8705 19.8773C15.1742 20.6051 15.6194 21.2654 16.18 21.82ZM21.82 13.34C22.6 12.56 23.88 12.56 24.66 13.34C26.5333 15.2161 27.5854 17.7589 27.5854 20.41C27.5854 23.0612 26.5333 25.604 24.66 27.48L17.58 34.56C15.704 36.4333 13.1612 37.4854 10.51 37.4854C7.85888 37.4854 5.31609 36.4333 3.44003 34.56C1.56679 32.684 0.514648 30.1412 0.514648 27.49C0.514648 24.8389 1.56679 22.2961 3.44003 20.42L6.42003 17.44C6.40003 19.08 6.66003 20.72 7.22003 22.3L6.28003 23.24C5.71936 23.7947 5.27425 24.455 4.97047 25.1828C4.66669 25.9106 4.51028 26.6914 4.51028 27.48C4.51028 28.2687 4.66669 29.0495 4.97047 29.7773C5.27425 30.5051 5.71936 31.1654 6.28003 31.72C6.83466 32.2807 7.49498 32.7258 8.22277 33.0296C8.95057 33.3334 9.73138 33.4898 10.52 33.4898C11.3087 33.4898 12.0895 33.3334 12.8173 33.0296C13.5451 32.7258 14.2054 32.2807 14.76 31.72L21.82 24.66C22.3807 24.1054 22.8258 23.4451 23.1296 22.7173C23.4334 21.9895 23.5898 21.2087 23.5898 20.42C23.5898 19.6314 23.4334 18.8506 23.1296 18.1228C22.8258 17.395 22.3807 16.7347 21.82 16.18C21.6258 15.998 21.471 15.7781 21.3651 15.5338C21.2593 15.2896 21.2046 15.0262 21.2046 14.76C21.2046 14.4938 21.2593 14.2305 21.3651 13.9862C21.471 13.742 21.6258 13.522 21.82 13.34Z" fill="#1A1A1A"/>
                  </svg>
                </div>
                <div className="absolute left-[27px] 2xl:text-[32px] font-medium 2xl:top-[2.5px] 2xl:left-[54px]" >contact@hfrnd.com</div>
              </div>
         </div>
     

         <div className="absolute w-[339px] h-[93.74px] top-[1218px] left-[18px]
          2xl:w-[900.51px] 2xl:h-[249.02px] 2xl:top-[962px]  2xl:left-[989.75px]">
         <img src="Group.svg"/>
        </div> 
      
        
   </div>
  )
}

export default Contact