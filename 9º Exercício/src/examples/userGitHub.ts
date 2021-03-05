import axios from "axios";

const getUserFromGitHub = async (user: string) => {
  console.log("Example 02: ");
  const response: { data: any } = await axios.get(
    `https://api.github.com/users/${user}`
  );
  console.log(response.data);
};

export default getUserFromGitHub;
