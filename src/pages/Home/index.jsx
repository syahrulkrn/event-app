import useGetEvent from "./hooks/useGetEvent";

const YourComponent = () => {
  const { event, isLoading, isError, isSuccess, message } = useGetEvent();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <h1>Event Details</h1>
        <pre>{JSON.stringify(event, null, 2)}</pre>
      </div>
    );
  }

  return null;
};

export default YourComponent;
