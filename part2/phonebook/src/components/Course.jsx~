const Course = ({ course }) => {
	return (
	<div>
		<h2>{course.name}</h2>
		{course.parts.map(part =>
			<p key={part.id}>{part.name} {part.exercises}</p>
		)}
		<p>Total exercises: {course.parts.reduce(
			(accumulator, part) => accumulator + part.exercises, 0)}
		</p>
	</div>
	);
}

export default Course
