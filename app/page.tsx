import Image from 'next/image';
import Link from 'next/link';
import { fetchPosts } from '@/lib/hashnode';

export default async function Page() {
  const host = process.env.HASHNODE_PUBLICATION_HOST!;
  const posts = await fetchPosts(host, 12);

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16">
      <section className="mb-10 rounded-2xl bg-brand-mid/60 p-8">
        <h2 className="text-3xl font-semibold">Dobrodošli 👋</h2>
        <p className="mt-2 text-brand-light/90">
          Custom index u tvojim bojama. Postovi su povučeni sa Hashnode API-ja.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.id} className="card">
            {p.coverImage?.url && (
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image src={p.coverImage.url} alt="" width={800} height={500} className="h-auto w-full" />
              </div>
            )}
            <h3 className="card-title">
              <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
            </h3>
            <time className="block text-sm text-brand-light/70">
              {new Date(p.publishedAt).toLocaleDateString('sr-RS')}
            </time>
            <p className="mt-2 card-subtle">{p.brief}</p>
            <Link href={p.url} target="_blank" className="mt-4 btn-link">Pročitaj →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
