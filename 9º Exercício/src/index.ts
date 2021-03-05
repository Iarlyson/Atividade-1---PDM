import UmPorSegundo from "./examples/delay";
import getUserFromGitHub from "./examples/userGitHub";
import GitHub from "./examples/gitHubClass";
import buscaUsuario from "./examples/searchUser";

const execExamples = async () => {
  // Example 01

  await UmPorSegundo();

  // Example 02

  await getUserFromGitHub("daniel-dantasdddd");

  // Example 03

  await GitHub.getRepositories(`daniel-dantas/MiniProjeto`);

  // Example 04

  await buscaUsuario("daniel-dantas");
};

execExamples();
