'use server';

export async function submitApplication(
  _: unknown,
  formData: FormData
) {
  const payload = {
    career_application: {
      name: formData.get('name'),
      email: formData.get('email'),
      role: 'Junior Web Developer',
      notes: formData.get('notes'),
      submission_url: formData.get('submission_url'),
      portfolio_url: formData.get('portfolio_url'),
      resume_url: formData.get('resume_url'),
    },
  };

  try {
    const res = await fetch(
      'https://windbornesystems.com/career_applications.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      return { error: 'Submission failed. Please check your data.' };
    }

    return { success: true };
  } catch {
    return { error: 'Network error. Please try again.' };
  }
}
