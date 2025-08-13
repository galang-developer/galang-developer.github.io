/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    // Web Frontend
    {
        imgSrc: './images/figma.svg',
        label: 'Figma',
        desc: 'Design Tool'
    },
    {
        imgSrc: './images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: './images/javascript.svg',
        label: 'JavaScript',
        desc: 'Web Logic'
    },
    {
        imgSrc: './images/typescript.svg',
        label: 'TypeScript',
        desc: 'Scalable JS'
    },
    {
        imgSrc: './images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: './images/nextjs.svg',
        label: 'NextJS',
        desc: 'React Framework'
    },
    {
        imgSrc: './images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    
    // PHP Ecosystem
    {
        imgSrc: './images/php.svg',
        label: 'PHP',
        desc: 'Backend Language'
    },
    {
        imgSrc: './images/laravel.svg',
        label: 'Laravel',
        desc: 'PHP Framework'
    },
    {
        imgSrc: './images/codeigniter.svg',
        label: 'CodeIgniter',
        desc: 'PHP Framework'
    },
    {
        imgSrc: './images/laravel-filament.svg',
        label: 'Laravel Filament',
        desc: 'Admin Panel'
    },
    
    // Python Ecosystem
    {
        imgSrc: './images/django.svg',
        label: 'Django',
        desc: 'Python Framework'
    },
    {
        imgSrc: './images/flask.svg',
        label: 'Flask',
        desc: 'Python Framework'
    },
    
    // Databases
    {
        imgSrc: './images/mysql.svg',
        label: 'MySQL',
        desc: 'Relational Database'
    },
    {
        imgSrc: './images/firebase.svg',
        label: 'Firebase',
        desc: 'NoSQL Database'
    },
    
    // Mobile Development
    {
        imgSrc: './images/android-studio.svg',
        label: 'Android Studio',
        desc: 'IDE for Android'
    },
    {
        imgSrc: './images/kotlin.svg',
        label: 'Kotlin',
        desc: 'Android Language'
    },
    {
        imgSrc: './images/java.svg',
        label: 'Java',
        desc: 'Android Language'
    }
];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="cursor-scale headline-2 reveal-up">
                    Teknologi & Tools yang Saya Kuasai
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Saya menggunakan framework dan bahasa pemrograman terbaru untuk membangun aplikasi mobile (Android/iOS) dan website yang responsif, aman, dan mudah dikembangkan.
                </p>

                {/* <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        skillItem.map((item, index) => (
                            <div 
                                key={index}
                                className={`
                                    cursor-scale reveal-up
                                    ${item.label === 'Kotlin' ? 'lg:col-start-2' : ''}
                                    ${item.label === 'Java' ? 'lg:col-start-3' : ''}
                                `}
                            >
                                <SkillCard {...item} classes="cursor-scale reveal-up" />
                            </div>
                        ))
                    }
                </div> */}
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="cursor-scale reveal-up" />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill