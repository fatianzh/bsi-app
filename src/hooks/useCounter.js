const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;
