export type Post = {
  id: string; title: string; brief: string; url: string;
  publishedAt: string; coverImage?: { url: string } | null;
};
const HASHNODE_GQL = 'https://gql.hashnode.com';

export async function fetchPosts(host: string, first = 12): Promise<Post[]> {
  const query = `#graphql
    query Posts($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges { node { id title brief url publishedAt coverImage { url } } }
        }
      }
    }`;
  const res = await fetch(HASHNODE_GQL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { host, first } }),
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json?.data?.publication?.posts?.edges?.map((e: any) => e.node) ?? [];
}
