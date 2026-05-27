type Table = {
  headers: string[];
  rows: string[][];
};

type Section = {
  title?: string;
  body?: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
  table?: Table;
  code?: string;
  quote?: string;
};

type SlideContent = {
  kicker?: string;
  title: string;
  subtitle?: string;
  body?: string[];
  sections?: Section[];
  final?: string;
};

const slides: Record<number, SlideContent> = {
  1: {
    title: "Choosing & Building Your Tech Stack for Your (Hackathon) Product",
    subtitle:
      "How to ship faster by choosing the right tools instead of reinventing everything",
    sections: [
      {
        title: "Today's goal",
        body: [
          "Help you build faster, avoid unnecessary complexity, and focus on the part of your product that actually matters.",
        ],
      },
    ],
  },
  2: {
    title: "Don't reinvent the wheel under pressure",
    body: [
      "In a hackathon, your scarce resource is not code.",
      "It's time.",
      "You don't need to build everything yourself. You need to ship the strongest version of your product before the deadline.",
    ],
    sections: [
      {
        table: {
          headers: ["Need", "Don't start with", "Use instead"],
          rows: [
            ["Login", "Custom auth system", "Clerk / Supabase Auth"],
            ["Database", "Self-hosted DB", "Supabase / Neon"],
            ["Deploy", "VPS + Nginx + SSL", "Vercel / Netlify"],
            ["Email", "Raw SMTP setup", "Resend"],
            ["Payments", "Custom billing flow", "Stripe / Polar"],
            ["Background jobs", "Manual cron hacks", "Trigger.dev"],
            [
              "WhatsApp",
              "Raw Meta setup from zero",
              "Kapso / Whapi / WasenderAPI",
            ],
          ],
        },
      },
    ],
  },
  3: {
    title: "People don't care how hard your stack was",
    sections: [
      {
        title: "They care about",
        bullets: [
          "Does it solve a real problem?",
          "Can they understand it quickly?",
          "Does the demo work?",
          "Does it feel useful?",
          "Is there a wow moment?",
          "Can they imagine someone using it?",
        ],
      },
      {
        title: "Nobody says",
        quote:
          "Amazing product. I especially loved that they implemented their own password reset flow.",
      },
    ],
  },
  4: {
    title: "Build the magic. Borrow the rest.",
    body: ["Your product has three layers:"],
    sections: [
      {
        title: "1. Product layer",
        body: [
          "What users see and feel: landing page, dashboard, chat UI, WhatsApp flow, mobile screen.",
        ],
      },
      {
        title: "2. Logic layer",
        body: [
          "What your product actually does: AI reasoning, workflows, recommendations, matching, automations.",
        ],
      },
      {
        title: "3. Infrastructure layer",
        body: [
          "What keeps everything alive: auth, database, hosting, emails, payments, queues, storage.",
        ],
      },
    ],
  },
  5: {
    title: "Before coding, ask this",
    sections: [
      {
        table: {
          headers: ["Question", "Decision"],
          rows: [
            ["Is this the core of the product?", "Build it"],
            ["Is this generic infrastructure?", "Use a tool"],
            ["Is this only needed for the demo?", "Fake it responsibly"],
            ["Will judges/users notice it?", "Polish it"],
            ["Will the product break if this fails?", "Use something reliable"],
          ],
        },
      },
    ],
    final:
      "Build what makes your product unique. Use tools for everything else.",
  },
  6: {
    title: "A strong default hackathon stack",
    sections: [
      {
        table: {
          headers: ["Layer", "Tool"],
          rows: [
            ["Frontend", "Next.js"],
            ["Styling", "Tailwind CSS"],
            ["Components", "shadcn/ui"],
            ["UI generation", "v0"],
            ["Auth", "Clerk"],
            ["Database", "Supabase or Neon"],
            ["ORM", "Drizzle"],
            ["AI", "OpenAI / Anthropic / Gemini"],
            ["AI SDK", "Vercel AI SDK"],
            ["Jobs", "Trigger.dev"],
            ["Email", "Resend"],
            ["Deploy", "Vercel"],
          ],
        },
      },
    ],
  },
  7: {
    title: "Don't spend 4 hours centering a div",
    body: ["Use tools that help you get to a decent interface fast."],
    sections: [
      {
        table: {
          headers: ["Need", "Tool"],
          rows: [
            ["Generate UI quickly", "v0"],
            ["Web app framework", "Next.js"],
            ["Components", "shadcn/ui"],
            ["Styling", "Tailwind CSS"],
            ["Charts", "Recharts"],
            ["Tables", "TanStack Table"],
            ["Deploy frontend", "Vercel / Netlify"],
          ],
        },
      },
      {
        title: "Live demo idea",
        quote:
          "Build a landing page for a WhatsApp AI bot that helps people find lost pets. Include hero, how it works, demo section, and waitlist form.",
      },
    ],
  },
  8: {
    title: "Please don't build auth in a hackathon",
    body: ["Auth looks simple. Then you remember:"],
    sections: [
      {
        bullets: [
          "Sign up",
          "Sign in",
          "Password reset",
          "OAuth",
          "Email verification",
          "Sessions",
          "Protected routes",
          "Roles",
          "Organizations",
          "Security",
        ],
      },
      {
        title: "Recommended tools",
        table: {
          headers: ["Need", "Tool"],
          rows: [
            ["Fast startup-style auth", "Clerk"],
            ["Auth + database together", "Supabase Auth"],
            ["B2B teams/orgs", "Clerk Organizations"],
            ["Open-source auth", "Better Auth / Auth.js"],
          ],
        },
      },
    ],
  },
  9: {
    title: "Where does your data live?",
    sections: [
      {
        table: {
          headers: ["Need", "Tool"],
          rows: [
            ["All-in-one backend", "Supabase"],
            ["Serverless Postgres", "Neon"],
            ["ORM", "Drizzle / Prisma"],
            ["Cache / rate limits", "Upstash Redis"],
            ["Vector search / RAG", "Upstash Vector / Supabase Vector"],
            ["File storage", "Supabase Storage / S3 / UploadThing"],
          ],
        },
      },
      {
        title: "Simple recommendation",
        body: ["If you don't know what to pick: use Postgres."],
        bullets: [
          "Supabase if you want an all-in-one backend",
          "Neon if you want clean serverless Postgres",
          "Upstash if you need Redis, queues, cache, or vector search",
        ],
      },
    ],
  },
  10: {
    title: "Adding AI without making a mess",
    sections: [
      {
        code: "User input\n  -> App route / backend\n  -> Retrieve context\n  -> Call model\n  -> Stream or return response\n  -> Store result",
      },
      {
        title: "Recommended tools",
        table: {
          headers: ["Need", "Tool"],
          rows: [
            ["Text generation", "OpenAI / Anthropic / Gemini"],
            ["Chat UI / streaming", "Vercel AI SDK"],
            ["RAG / embeddings", "Upstash Vector / Supabase Vector"],
            ["Prompt iteration", "Cursor / Claude Code"],
            ["Background AI tasks", "Trigger.dev"],
            ["Observability / evals", "Langfuse"],
          ],
        },
      },
    ],
  },
  11: {
    title: "WhatsApp is not one stack",
    sections: [
      {
        table: {
          headers: ["Path", "Best for", "Tradeoff"],
          rows: [
            [
              "Official WhatsApp API",
              "Production apps, customer support, SaaS products",
              "More rules, setup, and API limitations",
            ],
            [
              "WhatsApp Web wrappers",
              "Hackathon demos, personal bots, groups, fast experiments",
              "More flexible, but less official and potentially more fragile",
            ],
          ],
        },
      },
    ],
    final:
      "Choose the WhatsApp path based on the product. Not all WhatsApp APIs solve the same problem.",
  },
  12: {
    title: "Kapso: official WhatsApp for product builders",
    body: [
      "Use Kapso when you want to build on top of the official WhatsApp API without spending forever dealing with Meta complexity.",
    ],
    sections: [
      {
        title: "Good for",
        table: {
          headers: ["Use case", "Why Kapso fits"],
          rows: [
            ["WhatsApp CRM", "Built for business messaging"],
            ["Customer support", "Official API path"],
            [
              "SaaS product with WhatsApp features",
              "Better production foundation",
            ],
            ["AI agents over WhatsApp", "Cleaner developer experience"],
            ["Multi-customer onboarding", "Useful for B2B products"],
          ],
        },
      },
      {
        title: "Not ideal for",
        table: {
          headers: ["Need", "Why"],
          rows: [
            [
              "WhatsApp group bots",
              "Official API group features are limited/restricted",
            ],
            ["Personal WhatsApp automation", "It is not the WhatsApp Web path"],
            ["Super fast group demo", "Web wrappers may be faster"],
          ],
        },
      },
    ],
  },
  13: {
    title: "When you need groups or fast WhatsApp experiments",
    body: [
      "Use Whapi or WasenderAPI when you need WhatsApp Web-wrapper behavior.",
    ],
    sections: [
      {
        title: "Good for",
        table: {
          headers: ["Use case", "Tool fit"],
          rows: [
            ["Group bots", "Whapi / WasenderAPI"],
            ["Hackathon demos", "Whapi / WasenderAPI"],
            ["Personal WhatsApp automation", "Whapi / WasenderAPI"],
            ["Fast AI bot prototype", "Whapi / WasenderAPI"],
            ["Community workflows", "Whapi / WasenderAPI"],
            ["Multiple sessions", "WasenderAPI"],
          ],
        },
      },
      {
        title: "Tradeoffs",
        table: {
          headers: ["Risk", "Meaning"],
          rows: [
            ["Reliability", "Wrappers can be more fragile"],
            ["Policy risk", "Not the same as official API"],
            ["Account risk", "Automation can affect the WhatsApp account"],
            [
              "Scaling risk",
              "Great for demos, not always ideal for production",
            ],
          ],
        },
      },
    ],
  },
  14: {
    title: "Which WhatsApp tool should I use?",
    sections: [
      {
        code: "Do you need WhatsApp?\n\n-> Is this a business/customer support/SaaS use case?\n   -> Use Kapso\n\n-> Do you need groups?\n   -> Use Whapi or WasenderAPI\n\n-> Do you need a fast hackathon prototype?\n   -> Use Whapi or WasenderAPI\n\n-> Do you need long-term production reliability?\n   -> Prefer Kapso / official API path",
      },
    ],
    final:
      "Kapso for production-style WhatsApp products. Whapi or WasenderAPI for groups, fast experiments, and hackathon demos.",
  },
  15: {
    title: "Not everything should happen inside the request",
    sections: [
      {
        title: "Bad pattern",
        code: "User clicks button\n-> API route does everything\n-> User waits 60 seconds\n-> Request times out\n-> Demo dies",
      },
      {
        title: "Better pattern",
        code: "User clicks button\n-> Start background job\n-> Return immediately\n-> Job processes work\n-> Notify user / update UI",
      },
      {
        title: "Recommended tool: Trigger.dev",
        bullets: [
          "Long-running AI tasks",
          "Sending many emails",
          "Scheduled jobs",
          "Web scraping",
          "Data processing",
          "Retrying failed workflows",
        ],
      },
    ],
  },
  16: {
    title: "Small details make the product feel real",
    sections: [
      {
        table: {
          headers: ["Need", "Tool"],
          rows: [
            ["Transactional email", "Resend"],
            ["Payments", "Stripe"],
            ["Developer monetization", "Polar"],
            ["SMS", "Twilio"],
            ["Push notifications", "OneSignal / Expo"],
            ["File uploads", "UploadThing / Supabase Storage / S3"],
          ],
        },
      },
      {
        title: "Examples",
        bullets: [
          "Send a welcome email",
          "Send a magic link",
          "Notify a user when a report is ready",
          "Add a paid plan",
          "Let users upload files",
          "Send a receipt",
        ],
      },
    ],
  },
  17: {
    title: "Deploy early. Not at 3 a.m.",
    sections: [
      {
        table: {
          headers: ["Need", "Tool"],
          rows: [
            ["Next.js app", "Vercel"],
            ["Static site", "Netlify"],
            ["Backend/API", "Railway / Render / Fly.io"],
            ["Python service", "Modal / Railway / Render"],
            ["Database", "Supabase / Neon"],
            ["Cron jobs", "Trigger.dev / Vercel Cron / GitHub Actions"],
          ],
        },
      },
    ],
    final: "Deploy in the first hour. Then keep shipping.",
  },
  18: {
    title: "If you're building an AI SaaS",
    sections: [
      {
        table: {
          headers: ["Layer", "Pick"],
          rows: [
            ["Frontend", "Next.js"],
            ["UI", "Tailwind + shadcn + v0"],
            ["Auth", "Clerk"],
            ["Database", "Neon"],
            ["ORM", "Drizzle"],
            ["AI", "OpenAI / Anthropic"],
            ["Streaming", "Vercel AI SDK"],
            ["Jobs", "Trigger.dev"],
            ["Email", "Resend"],
            ["Deploy", "Vercel"],
          ],
        },
      },
      {
        title: "Good for",
        bullets: [
          "AI dashboards",
          "Internal tools",
          "Writing assistants",
          "Research tools",
          "Document analysis",
          "Productivity apps",
        ],
      },
    ],
  },
  19: {
    title: "If you're building a WhatsApp AI bot",
    sections: [
      {
        table: {
          headers: ["Layer", "Pick"],
          rows: [
            ["Landing page", "Next.js + v0"],
            ["Official WhatsApp path", "Kapso"],
            ["Groups / fast prototype", "Whapi / WasenderAPI"],
            ["Backend", "Next.js API routes / Hono"],
            ["Database", "Supabase / Neon"],
            ["Memory", "Upstash Redis"],
            ["AI", "OpenAI / Anthropic"],
            ["Jobs", "Trigger.dev"],
            ["Deploy", "Vercel / Railway"],
          ],
        },
      },
      {
        title: "Good for",
        bullets: [
          "AI assistants",
          "Community bots",
          "Customer support",
          "Sales automation",
          "Event bots",
          "Lost pet alerts",
          "Group workflows",
        ],
      },
    ],
  },
  20: {
    title: "If you're building a paid product",
    sections: [
      {
        table: {
          headers: ["Layer", "Pick"],
          rows: [
            ["Frontend", "Next.js"],
            ["UI", "v0 + shadcn"],
            ["Auth", "Clerk"],
            ["Database", "Supabase / Neon"],
            ["Payments", "Stripe / Polar"],
            ["Email", "Resend"],
            ["File storage", "Supabase Storage / S3"],
            ["Deploy", "Vercel"],
          ],
        },
      },
      {
        title: "Good for",
        bullets: [
          "Paid AI tools",
          "Digital products",
          "Marketplaces",
          "SaaS MVPs",
          "Subscription apps",
        ],
      },
    ],
  },
  21: {
    title: "If you're building an internal tool",
    sections: [
      {
        table: {
          headers: ["Layer", "Pick"],
          rows: [
            ["Frontend", "Next.js"],
            ["UI generation", "v0"],
            ["Components", "shadcn/ui"],
            ["Auth", "Clerk"],
            ["Database", "Supabase"],
            ["Tables", "TanStack Table"],
            ["Charts", "Recharts"],
            ["Deploy", "Vercel"],
          ],
        },
      },
      {
        title: "Good for",
        bullets: [
          "Admin dashboards",
          "Company tools",
          "Analytics panels",
          "Operations apps",
          "CRM prototypes",
          "Workflow tools",
        ],
      },
    ],
  },
  22: {
    title: "Avoid these traps",
    sections: [
      {
        bullets: [
          "Choosing tools you've never touched before",
          "Building auth from scratch",
          "Deploying at the end",
          "Overengineering the database",
          "Making the AI flow too complex",
          "Ignoring the demo story",
          "Building too many features",
          "Not testing with real data",
          "Forgetting environment variables",
          "Spending too much time on infrastructure",
        ],
      },
    ],
  },
  23: {
    title: "Design the demo before building the app",
    body: ["Before coding, answer:"],
    sections: [
      {
        code: "What is the user problem?\n\nWhat is the one flow we need to demo?\n\nWhat is the wow moment?\n\nWhat data do we need?\n\nWhat can be mocked?\n\nWhat must be real?\n\nWhat tools get us there fastest?",
      },
    ],
  },
  24: {
    title: "Before I choose a tool, I ask",
    sections: [
      {
        bullets: [
          "Is it well documented?",
          "Does it work well with AI coding agents?",
          "Can I ship with it today?",
          "Does it have a generous free tier?",
          "Is the DX good?",
          "Can I debug it quickly?",
          "Will it survive the demo?",
          "Can I replace it later if needed?",
        ],
      },
    ],
  },
  25: {
    title: "Before you start coding",
    sections: [
      {
        code: "What is the magical part of the product?\n\nWhat can we avoid building from scratch?\n\nWhat needs to work reliably for the demo?\n\nWhat can be mocked?\n\nWhat tool gives us the fastest path?\n\nCan we deploy in the first hour?\n\nCan we explain the product in one sentence?",
      },
    ],
    final:
      "Build the part that makes your product special. Borrow the rest. Ship the demo. Improve later.",
  },
  26: {
    title: "Tools mentioned",
    sections: [
      {
        title: "UI & frontend",
        body: [
          "v0, Next.js, Tailwind CSS, shadcn/ui, Recharts, TanStack Table, Vercel, Netlify",
        ],
        links: [
          { label: "v0", href: "https://v0.dev" },
          { label: "Next.js", href: "https://nextjs.org" },
          { label: "Tailwind CSS", href: "https://tailwindcss.com" },
          { label: "shadcn/ui", href: "https://ui.shadcn.com" },
          { label: "Recharts", href: "https://recharts.org" },
          { label: "TanStack Table", href: "https://tanstack.com/table" },
          { label: "Vercel", href: "https://vercel.com" },
          { label: "Netlify", href: "https://www.netlify.com" },
        ],
      },
      {
        title: "Auth",
        body: ["Clerk, Supabase Auth, Better Auth, Auth.js"],
        links: [
          { label: "Clerk", href: "https://clerk.com" },
          { label: "Supabase Auth", href: "https://supabase.com/auth" },
          { label: "Better Auth", href: "https://www.better-auth.com" },
          { label: "Auth.js", href: "https://authjs.dev" },
        ],
      },
      {
        title: "Backend & data",
        body: [
          "Supabase, Neon, Drizzle, Prisma, Upstash Redis, Upstash Vector, Supabase Vector",
        ],
        links: [
          { label: "Supabase", href: "https://supabase.com" },
          { label: "Neon", href: "https://neon.tech" },
          { label: "Drizzle", href: "https://orm.drizzle.team" },
          { label: "Prisma", href: "https://www.prisma.io" },
          { label: "Upstash Redis", href: "https://upstash.com/docs/redis" },
          { label: "Upstash Vector", href: "https://upstash.com/vector" },
          {
            label: "Supabase Vector",
            href: "https://supabase.com/vector",
          },
        ],
      },
      {
        title: "AI",
        body: ["OpenAI, Anthropic, Gemini, Vercel AI SDK, Langfuse"],
        links: [
          { label: "OpenAI", href: "https://platform.openai.com" },
          { label: "Anthropic", href: "https://www.anthropic.com" },
          { label: "Gemini", href: "https://ai.google.dev" },
          { label: "Vercel AI SDK", href: "https://ai-sdk.dev" },
          { label: "Langfuse", href: "https://langfuse.com" },
        ],
      },
      {
        title: "WhatsApp",
        body: ["Kapso, Whapi, WasenderAPI, Meta WhatsApp Business API"],
        links: [
          { label: "Kapso", href: "https://kapso.ai" },
          { label: "Whapi", href: "https://whapi.cloud" },
          { label: "WasenderAPI", href: "https://wasenderapi.com" },
          {
            label: "Meta WhatsApp Business API",
            href: "https://developers.facebook.com/docs/whatsapp",
          },
        ],
      },
      {
        title: "Jobs, email, payments",
        body: ["Trigger.dev, Resend, Stripe, Polar, Twilio, UploadThing"],
        links: [
          { label: "Trigger.dev", href: "https://trigger.dev" },
          { label: "Resend", href: "https://resend.com" },
          { label: "Stripe", href: "https://stripe.com" },
          { label: "Polar", href: "https://polar.sh" },
          { label: "Twilio", href: "https://www.twilio.com" },
          { label: "UploadThing", href: "https://uploadthing.com" },
        ],
      },
    ],
    final:
      "Hackathons are not won by the team that suffers the most. They're won by the team that makes the best decisions under pressure. Choose good tools. Build the magic. Ship.",
  },
};

export function TechStackSlide({ slideNumber }: { slideNumber: number }) {
  const slide = slides[slideNumber];
  const compact = slideNumber === 26;

  if (!slide) {
    return null;
  }

  return (
    <div className={compact ? "space-y-4" : "space-y-6 lg:space-y-8"}>
      {slide.kicker ? (
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
          {slide.kicker}
        </p>
      ) : null}
      <div className="space-y-4">
        <h1>{slide.title}</h1>
        {slide.subtitle ? (
          <p className="max-w-3xl text-2xl leading-9 tracking-[-0.04em] text-zinc-200 sm:text-3xl sm:leading-10">
            {slide.subtitle}
          </p>
        ) : null}
      </div>
      {slide.body?.map((text) => (
        <p
          key={text}
          className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl"
        >
          {text}
        </p>
      ))}
      {slide.sections ? (
        <div
          className={
            compact
              ? "grid max-w-7xl gap-3 lg:grid-cols-3"
              : "grid max-w-6xl gap-4 lg:grid-cols-2"
          }
        >
          {slide.sections.map((section) => (
            <section
              key={`${section.title ?? section.quote ?? section.code ?? "table"}-${section.body?.[0] ?? ""}`}
              className={
                compact
                  ? "rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20"
                  : "rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20"
              }
            >
              {section.title ? (
                <h2
                  className={
                    compact
                      ? "mb-2 text-lg font-semibold tracking-[-0.04em] text-white"
                      : "mb-4 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl"
                  }
                >
                  {section.title}
                </h2>
              ) : null}
              {section.body?.map((text) => (
                <p
                  key={text}
                  className={
                    compact
                      ? "mb-2 text-sm leading-6 text-zinc-300"
                      : "mb-3 text-base leading-7 text-zinc-300 sm:text-lg"
                  }
                >
                  {text}
                </p>
              ))}
              {section.bullets ? (
                <ul className="grid gap-2 text-sm leading-6 text-zinc-200 sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.table ? <SlideTable table={section.table} /> : null}
              {section.links ? (
                <div
                  className={
                    compact
                      ? "mt-3 flex flex-wrap gap-1.5"
                      : "mt-4 flex flex-wrap gap-2"
                  }
                >
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={
                        compact
                          ? "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                          : "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              {section.code ? (
                <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm leading-6 text-zinc-100">
                  {section.code}
                </pre>
              ) : null}
              {section.quote ? (
                <blockquote className="border-l border-white/20 pl-5 text-xl leading-8 tracking-[-0.03em] text-zinc-100">
                  "{section.quote}"
                </blockquote>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}
      {slide.final ? (
        <div
          className={
            compact
              ? "max-w-5xl rounded-[1.25rem] border border-white/12 bg-white p-4 text-lg font-semibold leading-7 tracking-[-0.04em] text-black shadow-2xl shadow-white/10"
              : "max-w-4xl rounded-[2rem] border border-white/12 bg-white p-6 text-2xl font-semibold leading-9 tracking-[-0.05em] text-black shadow-2xl shadow-white/10 sm:text-3xl sm:leading-10"
          }
        >
          {slide.final}
        </div>
      ) : null}
    </div>
  );
}

function SlideTable({ table }: { table: Table }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full border-collapse text-left text-[13px] sm:text-sm">
        <thead className="bg-white/10 text-zinc-100">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-3 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/8 text-zinc-300">
          {table.rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell) => (
                <td key={cell} className="px-3 py-2 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
