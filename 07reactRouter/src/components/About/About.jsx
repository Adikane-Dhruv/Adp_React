import React from 'react'

// function About() {
//     return (
//         <></>
//     )
// }

// export default About

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
