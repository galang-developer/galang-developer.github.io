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
        desc: 'UI/UX Design'
    },
    {
        imgSrc: './images/css3.svg',
        label: 'CSS',
        desc: 'Styling'
    },
    {
        imgSrc: './images/javascript.svg',
        label: 'JavaScript',
        desc: 'Frontend Logic'
    },
    {
        imgSrc: './images/nodejs.svg',
        label: 'Node.js',
        desc: 'JavaScript Runtime'
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
    
    // Mobile Development
    {
        imgSrc: './images/android-studio.svg',
        label: 'Android Studio',
        desc: 'IDE for Android'
    },
    {
        imgSrc: './images/kotlin.svg',
        label: 'Kotlin',
        desc: 'Modern Android'
    },
    {
        imgSrc: './images/java.svg',
        label: 'Java',
        desc: 'Android Development'
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

                <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                </div>
            </div>
        </section>
    )
}

export default Skill