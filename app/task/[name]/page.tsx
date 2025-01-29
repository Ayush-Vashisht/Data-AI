const Task = ({ params }: { params: { name: string } }) => {
  return (
    <>
      <h1>Task Name: {params.name}</h1>
    </>
  );
};

export default Task;
