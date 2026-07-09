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
        <>
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
                <div className="fixed inset-0 z-50 bg/black/95 flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
                    <div className="relative max-w-5xl w-full mx-4">
                        <Image src={screenshots[currentIndex]} alt={`Скриншот ${currentIndex + 1}`} width={1200} height={675} className="w-full h-auto rounded-lg"/>
                        {screenshots.length > 1 && (
                            <>
                                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg/black/60 text-white p-4 rounded-full hover:bg-black/80 transition-all hover:scale-110">
                                    <ArrowLeft className="w-8 h-8"/>
                                </button>
                                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg/black/60 text-white p-4 rounded-full hover:bg-black/80 transition-all hover:scale-110">
                                    <ArrowRight className="w-8 h-8"/>
                                </button>
                                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">{currentIndex + 1} / {screenshots.length}</span>
                            </>
                        )}
                        <button onClick={() => (setIsFullscreen(false))} className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors p-2 rounded-full hover:bg-white/10">
                            <CloseIcon className="w-8 h-8"/>
                        </button>
                    </div>    
                </div>
            )}
        </>
    )
}
