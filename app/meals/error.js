'use client';
function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>{error.message}. Please try again</p>
    </main>
  );
}

export default Error;