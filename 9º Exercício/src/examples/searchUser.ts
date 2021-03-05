import axios from "axios";

const searchUser = async (user: string) => {
  console.log("Example 04: ");
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuario não encontrado!");
  }
};

export default searchUser;
