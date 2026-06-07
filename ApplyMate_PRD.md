# Product Requirements Document: ApplyMate

## 1. Product Summary

ApplyMate is an AI-powered career coach agent that helps job seekers improve their resume, evaluate their fit for specific jobs, create tailored application materials, and prepare for interviews.

The product is designed for career switchers, students, new grads, and early-career professionals who need practical guidance throughout the job application process. ApplyMate should feel like a guided career workspace rather than a generic chatbot.

## 2. Product Vision

ApplyMate helps job seekers move from uncertainty to application readiness. The agent should analyze a user's career materials, identify gaps, recommend improvements, generate tailored content, and coach the user through interview preparation.

The product should reduce the time and confusion involved in applying for jobs while helping users present their experience more clearly and confidently.

## 3. Target Users

### Primary Users

- Career switchers trying to translate previous experience into a new field
- Students applying for internships or entry-level roles
- New graduates preparing for their first full-time role
- Early-career professionals seeking better job opportunities

### User Needs

- Understand whether their resume fits a target role
- Identify missing skills or keywords from a job description
- Improve resume bullets and summaries
- Generate tailored cover letters and recruiter messages
- Practice interview questions based on the role
- Receive guidance that is specific, actionable, and easy to understand

## 4. Problem Statement

Job seekers often struggle to understand why they are not getting interviews. Many users have relevant experience but do not know how to communicate it effectively, tailor their resume for a specific role, or prepare for interviews aligned with the job description.

Common pain points include:

- Generic resumes that are not aligned with specific job postings
- Weak bullet points that describe tasks instead of impact
- Difficulty identifying missing skills and keywords
- Time-consuming cover letter writing
- Unclear interview preparation
- Career switchers struggling to position transferable skills

## 5. Product Goals

ApplyMate should:

- Help users understand how well their resume matches a target job
- Provide clear resume improvement recommendations
- Rewrite resume bullets while preserving truthfulness
- Generate role-specific application materials
- Help career switchers translate previous experience into relevant language
- Prepare users for interviews using the resume and job description
- Create a simple, guided, confidence-building job application workflow

## 6. Non-Goals

ApplyMate should not:

- Automatically apply to jobs on behalf of users
- Scrape job boards without user permission
- Invent fake experience, skills, metrics, credentials, or job history
- Guarantee interviews or job offers
- Replace professional career counselors for complex career situations
- Store sensitive user data unless explicit account and privacy features are added

## 7. Core User Journey

1. User enters a target job title or career goal.
2. User uploads or pastes their resume.
3. User pastes a job description.
4. ApplyMate analyzes resume quality.
5. ApplyMate compares the resume against the job description.
6. ApplyMate identifies strengths, gaps, and missing keywords.
7. User improves selected resume bullets.
8. User generates application materials.
9. User prepares for interviews with role-specific questions and feedback.

## 8. Feature Requirements

### 8.1 Resume Analyzer

#### Description

The Resume Analyzer reviews the user's resume for clarity, structure, relevance, and impact. It should help the user understand what is working, what is weak, and what should be improved.

#### Inputs

- Resume text
- Optional resume file upload
- Target role or job title

#### Outputs

- Resume score from 0 to 100
- Summary of resume quality
- Strengths
- Weaknesses
- Suggested improvements
- Missing measurable outcomes
- Formatting or readability warnings

#### Functional Requirements

- User can paste resume text into a text area.
- User can optionally upload a resume file if file parsing is supported.
- User can enter a target role.
- System returns structured resume feedback.
- System should avoid vague advice and provide specific recommendations.

#### Acceptance Criteria

- Given a resume and target role, the system returns a resume score.
- Given a resume, the system identifies at least three strengths or effective areas.
- Given a resume, the system identifies at least three improvement opportunities.
- Feedback is organized into clear sections.

### 8.2 Job Fit Score

#### Description

The Job Fit Score compares the user's resume against a specific job description and shows how well the candidate appears to match the role.

#### Inputs

- Resume text
- Job description
- Optional company name
- Optional target job title

#### Outputs

- Job fit score as a percentage
- Matching skills
- Missing skills or keywords
- Experience gaps
- Recommended priority improvements
- Short explanation of the score

#### Functional Requirements

- User can paste a job description.
- System compares resume content with job requirements.
- System highlights matched and missing keywords.
- System recommends which gaps matter most.

#### Acceptance Criteria

- Given a resume and job description, the system returns a job fit score.
- System lists matched skills found in the resume.
- System lists missing keywords or requirements from the job description.
- System provides recommendations that can be used to improve the resume.

### 8.3 Resume Bullet Rewriter

#### Description

The Resume Bullet Rewriter improves weak resume bullets and aligns them with the target role while preserving accuracy.

#### Inputs

- Original resume bullet
- Target role
- Optional job description
- Rewrite style

#### Rewrite Styles

- Concise
- Achievement-focused
- ATS-optimized
- Professional

#### Outputs

- Improved bullet
- Explanation of why the rewrite is stronger
- Optional alternate versions

#### Functional Requirements

- User can paste or select a resume bullet.
- User can choose a rewrite style.
- System rewrites the bullet without inventing unsupported facts.
- System explains the improvement in plain language.

#### Acceptance Criteria

- Given a weak bullet, the system returns an improved bullet.
- System does not add fake metrics, tools, job titles, or achievements.
- System explains what changed and why it improves the resume.

### 8.4 Career Changer Translator

#### Description

The Career Changer Translator helps users reposition previous experience for a new target role by identifying transferable skills and translating them into role-relevant language.

#### Inputs

- Current or previous background
- Target role
- Resume experience

#### Outputs

- Transferable skills
- Suggested positioning
- Role-relevant language
- Resume improvement suggestions
- Recommended learning or project gaps

#### Functional Requirements

- User can describe their current background.
- User can enter a target role.
- System maps past experience to relevant skills for the target role.
- System suggests language the user can use in their resume or interview.

#### Acceptance Criteria

- Given a current background and target role, the system returns transferable skills.
- System provides at least three ways to position previous experience.
- System avoids overstating qualifications.

### 8.5 Application Pack Generator

#### Description

The Application Pack Generator creates job-specific application materials based on the user's resume, target role, and job description.

#### Inputs

- Resume text
- Job description
- Target role
- Optional company name
- Tone preference

#### Tone Options

- Professional
- Confident
- Warm
- Concise

#### Outputs

- Tailored resume summary
- Cover letter
- Recruiter outreach message
- LinkedIn About section suggestion

#### Functional Requirements

- User can select a tone.
- System generates a tailored cover letter.
- System generates a short recruiter message.
- System generates a resume summary aligned with the job.
- System keeps content truthful and grounded in the user's resume.

#### Acceptance Criteria

- Given a resume and job description, the system generates a cover letter.
- Given a resume and target role, the system generates a tailored resume summary.
- Given a target company or role, the system generates a short outreach message.
- Generated content does not claim experience not found in the user's inputs.

### 8.6 Mock Interview Coach

#### Description

The Mock Interview Coach prepares the user for interviews by generating likely questions and giving feedback on user answers.

#### Inputs

- Resume text
- Job description
- Target role
- User's interview answer

#### Outputs

- Behavioral interview questions
- Technical or role-specific questions
- "Tell me about yourself" prompt
- STAR answer guidance
- Feedback on user answers
- Improved answer example

#### Functional Requirements

- System generates interview questions based on the job description.
- User can type an answer to a question.
- System evaluates clarity, relevance, and specificity.
- System suggests a stronger version of the answer.

#### Acceptance Criteria

- Given a resume and job description, the system generates at least five interview questions.
- Given a user answer, the system provides feedback.
- Feedback includes at least one specific improvement suggestion.
- System can provide a stronger sample answer using the STAR framework.

## 9. AI Agent Behavior

ApplyMate should behave like a guided AI agent, not a passive chatbot. It should move users through the job application process and recommend the next best action.

### Agent Responsibilities

- Ask for missing context when needed
- Analyze user inputs
- Compare resume content against role requirements
- Generate structured recommendations
- Rewrite content with truthfulness constraints
- Recommend next steps
- Maintain a helpful and encouraging tone

### Agent Guardrails

- Do not invent experience, degrees, certifications, employers, metrics, or tools.
- If information is missing, ask the user to provide it or mark the recommendation as a suggestion.
- Avoid keyword stuffing.
- Do not provide discriminatory or legally risky hiring advice.
- Do not guarantee employment outcomes.
- Make clear when content should be reviewed by the user before submission.

## 10. Information Architecture

ApplyMate should use a dashboard layout with a persistent left-side menu and a main workspace.

### Menu Items

1. Dashboard
2. Resume Analyzer
3. Job Match
4. Bullet Rewriter
5. Career Translator
6. Application Pack
7. Interview Coach
8. Settings

## 11. UI Requirements

### 11.1 Dashboard

#### Purpose

The Dashboard gives users a high-level view of their application readiness and recommended next action.

#### UI Components

- Header with app name and current target role
- Resume Score card
- Job Fit Score card
- Missing Keywords card
- Recommended Next Step card
- Recent Outputs section
- Primary CTA: "Start Review" or "Continue"

### 11.2 Resume Analyzer Screen

#### UI Components

- Resume text area
- Optional file upload area
- Target role input
- Analyze Resume button
- Resume Score result card
- Strengths list
- Weaknesses list
- Recommendations list

### 11.3 Job Match Screen

#### UI Components

- Job description text area
- Company name input
- Target job title input
- Check Job Fit button
- Job Fit Score card
- Matched Skills section
- Missing Keywords section
- Priority Improvements section

### 11.4 Bullet Rewriter Screen

#### UI Components

- Original bullet input
- Rewrite style selector
- Target role input
- Rewrite Bullet button
- Original vs Improved comparison
- Explanation panel
- Copy button

### 11.5 Career Translator Screen

#### UI Components

- Current background input
- Target role input
- Experience text area
- Translate Experience button
- Transferable Skills section
- Suggested Positioning section
- Recommended Project or Learning Gaps section

### 11.6 Application Pack Screen

#### UI Components

- Tone selector
- Company name input
- Generate Application Pack button
- Resume Summary output
- Cover Letter output
- Recruiter Message output
- LinkedIn About output
- Copy buttons for each output

### 11.7 Interview Coach Screen

#### UI Components

- Generate Questions button
- Interview question list
- Selected question detail
- User answer text area
- Get Feedback button
- Feedback section
- Improved STAR Answer section

### 11.8 Settings Screen

#### UI Components

- Target role
- Experience level
- Preferred tone
- Career goal
- Optional industry preference

## 12. Data Inputs and State

ApplyMate should manage the following user-provided data during a session:

- Resume text
- Target role
- Job description
- Company name
- Selected resume bullet
- Current background
- Tone preference
- Interview answers

For an MVP, this data can be stored in local application state. Persistent user accounts and database storage are optional future enhancements.

## 13. Suggested Output Format

AI responses should be structured and easy to render in the UI. JSON-style structured outputs are recommended for consistent display.

Example structure:

```json
{
  "score": 78,
  "summary": "Your resume shows strong project experience but needs clearer business impact.",
  "strengths": ["Clear education section", "Relevant technical skills", "Good project examples"],
  "gaps": ["Missing metrics", "Limited role-specific keywords", "Weak professional summary"],
  "recommendations": ["Add measurable outcomes", "Mention SQL if applicable", "Rewrite project bullets"]
}
```

## 14. Success Metrics

### User Value Metrics

- User receives a resume score
- User receives a job fit score
- User identifies missing keywords
- User improves at least one resume bullet
- User generates at least one application material
- User practices at least one interview question

### Product Experience Metrics

- Time to first useful insight under 60 seconds
- High completion rate from resume analysis to job match
- User can copy generated content easily
- Outputs are specific and actionable
- User understands the next recommended action

## 15. Accessibility and UX Requirements

- Use clear labels for all inputs and buttons.
- Use readable font sizes and strong contrast.
- Avoid cluttered screens.
- Keep AI outputs organized into sections.
- Provide loading states when the agent is generating content.
- Provide copy buttons for generated text.
- Provide empty states that explain what the user should enter.
- Make the interface responsive for desktop and tablet.

## 16. Privacy and Trust Requirements

ApplyMate handles sensitive career information. The product should clearly communicate that users should review all generated content before using it.

Recommended trust principles:

- Be transparent that AI suggestions may need editing.
- Do not store resumes unless the user explicitly saves them.
- Do not share resume or job data with third parties.
- Avoid generating dishonest application content.
- Keep all recommendations grounded in user-provided information.

## 17. Future Enhancements

Potential future features include:

- Account creation and saved application history
- Job tracker dashboard
- Resume file export
- LinkedIn profile optimization
- Job board integrations
- Voice-based mock interview practice
- Calendar reminders for follow-ups
- Networking message generator
- Portfolio project recommender
- Skill gap learning plan

## 18. Deployment Requirement

The application should be designed so it can be deployed on Vercel.

The implementation approach, framework, libraries, backend structure, and AI integration choices should be selected by Codex during the build based on the project needs and best available fit.
