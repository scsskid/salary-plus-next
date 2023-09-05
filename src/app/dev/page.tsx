'use server';

import {
	deleteAllJobs,
	insertSampleEntries,
	insertSampleJobs,
} from './actions';

export default async function DevPage() {
	return (
		<>
			<h1>DevPage</h1>
			<form action={deleteAllJobs}>
				<button className="ui-btn" type="submit">
					Delete all Jobs
				</button>
			</form>

			<form action={insertSampleJobs}>
				<button className="ui-btn" type="submit">
					Insert Sample Jobs
				</button>
			</form>

			<form action={insertSampleEntries}>
				<button className="ui-btn" type="submit">
					Insert Sample Entries
				</button>
			</form>
		</>
	);
}
