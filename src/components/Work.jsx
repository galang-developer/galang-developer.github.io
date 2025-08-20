/**
 * @copyright 2025 Galang Dev
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
    {
        imgSrc: './images/project-1.jpg',
        title: 'Sistem Presensi Digital',
        tags: ['Filament', 'Presence Online', 'Admin Panel'],
        projectLink: '#'
    },
    {
        imgSrc: './images/project-2.jpg',
        title: 'FastFeast',
        tags: ['Kotlin', 'Food Delivery', 'Mobile'],
        projectLink: '#'
    },
    {
        imgSrc: './images/project-3.jpg',
        title: 'ResuLytix',
        tags: ['React', 'Resume Feedback', 'AI-Powered'],
        projectLink: '#'
    },
    {
        imgSrc: './images/project-4.jpg',
        title: 'Compressify',
        tags: ['NextJS', 'Video Compression', 'Development'],
        projectLink: 'https://compressify-video.vercel.app/'
    },
    {
        imgSrc: './images/project-5.jpg',
        title: 'VexaAI',
        tags: ['React', 'Conversation', 'AI-Powered'],
        projectLink: 'https://vexaai.vercel.app/'
    },
    {
        imgSrc: './images/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: '#'
    },
];


const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="cursor-scale headline-2 mb-8 reveal-up">
                    Beberapa Projek Terbaik Saya
                </h2>

                <div className="grid gap-x-4 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="cursor-scale reveal-up" />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Work