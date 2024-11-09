import Image from "next/image";
import logo from "../app/assets/Logo.png";
import buttonLogo from "@/app/assets/Group 212.png";
import workTogether from "@/app/assets/Work Together Image.png";
import sponsers from "@/app/assets/sponsors.png";
import footerLogo from "@/app/assets/©2021 Whitepace LLC..png";

export default function Page() {
    return (
        <div>
            <nav className="flex justify-between items-center bg-[#043873] px-[220px] py-4 h-[92px]">
                <div className="flex items-center gap-2">
                    {/* Use Next.js Image component for optimized loading and compatibility */}
                    <Image src={logo} alt="Logo" width={150} height={80} />

                </div>
                <ul className="flex gap-8 list-none m-0">
                    <li className="text-white font-dm-sans font-medium text-lg leading-6 cursor-pointer">
                        Products
                    </li>
                    <li className="text-white font-dm-sans font-medium text-lg leading-6 cursor-pointer">
                        Solutions
                    </li>
                    <li className="text-white font-dm-sans font-medium text-lg leading-6 cursor-pointer">
                        Resources
                    </li>
                    <li className="text-white font-dm-sans font-medium text-lg leading-6 cursor-pointer">
                        Pricing
                    </li>
                </ul>
                <button className="bg-[#FFE492] text-[#043873] py-4 px-10 font-inter font-medium text-lg leading-6 rounded-[8px] cursor-pointer hover:bg-[#E6DB8A]">
                    Login
                </button>
            </nav>
            <div className="flex justify-between bg-[#043873] py-[140px] px-[220px] gap-[50px]">
                <div className="w-[1080px] h-[520px] -ml-24 flex gap-[40px]">

                    {/* Text Section */}
                    <div className="flex flex-col justify-center gap-[60px] text-white max-w-[656px]">
                        {/* Text Block */}
                        <div className="flex flex-col gap-[24px]">
                            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
                                Get More Done with  Whitepace
                            </h2>
                            <p className="text-[18px] font-normal leading-[30px] tracking-[-0.36px]">
                                Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
                            </p>
                        </div>


                        {/* Button */}
                        <div className="w-fit h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6 flex items-center justify-between text-sm mt-8">
                            <button className="flex items-center gap-4">
                                Try Whitepace Free
                                <Image src={buttonLogo} alt="buttonLogo" className="w-auto h-4 pr-2" />
                            </button>
                        </div>
                    </div>

                    {/* Empty Container Aligned to Right */}
                    <div className="w-[800px] h-[450px] bg-[#C4DEFD] ml-auto"></div>
                </div>
            </div>
            <div className=" bg-white h-[1588px] w-full py-[80px] px-[130px] ">
                <div className=" w-[1080px] h-[500px] mt-[160px]  gap-[40px] flex ">
                    <div className="w-[450px] h-[360px] mt-16 ">
                        <div className="w-[450px] h-[230px] gap-6">
                            <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529] ">
                                Project Management
                            </h1>
                            <p className="font-normal text-xs leading-6 text-[#212529] mt-4">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams
                                directly from the app. Take photos with the mobile app and save them to a note.
                            </p>

                            {/* button */}

                            <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-2
                    font-normal tracking-[-2%] flex text-sm mt-20">
                                <button className="flex justify-between  gap-4">Get Started
                                    <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                                </button>
                            </div>


                        </div>
                    </div>


                    {/* empty container */}
                    <div className="w-[600px] h-[500px] bg-[#C4DEFD] "></div>
                </div>

                {/* work together page */}

                <div className=" w-[1080px] h-[500px] mt-[160px] flex gap-[150px]">
                    {/* image div */}
                    <div>
                        <Image src={workTogether} alt="workTogetherImage" className=" w-[480px] mt-7" />
                    </div>

                    {/* work together div */}
                    <div className="w-[455px] h-[230px]  mt-32 items-end">
                        <div className="w-[455px] h-[171px] ">
                            <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529]">
                                Work together
                            </h1>
                            <p className="font-normal text-xs leading-6 text-[#212529] mt-4">
                                With whitepace, share your notes with your colleagues and collaborate on them.
                                You can also publish a note to the internet and share the URL with others.
                            </p>


                            {/* button */}

                            <div className="w-[120px] flex justify-center h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-2
                        font-normal tracking-[-2%] text-sm mt-12">
                                <button className="flex justify-between gap-4">Try it now
                                    <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* use an Extension page */}

            <div className=" h-[800px] w-full py-[8px] px-[130px] bg-[#043873] ">
                <div className=" w-[1080px] h-[500px] mt-[160px] gap-[40px] flex ">

                    <div className="w-[450px] h-[280px]  mt-28 ">
                        <div className="w-[450px] h-[180px] gap-6">
                            <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-white ">Use as Extension</h1>
                            <p className="font-normal text-xs leading-6 text-white mt-4">
                                Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                            </p>


                            {/* button */}

                            <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                        font-normal tracking-[-2%] text-sm mt-24">
                                <button className="flex justify-between gap-4">Let's Go
                                    <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* empty container */}
                    <div className="w-[600px] h-[500px] bg-[#C4DEFD] "></div>

                </div>
            </div>

            {/* costumize it to your needs page */}
            <div className=" h-[850px] w-full py-[8px] px-[130px] bg-white ">
                <div className=" w-[1080px] h-[500px] mt-[160px] gap-[40px] flex ">


                    {/* empty container */}
                    <div className="w-[650px] h-[500px] bg-[#C4DEFD] "></div>

                    <div className="w-[440px] h-[325px]  mt-24  ">
                        <div className="w-[440px] h-[230px] gap-6">
                            <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529] ">
                                Customise it to your needs
                            </h1>
                            <p className="font-normal text-xs leading-6 text-[#212529] mt-4">
                                Customise the app with plugins, custom themes and multiple text editors
                                (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                            </p>

                            {/* button */}

                            <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                            font-normal tracking-[-2%] text-sm mt-12">
                                <button className="flex justify-between gap-4">Let's Go
                                    <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*your work every whre you are */}
            <div className=" h-[400px] w-full py-[85px] px-[150px] bg-[#043873] ">
                <div className=" w-[1080px] h-[250px] ">
                    <div className="w-[738px] h-[150px] ml-[180px] ">
                        <h1 className="font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-white  ">Your work, everywhere you are</h1>
                        <p className="font-normal text-xs leading-6 text-white mt-4 text-center">
                            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace,
                            Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>



                        <div className="w-[140px] h-[45px] bg-[#4F9CF9] text-white rounded-lg gap-[10px] py-3 pl-6
                            font-normal tracking-[-2%] text-sm mt-16 ml-[280px]">
                            <button className="flex justify-between gap-4">Try Taskey
                                <Image src={buttonLogo} alt="buttonLogo" className="w-auto mt-1 " />
                            </button>
                        </div>
                    </div>
                </div >
            </div >


            {/* our sponsers page */}
            <div className=" h-[386px] w-full py-[85px] px-[150px] bg-white ">
                <div className=" w-[1080px] h-fit  text-[#212529] font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-center">Our sponsors
                    <div className=" w-[1080px] h-fit mt-[84px]">
                        <Image src={sponsers} alt="sponsers logo" />
                    </div>
                </div>
            </div>
            <div className=" h-[400px] w-full py-[120px] px-[130px] bg-[#043873] ">
                <div className="w-[1080px] h-[180px]   gap-[20px] flex">
                    {/* div1 */}
                    <div className="w-[258px]  text-white">
                        <Image src={logo} alt="logo" />
                        <div className="w-[205px] mt-5" >
                            <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </div>
                    </div>

                    {/* div2 */}

                    <div className="w-[258px] text-white">
                        <h1 className="font-bold text-base  leading-[21.78px]">Product</h1>
                        <ul >
                            <li className="mt-3">Overveiw </li>
                            <li className="mt-3">Pricig</li>
                            <li className="mt-3">Costumer Stories</li>
                        </ul>
                    </div>




                    {/* div3 */}
                    <div className="w-[258px]  text-white">
                        <h1 className="font-bold text-base  leading-[21.78px]">Resources</h1>
                        <ul >
                            <li className="mt-3">Blog</li>
                            <li className="mt-3">Guides & Totorials</li>
                            <li className="mt-3">Help Center</li>
                        </ul>
                    </div>




                    {/* div4 */}


                    <div className="w-[258px]  text-white">
                        <h1 className="font-bold text-base  leading-[21.78px]">Company</h1>
                        <ul >
                            <li className="mt-3">About us</li>
                            <li className="mt-3">Careers</li>
                            <li className="mt-3">Media Kit</li>
                        </ul>
                    </div>





                </div>

                <Image src={footerLogo} alt="footerLogo" className="mt-20 ml-[450px]" />
            </div>
        </div>

    );
}