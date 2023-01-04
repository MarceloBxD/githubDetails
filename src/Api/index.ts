export const githubApi = async (username: string) => {
  const req = await fetch(` https://api.github.com/users/${username}`);
  const json = await req.json();
  console.log(json);
};
