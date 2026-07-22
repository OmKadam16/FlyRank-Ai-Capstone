'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function CoffeeChatForm() {
  const [state, setState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setState('submitting')

    await new Promise((resolve) => setTimeout(resolve, 1200))

    setState('success')
  }

  if (state === 'success') {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <p className="text-lg font-medium text-emerald-900">
          Thanks, {name.split(' ')[0]}.
        </p>
        <p className="mt-2 text-emerald-700">
          I&apos;ll reach out to schedule something within a day or two.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          placeholder="You"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="note" className="block text-sm font-medium text-zinc-700">
          What would you like to chat about?
          <span className="ml-1 text-zinc-400">(optional)</span>
        </label>
        <textarea
          id="note"
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-y"
          placeholder="Frontend AI engineering, the citation checker, biotech — whatever's on your mind."
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending…' : 'Book a coffee chat'}
      </button>

      {state === 'error' && (
        <p className="text-sm text-red-600">
          Something didn&apos;t work. Want to email me directly instead?
        </p>
      )}
    </form>
  )
}
