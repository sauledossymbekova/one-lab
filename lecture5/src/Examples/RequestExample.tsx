export const RequestExample: React.FC = () => {
  const handleSubmit = async () => {
    const res = await fetch(
      `https://my-json-server.typicode.com/typicode/demo/posts`
    );

    const json = await res.json();
    console.log(json);
  };
  
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Get
      </button>
    </div>
  );
};
