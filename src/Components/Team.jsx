import React from "react";
import { Card } from "flowbite-react/lib/esm/components";

const Team = () =>{
    return(
        <div className="w-full flex flex-col items-center">
            <p className="text-5xl font-semibold mb-10 py-5">Наша команда</p>
            <div className="w-full flex justify-center">
                <div className="w-2/3 flex flex-row space-x-5">
                <div className="max-w-sm">
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Person 1
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <div className="max-w-sm">
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Person 2
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <div className="max-w-sm">
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Person 3
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Team;