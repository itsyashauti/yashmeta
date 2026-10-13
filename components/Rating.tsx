import Image from "next/image";

export default function Ratings() {
    return (
        <div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
            <div className="w-[49.5%] sm:w-full xm:w-full h-[60vh] sm:h-[50vh] xm:h-[50vh]">
                <div className="w-full h-full flex items-center justify-center rounded-[10px] bg-marquee relative">
                    <Image
                        src="/metarulex-logo-lime.png"
                        alt="metaruleX"
                        width={620}
                        height={222}
                        className="h-auto w-[clamp(140px,14vw,240px)]"
                    />
                    <div className="absolute bottom-[35px] left-[25px] flex items-center justify-center border border-about px-[12px] py-[8px] rounded-full">
                        <span className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] text-about uppercase font-normal font-NeueMontreal tracking-wider">
                            ©2025–2026
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[15px]">
                <article className="w-full flex flex-col items-center justify-center rounded-[10px] bg-secondary relative h-[60vh] sm:h-[50vh] xm:h-[50vh] text-about font-NeueMontreal">
                    <svg className="h-[108px] w-[108px]" viewBox="0 0 108 108" fill="none" aria-hidden="true">
                        <circle cx="54" cy="54" r="45" stroke="currentColor" strokeOpacity=".34" />
                        <path d="M29 69V39h12l13 16 13-16h12v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29 78h50" stroke="currentColor" strokeOpacity=".55" strokeLinecap="round" />
                    </svg>
                    <div className="mt-5 text-center">
                        <h2 className="font-NeueMontreal font-medium text-[clamp(20px,2vw,28px)] leading-[1.2] tracking-[-.02em]">
                            Clarity in every step
                        </h2>
                        <p className="mt-3 text-[11px] uppercase tracking-[.18em] text-white/60">
                            Clear ideas. Useful systems.
                        </p>
                    </div>
                    <div className="absolute bottom-[35px] left-[25px] w-fit rounded-full border border-white/70 px-[12px] py-[8px] text-[13px] leading-[14px] uppercase tracking-wider text-about xl:text-[16px]">
                        Strategy · Design · Technology
                    </div>
                </article>

                <article className="w-full flex flex-col items-center justify-center rounded-[10px] bg-secondary relative h-[60vh] sm:h-[50vh] xm:h-[50vh] text-about font-NeueMontreal">
                    <svg className="h-[108px] w-[108px]" viewBox="0 0 108 108" fill="none" aria-hidden="true">
                        <circle cx="54" cy="54" r="45" stroke="currentColor" strokeOpacity=".34" />
                        <path d="M31 54h46M54 31v46" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".7" />
                        <circle cx="54" cy="54" r="18" stroke="currentColor" strokeWidth="2" />
                        <circle cx="54" cy="54" r="4" fill="currentColor" />
                    </svg>
                    <div className="mt-5 text-center">
                        <h2 className="font-NeueMontreal font-medium text-[clamp(20px,2vw,28px)] leading-[1.2] tracking-[-.02em]">
                            Built with purpose
                        </h2>
                        <p className="mt-3 text-[11px] uppercase tracking-[.18em] text-white/60">
                            Digital work for growing teams.
                        </p>
                    </div>
                    <div className="absolute bottom-[35px] left-[25px] w-fit rounded-full border border-white/70 px-[12px] py-[8px] text-[13px] leading-[14px] uppercase tracking-wider text-about xl:text-[16px]">
                        Made to move ideas forward
                    </div>
                </article>
            </div>
        </div>
    );
}
