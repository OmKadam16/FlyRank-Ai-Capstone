'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

type FieldErrors = {
  name?: string
  email?: string
}

type TouchedFields = {
  name?: boolean
  email?: boolean
}

function validateName(value: string): string | undefined {
  const trimmed = value.trim()
  if (!trimmed) return 'Name is required.'
  if (trimmed.length < 2) return 'Name must be at least 2 characters.'
  return undefined
}

function validateEmail(value: string): string | undefined {
  const trimmed = value.trim()
  if (!trimmed) return 'Email is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
    return 'Enter a valid email address.'
  return undefined
}

export default function CoffeeChatForm() {
  const [state, setState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({})

  const nameErrorId = 'name-error'
  const emailErrorId = 'email-error'

  function runValidation(
    overrides?: { name?: string; email?: string },
  ): FieldErrors {
    return {
      name: validateName(overrides?.name ?? name),
      email: validateEmail(overrides?.email ?? email),
    }
  }

  function handleBlur(field: 'name' | 'email') {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const value = field === 'name' ? name : email
    const err =
      field === 'name' ? validateName(value) : validateEmail(value)
    setErrors((prev) => ({ ...prev, [field]: err }))
  }

  function handleChange(field: 'name' | 'email', value: string) {
    if (field === 'name') setName(value)
    else setEmail(value)
    if (touched[field]) {
      const err =
        field === 'name' ? validateName(value) : validateEmail(value)
      setErrors((prev) => ({ ...prev, [field]: err }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = runValidation()
    setErrors(validationErrors)
    setTouched({ name: true, email: true })

    if (validationErrors.name || validationErrors.email) return

    setState('submitting')

    await new Promise((resolve) => setTimeout(resolve, 1200))

    setState('success')
  }

  if (state === 'success') {
    const firstName = name.trim().split(' ')[0] || 'there'
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <p className="text-lg font-medium text-emerald-900">
          Thanks, {firstName}.
        </p>
        <p className="mt-2 text-emerald-700">
          I&apos;ll reach out to schedule something within a day or two.
        </p>
      </div>
    )
  }

  const hasVisibleErrors =
    touched.name && touched.email && (!!errors.name || !!errors.email)

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
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? nameErrorId : undefined}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 ${
            errors.name
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500'
          }`}
          placeholder="You"
        />
        {errors.name && (
          <p id={nameErrorId} className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
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
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? emailErrorId : undefined}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 ${
            errors.email
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500'
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id={emailErrorId} className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
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
        disabled={state === 'submitting' || hasVisibleErrors}
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
