'use client'

import { useState } from 'react'

export default function Home(): JSX.Element {
  const [dark, setDark] = useState<boolean>(false)

  const skills: string[] = [
    'Power BI', 'SQL', 'Python', 'Snowflake', 'ETL', 'API Integrations', 'Data Viz', 'Automation'
  ]

  const projects: { title: string; desc: string }[] = [
    {
      title: 'Logistics Performance Dashboard',
      desc: 'Automated Power BI dashboard tracking on-time delivery, carrier performance and costs. ETL with Snowflake + scheduled refresh.'
    },
    {
      title: 'Financial Forecasting Model',
      desc: 'Python-based forecasting model wired into Power BI for interactive scenario analysis and variance reporting.'
    },
    {
      title: 'Sales & Customer Segmentation',
      desc: 'Segmentation analysis using SQL + Python clustering; visualized in interactive dashboards for sales teams.'
    }
  ]

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold">PS</div>
            <div>
              <h1 className="text-xl font-semibold">Parth Sonagara</h1>
              <div className="text-xs text-slate-500 dark:text-slate-300">Data Analyst • Power BI · SQL · Python</div>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#dashboards" className="text-sm hover:underline">Dashboards</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="ml-2 p-2 rounded-md bg-slate-100 dark:bg-slate-800"
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v1M12 20v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1M22 12h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 6a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </nav>
        </header>

        {/* Main */}
        <main className="max-w-6xl mx-auto px-6 pb-20">
          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold leading-tight">I turn data into decisions.</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">I’m a Data Analyst focused on logistics, transportation and finance. I build automated ETL pipelines, scalable reporting solutions and interactive dashboards that help teams move faster.</p>

              <div className="flex gap-4">
                <a href="#dashboards" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white">View Dashboards</a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700">Contact Me</a>
              </div>

              <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">Resume • <a href="#" className="underline">Download PDF</a> • <a href="#" className="underline">GitHub</a> • <a href="#" className="underline">LinkedIn</a></div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg">
              <div className="h-64 rounded-lg bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-indigo-900 dark:to-emerald-900 flex items-center justify-center text-slate-600 dark:text-slate-200">
                <div className="text-center">
                  <div className="text-sm uppercase">Featured</div>
                  <div className="text-2xl font-semibold mt-2">Operations KPI Dashboard</div>
                  <div className="text-sm mt-1 text-slate-500 dark:text-slate-300">Interactive insights — on-time delivery, exceptions, carrier KPIs</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-md bg-white dark:bg-slate-800 text-center">On-time</div>
                <div className="p-3 rounded-md bg-white dark:bg-slate-800 text-center">Delay</div>
                <div className="p-3 rounded-md bg-white dark:bg-slate-800 text-center">Cost</div>
              </div>
            </div>
          </section>

          {/* About + Skills */}
          <section className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card p-6">
              <h3 className="text-2xl font-semibold">About Me</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">I have 5+ years building reporting systems, automations and dashboards across logistics and finance. I enjoy turning messy transactional data into clear, actionable dashboards and building repeatable pipelines.</p>

              <h4 className="mt-6 font-medium">Core responsibilities</h4>
              <ul className="mt-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
                <li>Design and deliver Power BI dashboards with automated refresh</li>
                <li>Build SQL-powered ETL and data models in Snowflake</li>
                <li>Implement API-driven data ingestion & monitoring</li>
              </ul>
            </div>

            <aside className="card p-6">
              <h4 className="text-lg font-semibold">Skills</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {skills.map((s) => (
                  <div key={s} className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-md text-center text-sm">{s}</div>
                ))}
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Tools</h5>
                <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">Power BI • Snowflake • Python • SQL • Git • Azure</div>
              </div>
            </aside>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-12">
            <h3 className="text-2xl font-semibold">Selected Projects</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article key={p.title} className="card p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  <div className="mt-4 flex gap-2">
                    <a className="text-sm underline" href="#">Case Study</a>
                    <a className="text-sm underline" href="#">Live Demo</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Dashboards */}
          <section id="dashboards" className="mt-12">
            <h3 className="text-2xl font-semibold">Dashboards</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Secure embeds powered by a serverless API (Vercel). Public demo available via Publish-to-web.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="card p-4">
                <h4 className="font-semibold">Operations KPI</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Real-time KPIs for operations teams.</p>
                <div className="mt-4 bg-slate-100 dark:bg-slate-800 h-48 rounded-md flex items-center justify-center">Preview / Thumbnail</div>
                <div className="mt-4 flex gap-2">
                  <a href="/dashboard" className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Open (secure)</a>
                  <a href="/dashboard?public=1" className="px-3 py-2 border rounded-md text-sm">Open (public)</a>
                </div>
              </div>

              <div className="card p-4">
                <h4 className="font-semibold">Financial Insights</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Revenue, expenses and forecasting visualizations.</p>
                <div className="mt-4 bg-slate-100 dark:bg-slate-800 h-48 rounded-md flex items-center justify-center">Preview / Thumbnail</div>
                <div className="mt-4 flex gap-2">
                  <a href="/dashboard" className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Open (secure)</a>
                  <a href="/dashboard?public=1" className="px-3 py-2 border rounded-md text-sm">Open (public)</a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-2xl font-semibold">Contact</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Want to see more dashboards or discuss a project? Send an email or book time.</p>
                <div className="mt-6">
                  <a href="mailto:email@example.com" className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-md">Email me</a>
                </div>

                <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">Or follow me: <a href="#" className="underline">LinkedIn</a> • <a href="#" className="underline">GitHub</a></div>
              </div>

              <form className="card p-6">
                <label className="text-sm">Name</label>
                <input className="mt-2 w-full p-2 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
                <label className="text-sm mt-4 block">Message</label>
                <textarea className="mt-2 w-full p-2 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-32" />
                <div className="mt-4">
                  <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send</button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
