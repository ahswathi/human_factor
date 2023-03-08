const Contact = () => {
  return (
    <div className="main bg-[#FFFFFF] relative w-[1920px] h-[1665px]">
      <div className="hero w-[960px] h-[1080px]">
        <div className="absolute top-0	left-0"><img src="image.jpg" /></div>
        <div className="absolute w-[577px] h-[154px] top-[212px] left-[160px] flex items-center text-[64px] leading-[77px]
        text-[#1A1A1A] font-medium	">Create Experiences That Matters!</div>
      
      
        <div className="absolute w-[227px] h-[43px] top-[246px] left-[1021px] flex items-center text-[36px] leading-[43.2px]
        text-[#1A1A1A] font-medium	" >Let’s Connect</div>
        <div className="absolute w-[428px] h-[4px] top-[300px] left-[820px] border-[#1A1A1A] border-t-[5px]"></div>

      <div className="form-wrap absolute w-[684px] h-[363px] top-[331px] left-[1076px] ">
        <div className="form absolute  flex flex-col items-start  gap-0.5 w-[684px] h-[271px] top-[0] left-[0]">
                
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
                top-[105px] left-[0] border-b-[1.5px]	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">COMPANY</label>
                  </div>  
                  <div className="w-[330px]">
                    <input type="text"  placeholder='Enter your company name' className="w-[185px] text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>
                
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  	
                top-[0] left-[354px] border-b-[1.5px]	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">EMAIL</label>
                  </div>  
                  <div className="">
                    <input type="text"  placeholder='Enter your email address' className="text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>
                
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[330px] h-[61px]  	
                top-[105px] left-[354px] border-b-[1.5px]	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">HOW CAN WE HELP YOU?</label>
                  </div>  
                  <div className="w-[330px] text-base w-[330px] text-[#767676] leading-[21.6px] font-normal	">
                    <select  className="text-base w-[330px] text-[#767676] leading-[21.6px] font-normal	">
                      <option value="option" className="text-base w-[330px] text-[#767676] leading-[21.6px] font-normal	">Choose from options</option>
                      <option value="option">option</option>
                    </select>
                  </div>
                </div>
                
                <div className="input-wrap absolute flex flex-col items-start gap-[2px] w-[684px] h-[61px]  	
                top-[210px] left-[0] border-b-[1.5px]	">
                  <div className="">
                    <label className="text-sm text-[#1A1A1A] leading-[15.4px] font-medium tracking-[.5px]">MESSAGE</label>
                  </div>  
                  <div className="">
                    <input type="text"  placeholder='Write your message here' className="text-base text-[#767676] leading-[21.6px] font-normal	"/>
                  </div>
                </div>

                
              </div>
            
            <div className="button-wrap absolute w-[141px] h-[56px] gap-[32px] border-[#0146EE] border-[1px] rounded-[500px]
            flex flex-row items-center	top-[307px] left-[543px] right-[160px] gap-[32px] px-[20px] py-[10px]">
                    <button className="flex flex-col items-center  gap-[24px] pl-[12px] py-[16px] text-[20px] text-[#0146EE] font-medium tracking-[1px]">Submit</button>
            </div>
      </div>  


         
         <div className="absolute w-[440px] h-[98px] 	top-[805px] left-[1076px]">
            <div className="absolute w-[440px] h-[43px] flex items-center text-[32px] text-[#1A1A1A] opacity-[.6]
            font-medium text-[32px]">
            Or Email Us At
            </div>
              <div className="absolute w-[378px] h-[48px] flex flex-row items-center 	top-[50px] text-[#1A1A1A]">
                <div className="w-[48px] h-[48px]">  <svg width="36.97px" height="36.97px" className="absolute top-[5.51px] left-[5.51px]" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.18 21.82C17 22.6 17 23.88 16.18 24.66C15.4 25.44 14.12 25.44 13.34 24.66C11.4668 22.784 10.4146 20.2412 10.4146 17.59C10.4146 14.9389 11.4668 12.3961 13.34 10.52L20.42 3.44003C22.2961 1.56679 24.8389 0.514648 27.49 0.514648C30.1412 0.514648 32.684 1.56679 34.56 3.44003C36.4333 5.31609 37.4854 7.85888 37.4854 10.51C37.4854 13.1612 36.4333 15.704 34.56 17.58L31.58 20.56C31.6 18.92 31.34 17.28 30.78 15.72L31.72 14.76C32.2807 14.2054 32.7258 13.5451 33.0296 12.8173C33.3334 12.0895 33.4898 11.3087 33.4898 10.52C33.4898 9.73138 33.3334 8.95057 33.0296 8.22277C32.7258 7.49498 32.2807 6.83466 31.72 6.28003C31.1654 5.71936 30.5051 5.27425 29.7773 4.97047C29.0495 4.66669 28.2687 4.51028 27.48 4.51028C26.6914 4.51028 25.9106 4.66669 25.1828 4.97047C24.455 5.27425 23.7947 5.71936 23.24 6.28003L16.18 13.34C15.6194 13.8947 15.1742 14.555 14.8705 15.2828C14.5667 16.0106 14.4103 16.7914 14.4103 17.58C14.4103 18.3687 14.5667 19.1495 14.8705 19.8773C15.1742 20.6051 15.6194 21.2654 16.18 21.82ZM21.82 13.34C22.6 12.56 23.88 12.56 24.66 13.34C26.5333 15.2161 27.5854 17.7589 27.5854 20.41C27.5854 23.0612 26.5333 25.604 24.66 27.48L17.58 34.56C15.704 36.4333 13.1612 37.4854 10.51 37.4854C7.85888 37.4854 5.31609 36.4333 3.44003 34.56C1.56679 32.684 0.514648 30.1412 0.514648 27.49C0.514648 24.8389 1.56679 22.2961 3.44003 20.42L6.42003 17.44C6.40003 19.08 6.66003 20.72 7.22003 22.3L6.28003 23.24C5.71936 23.7947 5.27425 24.455 4.97047 25.1828C4.66669 25.9106 4.51028 26.6914 4.51028 27.48C4.51028 28.2687 4.66669 29.0495 4.97047 29.7773C5.27425 30.5051 5.71936 31.1654 6.28003 31.72C6.83466 32.2807 7.49498 32.7258 8.22277 33.0296C8.95057 33.3334 9.73138 33.4898 10.52 33.4898C11.3087 33.4898 12.0895 33.3334 12.8173 33.0296C13.5451 32.7258 14.2054 32.2807 14.76 31.72L21.82 24.66C22.3807 24.1054 22.8258 23.4451 23.1296 22.7173C23.4334 21.9895 23.5898 21.2087 23.5898 20.42C23.5898 19.6314 23.4334 18.8506 23.1296 18.1228C22.8258 17.395 22.3807 16.7347 21.82 16.18C21.6258 15.998 21.471 15.7781 21.3651 15.5338C21.2593 15.2896 21.2046 15.0262 21.2046 14.76C21.2046 14.4938 21.2593 14.2305 21.3651 13.9862C21.471 13.742 21.6258 13.522 21.82 13.34Z" fill="#1A1A1A"/>
                  </svg>
                </div>
                <div className="absolute text-[32px] font-medium top-[2.5px] left-[54px]" >contact@hfrnd.com</div>
              </div>
         </div>
     

         <div className="absolute w-[900.51px] h-[249.02px] top-[962px]  left-[989.75px]">
         <img src="Group.svg"/>
        </div> 
 </div>

      <div className="footer-wrap flex flex-row items-center justify-center px-[64px]  py-[120px] w-[1920px] h-[585px] bg-[#1A1A1A]">
        <div className="footer w-[1680px] h-[457px]  flex flex-col gap-[24px] items-center top-[64px]">
        <div className=" w-[1680px] h-[418px]  flex flex-col gap-[72px] items-center">
        <div className="border-[#F7F7F7] w-[1680px] border-[1px] "></div>
           <div className="footer-inside w-[1600px] h-[274px]  gap-[712px] flex flex-row items-start justify-space-between">
             
              <div className="col11 relative w-[440px] h-[274px]  flex flex-col gap-[24px] items-start">
              <div className="col1a  w-[209px] h-[84px]  ">
                <div className="w-[209px] h-[58px]  ">
                <svg width="210" height="58" viewBox="0 0 210 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M151.881 40.9079C151.677 40.8184 151.46 40.7162 151.256 40.6011C150.441 40.1409 149.422 39.2844 148.212 38.006C147.409 37.2645 146.823 36.7916 146.492 36.6126C146.123 36.408 145.753 36.3058 145.371 36.3058C145.167 36.3058 144.951 36.3313 144.747 36.3825C144.136 36.5487 143.69 36.9194 143.384 37.4563C143.155 37.827 143.053 38.1978 143.053 38.5685C143.053 38.773 143.091 38.9904 143.155 39.2077C143.32 39.8213 143.652 40.256 144.148 40.5372C144.467 40.7034 144.913 40.7929 145.46 40.7929C145.779 40.7929 146.11 40.7673 146.505 40.7162L146.276 42.7999C145.843 42.915 145.435 42.9789 145.015 42.9789C144.339 42.9789 143.69 42.7999 143.04 42.442C142.021 41.8795 141.359 40.9974 141.053 39.7957C140.925 39.3739 140.862 38.9648 140.862 38.5813C140.862 37.8398 141.078 37.1111 141.473 36.3953C142.11 35.3086 143.002 34.6055 144.187 34.2859C144.607 34.1709 145.027 34.107 145.422 34.107C146.161 34.107 146.887 34.3115 147.588 34.7078C148.263 35.0785 149.142 35.8328 150.225 36.9705C151.193 37.8654 151.906 38.4407 152.377 38.6963C152.874 38.9904 153.409 39.131 153.944 39.131C154.237 39.131 154.543 39.0926 154.861 39.0032C155.74 38.7603 156.403 38.2489 156.849 37.4563C157.142 36.9322 157.294 36.3953 157.294 35.8583C157.294 35.5643 157.243 35.2703 157.167 34.9635C156.938 34.107 156.415 33.4422 155.638 32.982C155.167 32.7135 154.632 32.5729 154.046 32.5729C153.613 32.5729 153.18 32.6368 152.683 32.7774L152.658 30.5147C153.129 30.3869 153.588 30.3102 154.072 30.3102C154.963 30.3102 155.842 30.5531 156.696 31.0516C158.021 31.7931 158.887 32.9053 159.294 34.3754C159.422 34.8868 159.498 35.3853 159.498 35.8583C159.498 36.7916 159.243 37.6736 158.747 38.5301C158.021 39.8469 156.9 40.7162 155.409 41.1252C154.976 41.2403 154.556 41.317 154.148 41.3298C153.588 43.1579 152.568 44.807 151.116 46.2643C148.772 48.6293 145.944 49.831 142.645 49.831C139.333 49.831 136.505 48.6549 134.149 46.3027C131.805 43.9505 130.633 41.0997 130.633 37.7631C130.633 34.4393 131.792 31.5374 134.11 29.0702C135.69 27.3571 137.766 26.0788 140.289 25.235C139.066 24.7109 137.817 23.7649 136.556 22.397C135.27 21.0292 134.633 19.15 134.633 16.7722C134.633 14.4327 135.473 12.4129 137.142 10.7382C138.811 9.05077 140.849 8.20703 143.218 8.20703C145.588 8.20703 147.613 9.05076 149.295 10.7254C150.225 11.6331 150.862 12.6302 151.218 13.7552L149.167 14.5734C148.849 13.7424 148.365 12.9754 147.664 12.2851C146.429 11.0578 144.951 10.457 143.206 10.457C141.473 10.457 139.983 11.0706 138.747 12.2979C137.524 13.5251 136.9 15.0208 136.9 16.785C136.9 18.5363 137.499 20.0448 138.684 21.3104C139.868 22.5888 140.976 23.407 141.996 23.8033C143.002 24.1995 144.276 24.4041 145.792 24.4169V26.5645L143.957 26.6157C140.263 27.306 137.486 28.6739 135.626 30.7065C133.766 32.7391 132.837 35.1041 132.837 37.8015C132.837 40.5116 133.779 42.8255 135.703 44.7431C137.613 46.6606 139.906 47.6194 142.62 47.6194C145.295 47.6194 147.6 46.6606 149.511 44.7431C150.632 43.567 151.409 42.3014 151.881 40.9079Z" fill="white"/>
<path d="M8.8405 22.9469H33.6168V0H42.4446V57.9872H33.6168V31.2947H8.8405V57.9872H0V0H8.8405V22.9469Z" fill="white"/>
<path d="M81.7688 8.3478H56.8014V23.0364H81.0682V31.3842H56.8014V57.9872H47.9609V0H81.7688V8.3478Z" fill="white"/>
<path d="M176.429 0C184.479 0 191.498 0.869294 197.919 5.65043C204.937 10.9557 209.001 19.393 209.001 29.032C209.001 38.6837 205.014 47.0315 197.396 52.4135C190.645 57.1946 184.314 57.9744 176.263 57.9744H164.314V0H176.429ZM173.142 49.6394H176.951C181.282 49.6394 187.256 49.2942 192.288 45.5486C196.275 42.5061 200.173 36.9451 200.173 29.032C200.173 21.3873 196.53 15.3789 192.377 12.3364C187.346 8.68019 181.206 8.33503 176.951 8.33503H173.142V49.6394Z" fill="white"/>
<path d="M96.354 32.8926V57.9872H87.2715V0H110.035C121.258 0 127.245 6.55807 127.245 15.5962C127.245 23.177 123.232 27.6769 118.302 29.2493C122.379 30.4765 126.251 33.9154 126.251 44.0401V46.5969C126.251 50.5726 126.111 55.52 126.99 58H119.258C118.277 55.4944 118.302 51.0073 118.302 45.4335V44.2702C118.302 36.3826 116.264 32.9054 106.761 32.9054H96.354V32.8926ZM96.354 25.7465H107.729C115.627 25.7465 119.041 22.5506 119.041 16.3505C119.041 10.4571 115.462 7.13335 108.443 7.13335H96.3667V25.7465H96.354Z" fill="white"/>
</svg>

                </div>
                <div className="absolute tracking-[.5px]  w-[202px] h-[16px] text-xs font-medium leading-[16px] flex flex-row top-[68px]  gap-[12px] text-[#FFFFFF]">
                Human Factors Research & Design
                </div>
              </div>
              <div className="absolute top-[108px] col1b w-[440px] h-[70px]">
                <div className="text-base font-normal flex items-center leading-[22px] text-[#EBEBEB] opacity-[.6]
                top-[58px] left-[0] w-[440px] h-[22px]  ">
                Have Questions? Email Us
                </div>
                <div className="absolute w-[378px] h-[48px] flex flex-row top-[22px] items-center gap-[6px] ">
                <div className="absolute w-[48px] h-[48px] text-[#FFFFFF] top-[5.5px] left-[5.5px]">  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1791 21.8191C16.9991 22.5991 16.9991 23.8791 16.1791 24.6591C15.3991 25.4391 14.1191 25.4391 13.3391 24.6591C11.4658 22.783 10.4137 20.2402 10.4137 17.5891C10.4137 14.9379 11.4658 12.3951 13.3391 10.5191L20.4191 3.43905C22.2951 1.56581 24.8379 0.513672 27.4891 0.513672C30.1402 0.513672 32.683 1.56581 34.5591 3.43905C36.4323 5.31511 37.4844 7.8579 37.4844 10.5091C37.4844 13.1602 36.4323 15.703 34.5591 17.5791L31.5791 20.5591C31.5991 18.9191 31.3391 17.2791 30.7791 15.7191L31.7191 14.7591C32.2797 14.2044 32.7248 13.5441 33.0286 12.8163C33.3324 12.0885 33.4888 11.3077 33.4888 10.5191C33.4888 9.73041 33.3324 8.94959 33.0286 8.22179C32.7248 7.494 32.2797 6.83368 31.7191 6.27905C31.1644 5.71838 30.5041 5.27327 29.7763 4.96949C29.0485 4.66572 28.2677 4.5093 27.4791 4.5093C26.6904 4.5093 25.9096 4.66572 25.1818 4.96949C24.454 5.27327 23.7937 5.71838 23.2391 6.27905L16.1791 13.3391C15.6184 13.8937 15.1733 14.554 14.8695 15.2818C14.5657 16.0096 14.4093 16.7904 14.4093 17.5791C14.4093 18.3677 14.5657 19.1485 14.8695 19.8763C15.1733 20.6041 15.6184 21.2644 16.1791 21.8191M21.8191 13.3391C22.5991 12.5591 23.8791 12.5591 24.6591 13.3391C26.5323 15.2151 27.5844 17.7579 27.5844 20.4091C27.5844 23.0602 26.5323 25.603 24.6591 27.4791L17.5791 34.5591C15.703 36.4323 13.1602 37.4844 10.5091 37.4844C7.8579 37.4844 5.31511 36.4323 3.43905 34.5591C1.56581 32.683 0.513672 30.1402 0.513672 27.4891C0.513672 24.8379 1.56581 22.2951 3.43905 20.4191L6.41905 17.4391C6.39905 19.0791 6.65906 20.7191 7.21906 22.2991L6.27905 23.2391C5.71838 23.7937 5.27327 24.454 4.96949 25.1818C4.66572 25.9096 4.5093 26.6904 4.5093 27.4791C4.5093 28.2677 4.66572 29.0485 4.96949 29.7763C5.27327 30.5041 5.71838 31.1644 6.27905 31.7191C6.83368 32.2797 7.494 32.7248 8.22179 33.0286C8.94959 33.3324 9.73041 33.4888 10.5191 33.4888C11.3077 33.4888 12.0885 33.3324 12.8163 33.0286C13.5441 32.7248 14.2044 32.2797 14.7591 31.7191L21.8191 24.6591C22.3797 24.1044 22.8248 23.4441 23.1286 22.7163C23.4324 21.9885 23.5888 21.2077 23.5888 20.4191C23.5888 19.6304 23.4324 18.8496 23.1286 18.1218C22.8248 17.394 22.3797 16.7337 21.8191 16.1791C21.6248 15.997 21.47 15.7771 21.3641 15.5329C21.2583 15.2886 21.2037 15.0253 21.2037 14.7591C21.2037 14.4929 21.2583 14.2295 21.3641 13.9852C21.47 13.741 21.6248 13.5211 21.8191 13.3391V13.3391Z" fill="white"/>
                      </svg>

                </div>
                <div className="absolute text-[36px] font-medium leading-[43.2px] text-[#FFFFFF] top-[2.5px] left-[54px]" >contact@hfrnd.com</div>
                </div>
              </div>
              <div className="absolute col1c w-[192px] h-[72px] top-[202px]">
                <div className=" text-[#EBEBEB]  opacity-[.6]">
                Follow Us On
                </div>
                <div className="absolute flex flex-row items-start gap-[24px] top-[37px]">
                <div className=""><img src="linkedin.png"/></div>
                <div className=""><img src="youtube.png"/></div>
                </div>
              </div>
              </div>
             
              <div className="col12  w-[448px] h-[20px] text-xl font-medium	leading-[20px] flex flex-row gap-[48px] items-start text-[#FFFFFF]">   
                  <div className="w-[93px] h-[20px]">About US</div>
                  <div className="w-[91px] h-[20px]">Academy</div>
                  <div className="w-[53px] h-[20px]">News</div>
                  <div className="w-[67px] h-[20px]">Career</div>
              </div>
          </div>
          <div className="border-[#F7F7F7] w-[1680px] border-[1px] "></div>
          </div>  
          <div className="text-[#FFFFFF] text-sm	tracking-[.5px] leading-[15.4px] font-medium">Copyright 2023. Human Factors Research & Design Pvt.Ltd . All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Contact