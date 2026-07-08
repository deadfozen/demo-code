"use client"
import {useState} from "react"
import Image from "next/image"
function ArrowLeft({className}: {className?: string}) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
function ArrowRight({className}: {className?: string}) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
function CloseIcon({className}: {className?: string}) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
function Gallery({screenshots}: {screenshots: string[]}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }
    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }
    return (
        <div className="relative w-full rounded-lg border border-gray-700 overflow-hidden cursor-pointer group" onClick={() => setIsFullscreen(true)}>
            <Image src={screenshots[currentIndex]} alt={`Скриншот ${currentIndex + 1}`} width={600} height={340} className="w-full h-auto object-cover"/>
            {screenshots.length > 1 && (
                <>
                    <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110">
                        <ArrowLeft className="w-5 h-5"/>
                    </button>
                    <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:scale-100">
                        <ArrowRight className="w-5 h-5"/>
                    </button>
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm">{currentIndex + 1} / {screenshots.length}</span>
                </>
            )}
        </div>
        {isFullscreen && (
            <div className="">
                
            </div>
        )}
    )
}
export default function Portfolio() {
    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">Александр Шаркунов</h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-4">Frontend-разработчик</p>
                <p className="text-gray-400 max-w-2xl mt-6 text-lg">20 лет • Создаю современные веб-проекты на <strong className="text-gray-300">Next.js</strong>, <strong className="text-gray-300">React</strong> и <strong className="text-gray-300">TypeScript</strong>. Сейчас работаю над экосистемой <strong className="text-gray-300">WikiVerse</strong> и редактором модов <strong className="text-gray-300">ES Scenario Editor</strong>.</p>
                <div className="flex gap-8 flex-wrap">
                    <a href="#path" className="mt-10 px-8 py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">Мой путь</a>
                    <a href="#projects" className="mt-10 px-8 py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">Мои проекты</a>
                    <a href="#contacts" className="mt-10 px-8 py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">Связаться со мной</a>
                </div>
            </section>
            <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <h3 className="text-2xl font-semibold text-white text-center">Навыки</h3>
                        <p className="text-gray-300 mt-1 text-xl leading-[2rem]">
                            • Next.js<br/>• React <br/>• TypeScript <br/>• JavaScript <br/>• Tailwind CSS <br/>• PHP <br/>• Python <br/>• Electron <br/>• Git
                            </p>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <h3 className="text-2xl font-semibold text-white text-center">Статистика</h3>
                        <p className="text-gray-300 mt-1 text-xl leading-[2rem]">• 2 крупных собственных проекта <br/>• 2 модификации для «Бесконечного Лета» <br/>• Первая русскоязычная вики по Schedule I (неактуально) <br/>• Более 4 лет личных проектов <br/>• Преподавал неделю группе заинтерисованных людей лекции по frontend-разработке</p>
                    </div>
                </div>
            </section>
            <section id="path" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Мой путь в IT</h2>
                <div className="relative pl-8 border-l-2 border-green-500 space-y-10">
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Январь 2021</span>
                        <p className="text-gray-300 mt-1">Первый опыт разработки собственной инди-игры на C#. Именно тогда познакомился с основами программирования и понял, насколько важны архитектура проекта и грамотная организация кода.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Лето 2021</span>
                        <p className="text-gray-300 mt-1">Начал создавать собственную сборку модов для Minecraft, уделяя внимание совместимости, оптимизации и устранению конфликтов между модификациями.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Октябрь 2021</span>
                        <p className="text-gray-300 mt-1">Завершил работу над проектом после неудачной попытки переноса на новую версию Minecraft. Получил первый опыт сопровождения крупных проектов и работы с техническими ограничениями.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Ноябрь 2022</span>
                        <p className="text-gray-300 mt-1">Вернулся к моддингу Minecraft и начал разработку собственного мода с нуля. Несмотря на закрытие проекта, этот этап зачительно улучшил мои навыки программирования.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Конец ноября 2022</span>
                        <p className="text-gray-300 mt-1">Начал создавать первый мод для визуальной новеллы «Бесконечное Лето».</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Март 2023</span>
                        <p className="text-gray-300 mt-1">Опубликовал первый мод в Steam. За первый месяц проект набрал около <strong className="text-gray-300">100 загрузок</strong> и более <strong className="text-gray-300">500 просмотров</strong> страницы.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Июль 2023</span>
                        <p className="text-gray-300 mt-1">Приступил к разработке второго мода для «Бесконечного Лета», используя опыт предыдущего проекта.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Сентябрь 2023</span>
                        <p className="text-gray-300 mt-1">Перешел к изучению веб-разработки: HTML, CSS, JavaScript и Python. Именно с этого момента начал активно двигаться в сторону создания собственных веб-сайтов.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Март 2024</span>
                        <p className="text-gray-300 mt-1">Начал разрабатывать собственный сайт для просмотра аниме «Ван-Пис» с современным дизайном и поддержкой видео в 4К.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Июнь 2024</span>
                        <p className="text-gray-300 mt-1">Успешно сдал ЕГЭ по информатике (62 балла), уделяя основное внимание программированию на Python.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Декабрь 2024</span>
                        <p className="text-gray-300 mt-1">Полностью переработал интерфейс сайта по «Ван-Пис», улучшив удобство использования и внешний вид.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Март 2025</span>
                        <p className="text-gray-300 mt-1">Начал создавать перную русскоязычную вики по игре <strong className="txt-gray-300">Schedule I</strong>, когда аналогичных проектов практически не существовало.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Июль 2025</span>
                        <p className="text-gray-300 mt-1">Начал разрабатывать вики-сайт по игре «Бесконечное Лето» и начал перевод существующих сайтов на PHP для расширения их возможностей.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Сентябрь 2025</span>
                        <p className="text-gray-300 mt-1">Вернулся к разработке второго мода для «Бесконечного Лета», переработав архитектуру проекта с учётом накопленного опыта.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Декабрь 2025</span>
                        <p className="text-gray-300 mt-1">Перешёл на стек <strong className="text-gray-300">Next.js</strong> и начал разработку <strong className="text-gray-300">WikiVerse</strong> - единой платформы, объединяющей игровые энциклопедии в общую экосистему.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Февраль 2026</span>
                        <p className="text-gray-300 mt-1">Выпустил демо-версию второго мода для «Бесконечного Лета».</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Май 2026</span>
                        <p className="text-gray-300 mt-1">Начал разработку <strong className="text-gray-300">ES Scenario Editor</strong> - визуального редактора модов для «Бесконечного Лета», «Бесконечного Лета 2» и «Любовь, Деньги и Рок-н-Ролл».</p>
                    </div>
                </div>
            </section>
            <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Мои проекты</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 ">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-white">WikiVerse</h3>
                            <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">В разработке</span>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">Онлайн-платформа, объединяющая энциклопедии по играм и аниме в единую экосистему. Каждая вселенная содержит собственные статьи, персонажей, достижения, локации и многое другое.<br/><br/><strong className="text-gray-300">Особенности проекта:</strong><br/>• система пользовательских аккаунтов<br/>• модерация контента<br/>• уровни и бейджи редакторов<br/>• возможность создавать и редактировать статьи через удобный интерфейс.<br/><br/><strong className="text-gray-300">Стек:</strong> Next.js, TypeScript, Tailwind CSS.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://wikiverse-lol.vercel.app" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">Сайт</a>
                            <a href="https://github.com/deadfozen/wikiverse" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">GitHub</a>
                        </div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-white">ES Scenario Editor</h3>
                            <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">В разработке</span>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">Кроссплатформенный редактор модификации для визуальных новелл «Бесконечное Лето», «Бесконечное Лето 2» и «Любовь, Деньги и Рок-н-Ролл»<br/><br/>Редактор позволит создавать персонажей, диалоги и управлять структурой проекта без ручного редактирования файлов, а также <br/><br/><strong className="text-gray-300">Стек:</strong> React + Electron (десктопное приложение).</p>
                        <div className="flex gap-4 mt-4">
                            <span className="text-gray-500">GitHub - скоро</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contacts" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
                <h2 className="text-3xl font-semibold text-white text-center mb-10">Связаться со мной</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
                    <a href="https://github.com/deadfozen" target="_blank" className="px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-green-500">GitHub</a>
                    <a href="https://t.me/squterd" target="_blank" className="px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-green-500">Telegram</a>
                    <a href="mailto:admin@wikiverse.ru" target="_blank" className="px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-green-500">admin@wikiverse.ru</a>
                </div>
            </section>
            <footer className="text-center text-gray-600 text-sm py-8 border-t border-gray-800">&copy; {new Date().getFullYear()} Александр Шаркунов</footer>
        </main>
    )
}
