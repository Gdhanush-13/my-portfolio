import { useEffect, useState } from 'react';

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
};

type GithubProfileState = {
  publicRepos: number | null;
  followers: number | null;
  following: number | null;
  repos: GithubRepo[];
  isLoading: boolean;
  error: string | null;
};

const GITHUB_USERNAME = 'Gdhanush-13';
const CACHE_KEY = `github-profile-${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 1000 * 60 * 30;

export const useGithubProfile = () => {
  const [state, setState] = useState<GithubProfileState>({
    publicRepos: null,
    followers: null,
    following: null,
    repos: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const loadGithubData = async () => {
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw) as {
            timestamp: number;
            data: Omit<GithubProfileState, 'isLoading' | 'error'>;
          };
          if (Date.now() - cached.timestamp < CACHE_TTL_MS && isMounted) {
            setState({
              ...cached.data,
              isLoading: false,
              error: null
            });
            return;
          }
        }

        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('Unable to fetch GitHub profile details');
        }

        const userData = (await userResponse.json()) as GithubUser;
        const reposData = (await reposResponse.json()) as GithubRepo[];

        const curatedRepos = reposData
          .filter((repo) => !repo.name.toLowerCase().includes('portfolio'))
          .slice(0, 6);

        const payload = {
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          repos: curatedRepos
        };

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: payload
          })
        );

        if (isMounted) {
          setState({
            ...payload,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw && isMounted) {
          const cached = JSON.parse(cachedRaw) as {
            data: Omit<GithubProfileState, 'isLoading' | 'error'>;
          };
          setState({
            ...cached.data,
            isLoading: false,
            error: null
          });
          return;
        }

        if (isMounted) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: error instanceof Error ? error.message : 'Unable to load GitHub details'
          }));
        }
      }
    };

    loadGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};
