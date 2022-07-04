import React from "react";
import { Carousel } from "flowbite-react";

const Letters = () =>{

    return(
        <div className="w-full md:h-[calc(100vh-125px)] flex flex-col">
            <p className="text-4xl md:text-5xl font-semibold mx-auto text-center py-5"> Благодарственные письма</p>
            <div className="hidden md:block h-2/3 w-full lg:w-1/2 md:w-4/5 mx-auto mt-10">
                <Carousel slide={false}>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Администрация города Балабаново благодарит за разработку дизайн-проектов общественных территорий</p>
                        <p className="text-xl  text-gray-600 mt-10">Администрация г. Балабаново</p>
                        <img className="h-1/4 w-auto mt-5" src="img/balabanovo.png" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Муниципальное образование городское поселение город Боровск выражает благодарность за разработку дизайн-проекта Городского парка «Картинка»</p>
                        <p className="text-xl text-gray-600 mt-10">Муниципальное образование городское поселение город Боровск</p>
                        <img className="h-1/4 w-auto mt-5" src="img/logo2.png" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Благодарность за дизайн проекты территорий Дзержинского района, за раскрытие потенциала этих территорий</p>
                        <p className="text-xl text-gray-600 mt-10">Администрация муниципального района "Дзержинский район"</p>
                        <img className="h-1/4 w-auto mt-5" src="img/logo3.png" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Администрация сельского поселения Есинка благодарит за оптимизацию электропотребления по результатам расчетов объемов</p>
                        <p className="text-xl text-gray-600 mt-10">Администрация мунициального образования поселение Есинка</p>
                        <img className="h-1/4 w-auto mt-5" src="img/logo6.png" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Администрация сельского поселения Кривское благодарит за авторский подход в разработке концепции территории возле памятного знака</p>
                        <p className="text-xl text-gray-600 mt-10 text-center">Администрация сельского поселения деревня Кривское</p>
                        <img className="h-1/4 w-auto mt-5" src="img/logo4.png" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Филиал ЗАО "Л`Ореаль" в Калужской области выражает благодарность за реализованные проекты в области применения экологических и энергосберегающих подходов </p>
                        <p className="text-xl text-gray-600 mt-10">L`Oreal</p>
                        <img className="h-1/4 w-auto mt-5 rounded-full" src="img/loreallogo.jpg" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10 px-20">
                        <p className="text-3xl lettertext">Благодарность за организацию и проведение II Международного экологического форума «Охрана среды и рациональное природоиспользование: Совеменное состояние и направление развития»</p>
                        <p className="text-xl text-gray-600 mt-10">Министерство природных ресурсов и экологии Калужской области</p>
                        <img className="h-1/4 w-auto mt-5" src="img/logo5.png" alt="" />
                    </div>
                </Carousel>
            </div>
            
            <div className="w-full p-10 md:hidden">
                <div className="flex justify-center items-center text-3xl font-bold bg-white flex-col p-5 rounded-xl drop-shadow-xl">
                    <p className="text-3xl lettertext text-center">Администрация города Балабаново благодарит за разработку дизайн-проектов общественных территорий</p>
                    <p className="text-xl text-gray-600 mt-10 text-center">Администрация г. Балабаново</p>
                    <img className="h-32 w-auto mt-5" src="img/balabanovo.png" alt="" />
                </div>
            </div>

            <div className="w-full p-10 md:hidden">
                <div className="flex justify-center items-center text-3xl font-bold bg-white flex-col p-5 rounded-xl drop-shadow-xl">
                    <p className="text-3xl lettertext text-center">Муниципальное образование городское поселение город Боровск выражает благодарность за разработку дизайн-проекта Городского парка «Картинка»</p>
                    <p className="text-xl text-gray-600 mt-10 text-center">Муниципальное образование городское поселение город Боровск</p>
                    <img className="h-32 w-auto mt-5" src="img/logo2.png" alt="" />
                </div>
            </div>

            <div className="w-full p-10 md:hidden">
                <div className="flex justify-center items-center text-3xl font-bold bg-white flex-col p-5 rounded-xl drop-shadow-xl">
                    <p className="text-3xl lettertext text-center">Благодарность за дизайн проекты территорий Дзержинского района, за раскрытие потенциала этих территорий</p>
                    <p className="text-xl text-gray-600 mt-10 text-center">Администрация муниципального района "Дзержинский район"</p>
                    <img className="h-32 w-auto mt-5" src="img/logo3.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Letters;