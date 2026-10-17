---
title: "Generative AI vs Agentic AI: What It Means for Teaching, Learning and Honest Student Work"
date: 2026-10-17T09:00:00.000Z
slug: generative-ai-vs-agentic-ai-in-education
categories: ["My Thinking", "AI in Education"]
image: "/assets/img/sketchnote-genai-agentic-ai-education.png"
---

Almost every lecturer I meet now asks the same two questions: *"What is this new 'agentic AI' everyone is talking about?"* and *"How do I stop my students from just copying answers from ChatGPT?"* This post is my attempt to answer both in one place. At the end you will find a **mind map** and a **sketchnote** that summarise everything on one page.

## 1. Generative AI vs Agentic AI: what is the difference?

**Generative AI** is AI that *creates content* when you ask for it. You give it a prompt, it gives you an output: text, an image, code, a summary, a quiz. ChatGPT, Claude, Gemini and Copilot in their basic chat form are examples. It is **reactive**: one question, one answer, and then it waits for you again.

**Agentic AI** is AI that *acts towards a goal*. You give it an objective, and it plans the steps, uses tools (web search, files, spreadsheets, a browser, an LMS), checks its own results and keeps going until the job is done, asking you only when it needs a decision. It is **proactive** and works in a loop: *plan → act → observe → adjust*.

A simple way to remember it:

- **Generative AI = a very smart writer.** "Write me a summary of chapter 3."
- **Agentic AI = a very capable assistant.** "Prepare next week's lesson on hypothesis testing: find a real Malaysian dataset, build the R exercise, write the quiz, and upload it to my course page."

| | Generative AI | Agentic AI |
|---|---|---|
| Main job | Produce content | Complete a task or goal |
| How it works | Prompt → response | Plan → act with tools → check → repeat |
| Who drives | The human, every step | The AI, with human oversight |
| Memory and tools | Limited | Uses files, web, apps, other agents |
| Example in class | Explain the p-value in simple words | Mark 40 R scripts, give each student feedback, flag common errors |
| Main risk | Wrong or made-up answers | Wrong *actions*, done at scale |

Agentic AI is built **on top of** generative AI. The language model is the "brain"; the agent adds hands (tools), a plan and a memory.

## 2. Why do we need it in education and teaching & learning?

I don't think the question is "should we allow AI?" any more. Our students will work in offices where AI agents are normal colleagues. Our job is to prepare them for that world, and to use the same tools to teach better.

**For students**

- **A personal tutor at 2 a.m.** Students can ask "why?" ten times without feeling shy, and get explanations at their own level.
- **Learning by doing.** In statistics and R programming, AI can generate practice datasets, explain an error message, or suggest a different way to visualise data.
- **Inclusion.** Students who struggle with English, or with disabilities, get support with reading, summarising and expressing their ideas.
- **Future skills.** Knowing how to direct, question and verify AI is now a graduate attribute, just like using Excel was 20 years ago.

**For lecturers**

- **Less admin, more teaching.** Agents can draft lesson plans, build question banks, organise marks and prepare reports, so we spend more time with students.
- **Faster, richer feedback.** AI can give first-round formative feedback on drafts; the lecturer gives the final judgment.
- **Personalised learning paths.** Agentic systems can notice which student is weak in which topic and suggest targeted exercises.
- **Data-informed teaching.** Learning analytics help us see early who is at risk.

The principle I follow: **AI should increase thinking, not replace it.**

## 3. How do we prevent "copy-paste" homework without thinking?

Banning AI does not work: it is invisible, it is everywhere, and a ban teaches students to hide their use rather than use it well. A better approach is to **design assessment so that thinking is required and visible**.

**a. Make the process part of the grade**

- Ask for drafts, outlines, reflection logs or a short "how I did this" note, not only the final product.
- In R projects, grade the *script history*, comments and the explanation of each decision, not just the final output.
- Use checkpoints: proposal → draft → final, with feedback at each stage.

**b. Make tasks personal, local and current**

- Use the student's own data (a survey they ran, data from their hometown, their own experience).
- Use local Malaysian contexts, recent events or class discussions that a general AI model doesn't know well.
- Ask "why did *you* choose this?" questions that need personal judgment.

**c. Add a short oral or live component**

- A 5-minute viva: "Explain this graph. What would happen if we removed the outliers?"
- In-class writing or coding, presentations, or peer teaching.

**d. Teach AI use openly, with clear rules**

- Write an **AI-use policy** for each assignment: *No AI*, *AI for ideas only*, *AI allowed with acknowledgement*, or *AI required*.
- Ask students to **declare** how they used AI and attach their prompts.
- Design tasks where students must **critique AI output**: "Here is ChatGPT's answer to this statistics question. Find the three mistakes."

**e. Assess higher-order thinking**

Questions that ask students to evaluate, compare, apply to a new case, or create something original are much harder to copy-paste than "define" and "list" questions.

## 4. How do we detect it?

First, an honest warning: **AI detectors are not reliable enough to be used as proof.** OpenAI shut down its own AI-text classifier in 2023 because of its low accuracy; it correctly identified only about a quarter of AI-written text. Research has also shown that detectors wrongly flag writing by non-native English speakers as "AI-generated" much more often. For many of our students, English is a second language, so a detector score alone can lead to unfair accusations.

So treat a detector score as **a reason to have a conversation, not as a verdict**. Signs worth looking at:

- **Mismatch with the student's normal work.** A sudden change in writing style, vocabulary or quality compared with their in-class work.
- **Generic, "perfect but empty" writing.** Smooth language, but no specific examples, no personal voice and no link to what was taught in class.
- **Fake or wrong references.** Citations that don't exist, or don't say what is claimed. This is one of the strongest signals.
- **Content outside the syllabus.** Methods or R functions we never covered, used without understanding.
- **No process evidence.** No drafts, no version history, a whole document pasted in at once.
- **The student cannot explain it.** The most reliable test of all: ask them to walk you through their work.

If you suspect misuse, talk to the student, look at their process evidence, follow your university's academic integrity procedure, and remember that the goal is learning, not punishment.

## 5. What comes after agentic AI?

Nobody knows for sure, but these are the directions researchers and companies are talking about:

- **Multi-agent systems.** Teams of AI agents that work together, for example one agent designs a course, another checks accessibility, another builds assessments.
- **Physical / embodied AI.** Agents that act in the real world through robots, labs and devices, not only on screens.
- **Long-term, personalised AI companions.** Lifelong learning assistants that remember a learner's journey across years and institutions.
- **Toward AGI.** Systems with broader, more general abilities. This is still debated, but it is the long-term goal of several major labs.
- **Human–AI collaboration as the norm.** The focus moves from "what can AI do?" to "what should humans do?": judgment, ethics, creativity, empathy and responsibility.

For educators, the message is the same at every stage: the more capable AI becomes, the more important it is that our students can **think critically, ask good questions, check evidence and take responsibility** for what they produce.

## Summary: mind map

![Mind map: Generative AI vs Agentic AI in Education](/assets/img/mindmap-genai-agentic-ai-education.png)

## Summary: sketchnote

![Sketchnote: Generative AI and Agentic AI in teaching and learning](/assets/img/sketchnote-genai-agentic-ai-education.png)

*What is your experience with AI in your classroom? I'd love to hear how you design assessments in the age of AI.*
