"use client";

import { useState } from "react";

interface ScrapbookPage {
  id: number;
  title: string;
  link?: string;
  linkText?: string;
  explanation: string;
}

export default function ScrapbookPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages: ScrapbookPage[] = [
    {
      id: 1,
      title: "External Item 1: Ethical Leadership - Harvard DCE",
      link: "https://professional.dce.harvard.edu/blog/what-is-ethical-leadership-and-why-is-it-important/#Examples-of-Positive-and-Negative-Ethical-Leadership",
      linkText: "Harvard Blog on Ethical Leadership",
      explanation: "This article defines ethical leadership and describes its importance in the daily world. The author provides both positive and negative examples of ethical leadership and describes how a leader's choices directly affect trust, morale, and the culture of the organization in which they lead.\n\nAs a leader in both my professional and personal life, this article provides me with validation that integrity is vital in a leadership role. In the future, I will refer back to this article as a reminder to keep ethical decision-making at the forefront of my mind; especially when I am under the greatest amount of pressure or when I have been faced with a difficult choice.",
    },
    {
      id: 2,
      title: "External Item 2: Leadership and Teamwork on the TedTalks YouTube Channel",
      link: "https://www.youtube.com/watch?v=UwsMogSQmYI",
      linkText: "Teamwork TED Talk",
      explanation: "I picked this TED Talk because it exemplifies the human aspect of leadership, especially communication and empathy. The speaker states that an effective leader connects with people in order to inspire collaboration and not control them.\n\nThe resource is relevant to my (professional) development in that it supports my belief that true leadership is empowering people. I will utilize this resource to motivate me to focus on connections, motivation, and trust-building with members of my team.",
    },
    {
      id: 3,
      title: "External Resource 3: Medium Group Discussion/Article: The Leader's Journey",
      link: "https://medium.com/rosenfeld-media/excerpt-from-the-leaders-journey-transforming-your-leadership-to-achieve-the-extraordinary-adfcba2a07a4",
      linkText: "Leadership Excerpt - Medium",
      explanation: "The article that I chose outlined the concept of leadership as an ongoing journey of changes due to the continuous evolution of leaders that comes from their experiences. That concept rang very true to me based on my own leadership journey.\n\nThe reason this article will provide great meaning is because it will help cultivate the practice of reflection and adaptability within me as I grow into becoming a leader. Through the process of challenges, learning, and self-awareness, I will have the opportunity to develop my leadership in ways that will continue.",
    },
    {
      id: 4,
      title: "Internal Resource 1: Class Discussion Boards",
      explanation: "The reason I selected this item is that it contains written discussions and reflections about how I have looked at leadership through the concepts I have learned through various class activities throughout BOH4ME. Having the opportunity to write and engage in written discussion helped clarify how I see and understand my own leadership values and how I perceive and experience personal leadership.\n\nThe meaning of this item is to provide documentation of my own personal evolution in how I look at and think about leadership. This item will also assist in guiding my future leadership development through serving as a historical reference of how I have developed as a leader over the course of my time in BOH4ME.",
    },
    {
      id: 5,
      title: "Internal Resource 2: Personal/note reflection",
      explanation: "The personal/note reflection capture my views of my strengths and weaknesses with respect to leadership. I have had the experience of connecting the theoretical concepts to my personal experiences with regards to leadership by reviewing these personal reflections.\n\nHaving this item will encourage me to continue to reflect on my development as a leader in the future. Self-reflection is vital for my continued development as an effective leader.",
    },
  ];

  const currentPageData = pages.find((page) => page.id === currentPage) || pages[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Leadership Scrapbook
        </h1>

        {/* Notebook Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12 relative">
            {/* Notebook Spiral Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 rounded-l-lg"></div>
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600"></div>

            {/* Page Content */}
            <div className="ml-12">
              {/* Page Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-amber-400 dark:border-amber-600 pb-3">
                {currentPageData.title}
              </h2>

              {/* Link (only for first 3 pages) */}
              {currentPageData.link && (
                <div className="mb-6">
                  <a
                    href={currentPageData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {currentPageData.linkText || "View Resource"}
                  </a>
                </div>
              )}

              {/* Explanation */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {currentPageData.explanation}
                </div>
              </div>

              {/* Notebook Lines Effect */}
              <div className="mt-8 space-y-4 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-b border-gray-300 dark:border-gray-600"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentPage === 1
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                  : "bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl"
              }`}
            >
              ← Previous Page
            </button>

            <div className="flex gap-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === page.id
                      ? "bg-amber-600 dark:bg-amber-500 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to page ${page.id}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(pages.length, prev + 1))}
              disabled={currentPage === pages.length}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentPage === pages.length
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                  : "bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl"
              }`}
            >
              Next Page →
            </button>
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
            Page {currentPage} of {pages.length}
          </div>
        </div>
      </div>
    </main>
  );
}

