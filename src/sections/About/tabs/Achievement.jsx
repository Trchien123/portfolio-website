import React from 'react';

const Achievement = () => {
  return (
    <div className="space-y-8 animate-fade-in">

        <div className="grid grid-cols-1 gap-4">
            {/* Card 1 */}
            <div className="bg-bg-surface/40 p-6 rounded-xl border border-text-main/10 hover:border-text-button/40 transition-all group">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-bg-main rounded-lg text-text-button border border-text-button/20 group-hover:bg-text-button group-hover:text-text-main transition-colors">
                        🏆
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main text-lg font-spartan">Top 3 VNPT AI HACKATHON</h4>
                        <div className="text-sm text-text-muted/50 font-bold mb-2">2025</div>
                        <p className="text-text-muted/80 text-sm leading-relaxed">
                            Top 3 VNPT AI HACKATHON track the dreamer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-bg-surface/40 p-6 rounded-xl border border-text-main/19 hover:border-text-button/40 transition-all group">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-bg-main rounded-lg text-text-button border border-text-button/20 group-hover:bg-text-button group-hover:text-text-main transition-colors">
                        📜
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main text-lg font-spartan">Greenovation Conference</h4>
                        <div className="text-sm text-text-muted/50 font-bold mb-2">2025</div>
                        <p className="text-text-muted/80 text-sm leading-relaxed">
                            Greenovation Conference held at Swinburne University of Technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Achievement;