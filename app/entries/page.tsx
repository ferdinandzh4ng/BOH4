"use client";

import { useState } from "react";

interface Entry {
  id: number;
  title: string;
  experience: string;
  myRole: string;
  whatILearned: string;
}

export default function EntriesPage() {
  const [activeTab, setActiveTab] = useState(1);

  const entries: Entry[] = [
    {
      id: 1,
      title: "Unit 1: What is Leadership (Leadership Styles & Values)",
      experience: "Badminton Athlete/Coach\n\nFor many years, I played badminton at the elite level in a competitive environment. My efforts involved training for several workouts each week, participating in lots of tournament competitions that are stressful and competitive, requiring a lot of discipline and mental toughness. Training with players of all abilities and competitive ambitions required a high level of co-operation, as well as the ability to be resilient and work together in tough situations. Additionally, I developed significant mental toughness while participating in both training and competition held through all stages of the season, as well as losing matches and/or close matches.",
      myRole: "Even though I didn't have an official leadership role on my team, I acted from a leadership role. I assisted newer players by providing good instruction to new players and coaches, making adjustments to improve their skills, and providing support while adapting to competitive play. I also modeled the duties of a captain by my actions and being a role model as far as punctuality, work ethic, and sportsmanship were concerned, and displayed my commitment to my team by the way I conducted myself during practice and competition.",
      whatILearned: "I connect this experience with Unit 1 of our course, where we explore definitions of leadership and identify different styles of leaders. I learned that leadership is not about power or authority, but about the ability to influence others and how one's values align with the values of those who are being led by that person. The behaviours that I demonstrated were consistent with a Servant Leader and demonstrate how serving and supporting others, along with contributing to the overall success of peers, is a priority for me. I learned that an effective leader must have the qualities of a leader, as well as have the same ethical standards as a leader.",
    },
    {
      id: 2,
      title: "Unit 2: Personality & Leadership (Self-Awareness)",
      experience: "Hack the Hill Hackathon\n\nThe Hack the Hill hackathon was one with high intensity due to the necessity of maintaining good communications, working in groups and making quick decisions all while under strict timelines. Our team was made up of people with varying technical abilities and various personality types and work habits. The overall success of the project depended on the ability to work together as a team and manage stress under time constraints.",
      myRole: "As the team lead, it was my responsibility to coordinate the efforts of all members of the team in order to ensure that all tasks were assigned clearly. My responsibilities included facilitating team conversations, coordinating upcoming deadlines, and keeping focus on our objectives when difficulties arose. Additionally, I was able to alter my management techniques based on the team members' needs and allowing creative freedom while providing guidance and structure.",
      whatILearned: "The lessons learned through this experience directly relate to Unit 2 which focuses on how a person's personality will impact their ability to be an effective leader. Through my work as the team lead, I was able to identify that I am a naturally organized, goal driven person who offers stability to my team. However, I have also learned that it is important to alter my leadership style to accommodate others. As I continue to learn more about myself, I will become a more effective leader and help create an environment in which my team will feel included.",
    },
    {
      id: 3,
      title: "Unit 3: Communication & Listening",
      experience: "HackWestern Hackathon\n\nDuring my participation in HackWestern, our team had to develop a technical product over a short period of time. The pace of this environment required frequent and ongoing communication between the developers, designers, and non-technical team members. Any miscommunication could result in wasted time or a poorly executed product.",
      myRole: "As the technical representative for our team, I was responsible for clearly describing the technical decisions we made. It was my responsibility to ensure that everyone was aligned with what we were doing. I listened carefully during brainstorming sessions and discussion about feedback. I ensured that everyone knew what the others wanted to achieve and I helped clarify any confusion and summarized all the plans for the team.",
      whatILearned: "This experience directly relates to Unit 3, which focuses on communication skills and listening skills. I learned that in order to be an effective leader, the leader must listen as much as he/she speaks. If you have good communication skills, it helps with collaboration, reduces the risks of having to re-do work, and builds trust between team members, all of which contributed to the success of our team.",
    },
    {
      id: 4,
      title: "Unit 4: Teamwork & High-Performing Teams",
      experience: "Simcare AI Internship\n\nDuring my internship at Simcare AI I was in a high-performance technical environment in healthcare technology/AI. I worked as part of a multi-disciplinary team, which involved working collaboratively with developers, researchers, and managers, staying on schedule, and delivering quality work.",
      myRole: "While I was responsible for a technical component of my role, I communicated frequently to provide status updates to the group as we moved through the internship process. I also took ownership of my responsibilities and provided assistance to my coworkers as they encountered difficulties. Additionally, I was always receptive to feedback and collaborated to identify and implement ways to enhance the quality of our products.",
      whatILearned: "The experience relates directly to Unit 4 where high performing teams are studied. I learned that trust, accountability, and a willingness to communicate openly create a foundation for team success. Creating a psychologically safe environment allows team members to ask questions and learn from each other's mistakes, thereby highlighting the value of working as a team to achieve success in a professional leadership context.",
    },
    {
      id: 5,
      title: "Unit 5: Conflict Resolution",
      experience: "uOttaHack 7\n\nDuring uOttaHack 7, my team's decisions about what features were most important were contentious and led to some disagreement on where our project would go. The stress of approaching deadlines intensified this disagreement, resulting in escalating tension and a negative impact on the team's productivity.",
      myRole: "When the disagreements became tense between team members, I took the role of mediator. I helped facilitate respectful discussions between the members to clarify each person's viewpoint. Additionally, I reminded the team of our common goals to bring everyone back to the same point of focus and reach a compromise to continue forward.",
      whatILearned: "This situation ties into Unit 5, which deals with resolving conflicts. I have learned through this experience that addressing conflict in a calm and early manner will stop the conflict from becoming worse. Additionally, a leader creates a healthy environment for discussion and conflict resolution through creating respect, understanding, and collaboration for their team.",
    },
    {
      id: 6,
      title: "Unit 6: Ethical Leadership",
      experience: "Peer Tutoring\n\nI was involved in peer tutoring to help students who were overwhelmed with school or struggling academically. During my time working with students, several were stressed about performing well on exams, meeting assignment deadlines, etc. There needed to be a balance between helping a student and keeping your integrity as a student. Ethical decision-making was critical to my role as an ethical leader.",
      myRole: "As a peer tutor, my responsibility was to assist a student in learning how to understand the concept rather than give them the answers or do the work for them. I would break down the material into smaller chunks and use guiding questions to encourage independent thinking. I also maintained confidentiality regarding who I tutored and treated each student with respect, thereby creating a supportive and nonjudgmental environment in which students could ask for help.",
      whatILearned: "The ethical leadership and integrity of students are covered in Unit 6 of the course. My experience as a peer tutor relates to ethical decision-making in terms of how I learned about ethical leadership. I learned how ethical leaders must remain committed to ethical decision-making for long-term and fair growth, even if there are other easier, quicker alternatives available. I learned that by not taking a shortcut and instead pursuing my learning honestly, I earned the trust and credibility of the individuals I tutored. In conclusion, this experience has confirmed to me that to be a successful leader, you must be consistent in your demonstrations of ethical behavior, or integrity is the foundation upon which others will respect and follow you.",
    },
    {
      id: 7,
      title: "Unit 7: Leadership & Change",
      experience: "Software & Personal Projects\n\nAs I worked on several software and personal projects, I experienced many changes during the projects due to issues such as Technical Disruptions, Changing Requirements, and User Feedback. Features that appeared to be the best at one point, after receiving User Feedback, were adjusted or completely replaced due to new information coming in. This made it necessary for me to be flexible and determined to move closer to achieving my project goals.",
      myRole: "In these types of situations, I took complete responsibility for making sure that I managed my responses to changes and decided how I was going to go about adjusting my project plans. This meant I had to change timeframes, build new feature structures, and come up with new ideas to try to implement on my original projects once the initial method failed. Instead of becoming discouraged, I resolved to continue problem-solving while maintaining momentum and treating challenges as learning opportunities that would enable me to make my project better.",
      whatILearned: "These experiences corresponded to Unit 7 of this course, which discusses the role of leadership in going through change. From this experience, I learned that the ability to maintain composure, be flexible, and be open-minded when faced with an uncertain environment is a critical component to being an effective leader. The ability to lead through times of change requires strength and resolve, along with an openness to modify strategies while still keeping a clear focus on the common goals. These experiences gave me greater insight into the ability to manage uncertain situations, and underscored that being flexible is a significant leadership competency.",
    },
    {
      id: 8,
      title: "Unit 8: Future Leadership & Goal Setting",
      experience: "Future Academic & Career Goals\n\nI have been thinking about my time as a Student/Scholar and my other extra curricular activities to help me plan for my future leadership roles in Technology Innovation, as well as my future career goals in working within Collaborative Based Environments. The information I am pulling together from past experiences; analysing my strengths and identifying my weaknesses, will allow me to set clear goals for the future and have a clearer direction.",
      myRole: "As a result of this experience, I need to take control of my own leadership development by establishing academic and career goals with purpose, seeking opportunities which are challenging to me and continuing to be open to learning and growing from my mentors, peers and all those that I interact with. I want to look for all possible opportunities to be placed into leadership positions which value ethical decision making and support team collaboration as well as encouraging my continued growth/future development as a leader.",
      whatILearned: "The learning connections for this assignment are to Unit 8 Future Leadership Development and Goal Setting. I have developed a clearer understanding that leadership development is an ongoing activity that requires ongoing planning, reflection and accountability. I will become a great leader because I am developing clear personal goals that I will continue to strive to achieve throughout my academic, career and community experiences.",
    },
  ];

  const activeEntry = entries.find((entry) => entry.id === activeTab) || entries[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Entries
        </h1>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 border-b border-gray-300 dark:border-gray-700 min-w-max">
            {entries.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setActiveTab(entry.id)}
                className={`px-6 py-3 font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === entry.id
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                Unit {entry.id}
              </button>
            ))}
          </div>
        </div>

        {/* Active Entry Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            {activeEntry.title}
          </h2>

          <div className="space-y-8">
            {/* Experience Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Experience
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {activeEntry.experience}
              </div>
            </section>

            {/* My Role Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                My Role
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {activeEntry.myRole}
              </div>
            </section>

            {/* What I Learned Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                What I Learned
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {activeEntry.whatILearned}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

