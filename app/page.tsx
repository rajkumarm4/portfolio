import { ArrowUpRight, BriefcaseBusiness, LinkIcon } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12 sm:px-10">
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-[#dfe7c8]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-[#dfe7c8]/60 blur-3xl" />

        <section aria-labelledby="intro-heading" className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl border border-[#d6dfbb] bg-white shadow-[0_24px_80px_-32px_rgba(102,122,62,0.35)] md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-[25rem] flex-col justify-between bg-[#667a3e] p-8 text-white sm:p-12">
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wide text-[#eef3df]">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                <BriefcaseBusiness aria-hidden="true" className="size-5" />
              </span>
              Personal calling card
            </div>
            <div className="mt-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#dbe6bd]">Hello, I&apos;m</p>
              <h1 id="intro-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">Raj Kumar</h1>
              <p className="mt-5 max-w-xs text-lg leading-8 text-[#eef3df]">Software Developer and Technology Enthusiast</p>
            </div>
            <div className="mt-12 h-1 w-16 rounded-full bg-[#b9ca8b]" />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="max-w-lg">
              <p className="text-lg leading-8 text-slate-600">
                I enjoy building software projects and learning new technologies. I am interested in web development, artificial intelligence, and problem solving. I like creating solutions that help people and improve everyday experiences.
              </p>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667a3e]">How to reach me</p>
                <a className="group mt-4 inline-flex items-center gap-3 text-base font-semibold text-slate-900 transition-colors hover:text-[#667a3e]" href="https://linkedin.com/in/m-raj-kumar-a55050249" target="_blank" rel="noreferrer">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-[#f0f4e7] text-[#667a3e] transition-colors group-hover:bg-[#667a3e] group-hover:text-white">
                    <LinkIcon aria-hidden="true" className="size-5" />
                  </span>
                  <span>linkedin.com/in/m-raj-kumar-a55050249</span>
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

