/* ===== AI TOOLS DATA ===== */
const AI_TOOLS = [
    // --- Language Models ---
    {
        id: 1, name: "ChatGPT", icon: "🤖", cat: "llm",
        desc: "OpenAI's flagship conversational AI. Most versatile assistant for writing, coding, analysis, and complex reasoning.",
        url: "https://chatgpt.com", domain: "chatgpt.com",
        badge: "freemium", tags: ["GPT-4o", "Reasoning", "Coding"],
        featured: true, trending: 1,
        highlights: ["Advanced reasoning with o1 model", "GPT-4o for vision & voice", "Plugin ecosystem"],
        score: "9.8", glowColor: "#10b981"
    },
    {
        id: 2, name: "Claude", icon: "🧬", cat: "llm",
        desc: "Anthropic's safety-focused AI with exceptional writing quality, long context, and nuanced reasoning capabilities.",
        url: "https://claude.ai", domain: "claude.ai",
        badge: "freemium", tags: ["Safety", "Long Context", "Writing"],
        featured: true, trending: 2,
        highlights: ["200K token context window", "Superior writing quality", "Constitutional AI safety"],
        score: "9.6", glowColor: "#f59e0b"
    },
    {
        id: 3, name: "Gemini", icon: "✨", cat: "llm",
        desc: "Google's multimodal AI model — natively understands text, images, audio, video, and code.",
        url: "https://gemini.google.com", domain: "gemini.google.com",
        badge: "freemium", tags: ["Multimodal", "Google", "Search"],
        featured: false, trending: 3,
        score: "9.4"
    },
    {
        id: 4, name: "Perplexity AI", icon: "🔭", cat: "search",
        desc: "AI-powered answer engine with real-time web search. Get cited, accurate answers with source references.",
        url: "https://perplexity.ai", domain: "perplexity.ai",
        badge: "freemium", tags: ["Search", "Citations", "Real-time"],
        featured: false, trending: 4, score: "9.2"
    },
    {
        id: 5, name: "Meta AI (Llama)", icon: "🦙", cat: "llm",
        desc: "Meta's open-source Llama models powering a wide range of AI applications. Free to use and self-host.",
        url: "https://meta.ai", domain: "meta.ai",
        badge: "free", tags: ["Open Source", "Meta", "Llama 3"],
        featured: false, score: "8.9"
    },
    {
        id: 6, name: "Mistral AI", icon: "💨", cat: "llm",
        desc: "European AI company offering powerful open-weight models with blazing-fast inference and strong coding ability.",
        url: "https://mistral.ai", domain: "mistral.ai",
        badge: "freemium", tags: ["Open Weight", "Fast", "EU"],
        featured: false, score: "8.7"
    },
    {
        id: 7, name: "Grok (xAI)", icon: "⚡", cat: "llm",
        desc: "Elon Musk's xAI model with real-time X (Twitter) data integration and uncensored responses.",
        url: "https://grok.x.ai", domain: "grok.x.ai",
        badge: "paid", tags: ["Real-time", "X/Twitter", "Uncensored"],
        featured: false, score: "8.5"
    },
    {
        id: 8, name: "Cohere", icon: "🌐", cat: "llm",
        desc: "Enterprise-grade NLP models for semantic search, summarization, and text classification at scale.",
        url: "https://cohere.com", domain: "cohere.com",
        badge: "freemium", tags: ["Enterprise", "NLP", "Search"],
        featured: false, score: "8.3"
    },

    // --- Image Generation ---
    {
        id: 9, name: "Midjourney", icon: "🎨", cat: "image",
        desc: "The gold standard of AI image generation. Creates breathtaking, artistic, photo-realistic imagery from text prompts.",
        url: "https://midjourney.com", domain: "midjourney.com",
        badge: "paid", tags: ["Art", "Photorealistic", "Discord"],
        featured: true, trending: 5,
        highlights: ["V7 model with insane detail", "Unique artistic styles", "Style reference system"],
        score: "9.7", glowColor: "#8b5cf6"
    },
    {
        id: 10, name: "DALL·E 3", icon: "🖼️", cat: "image",
        desc: "OpenAI's image generator with superior prompt understanding. Integrated directly into ChatGPT Plus.",
        url: "https://openai.com/dall-e-3", domain: "openai.com",
        badge: "paid", tags: ["OpenAI", "Prompt Fidelity", "ChatGPT"],
        featured: false, score: "9.0"
    },
    {
        id: 11, name: "Stable Diffusion", icon: "🌊", cat: "image",
        desc: "Open-source image generation model you can run locally or use via APIs. Full creative control.",
        url: "https://stability.ai", domain: "stability.ai",
        badge: "free", tags: ["Open Source", "Local", "Custom"],
        featured: false, score: "8.8"
    },
    {
        id: 12, name: "Adobe Firefly", icon: "🦋", cat: "image",
        desc: "Adobe's commercially-safe generative AI trained on licensed content. Integrates with Creative Cloud.",
        url: "https://firefly.adobe.com", domain: "firefly.adobe.com",
        badge: "freemium", tags: ["Commercial", "Adobe", "Design"],
        featured: false, score: "8.6"
    },
    {
        id: 13, name: "Ideogram", icon: "💡", cat: "image",
        desc: "AI image generator with remarkable text-in-image capabilities. Perfect for logos, posters, and typography.",
        url: "https://ideogram.ai", domain: "ideogram.ai",
        badge: "freemium", tags: ["Text-in-Image", "Logo", "Typography"],
        featured: false, score: "8.7"
    },
    {
        id: 14, name: "Leonardo.AI", icon: "🦁", cat: "image",
        desc: "Fine-tuned image generation with custom model training, motion, and image-to-image features.",
        url: "https://leonardo.ai", domain: "leonardo.ai",
        badge: "freemium", tags: ["Custom Models", "Fine-tune", "Game Art"],
        featured: false, score: "8.5"
    },
    {
        id: 15, name: "Flux", icon: "⚛️", cat: "image",
        desc: "Black Forest Labs' new state-of-the-art image model. Outperforms Stable Diffusion with better details.",
        url: "https://blackforestlabs.ai", domain: "blackforestlabs.ai",
        badge: "freemium", tags: ["SOTA", "Fast", "High Quality"],
        featured: false, score: "9.1", badge: "new"
    },
    {
        id: 16, name: "Canva AI", icon: "🎭", cat: "design",
        desc: "AI-powered design tool within Canva. Generate images, expand layouts, and auto-design graphics.",
        url: "https://canva.com", domain: "canva.com",
        badge: "freemium", tags: ["Design", "Templates", "Easy"],
        featured: false, score: "8.4"
    },

    // --- Video AI ---
    {
        id: 17, name: "Runway ML", icon: "🎬", cat: "video",
        desc: "Professional AI video generation and editing. Text-to-video, image-to-video, and advanced video editing tools.",
        url: "https://runwayml.com", domain: "runwayml.com",
        badge: "freemium", tags: ["Text-to-Video", "Video Edit", "Pro"],
        featured: true, trending: 6,
        highlights: ["Gen-3 Alpha Turbo", "Video-to-video transformation", "Green screen AI"],
        score: "9.3", glowColor: "#ec4899"
    },
    {
        id: 18, name: "Sora (OpenAI)", icon: "🌅", cat: "video",
        desc: "OpenAI's revolutionary text-to-video model producing cinematic, minute-long videos with physics understanding.",
        url: "https://sora.com", domain: "sora.com",
        badge: "paid", tags: ["Cinematic", "OpenAI", "1080p"],
        featured: false, score: "9.5", badge: "new"
    },
    {
        id: 19, name: "Kling AI", icon: "🎥", cat: "video",
        desc: "Kuaishou's AI video generator producing smooth, high-quality videos up to 2 minutes long.",
        url: "https://klingai.com", domain: "klingai.com",
        badge: "freemium", tags: ["Long Video", "Smooth", "Chinese"],
        featured: false, score: "8.9"
    },
    {
        id: 20, name: "Luma Dream Machine", icon: "🌙", cat: "video",
        desc: "Fast, high-quality video generation from text or image prompts with fluid motion.",
        url: "https://lumalabs.ai", domain: "lumalabs.ai",
        badge: "freemium", tags: ["Fast", "Image-to-Video", "Fluid"],
        featured: false, score: "8.8"
    },
    {
        id: 21, name: "Pika Labs", icon: "⚡", cat: "video",
        desc: "Pika 2.0 enables text-to-video and image animation with creative camera controls.",
        url: "https://pika.art", domain: "pika.art",
        badge: "freemium", tags: ["Animate", "Camera", "Creative"],
        featured: false, score: "8.6"
    },
    {
        id: 22, name: "Synthesia", icon: "🎙️", cat: "avatar",
        desc: "Create professional AI avatar videos without cameras. Used by 50,000+ companies for training & marketing.",
        url: "https://synthesia.io", domain: "synthesia.io",
        badge: "paid", tags: ["Avatar", "Training", "Enterprise"],
        featured: false, score: "9.0"
    },
    {
        id: 23, name: "HeyGen", icon: "🧑‍💼", cat: "avatar",
        desc: "AI video generator using realistic digital humans. Perfect for marketing, personalized outreach videos.",
        url: "https://heygen.com", domain: "heygen.com",
        badge: "freemium", tags: ["Avatar", "Marketing", "Personalized"],
        featured: false, trending: 8, score: "8.9"
    },
    {
        id: 24, name: "Descript", icon: "✂️", cat: "video",
        desc: "Edit audio and video by editing text transcripts. Remove filler words, clone your voice, multi-track.",
        url: "https://descript.com", domain: "descript.com",
        badge: "freemium", tags: ["Transcript Edit", "Podcast", "Voice Clone"],
        featured: false, score: "8.7"
    },

    // --- Code AI ---
    {
        id: 25, name: "GitHub Copilot", icon: "👾", cat: "code",
        desc: "AI pair programmer inside VS Code, JetBrains, and more. Suggests code, completes functions, explains code.",
        url: "https://github.com/features/copilot", domain: "github.com",
        badge: "paid", tags: ["IDE", "VS Code", "GitHub"],
        featured: true, trending: 7,
        highlights: ["Context-aware code completion", "Natural language to code", "Multi-language support"],
        score: "9.5", glowColor: "#06b6d4"
    },
    {
        id: 26, name: "Cursor", icon: "📝", cat: "code",
        desc: "AI-first code editor built on VS Code. Chat with your codebase, auto-fix bugs, and generate full features.",
        url: "https://cursor.sh", domain: "cursor.sh",
        badge: "freemium", tags: ["AI Editor", "Codebase Chat", "VSCode"],
        featured: false, score: "9.6"
    },
    {
        id: 27, name: "Windsurf (Codeium)", icon: "🏄", cat: "code",
        desc: "Codeium's AI-powered IDE with Cascade — an agentic AI that understands your entire codebase flow.",
        url: "https://windsurf.com", domain: "windsurf.com",
        badge: "freemium", tags: ["Agentic", "Codebase", "Flow"],
        featured: false, score: "9.3"
    },
    {
        id: 28, name: "Bolt.new", icon: "⚡", cat: "code",
        desc: "AI-powered full-stack web app builder in the browser. Build, run, deploy complete apps from a prompt.",
        url: "https://bolt.new", domain: "bolt.new",
        badge: "freemium", tags: ["Full-Stack", "Deploy", "Browser"],
        featured: false, score: "9.1", badge: "new"
    },
    {
        id: 29, name: "v0 by Vercel", icon: "▲", cat: "code",
        desc: "Generates UI component code (React/Tailwind) from text descriptions. Instantly deploy to Vercel.",
        url: "https://v0.dev", domain: "v0.dev",
        badge: "freemium", tags: ["UI", "React", "Vercel"],
        featured: false, score: "9.0"
    },
    {
        id: 30, name: "Replit AI", icon: "🔷", cat: "code",
        desc: "AI-powered online IDE with Ghostwriter — code completion, debugging, and deployment in one place.",
        url: "https://replit.com", domain: "replit.com",
        badge: "freemium", tags: ["Online IDE", "Deploy", "Beginner"],
        featured: false, score: "8.6"
    },
    {
        id: 31, name: "Tabnine", icon: "🔮", cat: "code",
        desc: "Privacy-focused AI code assistant. Can run entirely locally for enterprises with sensitive codebases.",
        url: "https://tabnine.com", domain: "tabnine.com",
        badge: "freemium", tags: ["Private", "Local", "Enterprise"],
        featured: false, score: "8.3"
    },

    // --- Audio & Voice ---
    {
        id: 32, name: "ElevenLabs", icon: "🎵", cat: "audio",
        desc: "Ultra-realistic AI voice synthesis and cloning. Industry-leading emotion, pacing, and multilingual voice generation.",
        url: "https://elevenlabs.io", domain: "elevenlabs.io",
        badge: "freemium", tags: ["Voice Clone", "TTS", "Multilingual"],
        featured: true, trending: 9,
        highlights: ["Voice cloning in 1 minute", "29 languages supported", "Dubbing & translation"],
        score: "9.8", glowColor: "#f59e0b"
    },
    {
        id: 33, name: "Suno AI", icon: "🎸", cat: "audio",
        desc: "Generate full songs with lyrics, vocals, and instrumentals from a simple text prompt.",
        url: "https://suno.ai", domain: "suno.ai",
        badge: "freemium", tags: ["Music Gen", "Lyrics", "Full Song"],
        featured: false, score: "9.2"
    },
    {
        id: 34, name: "Udio", icon: "🎹", cat: "audio",
        desc: "Text-to-music AI that creates studio-quality tracks across any genre with extended generation.",
        url: "https://udio.com", domain: "udio.com",
        badge: "freemium", tags: ["Music", "Studio Quality", "Genres"],
        featured: false, score: "9.0"
    },
    {
        id: 35, name: "Murf AI", icon: "🎤", cat: "audio",
        desc: "Professional AI voiceover for presentations, videos, and e-learning with 120+ realistic voices.",
        url: "https://murf.ai", domain: "murf.ai",
        badge: "freemium", tags: ["Voiceover", "Video", "eLearning"],
        featured: false, score: "8.7"
    },
    {
        id: 36, name: "Whisper (OpenAI)", icon: "👂", cat: "audio",
        desc: "Open-source speech recognition AI with near-human accuracy. Transcribe audio in 99 languages.",
        url: "https://openai.com/research/whisper", domain: "openai.com",
        badge: "free", tags: ["Transcription", "Open Source", "99 Languages"],
        featured: false, score: "9.3"
    },

    // --- Writing ---
    {
        id: 37, name: "Jasper AI", icon: "✍️", cat: "writing",
        desc: "AI writing assistant tailored for marketing content — blogs, ads, emails, and social media copy.",
        url: "https://jasper.ai", domain: "jasper.ai",
        badge: "paid", tags: ["Marketing", "SEO", "Campaigns"],
        featured: false, score: "8.5"
    },
    {
        id: 38, name: "Copy.ai", icon: "📋", cat: "writing",
        desc: "Generate marketing copy, product descriptions, and workflows with AI-powered GTM tools.",
        url: "https://copy.ai", domain: "copy.ai",
        badge: "freemium", tags: ["Copy", "Marketing", "GTM"],
        featured: false, score: "8.3"
    },
    {
        id: 39, name: "Notion AI", icon: "📓", cat: "productivity",
        desc: "AI embedded in Notion — summarize notes, generate content, translate, and build databases from prompts.",
        url: "https://notion.so/product/ai", domain: "notion.so",
        badge: "paid", tags: ["Notes", "Productivity", "Database"],
        featured: false, score: "8.7"
    },
    {
        id: 40, name: "Grammarly", icon: "📖", cat: "writing",
        desc: "AI-powered writing assistant for grammar, style, tone, and plagiarism across the web.",
        url: "https://grammarly.com", domain: "grammarly.com",
        badge: "freemium", tags: ["Grammar", "Tone", "Chrome"],
        featured: false, score: "8.9"
    },

    // --- Productivity ---
    {
        id: 41, name: "Otter.ai", icon: "🦦", cat: "productivity",
        desc: "Real-time AI meeting transcription, summaries, and notes. Integrates with Zoom, Teams, and Meet.",
        url: "https://otter.ai", domain: "otter.ai",
        badge: "freemium", tags: ["Meeting Notes", "Transcription", "Zoom"],
        featured: false, score: "8.8"
    },
    {
        id: 42, name: "Zapier AI", icon: "⚙️", cat: "productivity",
        desc: "AI-powered automation to connect 7,000+ apps. Build zaps from natural language descriptions.",
        url: "https://zapier.com", domain: "zapier.com",
        badge: "freemium", tags: ["Automation", "No-Code", "5000+ Apps"],
        featured: false, score: "8.6"
    },
    {
        id: 43, name: "Gamma App", icon: "📊", cat: "productivity",
        desc: "AI presentation builder. Creates polished slides, docs, and web pages from a single prompt.",
        url: "https://gamma.app", domain: "gamma.app",
        badge: "freemium", tags: ["Presentations", "Slides", "Docs"],
        featured: false, trending: 10, score: "9.0"
    },
    {
        id: 44, name: "Beautiful.ai", icon: "🎞️", cat: "productivity",
        desc: "Smart slide design AI that auto-formats your presentations as you type — always looks professional.",
        url: "https://beautiful.ai", domain: "beautiful.ai",
        badge: "paid", tags: ["Slides", "Auto-Design", "Teams"],
        featured: false, score: "8.4"
    },

    // --- Research ---
    {
        id: 45, name: "Elicit", icon: "📚", cat: "research",
        desc: "AI research assistant that searches academic papers and extracts key findings automatically.",
        url: "https://elicit.org", domain: "elicit.org",
        badge: "freemium", tags: ["Academic", "Papers", "Literature"],
        featured: false, score: "8.9"
    },
    {
        id: 46, name: "Consensus", icon: "🔬", cat: "research",
        desc: "Search 200M+ science papers and get AI-synthesized answers backed by peer-reviewed research.",
        url: "https://consensus.app", domain: "consensus.app",
        badge: "freemium", tags: ["Science", "Peer-Reviewed", "Evidence"],
        featured: false, score: "8.7"
    },
    {
        id: 47, name: "You.com", icon: "🌍", cat: "search",
        desc: "Privacy-first AI search engine with cited answers, images, and coding assistants built-in.",
        url: "https://you.com", domain: "you.com",
        badge: "free", tags: ["Privacy", "Search", "Coding"],
        featured: false, score: "8.4"
    },
    {
        id: 48, name: "Krea AI", icon: "🌈", cat: "design",
        desc: "Real-time AI image generation and enhancement. Create patterns, textures, and upscale images.",
        url: "https://krea.ai", domain: "krea.ai",
        badge: "freemium", tags: ["Real-time", "Upscale", "Creative"],
        featured: false, score: "8.8"
    },
    {
        id: 49, name: "Poe by Quora", icon: "🐦", cat: "llm",
        desc: "Access Claude, GPT-4, Llama, Gemini and more from one unified interface with free credits daily.",
        url: "https://poe.com", domain: "poe.com",
        badge: "freemium", tags: ["Multi-Model", "Free Credits", "All AIs"],
        featured: false, score: "8.6"
    },
    {
        id: 50, name: "Character.AI", icon: "🎭", cat: "llm",
        desc: "Chat with AI characters — custom personas, historical figures, fictional heroes, and create your own.",
        url: "https://character.ai", domain: "character.ai",
        badge: "freemium", tags: ["Characters", "Roleplay", "Creative"],
        featured: false, score: "8.2"
    },

    // --- AI Automation ---
    {
        id: 51, name: "Make.com", icon: "🔗", cat: "automation",
        desc: "Visual drag-and-drop automation platform — connect 1500+ apps, build complex multi-step workflows with AI logic nodes.",
        url: "https://make.com", domain: "make.com",
        badge: "freemium", tags: ["Visual", "Workflows", "No-Code"],
        featured: true, trending: 11,
        highlights: ["1500+ app integrations", "AI scenario builder", "Real-time execution logs"],
        score: "9.3", glowColor: "#6366f1"
    },
    {
        id: 52, name: "n8n", icon: "🕸️", cat: "automation",
        desc: "Open-source workflow automation with self-hosting option. 400+ integrations, code when needed, AI-native flows.",
        url: "https://n8n.io", domain: "n8n.io",
        badge: "free", tags: ["Open Source", "Self-host", "Developer"],
        featured: false, score: "9.1"
    },
    {
        id: 53, name: "Zapier", icon: "⚡", cat: "automation",
        desc: "No-code automation powerhouse connecting 7,000+ apps. AI Zap builder creates workflows from a plain text description.",
        url: "https://zapier.com", domain: "zapier.com",
        badge: "freemium", tags: ["7000+ Apps", "No-Code", "AI Builder"],
        featured: false, score: "9.0"
    },
    {
        id: 54, name: "Activepieces", icon: "🧩", cat: "automation",
        desc: "Open-source Zapier alternative with AI-powered automation builder. Self-hostable, privacy-first business automation.",
        url: "https://activepieces.com", domain: "activepieces.com",
        badge: "free", tags: ["Open Source", "Privacy", "Zapier Alternative"],
        featured: false, score: "8.6"
    },
    {
        id: 55, name: "Bardeen AI", icon: "🪄", cat: "automation",
        desc: "AI browser automation — scrape web data, automate repetitive tasks, and build no-code bots right in Chrome.",
        url: "https://bardeen.ai", domain: "bardeen.ai",
        badge: "freemium", tags: ["Browser", "Scraping", "Chrome"],
        featured: false, score: "8.7"
    },
    {
        id: 56, name: "Relay.app", icon: "🔄", cat: "automation",
        desc: "Human-in-the-loop automation platform combining AI with team approvals for sensitive business workflows.",
        url: "https://relay.app", domain: "relay.app",
        badge: "freemium", tags: ["Human-in-loop", "Teams", "Approvals"],
        featured: false, score: "8.5"
    },
    {
        id: 57, name: "Stack AI", icon: "🏗️", cat: "automation",
        desc: "No-code AI workflow builder for enterprises — connect LLMs, databases, and APIs without writing code.",
        url: "https://stack-ai.com", domain: "stack-ai.com",
        badge: "freemium", tags: ["Enterprise", "LLM Chains", "APIs"],
        featured: false, score: "8.8"
    },
    {
        id: 58, name: "Relevance AI", icon: "🤝", cat: "automation",
        desc: "Build and deploy AI workers that automate sales, support, and ops tasks with a no-code agent builder.",
        url: "https://relevanceai.com", domain: "relevanceai.com",
        badge: "freemium", tags: ["AI Workers", "Sales", "No-Code"],
        featured: false, score: "9.0"
    },
    {
        id: 59, name: "Pipedream", icon: "🪣", cat: "automation",
        desc: "Developer-first integration platform — connect APIs, run code in the cloud, and trigger AI workflows on any event.",
        url: "https://pipedream.com", domain: "pipedream.com",
        badge: "freemium", tags: ["Developer", "APIs", "Event-driven"],
        featured: false, score: "8.7"
    },
    {
        id: 60, name: "Lindy AI", icon: "💼", cat: "automation",
        desc: "AI employees that work for you — automate email triage, meeting scheduling, CRM updates, and customer support.",
        url: "https://lindy.ai", domain: "lindy.ai",
        badge: "freemium", tags: ["AI Employee", "Email", "CRM"],
        featured: false, score: "8.9", badge: "new"
    },

    // --- AI Agents ---
    {
        id: 61, name: "AutoGPT", icon: "🤖", cat: "agent",
        desc: "The original AI agent. Autonomously browses the web, writes code, and executes multi-step tasks without hand-holding.",
        url: "https://agpt.co", domain: "agpt.co",
        badge: "free", tags: ["Autonomous", "Web Browse", "Open Source"],
        featured: true, trending: 12,
        highlights: ["Runs tasks end-to-end autonomously", "Web & file system access", "Fully open-source, self-hostable"],
        score: "9.0", glowColor: "#10b981"
    },
    {
        id: 62, name: "Devin AI", icon: "👨‍💻", cat: "agent",
        desc: "World's first fully autonomous AI software engineer by Cognition. Plans, codes, debugs, and deploys complete projects.",
        url: "https://cognition.ai", domain: "cognition.ai",
        badge: "paid", tags: ["Coding Agent", "DevOps", "Autonomous"],
        featured: true, trending: 13,
        highlights: ["Passes real engineering interviews", "End-to-end software development", "Fixes bugs without supervision"],
        score: "9.5", glowColor: "#ec4899"
    },
    {
        id: 63, name: "CrewAI", icon: "👥", cat: "agent",
        desc: "Framework for orchestrating multiple AI agents that collaborate, delegate, and work together as a team to solve tasks.",
        url: "https://crewai.com", domain: "crewai.com",
        badge: "free", tags: ["Multi-Agent", "Framework", "Collaboration"],
        featured: false, score: "9.2"
    },
    {
        id: 64, name: "LangChain", icon: "⛓️", cat: "agent",
        desc: "The most popular framework for building LLM-powered applications, agents, and RAG pipelines with 100+ integrations.",
        url: "https://langchain.com", domain: "langchain.com",
        badge: "free", tags: ["Framework", "RAG", "Developers"],
        featured: false, score: "9.4"
    },
    {
        id: 65, name: "AgentGPT", icon: "🌐", cat: "agent",
        desc: "Deploy autonomous AI agents directly in the browser. Set goals, watch the agent plan and execute steps in real time.",
        url: "https://agentgpt.reworkd.ai", domain: "reworkd.ai",
        badge: "freemium", tags: ["Browser", "Goal-based", "Visual"],
        featured: false, score: "8.6"
    },
    {
        id: 66, name: "SuperAGI", icon: "🦾", cat: "agent",
        desc: "Open-source infrastructure for building, managing, and deploying production-ready autonomous AI agents at scale.",
        url: "https://superagi.com", domain: "superagi.com",
        badge: "free", tags: ["Open Source", "Production", "Scalable"],
        featured: false, score: "8.8"
    },
    {
        id: 67, name: "Fixie AI", icon: "🔧", cat: "agent",
        desc: "Build and deploy custom AI agents with live data access, function calling, and real-time action execution.",
        url: "https://fixie.ai", domain: "fixie.ai",
        badge: "freemium", tags: ["Custom Agents", "Live Data", "Functions"],
        featured: false, score: "8.5"
    },
    {
        id: 68, name: "Microsoft AutoGen", icon: "🪟", cat: "agent",
        desc: "Microsoft's open-source multi-agent conversation framework. Build pipelines where agents talk to each other to complete tasks.",
        url: "https://microsoft.github.io/autogen", domain: "microsoft.github.io",
        badge: "free", tags: ["Microsoft", "Multi-Agent", "Conversations"],
        featured: false, score: "9.1"
    },
    {
        id: 69, name: "Cognosys", icon: "🧠", cat: "agent",
        desc: "Web-based AI agent platform with task planning, research automation, and step-by-step visible execution.",
        url: "https://cognosys.ai", domain: "cognosys.ai",
        badge: "freemium", tags: ["Research", "Planning", "Visual Steps"],
        featured: false, score: "8.4"
    },
    {
        id: 70, name: "Vertex AI Agents", icon: "☁️", cat: "agent",
        desc: "Google Cloud's enterprise AI agent builder — create grounded, multi-turn agents with RAG, tools, and safety controls.",
        url: "https://cloud.google.com/products/agent-builder", domain: "cloud.google.com",
        badge: "paid", tags: ["Google Cloud", "Enterprise", "RAG"],
        featured: false, score: "9.0"
    },
    {
        id: 71, name: "Dust.tt", icon: "✨", cat: "agent",
        desc: "Build custom AI assistants with your company's data. Deploy internal agents for engineering, sales, and support teams.",
        url: "https://dust.tt", domain: "dust.tt",
        badge: "paid", tags: ["Internal AI", "Enterprise", "Data"],
        featured: false, score: "8.7"
    },
    {
        id: 72, name: "Flowise", icon: "🌊", cat: "agent",
        desc: "Open-source drag-and-drop UI for building LLM flows, agents, and RAG pipelines. Visual LangChain builder.",
        url: "https://flowiseai.com", domain: "flowiseai.com",
        badge: "free", tags: ["Open Source", "Visual Builder", "LangChain"],
        featured: false, score: "8.9"
    },

    // --- Extra tools (existing categories) ---
    {
        id: 73, name: "Phind", icon: "🔍", cat: "search",
        desc: "AI search engine built for developers — searches the real-time web and codebases simultaneously with code-aware answers.",
        url: "https://phind.com", domain: "phind.com",
        badge: "freemium", tags: ["Developer", "Code Search", "Real-time"],
        featured: false, score: "9.0"
    },
    {
        id: 74, name: "Mistral Le Chat", icon: "🐱", cat: "llm",
        desc: "Mistral's free chat interface powered by their latest models. Ultra-fast responses with strong multilingual support.",
        url: "https://chat.mistral.ai", domain: "chat.mistral.ai",
        badge: "free", tags: ["Fast", "Multilingual", "Free"],
        featured: false, score: "8.8"
    },
    {
        id: 75, name: "Invideo AI", icon: "🎬", cat: "video",
        desc: "Turn a script or idea into a full video with AI-generated voiceover, stock footage, and subtitles in minutes.",
        url: "https://invideo.io", domain: "invideo.io",
        badge: "freemium", tags: ["Script-to-Video", "Stock Footage", "Subtitles"],
        featured: false, score: "8.7"
    },
    {
        id: 76, name: "Framer AI", icon: "🖼️", cat: "design",
        desc: "AI-powered web design and publishing tool. Describe your site and Framer AI builds and deploys it instantly.",
        url: "https://framer.com", domain: "framer.com",
        badge: "freemium", tags: ["Website Builder", "Design", "Deploy"],
        featured: false, score: "9.1"
    },
    {
        id: 77, name: "Lovable", icon: "❤️", cat: "code",
        desc: "AI product engineer that builds full-stack apps from a prompt — React frontend + Supabase backend, fully deployed.",
        url: "https://lovable.dev", domain: "lovable.dev",
        badge: "freemium", tags: ["Full-Stack", "React", "Supabase"],
        featured: false, score: "9.2", badge: "new"
    },
    {
        id: 78, name: "Play.ht", icon: "▶️", cat: "audio",
        desc: "Ultra-realistic AI voices for podcasts, videos, and apps. Voice cloning, emotion control, and API access.",
        url: "https://play.ht", domain: "play.ht",
        badge: "freemium", tags: ["Voice Clone", "Podcast", "API"],
        featured: false, score: "8.8"
    },
    {
        id: 79, name: "Writesonic", icon: "📝", cat: "writing",
        desc: "AI writing tool for long-form content, ads, and landing pages. Built-in web search for factual, up-to-date articles.",
        url: "https://writesonic.com", domain: "writesonic.com",
        badge: "freemium", tags: ["Long-form", "SEO", "Web Search"],
        featured: false, score: "8.5"
    },
    {
        id: 80, name: "Taskade", icon: "✅", cat: "productivity",
        desc: "AI-first project management and collaboration workspace. AI generates tasks, mind maps, and project workflows instantly.",
        url: "https://taskade.com", domain: "taskade.com",
        badge: "freemium", tags: ["Project Mgmt", "Mind Maps", "Teams"],
        featured: false, score: "8.7"
    }
];

/* ===== TRENDING DATA ===== */
const TRENDING_TOOLS = AI_TOOLS.filter(t => t.trending).sort((a, b) => a.trending - b.trending).slice(0, 10);
const FEATURED_TOOLS = AI_TOOLS.filter(t => t.featured);

/* ===== STATE — managed per-page (see all-tools.html inline script) ===== */

/* ===== PARTICLES ===== */
function initParticles() {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let W, H;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.size = Math.random() * 1.5 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
            const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#ec4899"];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
        }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        // Connect nearby particles
        ctx.globalAlpha = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(loop);
    }
    loop();
}

/* ===== TYPING EFFECT ===== */
const phrases = [
    "Intelligence is Here",
    "AI Tools, Curated",
    "Your AI Advantage",
    "Creating with AI",
    "The Future Awaits"
];
let phraseIdx = 0, charIdx = 0, deleting = false;
function type() {
    const el = document.getElementById("typingText");
    const phrase = phrases[phraseIdx];
    if (deleting) {
        el.innerHTML = phrase.substring(0, charIdx - 1) + '<span class="cursor"></span>';
        charIdx--;
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; setTimeout(type, 500); return; }
        setTimeout(type, 40);
    } else {
        el.innerHTML = phrase.substring(0, charIdx + 1) + '<span class="cursor"></span>';
        charIdx++;
        if (charIdx === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
        setTimeout(type, 70);
    }
}

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
    document.querySelectorAll(".stat-num").forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.floor(current);
        }, 16);
    });
}

/* ===== CARD CREATION ===== */
function badgeClass(badge) {
    const map = { free: "badge-free", paid: "badge-paid", freemium: "badge-freemium", new: "badge-new" };
    return map[badge] || "badge-freemium";
}
function badgeLabel(badge) {
    const map = { free: "Free", paid: "Paid", freemium: "Freemium", new: "New" };
    return map[badge] || badge;
}

function createToolCard(tool, delay = 0) {
    const card = document.createElement("a");
    card.className = "tool-card";
    card.href = tool.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.dataset.cat = tool.cat;
    card.style.animationDelay = `${delay}ms`;
    card.innerHTML = `
    <div class="card-shimmer"></div>
    <div class="card-top">
      <div class="card-icon">${tool.icon}</div>
      <span class="card-badge ${badgeClass(tool.badge)}">${badgeLabel(tool.badge)}</span>
    </div>
    <div class="card-name">${tool.name}</div>
    <div class="card-desc">${tool.desc}</div>
    ${tool.tags ? `<div class="card-tags">${tool.tags.slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join("")}</div>` : ""}
    <div class="card-footer">
      <span class="card-link">${tool.domain}</span>
      ${tool.score ? `<span class="card-score">★ ${tool.score}</span>` : `<div class="card-arrow">→</div>`}
    </div>
  `;
    return card;
}

function createFeaturedCard(tool) {
    const card = document.createElement("a");
    card.className = "featured-card";
    card.href = tool.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.innerHTML = `
    <div class="glow-bg" style="background:radial-gradient(circle,${tool.glowColor || "#6366f1"},transparent 70%)"></div>
    <div class="feat-header">
      <div class="feat-icon">${tool.icon}</div>
      <div class="feat-meta">
        <div class="feat-name">${tool.name}</div>
        <div class="feat-cat">${tool.cat.toUpperCase()}</div>
      </div>
      <div class="feat-score">★ ${tool.score}</div>
    </div>
    <div class="feat-desc">${tool.desc}</div>
    <div class="feat-highlights">
      ${(tool.highlights || []).map(h => `<div class="feat-highlight">${h}</div>`).join("")}
    </div>
    <a href="${tool.url}" class="feat-btn" target="_blank" rel="noopener noreferrer">
      Open Tool →
    </a>
  `;
    return card;
}

function createTrendingItem(tool, idx) {
    const item = document.createElement("a");
    item.className = "trend-item";
    item.href = tool.url;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    const tierClass = idx < 2 ? "trend-hot" : idx < 5 ? "trend-up" : "trend-new";
    const tierLabel = idx < 2 ? "🔥 Hot" : idx < 5 ? "📈 Rising" : "✨ New";
    item.innerHTML = `
    <div class="trend-rank">${idx + 1}</div>
    <div class="trend-icon">${tool.icon}</div>
    <div class="trend-info">
      <div class="trend-name">${tool.name}</div>
      <div class="trend-desc">${tool.desc.substring(0, 80)}...</div>
    </div>
    <span class="trend-badge ${tierClass}">${tierLabel}</span>
  `;
    return item;
}

/* renderTools() is defined per-page inside all-tools.html */

/* Navbar scroll handled in DOMContentLoaded */

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.01 }); // 1% visible is enough — fixes tall sections never triggering

/* ===== FILTER BY CATEGORY (from navbar) ===== */
function filterCat(cat) {
    activeCategory = cat;
    // update button active states
    document.querySelectorAll(".cat-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.cat === cat);
    });
    renderTools();
    setTimeout(() => {
        document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
    }, 50);
}

/* ===== SMOOTH SCROLL ===== */
function scrollToTools() {
    document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
    // Particles (both pages)
    initParticles();

    // Typing effect — index.html only
    const typingEl = document.getElementById("typingText");
    if (typingEl) setTimeout(type, 800);

    // Counter animation — index.html only
    if (document.querySelector(".stat-num")) setTimeout(animateCounters, 300);

    // Featured — index.html only
    const featuredGrid = document.getElementById("featuredGrid");
    if (featuredGrid) FEATURED_TOOLS.forEach(tool => featuredGrid.appendChild(createFeaturedCard(tool)));

    // Trending — index.html only
    const trendingList = document.getElementById("trendingList");
    if (trendingList) TRENDING_TOOLS.forEach((tool, i) => trendingList.appendChild(createTrendingItem(tool, i)));

    // Navbar scroll (both pages)
    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            if (window.scrollY > 50) navbar.classList.add("scrolled");
            else navbar.classList.remove("scrolled");
        }
    });

    // Scroll reveal
    document.querySelectorAll(".section:not(#tools):not(#categories):not(#models), .cta-section").forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        observer.observe(el);
    });
});

