import Hero from './Hero';
import ChapterOne from './ChapterOne';
import ChapterTwo from './ChapterTwo';
import ChapterThree from './ChapterThree';
import ChapterFour from './ChapterFour';
import ChapterFive from './ChapterFive';
import ChapterSix from './ChapterSix';
import ChapterSeven from './ChapterSeven';
import ChapterEight from './ChapterEight';
import BimStrategies from './BimStrategies';
import FinalInsight from './FinalInsight';

export interface Chapter {
  id: string;
  title: string;
  component: React.FC | null;
}

export const chapters: Chapter[] = [
  { 
    id: 'intro', 
    title: 'The Project That Will Redefine Urban Infrastructure',
    component: Hero
  },
  { 
    id: 'ch1', 
    title: 'Chapter 1: Why Projects Like the Gold Line Are High-Risk by Design',
    component: ChapterOne
  },
  { 
    id: 'ch2', 
    title: 'Chapter 2: Where Most Infrastructure Projects Go Wrong',
    component: ChapterTwo
  },
  { 
    id: 'ch3', 
    title: 'Chapter 3: BIM — From Design Tool to Decision Engine',
    component: ChapterThree
  },
  { 
    id: 'ch4', 
    title: 'Chapter 4: Applying BIM to the Gold Line — A Scenario Breakdown',
    component: ChapterFour
  },
  { 
    id: 'ch5', 
    title: 'Chapter 5: BIM and Sustainability — Beyond Compliance',
    component: ChapterFive
  },
  { id: 'ch6', title: 'Chapter 6: The Cost of Not Using BIM', component: ChapterSix },
  { id: 'ch7', title: 'Chapter 7: The Future of Infrastructure Delivery in Dubai', component: ChapterSeven },
  { id: 'ch8', title: 'Chapter 8: How Swifterz Delivers BIM That Performs', component: ChapterEight },
  { id: 'strategy', title: 'BIM Strategies for Large-Scale Underground Infrastructure', component: BimStrategies },
  { id: 'insight', title: 'Final Insight', component: FinalInsight },
];
