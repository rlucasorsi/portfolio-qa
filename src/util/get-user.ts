import { env } from '../env'

import { ProjectCategory, projectMappings } from './project-config'

export interface Repository {
    id: number
    name: string
    description: string | null
    project_url: string | undefined
    project_api_url: string | undefined
    views: number | undefined
    created_at: string
    homepage: string | null
    html_url?: string
    url?: string
    watchers_count?: number
}

export interface CategorizedRepositories {
    [key: string]: {
        [key: string]: Repository[]
    }
}

export interface User {
    name: string
    bio: string
    avatar_url: string
    repos_url: string
}

export interface GithubUser {
    user: User | null
    repositorios: {
        repositories: Repository[] | []
        categorizedRepositories: CategorizedRepositories
    }
}

export const getUserGitHub = async (): Promise<GithubUser> => {
    const githubURL = `https://api.github.com/users/${env.NEXT_PUBLIC_GITHUB_USERNAME}`

    const requestConfig: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
        },
        next: {
            tags: ['github'],
        },
        cache: 'no-store',
    }

    const userDataResponse = await fetch(githubURL, requestConfig)

    if (!userDataResponse.ok) {
        throw new Error('Failed to fetch user data')
    }

    const userData = await userDataResponse.json()
    const repos_url = userData.repos_url

    const [
        repositoriosPage1Response,
        repositoriosPage2Response,
        repositoriosPage3Response,
    ] = await Promise.all([
        fetch(repos_url, requestConfig),
        fetch(`${repos_url}?page=2`, requestConfig),
        fetch(`${repos_url}?page=3`, requestConfig),
    ])

    if (
        !repositoriosPage1Response.ok ||
        !repositoriosPage2Response.ok ||
        !repositoriosPage3Response.ok
    ) {
        throw new Error('Failed to fetch repositories data')
    }

    const [repositoriosPage1, repositoriosPage2, repositoriosPage3] =
        await Promise.all([
            repositoriosPage1Response.json(),
            repositoriosPage2Response.json(),
            repositoriosPage3Response.json(),
        ])

    const formatRepo = (repo: Repository) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        project_url: repo.html_url,
        project_api_url: repo.url,
        views: repo.watchers_count,
        created_at: repo.created_at,
        homepage: repo.homepage,
    })

    const repositoriosAll = [
        ...repositoriosPage1,
        ...repositoriosPage2,
        ...repositoriosPage3,
    ]

    const repositorios = repositoriosAll.map(formatRepo)

    const user = {
        name: userData.name,
        bio: userData.bio,
        avatar_url: userData.avatar_url,
        repos_url,
    }

    const repositoriesArray = env.NEXT_PUBLIC_REPOSITORIES_ARRAY

    const filteredRepositories = repositorios.filter((repo) =>
        repositoriesArray.some((padrao: string) => repo.name.includes(padrao))
    )

    const categorizedRepositories: CategorizedRepositories = {}

    for (const mapping of projectMappings) {
        const repo = repositorios.find((r) => r.name === mapping.repoName)
        if (repo) {
            if (!categorizedRepositories[mapping.category]) {
                categorizedRepositories[mapping.category] = {}
            }
            if (
                !categorizedRepositories[mapping.category][mapping.subcategory]
            ) {
                categorizedRepositories[mapping.category][mapping.subcategory] =
                    []
            }
            categorizedRepositories[mapping.category][mapping.subcategory].push(
                repo
            )
        }
    }

    return {
        user,
        repositorios: {
            repositories: filteredRepositories,
            categorizedRepositories,
        },
    }
}
