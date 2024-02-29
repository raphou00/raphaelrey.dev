import Image from "next/image";
import errorImg from "@public/error.gif";

const NotFound = async () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="p-6 rounded-lg">
                <Image
                    src={errorImg}
                    alt="Page not found"
                    width={500}
                    height={346}
                    className="rounded-lg"
                />

                <div className="flex flex-col items-center mt-5">
                    <h1 className="text-4xl text-primary">404</h1>
                    <p className="text-2xl">Page not found</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;