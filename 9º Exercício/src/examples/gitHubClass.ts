import axios from "axios";

class GitHub {
  public static async getRepositories(repo: string) {
    console.log("Example 04");
    const response = await axios.get(`https://api.github.com/repos/${repo}`);
    response?.data
      ? console.log(response?.data)
      : console.log("Repositorio inexistente");
  }
}

export default GitHub;
