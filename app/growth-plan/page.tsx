"use client";

interface Skill {
  id: number;
  name: string;
  steps: string[];
  color: string;
  icon: string;
}

export default function GrowthPlanPage() {
  const skills: Skill[] = [
    {
      id: 1,
      name: "Public Speaking",
      steps: [
        "Join opportunities that require presentations or group speaking",
        "Practice structured speaking using outlines and timing",
        "Seek feedback from teachers and peers to improve clarity and confidence",
      ],
      color: "blue",
      icon: "🎤",
    },
    {
      id: 2,
      name: "Delegation",
      steps: [
        "Assign tasks clearly based on individual strengths",
        "Set checkpoints instead of micromanaging",
        "Reflect after projects to improve task distribution",
      ],
      color: "purple",
      icon: "👥",
    },
    {
      id: 3,
      name: "Emotional Intelligence",
      steps: [
        "Practice active listening in group settings",
        "Reflect on emotional responses during conflict",
        "Develop empathy by considering others' perspectives before responding",
      ],
      color: "green",
      icon: "💡",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-400 dark:border-blue-600",
        stepBg: "bg-blue-50 dark:bg-blue-900/50",
        stepBorder: "border-blue-300 dark:border-blue-700",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-400 dark:border-purple-600",
        stepBg: "bg-purple-50 dark:bg-purple-900/50",
        stepBorder: "border-purple-300 dark:border-purple-700",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-400 dark:border-green-600",
        stepBg: "bg-green-50 dark:bg-green-900/50",
        stepBorder: "border-green-300 dark:border-green-700",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Growth Plan
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          My strategic roadmap for continued leadership development
        </p>

        <div className="max-w-6xl mx-auto space-y-12">
          {skills.map((skill, skillIndex) => {
            const colors = getColorClasses(skill.color);
            return (
              <div key={skill.id} className="relative">
                {/* Roadmap Path Line */}
                {skillIndex < skills.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 -z-10"></div>
                )}

                {/* Skill Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative">
                  {/* Skill Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center text-3xl`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h2 className={`text-3xl md:text-4xl font-bold ${colors.text}`}>
                        Skill {skill.id}: {skill.name}
                      </h2>
                    </div>
                  </div>

                  {/* Steps Roadmap */}
                  <div className="space-y-4 ml-20">
                    {skill.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative">
                        {/* Step Connector Line */}
                        {stepIndex < skill.steps.length - 1 && (
                          <div className={`absolute left-0 top-8 bottom-0 w-0.5 ${colors.stepBorder} border-l-2 border-dashed`}></div>
                        )}

                        {/* Step Content */}
                        <div className="flex items-start gap-4">
                          {/* Step Number Circle */}
                          <div className={`flex-shrink-0 w-8 h-8 ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center font-bold ${colors.text} z-10`}>
                            {stepIndex + 1}
                          </div>

                          {/* Step Text */}
                          <div className={`flex-1 ${colors.stepBg} ${colors.stepBorder} border-2 rounded-lg p-4 shadow-md`}>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              This growth plan represents my commitment to continuous leadership development. 
              By focusing on these three key skills, I aim to become a more effective and well-rounded leader 
              who can inspire, empower, and guide others toward shared success.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

