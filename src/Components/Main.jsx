import React from "react";

const Main = () => {
    return(
        <div className="w-full flex text-center md:mt-32 md:px-12 flex-col md:flex-row">
            <div className="w-full mt-10 md:mt-0 md:w-1/3 p-5 rounded-xl drop-shadow-xl">
                <div className="maincard w-full flex flex-col p-5 rounded-xl bg-white">
                    <h5 className="text-4xl md:text-2xl lg:text-4xl font-semibold ">ЭНЕРГЕТИКА</h5>
                    <div className="divided-orange"></div>
                    <p className="leading-10 hidden md:block maincardtext uppercase mt-5 text-xl lg:text-2xl z-0 font-semibold text-center overflow-hidden">
                        ЭНЕРГОАУДИТ
                        <br />
                        ЭНЕРГОПАСПОРТ
                        <br />
                        <span className="text-orange-400">ЭНЕРГОМЕНЕДЖМЕНТ ⚡</span>
                        <br />
                        ОПТИМИЗАЦИЯ ЦЕНЫ ЗА ЭЛЕКТРОЭНЕРГИЮ
                        <br />
                        GREEN ENERGY
                        <br />
                        ПРОГРАММА ЭНЕРГОСБЕРЕЖЕНИЯ И ПОВЫШЕНИЯ ЭНЕРГОЭФФЕКТИВНОСТИ 
                    </p>
                    <div className="z-10 w-full bg-white pb-4">
                        <svg className=" mx-auto mt-2" width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="1" fill="#222222"/>
                            <path d="M16.5 12C16.5 14.7006 15.9516 17.1209 15.0883 18.8475C14.2101 20.604 13.0893 21.5 12 21.5C10.9107 21.5 9.78993 20.604 8.91168 18.8475C8.04839 17.1209 7.5 14.7006 7.5 12C7.5 9.29937 8.04839 6.87912 8.91168 5.15254C9.78993 3.39605 10.9107 2.5 12 2.5C13.0893 2.5 14.2101 3.39605 15.0883 5.15254C15.9516 6.87912 16.5 9.29937 16.5 12Z" stroke="#222222"/>
                            <path d="M14.25 15.897C11.9112 17.2473 9.54102 17.9825 7.61411 18.0982C5.65382 18.2158 4.31743 17.6932 3.77278 16.7499C3.22813 15.8065 3.44375 14.3879 4.52579 12.749C5.58941 11.1381 7.41121 9.45307 9.75002 8.10275C12.0888 6.75243 14.459 6.01723 16.3859 5.90157C18.3462 5.78391 19.6826 6.30651 20.2273 7.24987C20.7719 8.19323 20.5563 9.61187 19.4743 11.2507C18.4106 12.8616 16.5888 14.5467 14.25 15.897Z" stroke="#222222"/>
                            <path d="M14.25 8.10284C11.9112 6.75252 9.54102 6.01732 7.61411 5.90166C5.65382 5.78399 4.31743 6.30659 3.77278 7.24995C3.22813 8.19331 3.44375 9.61196 4.52579 11.2508C5.58941 12.8617 7.41121 14.5467 9.75002 15.8971C12.0888 17.2474 14.459 17.9826 16.3859 18.0982C18.3462 18.2159 19.6826 17.6933 20.2273 16.75C20.7719 15.8066 20.5563 14.3879 19.4743 12.7491C18.4106 11.1382 16.5888 9.45315 14.25 8.10284Z" stroke="#222222"/>
                        </svg>
                    </div>
                    <p className="block md:hidden leading-10 uppercase text-2xl z-0 font-semibold text-start mt-10">
                        ЭНЕРГОАУДИТ
                        <br />
                        ЭНЕРГОПАСПОРТ
                        <br />
                        <span className="text-orange-400">ЭНЕРГОМЕНЕДЖМЕНТ ⚡</span>
                        <br />
                        ОПТИМИЗАЦИЯ ЦЕНЫ ЗА ЭЛЕКТРОЭНЕРГИЮ
                        <br />
                        GREEN ENERGY
                        <br />
                        ПРОГРАММА ЭНЕРГОСБЕРЕЖЕНИЯ И ПОВЫШЕНИЯ ЭНЕРГОЭФФЕКТИВНОСТИ 
                    </p>               
                    </div>
            </div>
            <div className="w-full mt-10 md:mt-0 md:w-1/3 p-5 rounded-xl drop-shadow-xl ">
                <div className="maincard w-full flex flex-col p-5 rounded-xl bg-white">
                    <h5 className="text-4xl md:text-2xl lg:text-4xl font-semibold">ЭКОЛОГИЯ</h5>
                    <div className="divided-green"></div>
                    <p className="leading-10 hidden md:block maincardtext uppercase mt-5 text-xl lg:text-2xl z-0 font-semibold text-center overflow-hidden">
                        ЭКОЛОГИЧЕСКИЙ АУДИТ
                        <br />
                        ИНВЕНТАРИЗАЦИЯ БИОРАЗНООБАЗИЯ
                        <br />
                        ЭКОЛОГИЧЕСКИЕ МАЛЫЕ АРХ.ФОРМЫ
                        <br />
                        <span className="text-green-600">ОБУЧЕНИЕ 🙋</span>
                    </p>
                    <div className="z-10 w-full bg-white pb-4">
                        <svg className="mx-auto mt-0" width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.6199 17.4206C16.5403 18.1369 16.3643 18.8392 16.0967 19.5083L15.5 21" stroke="#222222"/>
                            <path d="M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5" stroke="#222222"/>
                            <circle cx="12" cy="12" r="9.5" stroke="#222222"/>
                        </svg>
                    </div>
                    <p className="block md:hidden leading-10 uppercase text-2xl z-0 font-semibold text-start mt-10">
                        ЭКОЛОГИЧЕСКИЙ АУДИТ
                        <br />
                        ИНВЕНТАРИЗАЦИЯ БИОРАЗНООБАЗИЯ
                        <br />
                        ЭКОЛОГИЧЕСКИЕ МАЛЫЕ АРХ.ФОРМЫ
                        <br />
                        <span className="text-green-600">ОБУЧЕНИЕ 🙋</span>
                    </p>
                    </div>
            </div>
            <div className="w-full mt-10 md:mt-0 md:w-1/3 p-5 rounded-xl drop-shadow-xl">
                <div className="maincard w-full flex flex-col p-5 rounded-xl bg-white">
                    <h5 className="text-4xl md:text-2xl lg:text-4xl font-semibold">ГОРОД И КУЛЬТУРНАЯ СРЕДА</h5>
                    <div className="divided"></div>
                    <p className="leading-10 hidden md:block maincardtext uppercase mt-5 text-xl lg:text-2xl z-0 font-semibold text-center overflow-hidden">
                        СОЗДАНИЕ КОНЦЕПЦИЙ
                        <br />
                        <span className="text-indigo-700">ДИЗАЙН-ПРОЕКТЫ 🚀</span>
                        <br />
                        ПРОЕКТНО-СМЕТНАЯ ДОКУМЕНТАЦИЯ
                        <br />
                        РАЗРАБОТКА ДИЗАЙН-КОДА
                    </p>
                    <div className="z-10 w-full bg-white pb-4">
                        <svg className=" mx-auto mt-2" width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="18" y="9" width="4" height="4" rx="2" transform="rotate(90 18 9)" stroke="#222222"/>
                            <rect x="18" y="17" width="4" height="4" rx="2" transform="rotate(90 18 17)" stroke="#222222"/>
                            <rect x="3" y="7" width="4" height="4" rx="2" transform="rotate(-90 3 7)" stroke="#222222"/>
                            <path d="M5 8V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14" stroke="#222222"/>
                            <path d="M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14" stroke="#222222"/>
                        </svg>
                    </div>
                    <p className="block md:hidden leading-10 uppercase text-2xl z-0 font-semibold text-start mt-10">
                        СОЗДАНИЕ КОНЦЕПЦИЙ
                        <br />
                        <span className="text-indigo-700">ДИЗАЙН-ПРОЕКТЫ 🚀</span>
                        <br />
                        ПРОЕКТНО-СМЕТНАЯ ДОКУМЕНТАЦИЯ
                        <br />
                        РАЗРАБОТКА ДИЗАЙН-КОДА
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;