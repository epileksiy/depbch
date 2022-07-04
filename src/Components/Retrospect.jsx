import React,{useRef,useEffect} from "react";
import { gsap } from "gsap";

const Retrospect = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        // gsap.to("#thirdCircle", {
        //     x: 400,
        //     duration: 5,
        //     scrollTrigger: {
        //       trigger: "#thirdCircle",
        //       markers: true,
        //       start: "top center",
        //       end: "bottom 80px",
        //       scrub: true
        //     }
        // });
      }, []);

    return(
        <div className="w-full flex flex-col justify-center">
            <p className="text-3xl md:text-4xl xl:text-5xl py-5 font-semibold text-center">Ретроспектива БцХ Энерго</p>
            <div className="w-full py-10 md:retrospectmain md:p-10 flex justify-center">
                <div className="rounded-xl w-full xl:w-2/3 h-full">
                    <div className="w-full bg-white md:p-10 lg:rounded-t-2xl">
                        <div className="h-full w-full retroshadow lg:rounded-t-2xl bg-white">
                            <div className="h-full w-full flex flex-col md:flex-row items-center ">
                                <div className="my-10 md:my-0 h-1/2 md:h-full w-full md:w-1/3 lg:w-1/2 flex justify-center items-center md:border-dashed md:border-r-4 lg:border-r-8 md:border-gray-500">
                                    <p className="text-center text-6xl md:text-6xl lg:text-7xl xl:text-8xl border-b-8 border-dashed h-20 border-gray-500 md:border-0" ref={circleRef} id="thirdCircle">2006 г.</p>
                                </div>
                                <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-1/2 md:h-full text-2xl md:text-2xl md:font-semibold lg:font-normal lg:text-3xl xl:text-3xl">
                                    <div className="h-1/2 flex justify-center items-start flex-col p-10 md:p-10">
                                        <p className="">Создание компании</p>
                                        <p className="mt-4">Проведение исследовательских работ и семинаров в области рынка электроэнергетики</p>
                                        <p className="mt-4">Издание книги «Энергоресурсосбережение»</p>
                                    </div>
                                    <div className="h-1/2 flex items-center  p-10">
                                        <h1 className="">С 1 сентября 2006 года Постановлением Правительства № 529 от 31 августа 2006 г. введены правила функционирования нового оптового рынка электроэнергии (мощности) - НОРЭМ</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full bg-green-100 md:p-10">
                        <div className="h-full w-full retroshadow">
                            <div className="h-full w-full flex flex-col md:flex-row items-center">
                                <div className="my-10 md:my-0 h-1/2 md:h-full w-full md:w-1/3 lg:w-1/2 flex justify-center items-center md:border-dashed md:border-r-4 lg:border-r-8 md:border-red-400">
                                    <p className="text-center text-6xl md:text-6xl lg:text-7xl xl:text-8xl border-b-8 border-dashed h-20 border-red-400 md:border-0">2007 г.</p>
                                </div>
                                <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-1/2 md:h-full text-2xl md:text-2xl md:font-semibold lg:font-normal lg:text-3xl xl:text-3xl">
                                    <div className="h-1/2 flex justify-center items-start flex-col p-10 md:p-10">
                                        <p className="">Образована студия научно-популярного фильма «Детсвет»</p>
                                        <p className="mt-4">Выпущен фильм «Его величество Электричество»</p>
                                    </div>
                                    <div className="h-1/2 flex items-center  p-10">
                                        <h1 className="">На 6-м Международном Форуме «ЭНЕРГИЯ и ЭНЕРГЕТИКА’ 2007» рассматриваются вопросы генерации, передачи и распределения энергии, альтернативные источники энергии и энергосбережения </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-yellow-100 md:p-10">
                        <div className="h-full w-full retroshadow">                    
                            <div className="h-full w-full flex flex-col md:flex-row items-center">
                                <div className="my-10 md:my-0 h-1/2 md:h-full w-full md:w-1/3 lg:w-1/2 flex justify-center items-center md:border-dashed md:border-r-4 lg:border-r-8 md:border-purple-500">
                                    <p className="text-center text-6xl md:text-6xl lg:text-7xl xl:text-8xl border-b-8 border-dashed h-20 border-purple-500 md:border-0">2009 г.</p>
                                </div>
                                <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-1/2 md:h-full text-2xl md:text-2xl md:font-semibold lg:font-normal lg:text-3xl xl:text-3xl">
                                    <div className="h-1/2 flex justify-center items-start flex-col p-10">
                                        <p className="">БцХ-Энерго – энергоаудиторская компания</p>
                                        <p className="mt-4">Издание пособия Энергоэффективность и энергетическое обследование</p>
                                        <p className="mt-4">Проведено более 300 энергетических обследований предприятий и организаций</p>
                                    </div>
                                    <div className="h-1/2 flex items-center  p-10">
                                        <h1 className="">С 1 сентября 2006 года Постановлением Правительства № 529 от 31 августа 2006 г. введены правила функционирования нового оптового рынка электроэнергии (мощности) - НОРЭМ</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full bg-orange-100 md:retrospectlast md:p-10 rounded-b-2xl">
                        <div className="h-full w-full retroshadow rounded-b-2xl">
                                <div className="h-full w-full flex flex-col md:flex-row items-center">
                                <div className="my-10 md:my-0 h-1/2 md:h-full w-full md:w-1/3 lg:w-1/2 flex justify-center items-center md:border-dashed md:border-r-4 lg:border-r-8 md:border-blue-400">
                                    <p className="text-center text-6xl md:text-6xl lg:text-7xl xl:text-8xl border-b-8 border-dashed h-20 border-blue-400 md:border-0">2010 г.</p>
                                </div>
                                <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-1/2 md:h-full text-2xl md:text-2xl md:font-semibold lg:font-normal lg:text-3xl xl:text-3xl">
                                    <div className="h-1/2 flex justify-center items-start flex-col p-10">
                                        <p className="">Проведение семинаров и практикумов по повышению эффективности теплоснабжения промышленных предприятий</p>
                                        <p className="mt-4">Издание книги «Энергостратегия северных городов России»</p>
                                    </div>
                                    <div className="h-1/2 flex items-center  p-10">
                                        <h1 className="">27.07.2010 года принят Федеральный Закон № 190-ФЗ «О теплоснабжении»</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Retrospect;