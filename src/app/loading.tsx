
export default function GlobalLoading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <div
                className="relative flex justify-center items-center w-24 h-24 rounded-full border-4 border-black animate-ping"
            >
                <div
                    className="relative flex justify-center items-center w-20 h-20 rounded-full border-4 border-black"
                >
                    <div
                        className="relative flex justify-center items-center w-16 h-16 rounded-full border-4 border-black"
                    >
                        <div className="absolute inset-1 flex justify-center items-center text-white bg-black rounded-full">
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <h1 className="font-serif text-2xl">Please be patient while loading...</h1>
            </div>
        </div>
    );
}
