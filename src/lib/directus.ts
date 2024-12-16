import { createDirectus, rest } from '@directus/sdk'


const directus = createDirectus('https://yenence-directus-cms.onrender.com').with(rest())

export default directus
