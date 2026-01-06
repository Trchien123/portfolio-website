import React from 'react';

const Hobby = () => {
  return (
    <div className="space-y-8 animate-fade-in font-montserrat">
        
        {/* Phần sở thích (Tags) */}
        <div>
            <h3 className="text-2xl font-bold text-white font-spartan mb-4">Beyond Coding</h3>
            <div className="flex flex-wrap gap-3">
                {/* Giả lập các thẻ sở thích */}
                {['Lorem', 'Ipsum', 'Dolor', 'Sit Amet', 'Consectetur'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-navy rounded-full border border-sage/20 text-sage hover:text-neon hover:border-neon transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Phần mô tả + Ảnh giả */}
        <div className="space-y-6">
            <p className="text-sage/90 leading-loose text-justify">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ut mi blandit, tempor arcu eu, ullamcorper eros. Morbi consectetur porttitor felis, et faucibus lacus rutrum sit amet.
            </p>

            {/* Grid ảnh giả lập */}
            <div className="grid grid-cols-2 gap-4 h-48">
                <div className="bg-sage/10 rounded-xl flex items-center justify-center border border-dashed border-sage/30">
                    <span className="text-sage/40">Image 1</span>
                </div>
                <div className="bg-sage/10 rounded-xl flex items-center justify-center border border-dashed border-sage/30">
                     <span className="text-sage/40">Image 2</span>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Hobby;