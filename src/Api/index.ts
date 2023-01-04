export const githubApi = async (username: string) => {
  const req = await fetch(`https://github.com/user/${username}`);
  const json = await req.json();
  console.log(json);
};
