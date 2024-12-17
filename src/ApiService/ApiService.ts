import { readItems } from '@directus/sdk'
import directus from '../lib/directus'

export default class ApiService {
  static fetchHeroes = async (lang: string) => {
    try {
      const data = await directus.request(
        readItems('routes', {
          filter: {
            slug: {
              _eq: 'home-flowbite',
            },
          },
          deep: {
            translations: {
              _filter: {
                languages_code: {
                  _eq: lang,
                },
              },
            },
          },
          fields: [
            {
              sections: [
                'collection',
                {
                  item: [
                    'column_gap',
                    'section_type',
                    'background_color',
                    {
                      columns: [
                        'sort',
                        'collection',
                        {
                          item: [
                            'id',
                            'column_width',
                            {
                              column_records: [
                                'sort',
                                'collection',
                                {
                                  item: [
                                    {
                                      element: [
                                        'collection',
                                        {
                                          item: [
                                            '*',
                                            {
                                              section: [
                                                '*',
                                                {
                                                  item: [
                                                    '*',
                                                    {
                                                      column_records: [
                                                        'id',
                                                        'sort',
                                                        {
                                                          item: [
                                                            '*',
                                                            {
                                                              element: [
                                                                'collection',
                                                                {
                                                                  item: [
                                                                    {
                                                                      translations: ['*'],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              translations: [
                                                '*',
                                                {
                                                  button: [
                                                    '*',
                                                    {
                                                      item: [
                                                        '*',
                                                        {
                                                          translations: ['*'],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  featured_images: [
                                                    '*',
                                                    {
                                                      item: [
                                                        '*',
                                                        {
                                                          translations: ['*'],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        })
      )

      return data
    } catch (error) {
      console.error('Error fetching home data:', error)
      throw new Error('Failed to fetch home data')
    }
  }
}

/*
'meta_tags',
            {
              sections: [
                'collection',
                {
                  item: [
                    'column_gap',
                    'section_type',
                    'background_color',
                    {
                      columns: [
                        'sort',
                        'collection',
                        {
                          item: [
                            'column_width',
                            {
                              column_records: [
                                {
                                  item: [
                                    {
                                      element: [
                                        'collection',
                                        {
                                          item: [
                                            {
                                              translations: ['*'],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
*/
