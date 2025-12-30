'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitApplication } from './actions/submit-application';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting…' : 'Submit Application'}
    </button>
  );
}

export default function Home() {
  const [state, formAction] = useActionState(submitApplication, null);

  return (
    <main className="container">
      <h1>Junior Web Developer Application</h1>
      <p className="subtitle">
        Windborne Systems · API-driven submission
      </p>

      <form action={formAction} className="card">
        <div className="grid">
          <input name="name" placeholder="Full name" required />
          <input name="email" type="email" placeholder="Email address" required />
        </div>

        <textarea
          name="notes"
          placeholder="What makes you great to work with (one sentence)"
          required
        />

        <input name="submission_url" placeholder="Coding challenge URL" required />
        <input name="portfolio_url" placeholder="Portfolio URL" required />
        <input name="resume_url" placeholder="Resume URL" required />

        <SubmitButton />

        {state?.success && (
          <p className="success">Application submitted successfully ✔</p>
        )}

        {state?.error && (
          <p className="error">{state.error}</p>
        )}
      </form>
    </main>
  );
}
