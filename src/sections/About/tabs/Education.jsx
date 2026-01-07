import React from 'react';

const Education = () => {
  return (
    <div className="space-y-10 animate-fade-in">
        
        {/* Timeline Item 1 */}
        <div className="relative pl-8 border-l-2 border-text-muted/20">
            {/* Green Circle */}
            <span className="absolute -left-2.25 w-4 h-4 rounded-full bg-bg-main border-2 border-text-button"></span>
            
            <div className="text-text-button font-bold font-spartan text-xl mb-1">2024 - Present</div>
            <h4 className="text-xl font-bold text-text-main">Bachelor of Computer Science - AI</h4>
            <div className="text-sm font-bold text-text-muted/60 uppercase tracking-widest mb-3">
                Swinburne University of Technology
            </div>
            <div className="text-text-muted/80 leading-relaxed space-y-3">
                <p>
                    <span className="block mt-1 text-text-muted/80 font-semibold">
                        Current GPA: 3.4/4.0
                    </span>
                </p>

                {/* Achievements Block */}
                <div className="bg-text-main/10 p-3 rounded-lg border border-text-main/10 mt-2">
                    <p className="text-text-button text-sm font-bold mb-2 flex items-center gap-2">
                        🏆 Best Performance Awards:
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-text-main/10 pb-1 last:border-0 last:pb-0">
                            <span className="text-text-main">Introduction to Programming</span>
                            <span className="text-text-muted/50 font-mono text-xs">COS10009</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-text-main/10 pb-1 last:border-0 last:pb-0">
                            <span className="text-text-main">Networks and Switching</span>
                            <span className="text-text-muted/50 font-mono text-xs">TNE10006</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-text-main/10 pb-1 last:border-0 last:pb-0">
                            <span className="text-text-main">Accounting Info for Decision Making</span>
                            <span className="text-text-muted/50 font-mono text-xs">ACC10007</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative pl-8 border-l-2 border-text-muted/20">
            <span className="absolute -left-2.25 w-4 h-4 rounded-full bg-bg-main border-2 border-text-button"></span>
            
            <div className="text-text-button font-bold text-lg mb-1">2021 - 2024</div>
            <h4 className="text-xl font-bold text-text-main">High School Diploma</h4>
            <div className="text-sm font-bold text-text-muted/60 uppercase tracking-widest mb-3">
                Tran Phu High School
            </div>
            <p className="text-text-muted/80 leading-relaxed text-justify">
                <span className="block mt-1 text-text-muted font-semibold">
                    GPA: 9.0/10 (Excellent Ranking)
                </span>
            </p>
        </div>
    </div>
  );
};

export default Education;