import CoffeeChatForm from './coffee-chat-form'

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Let&apos;s talk.
        </h1>
        <p className="mt-2 text-base leading-relaxed text-zinc-500">
          If my work looks like it could fit what you&apos;re building, I&apos;d
          like to hear about it.
        </p>

        <div className="mt-10">
          <CoffeeChatForm />
        </div>

        <p className="mt-8 text-xs text-zinc-400">
          Or email me directly at{' '}
          <a
            href="mailto:om@flyrank.ai"
            className="underline underline-offset-2 hover:text-zinc-600"
          >
            om@flyrank.ai
          </a>
        </p>
      </div>
    </main>
  )
}
