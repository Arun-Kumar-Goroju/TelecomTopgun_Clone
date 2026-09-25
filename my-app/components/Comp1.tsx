import Image from "next/image";

export default function Comp1() {
    return (
        <main>
            <section className="flex h-[600px] w-full flex-col items-center bg-cover justify-between bg-[#0099FF] px-6 py-8 md:flex-row md:px-[50px] md:py-0">

                <div>
                    <h1 className="font-black text-5xl leading-tight tracking-tight text-white">
                        Fibre Connection <br/>
                         brings here
                    </h1>

                    <p className="mt-4 text-lg font-normal leading-normal tracking-normal text-white-600">
                        Enjoy uninterrupted,high-speed fibre from 
                        <br />
                        comfort of your home or office,you can
                        <br />
                        download a movie in seconds,game without 
                        <br />
                        lag, and work from home seamlessly.
                       
                       
                    </p>
                  
                    <button className="mt-6 flex h-[52px] w-[223px] items-center justify-center gap-3 rounded-md bg-green-500 font-semibold text-white">
                    Check Coverage <span>→</span>
                    </button>


                </div>

                <div className="mr-0 md:mr-10">
                    <Image src="/men.png" alt="Telkom" width={800} height={800} className="w-[300px] md:w-[800px]" />
                </div>

            </section>
             
        </main>
    );
}