export default function Portfolio() {
    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">Александр Шаркунов</h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-4">Frontend-разработчик</p>
                <p className="text-gray-400 max-w-2xl mt-6 texl-lg">20 лет. Создаю веб-проекты на Next.js и React</p>
                <div className="flex gap-8 flex-wrap">
                    <a href="#path" className="mt-10 px-8 py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">Мой путь</a>
                    <a href="#projects" className="mt-10 px-8 py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">Мои проекты</a>
                    <a href="#contacts" className="mt-10 px-8 py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">Связаться со мной</a>
                </div>
            </section>
            <section id="path" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Мой путь в IT</h2>
                <div className="relative pl-8 border-l-2 border-green-500 space-y-10">
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold texl-lg">Январь 2021</span>
                        <p className="text-gray-300 mt-1">Впервые решил создать свои инди-игру на C#. Не удалось реализовать проект из-за непонимания структуры и незнания языка.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Лето 2021</span>
                        <p className="text-gray-300 mt-1">Начал разрабатывать оптимизированную сборку модов для Minecraft, чтобы моды не конфликтовали между собой.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Октябрь 2021</span>
                        <p className="text-gray-300 mt-1">Закрытие мода Minecraft из-за множества ошибок и невоможности переноса с версии 1.12.2 на более новую.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Ноябрь 2022</span>
                        <p className="text-gray-300 mt-1">Возвращение в моддинг Minecraft - начал содавать мод с нуля, но проект заброшен из-за множества ошибок.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Конец ноября 2022</span>
                        <p className="text-gray-300 mt-1">Начал создавать первый мод для визуальной новеллы «Бесконечное Лето».</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Март 2023</span>
                        <p className="text-gray-300 mt-1">Выпуск первого мода в Steam. За месяц - около 100 скачиваний и более 500 просмотров страницы.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Июль 2023</span>
                        <p className="text-gray-300 mt-1">Создание второго мода для визуальной новеллы «Бесконечное Лето». Первый мод удален из Steam.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Сентябрь 2023</span>
                        <p className="text-gray-300 mt-1">Второй мод заброшен. Начало изучения HTML + CSS + JavaScript вместе с Python.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Март 2024</span>
                        <p className="text-gray-300 mt-1">Создал сайт для просмотра аниме «Ван-Пис» в 4К. Проект был готов, осталось добавить серии.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Июнь 2024</span>
                        <p className="text-gray-300 mt-1">Успешня сдача ЕГЭ по информатике - 62 балла, с уклоном на Python.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Декабрь 2024</span>
                        <p className="text-gray-300 mt-1">Обновление UI сайта для просмотра «Ван-Пис».</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Март 2025</span>
                        <p className="text-gray-300 mt-1">Создание русскоязычного вики-сайта по игре Schedule I (актуально - других русских выки не было).</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Июль 2025</span>
                        <p className="text-gray-300 mt-1">Создание вики-сайта по игре «Бесконечное Лето». Переход всех сайтов на PHP.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Сентябрь 2025</span>
                        <p className="text-gray-300 mt-1">Восстановление второго мода для визуальной новеллы «Бесконечное Лето».</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold texl-lg">Декабрь 2025</span>
                        <p className="text-gray-300 mt-1">Переход на стек Next.js. Создание экосистемы WikiVerse - объединение всех сайтов в один.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Февраль 2026</span>
                        <p className="text-gray-300 mt-1">Выход демо-версии второго мода для визуальной новеллы «Бесконечное Лето».</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                        <span className="text-green-400 font-bold text-lg">Май 2026</span>
                        <p className="text-gray-300 mt-1">Начало разработки редактора модов для «Бесконечного Лета» (ES Scenario Editor).</p>
                    </div>
                </div>
            </section>
            <section id="projects" className="maax-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Мои проекты</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-white">WikiVerse</h3>
                            <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">В разработке</span>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">Онлайн-энциклопедия о играх и аниме. Все сущности объединены в «вселенные» - у каждой есть персонажи, достижения локации.<br/><br/><strong className="text-gray-300">Особенность:</strong> система модерации контента, уровни и бейджи для редакторов. Пользователи могут добавлять страницы, админы их проверяют.<br/><br/><strong className="text-gray-300">Стек:</strong> Next.js, TypeScript, Tailwind CSS.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://wikiverse-lol.vercel.app" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">Сайт</a>
                            <a href="https://github.com/deadfozen/wikiverse" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">GitHub</a>
                        </div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-white">ES Scenario Editor</h3>
                            <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">В разработке</span>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">Редактор модов для визуальных новелл «Бесконечное Лето», «Бесконечное Лето 2» и «Любовь, Деньги и Рок-н-Ролл»<br/><br/><strong className="text-gray-300">Что будет:</strong> инструмент для создания и редактирования сценариев, персонажей и диалогов.<br/><br/><strong className="text-gray-300">Стек:</strong> React + Electron (десктопное приложение).</p>
                        <div className="flex gap-4 mt-4">
                            <span className="text-gray-500">GitHub - скоро</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contacts" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-300">
                <h2 className="text-3xl font-semibold text-white text-center mb-10">Связаться со мной</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
                    <a href="https://github.com/deadfozen" target="_blank" className="px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-green-500">GitHub</a>
                    <a href="https://t.me/squterd" target="_blank" className="px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-green-500">Telegram</a>
                    <a href="mailto:admin@wikiverse.ru" target="_blank" className="px-6 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-green-500">admin@wikiverse.ru</a>
                </div>
            </section>
            <footer className="text-center text-gray-600 text-sm py-8 border-t border-gary-800">&copy; {new Date().getFullYear()} Александр Шаркунов</footer>
        </main>
    )
}
