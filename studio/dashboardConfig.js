export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623f513ba1b2ea43550e192a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-grenlandpr-1-de-studio',
                  apiId: 'd42a5f10-2d06-404c-b414-073f4bde264f'
                },
                {
                  buildHookId: '623f513b512d9d57b8620687',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-grenlandpr-1-de',
                  apiId: '27a7e6d9-0e87-4ff2-8bf7-10cf98d99809'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sondre-m/sanity-nextjs-grenlandpr1de',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-grenlandpr-1-de.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
