import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CoffeeChatForm from '../coffee-chat-form'

function setup() {
  const user = userEvent.setup()
  render(<CoffeeChatForm />)
  return { user }
}

describe('CoffeeChatForm', () => {
  describe('validation', () => {
    it('shows an error when name is empty on submit', async () => {
      const { user } = setup()

      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(screen.getByText('Name is required.')).toBeInTheDocument()
    })

    it('shows an error when name is too short on submit', async () => {
      const { user } = setup()

      await user.type(screen.getByLabelText(/^name$/i), 'A')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(screen.getByText('Name must be at least 2 characters.')).toBeInTheDocument()
    })

    it('shows an error when email is empty on submit', async () => {
      const { user } = setup()

      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(screen.getByText('Email is required.')).toBeInTheDocument()
    })

    it('shows an error for an invalid email format on submit', async () => {
      const { user } = setup()

      await user.type(screen.getByLabelText(/^name$/i), 'Om Kadam')
      await user.type(screen.getByLabelText(/^email$/i), 'not-an-email')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()
    })

    it('does not submit when fields are invalid', async () => {
      const { user } = setup()

      await user.type(screen.getByLabelText(/^name$/i), 'Om Kadam')
      await user.type(screen.getByLabelText(/^email$/i), 'bad')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /book a coffee chat/i })).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('sets aria-invalid on invalid name field', async () => {
      const { user } = setup()
      const nameInput = screen.getByLabelText(/^name$/i)

      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    })

    it('sets aria-invalid on invalid email field', async () => {
      const { user } = setup()
      const emailInput = screen.getByLabelText(/^email$/i)

      await user.type(screen.getByLabelText(/^name$/i), 'Om Kadam')
      await user.type(emailInput, 'bad')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    })

    it('associates error messages with inputs via aria-describedby', async () => {
      const { user } = setup()
      const nameInput = screen.getByLabelText(/^name$/i)

      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      const errorId = nameInput.getAttribute('aria-describedby')
      expect(errorId).toBeTruthy()
      expect(screen.getByText('Name is required.')).toHaveAttribute('id', errorId)
    })
  })

  describe('submission', () => {
    it('submits successfully with valid input and shows confirmation with name', async () => {
      const { user } = setup()

      await user.type(screen.getByLabelText(/^name$/i), 'Om Kadam')
      await user.type(screen.getByLabelText(/^email$/i), 'om@flyrank.ai')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(await screen.findByText(/Thanks,/, {}, { timeout: 3000 })).toBeInTheDocument()
      expect(screen.getByText(/I'll reach out/)).toBeInTheDocument()
    })

    it('interpolates the first name in the success message', async () => {
      const { user } = setup()

      await user.type(screen.getByLabelText(/^name$/i), 'Om Kadam')
      await user.type(screen.getByLabelText(/^email$/i), 'om@flyrank.ai')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(await screen.findByText('Thanks, Om.', {}, { timeout: 3000 })).toBeInTheDocument()
    })

    it('does not break confirmation when name was previously empty', async () => {
      const { user } = setup()

      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))
      expect(screen.getByText('Name is required.')).toBeInTheDocument()

      await user.type(screen.getByLabelText(/^name$/i), 'Om Kadam')
      await user.type(screen.getByLabelText(/^email$/i), 'om@flyrank.ai')
      await user.click(screen.getByRole('button', { name: /book a coffee chat/i }))

      expect(await screen.findByText('Thanks, Om.', {}, { timeout: 3000 })).toBeInTheDocument()
    })
  })
})
