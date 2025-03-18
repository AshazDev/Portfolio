type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AshTalk',
    description:
      'A simple video confrencing app.',
    link: 'https://ashtalk.netlify.app',
    video:
      'https://video.gumlet.io/67d7b5a4cbc68914a351038b/67d7b5c8cbc68914a351044a/download.mp4',
    id: 'ashtalk',
  },
  {
    name: 'Crazy Candy',
    description:
      'An e-commerce website for Crazy Candy, complete with an admin page',
    link: 'https://crazy-candy.netlify.app',
    video:
      'https://video.gumlet.io/67d7b5a4cbc68914a351038b/67d7bc4e45ef0663b062f796/download.mp4',
    id: 'crazycandy',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Crazy Candy',
    title: 'Web Developer',
    start: '2024',
    end: '2024',
    link: 'https://crazy-candy.netlify.app',
    id: 'crazycandy',
  },
]

export const BLOG_POSTS: BlogPost[] = [

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ashazdev',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/',
  },
]

export const EMAIL = 'ashazshams00@gmail.com'
