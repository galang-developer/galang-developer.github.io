/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
    {
        content: 'Pengembangan web yang luar biasa! Menghasilkan situs yang responsif, kode bersih, dan pengalaman pengguna yang hebat.',
        name: 'Sophia Ramirez',
        imgSrc: './images/people-1.jpg',
        company: 'PixelForge'
    },
    {
        content: 'Pekerjaan yang mengesankan! Waktu loading cepat, desain intuitif, dan integrasi backend yang sempurna. Sangat direkomendasikan.',
        name: 'Ethan Caldwell',
        imgSrc: './images/people-2.jpg',
        company: 'NexaWave'
    },
    {
        content: 'Developer yang istimewa! Membangun situs yang kuat dengan fungsionalitas sempurna. Efisien dan detail-oriented.',
        name: 'Liam Bennett',
        imgSrc: './images/people-3.jpg',
        company: 'CodeCraft'
    },
    {
        content: 'Kreatif dan terampil! Menghasilkan situs modern yang ramah pengguna melebihi ekspektasi. Komunikasi yang baik.',
        name: 'Noah Williams',
        imgSrc: './images/people-4.jpg',
        company: 'BrightWeb'
    },
    {
        content: 'Pekerjaan profesional! Tepat waktu, dengan desain elegan dan pengalaman pengguna yang lancar. Developer kelas atas.',
        name: 'Ava Thompson',
        imgSrc: './images/people-5.jpg',
        company: 'TechMosaic'
    },
    {
        content: 'Eksekusi proyek yang sempurna! Kode berkualitas tinggi, desain responsif, dan kemampuan pemecahan masalah yang luar biasa.',
        name: 'Jonathan',
        imgSrc: './images/people-6.jpg',
        company: 'Skyline Digital'
    }
];


const Review = () => {
    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end: '400% 80%',
                scrub: true
            },
            x: '-1000'
        })
    })

    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="cursor-scale headline-2 mb-8 reveal-up">
                    Apa Kata Klien Saya?
                </h2>

                <div className="cursor-scale scrub-slide flex items-stretch gap-3 w-fit">
                    {
                        reviews.map(({ content, name, imgSrc, company }, key) => (
                            <ReviewCard key={key} name={name} imgSrc={imgSrc} company={company} content={content} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Review