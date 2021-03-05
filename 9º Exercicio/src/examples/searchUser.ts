import axios from "axios";

const searchUser = async (user: string) => {
  console.log("Example 03: ");
  const response = await axios.get(`https://api.github.com/users/${user}`);
  console.log(response.data);
};

export default searchUser;
