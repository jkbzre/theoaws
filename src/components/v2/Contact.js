
const Contact = () => {


    return(
        <>
        <div className="lg:px-72  2xl:px-32 px-12 pt-10 ">
        
            <div className=''>
            <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
            <br />
            <div className="formbold-builder-form themeOne ">
                    <form
                    encType="multipart/form-data"
                    action="https://formbold.com/s/601aN"
                    method="POST"
                    className="mx-auto w-full lg:max-w-[570px] max-w-[370px] rounded-[10px] border border-stroke bg-yellow-50 px-10 py-3 themeOne"
                    >

                    <div className="SortableItem fb-builder-item">
                    <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
                <span>E-Mail</span>
                <span className="label-required pl-1 text-red-400">*</span></label><input
                type="email"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                name="email_input_26E2359A-EEC5-44B2-A97F-302EE15F0FC8"
                placeholder="Enter Email Address"
                required=""
            />
            </div>
                    </div>
                    <div className="SortableItem fb-builder-item">
                        <div className="mb-4">
                        <label className="mb-2.5 block text-base text-black"
                            ><span>Name</span><span className="label-required pl-1 text-red-400">*</span></label><input
                            type="text"
                            className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                            name="text_input_BAABCA84-BD3D-4062-BBC2-235868603AD2"
                            placeholder="Enter Name"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="SortableItem fb-builder-item">
                        <div className="mb-4">
                        <label className="mb-2.5 block text-base text-black"
                            ><span>Message</span><span className="label-required pl-1 text-red-400">*</span></label><textarea
                            className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                            name="text_area_998BF89E-D4A7-40AA-9E78-43BA19F0093F"
                            placeholder="Write Your Message"
                            required=""
                        ></textarea>
                        </div>
                    </div>
                    <div className="btn-toolbar flex items-center space-x-3 ">
                        <input
                        type="submit"
                        className="inline-flex cursor-pointer items-center justify-center bg-primary rounded border px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
                        value="Submit"
                        />
                    </div>
                    </form>
            </div>
            </div>

        </div>
        <div className='footer bg-[#fff7c9] text-black bottom-0 left-0 w-full h-fit lg:pb-20 mt-28'>
                <div className='sm:block md:flex lg:flex text-sm justify-center'>
                
                <div className=' pt-5 '>
                    <p className='font-bold'>Studio Manager</p>
                    <p>Federica Crescenzi</p>
                    <a href='mailto:federica@theoeshetu.com' className=''>studio@theoeshetu.com</a>
                </div>
                <div className='ml-10 py-5'>
                    <p className='font-bold'>Sales Inquiries</p>
                    <a href='mailto:info@travellinglight.art' className=''>info@travellinglight.art</a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Contact