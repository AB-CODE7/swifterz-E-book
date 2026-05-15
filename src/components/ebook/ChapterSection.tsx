import React from 'react';

interface ChapterSectionProps {
  id: string;
  children: React.ReactNode;
}

const ChapterSection: React.FC<ChapterSectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="scroll-mt-16 py-4 border-b border-gray-50 last:border-b-0"
    >
      <div className="max-w-5xl mx-auto w-full px-8">
        {children}
      </div>
    </section>
  );
};

export default ChapterSection;
