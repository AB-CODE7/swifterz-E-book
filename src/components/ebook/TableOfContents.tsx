import React from 'react';
import { chapters } from './chapterData';
import logo from '../../assets/SWIFTERZ logo - grey.svg';

interface TableOfContentsProps {
  activeChapterId: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ activeChapterId }) => {
  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0; // No navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="hidden lg:block w-96 bg-[#E5E7EB] p-8 lg:p-10 sticky top-0 h-screen overflow-y-auto no-scrollbar border-r border-gray-200 shrink-0">

      {/* Sidebar Logo */}
      <div className="mb-8 flex justify-center lg:justify-start">
        <img src={logo} alt="Swifterz Logo" className="h-20 w-auto opacity-140 ml-[-20px]" />
      </div>

      <h3 className="text-[#1F2937] font-inter text-lg font-bold mb-6 mt-4 tracking-wider">
        In this Ebook
      </h3>

      <nav className="space-y-4">
        {chapters.map((chapter) => {
          const isActive = chapter.id === activeChapterId;
          return (
            <div
              key={chapter.id}
              onClick={() => scrollToChapter(chapter.id)}
              className="flex gap-4 group cursor-pointer py-1"
            >
              <div
                className={`w-[3px] shrink-0 transition-all duration-300 ${isActive ? 'bg-[#926B15]' : 'bg-transparent group-hover:bg-gray-400'}`}
              />
              <span className={`text-[15px] leading-tight transition-all duration-300 font-inter ${isActive
                ? 'text-[#926B15] font-bold translate-x-1'
                : 'text-[#374151] hover:text-black hover:translate-x-1'
                }`}>
                {chapter.title}
              </span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default TableOfContents;
