import Link from 'next/link';
function MealsPage() {
  return (
    <div>
      <h1> Meals page</h1>
      <Link href="meals/share">Share your meal</Link>
    </div>
  );
}

export default MealsPage;
