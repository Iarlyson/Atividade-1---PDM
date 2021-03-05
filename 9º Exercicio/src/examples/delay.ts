// Example 01

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  console.log("Example 01: ");
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
};

export default umPorSegundo;

// ==================================
