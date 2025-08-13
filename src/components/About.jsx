/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


const aboutItems = [
    {
        label: 'Proyek selesai',
        number: 10
    },
    {
        label: 'Tahun pengalaman',
        number: 5
    }
];


const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Hai! Saya Galang, seorang pengembang aplikasi mobile dan web dengan passion menciptakan solusi digital yang cepat, fungsional, dan estetis. Saya menggabungkan kreativitas desain dengan teknik pengembangan terbaik untuk menghasilkan produk yang tidak hanya indah, tetapi juga mudah digunakan dan berkinerja tinggi.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="cursor-scale flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} className="cursor-scale ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About