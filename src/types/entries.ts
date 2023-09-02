import type { Tables } from '@/types/helper-types';
export type WorkingEntry = Tables<'WorkingEntries'>;
export type Job = Tables<'Jobs'>;

export type WorkingEntriesList = {
	entries: WorkingEntry &
		{
			Jobs: Job;
		}[];
};
