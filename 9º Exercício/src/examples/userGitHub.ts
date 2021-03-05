import axios from "axios";

const getUserFromGitHub = async (user: string) => {
  console.log("Example 02: ");
  try {
    const response: { data: any } = await axios.get(
      `https://api.github.com/users/${user}`
    );
  } catch (err) {
    console.log("Usuario não encontrado!");
  }
};

export default getUserFromGitHub;
