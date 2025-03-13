import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import React from 'react'

export async function generateMetadata() {
    return {
        title: "Page Not Found || Willing Resort",
    };
}

const NotFound: React.FC = () => {
    return (
        <React.Fragment>
            <div
                className="relative min-h-[70vh] bg-cover bg-center flex flex-col justify-end"
                style={{ backgroundImage: 'url(https://willingresort.github.io/assests-hosting/images/NZ7_4832.jpg)', backgroundRepeat: 'no-repeat' }}
            >
                <div className="hidden sm:block absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent"></div>
                {/* Hide on small screens */}
                <div className="container px-5 sm:px-0 mx-auto pb-[100px] relative z-10 flex justify-center flex-col items-center">
                    <h1 className="text-[26px] w-[50%] font-[900] text-center tracking-heading bg-red-900/50 py-4 text-white uppercase">
                        Page Not Found !!!
                    </h1>
                    <div className='flex justify-center mt-4'>
                        <Link href='/' className='h-[50px] bg-white flex justify-center items-center px-8'>Go Back To Home Page</Link>
                    </div>
                </div>
            </div>
            <Breadcrumb
                items={[
                    { label: "Not Found" },
                ]}
            />
        </React.Fragment>
    )
}

export default NotFound