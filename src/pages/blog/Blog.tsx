import './Blog.css';
import { BlogHero } from '../../components/Hero/Hero';
import { useState } from 'react';

export const BlogPage = () => {
    const [activeTab, setActiveTab] = useState('blog');

    const blogPosts = [
        {
            title: 'Why Self-Learning is the Future of Education in India',
            excerpt: 'Traditional coaching models are failing millions. Here\'s how AI-powered self-learning is changing the game for competitive exam aspirants.',
            category: 'EdTech Insights',
            date: 'Jan 15, 2026',
            readTime: '5 min read',
            image: '📚',
            featured: true
        },
        {
            title: 'Introducing 1PYQ 2.0: Smarter Gap Analysis',
            excerpt: 'Our biggest update yet brings improved AI algorithms that identify your weak areas with 40% more accuracy.',
            category: 'Product Updates',
            date: 'Jan 8, 2026',
            readTime: '3 min read',
            image: '🚀',
            featured: false
        },
        {
            title: 'Making EdTech Accessible: Our Journey with Indian Sign Language',
            excerpt: 'How we built 1ISL Challenge and what we learned about designing for the deaf community.',
            category: 'Accessibility',
            date: 'Dec 28, 2025',
            readTime: '7 min read',
            image: '♿',
            featured: false
        },
        {
            title: 'The Real Cost of Education Technology in Tier 2 & 3 Cities',
            excerpt: 'Most EdTech pricing excludes 80% of Indian learners. We did the math on what affordable really means.',
            category: 'EdTech Insights',
            date: 'Dec 15, 2025',
            readTime: '6 min read',
            image: '💰',
            featured: false
        },
        {
            title: 'How We Built a 20-Person Tech Team Without a Technical Co-founder',
            excerpt: 'Lessons learned from hiring, managing, and scaling an in-house engineering team as a non-tech founder.',
            category: 'Company News',
            date: 'Dec 5, 2025',
            readTime: '8 min read',
            image: '👥',
            featured: false
        },
        {
            title: 'Spaced Repetition: The Science Behind 1PYQ',
            excerpt: 'Understanding the cognitive science that makes our learning algorithm effective for long-term retention.',
            category: 'EdTech Insights',
            date: 'Nov 20, 2025',
            readTime: '6 min read',
            image: '🧠',
            featured: false
        }
    ];

    const resources = [
        {
            title: 'EdTech Accessibility Checklist',
            description: 'A comprehensive checklist for building accessible educational products in India.',
            type: 'PDF Guide',
            icon: '📋',
            colorClass: 'text-[#E63946]',
            bgClass: 'bg-[#E63946]/10'
        },
        {
            title: 'Non-Tech Founder\'s Guide to Building a Tech Team',
            description: 'Everything we wish we knew before hiring our first developer.',
            type: 'eBook',
            icon: '📖',
            colorClass: 'text-blue-600',
            bgClass: 'bg-blue-600/10'
        },
        {
            title: '1LMS Partnership Case Study: ABC Coaching',
            description: 'How a Jaipur-based coaching center scaled to 5,000 students using our white-label LMS.',
            type: 'Case Study',
            icon: '📊',
            colorClass: 'text-emerald-600',
            bgClass: 'bg-emerald-600/10'
        },
        {
            title: 'Indian Sign Language: A Primer for Developers',
            description: 'Technical considerations for building ISL-inclusive applications.',
            type: 'Whitepaper',
            icon: '📄',
            colorClass: 'text-purple-600',
            bgClass: 'bg-purple-600/10'
        }
    ];

    const categories = ['All', 'Product Updates', 'EdTech Insights', 'Accessibility', 'Company News'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            <BlogHero />
            <section className="min-h-screen bg-white font-['DM_Sans']">

                {/* Tabs */}
                <div className="border-b border-slate-200 bg-slate-50">
                    <div className="max-w-[1000px] mx-auto px-12">
                        <div className="flex gap-8">
                            {[
                                { id: 'blog', label: 'Blog' },
                                { id: 'resources', label: 'Resources' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`bg-transparent border-none py-5 text-[15px] font-semibold cursor-pointer -mb-px ${activeTab === tab.id
                                        ? 'text-slate-900 border-b-2 border-[#E63946]'
                                        : 'text-slate-600 border-b-2 border-transparent'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="content-padding">
                    <div className="max-w-[1000px] mx-auto">

                        {activeTab === 'blog' && (
                            <>
                                {/* Category Filter */}
                                <div className="flex gap-3 mb-10 flex-wrap">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${selectedCategory === cat
                                                ? 'border-none bg-slate-900 text-white'
                                                : 'border border-slate-200 bg-transparent text-slate-600'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                {/* Featured Post */}
                                {selectedCategory === 'All' && (
                                    <div className="bg-gradient-to-br from-[#E63946]/10 to-slate-50 rounded-3xl p-10 mb-10 border border-[#E63946]/20 cursor-pointer">
                                        <span className="inline-block bg-[#E63946] text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                            FEATURED
                                        </span>
                                        <h2 className="text-[32px] font-semibold text-slate-900 mb-4 font-['Playfair_Display']">
                                            {blogPosts[0].title}
                                        </h2>
                                        <p className="text-[17px] text-slate-600 leading-[1.7] mb-5 max-w-[700px]">
                                            {blogPosts[0].excerpt}
                                        </p>
                                        <div className="flex gap-4 text-sm text-slate-500">
                                            <span>{blogPosts[0].category}</span>
                                            <span>•</span>
                                            <span>{blogPosts[0].date}</span>
                                            <span>•</span>
                                            <span>{blogPosts[0].readTime}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Blog Grid */}
                                <div className="grid-3 gap-6">
                                    {(selectedCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post, i) => (
                                        <article
                                            key={i}
                                            className="hover-lift bg-slate-50 rounded-[20px] overflow-hidden border border-slate-200 cursor-pointer"
                                        >
                                            <div className="h-[140px] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-5xl">
                                                {post.image}
                                            </div>
                                            <div className="p-6">
                                                <span className="text-xs text-[#E63946] font-semibold uppercase tracking-wide">
                                                    {post.category}
                                                </span>
                                                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-3 leading-[1.4]">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-slate-600 leading-[1.6] mb-4">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex gap-3 text-[13px] text-slate-500">
                                                    <span>{post.date}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                {/* Load More */}
                                <div className="text-center mt-10">
                                    <button className="bg-transparent border border-slate-200 px-8 py-3.5 rounded-lg text-[15px] font-semibold text-slate-900 cursor-pointer">
                                        Load More Articles
                                    </button>
                                </div>
                            </>
                        )}

                        {activeTab === 'resources' && (
                            <>
                                <p className="text-[17px] text-slate-600 mb-10 max-w-[600px]">
                                    Free guides, case studies, and whitepapers to help you build better educational products.
                                </p>

                                {/* Resources Grid */}
                                <div className="grid-2 gap-6 mb-10">
                                    {resources.map((resource, i) => (
                                        <div
                                            key={i}
                                            className="hover-lift bg-slate-50 rounded-[20px] p-8 border border-slate-200 cursor-pointer flex gap-5"
                                        >
                                            <div className={`w-16 h-16 rounded-2xl ${resource.bgClass} flex items-center justify-center text-[28px] flex-shrink-0`}>
                                                {resource.icon}
                                            </div>
                                            <div>
                                                <span className={`text-xs ${resource.colorClass} font-semibold uppercase tracking-wide`}>
                                                    {resource.type}
                                                </span>
                                                <h3 className="text-lg font-semibold text-slate-900 mt-1.5 mb-2">
                                                    {resource.title}
                                                </h3>
                                                <p className="text-sm text-slate-600 leading-[1.6]">
                                                    {resource.description}
                                                </p>
                                                <span className={`inline-block mt-3 text-sm ${resource.colorClass} font-medium`}>
                                                    Download →
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Newsletter CTA */}
                                <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f35] rounded-3xl p-10 text-center">
                                    <h3 className="text-[28px] font-semibold text-white mb-3 font-['Playfair_Display']">
                                        Get new resources in your inbox
                                    </h3>
                                    <p className="text-base text-white/70 mb-6">
                                        Subscribe to our newsletter for EdTech insights and product updates.
                                    </p>
                                    <div className="flex gap-3 max-w-[400px] mx-auto">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="flex-1 px-4 py-3.5 rounded-lg border border-white/10 bg-white/10 text-white text-[15px] placeholder:text-white/50"
                                        />
                                        <button className="bg-white text-slate-900 border-none px-6 py-3.5 rounded-lg text-[15px] font-semibold cursor-pointer whitespace-nowrap">
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-[13px] text-white/50 mt-4">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </section>
        </>
    );
};
