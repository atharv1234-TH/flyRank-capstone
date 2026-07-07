import datetime

class AIAgent:
    def __init__(self, name):
        self.name = name
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)
        print(f"✅ Task added: {task}")

    def show_tasks(self):
        print(f"\n--- {self.name}'s Task List ---")
        for i, task in enumerate(self.tasks, 1):
            print(f"{i}. {task}")
        if not self.tasks:
            print("No tasks yet!")

    def ai_suggest(self, goal):
        print(f"\n🤖 AI Suggestion for '{goal}':")
        suggestions = {
            "study": "Use 4D Framework: Delegate research to AI, Describe topic clearly, Discern sources",
            "project": "Break project into small tasks. Use AI for code, design, and testing.",
            "content": "Ask AI for 5 ideas, pick 2, refine with AI, then review manually."
        }
        print(suggestions.get(goal, "Use Delegation, Description, Discernment, Diligence!"))

if __name__ == "__main__":
    agent = AIAgent("Atharv's AI Agent")
    print(f"Agent Started at {datetime.datetime.now()}")
    agent.add_task("Complete FlyRank Impact Project")
    agent.add_task("Build Personal Website")
    agent.show_tasks()
    agent.ai_suggest("study")