import React, { useState, useEffect } from 'react';
import TableOfContents from './components/ebook/TableOfContents';
import ChapterSection from './components/ebook/ChapterSection';
import { chapters } from './components/ebook/chapterData';

function App() {
  const [activeChapterId, setActiveChapterId] = useState('intro');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveChapterId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar - Sticky TOC */}
        <TableOfContents activeChapterId={activeChapterId} />

        {/* Right Content Area - All Sections Stacked */}
        <main className="flex-1 bg-white">
          {chapters.map((chapter) => (
            <ChapterSection key={chapter.id} id={chapter.id}>
              {chapter.component ? (
                <chapter.component />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-12 py-32 border-t border-gray-100">
                  <div className="w-20 h-1 bg-gray-100 mb-8" />
                  <h2 className="text-3xl font-sora font-bold text-gray-300 mb-4 uppercase tracking-widest">
                    {chapter.title}
                  </h2>
                  <p className="text-gray-400 font-inter italic">
                    Content for this section is currently being developed.
                  </p>
                </div>
              )}
            </ChapterSection>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;