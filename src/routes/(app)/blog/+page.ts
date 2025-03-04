type Post = {
	title: string;
	date: string;
	description: string;
	published: string;
	slug: string;
};

export const load: import('./$types').PageLoad = async () => {
	const posts: Post[] = [];
	const paths = import.meta.glob('../../../posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').pop()?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	if (posts.length === 0) return { posts: [] };

	posts.toSorted(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return {
		posts
	};
};
