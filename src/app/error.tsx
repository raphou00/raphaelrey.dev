"use client";

import Image from "next/image";
import errorImg from "@public/error.gif";

const Error = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="p-6 rounded-lg">
                <Image
                    src={errorImg}
                    alt="Internal Server Error"
                    width={500}
                    height={346}
                    className="rounded-lg"
                />

                <div className="flex flex-col items-center mt-5">
                    <h1 className="text-4xl text-primary">500</h1>
                    <p className="text-2xl">Internal Server Error</p>
                </div>
            </div>
        </div>
    )
}

export default Error;