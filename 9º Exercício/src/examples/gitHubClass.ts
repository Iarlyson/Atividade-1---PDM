import axios from "axios";

class GitHub {
  public static async getRepositories(repo: string) {
    console.log("Example 03");
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log("Repositório inexistente");
    }
  }
}

export default GitHub;
