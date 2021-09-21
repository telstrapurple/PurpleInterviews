import { promises as fs } from 'fs';
import { join } from 'path';
import { MarkdownMetadata, process } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

const InterviewFileDir = 'src/Interviews';

export interface InterviewDefinition {
	metadata: MarkdownMetadata;
	slug: string;
}

export const get: RequestHandler<InterviewDefinition[]> = async () => {
	const InterviewFiles = await fs.readdir(InterviewFileDir);

	const Interviews = await Promise.all(
		InterviewFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const fileContents = await fs.readFile(join(InterviewFileDir, fileName), {
					encoding: 'utf8'
				});

				const { metadata } = await process(fileContents);
				return {
					metadata,
					slug: fileName.replace(/\.md$/, '')
				};
			})
	);

	Interviews.sort((a, b) => a.metadata.sortorder - b.metadata.sortorder);

	const body = JSON.stringify(Interviews);

	return { body };
};
