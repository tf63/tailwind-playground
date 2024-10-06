import { composeStories } from '@storybook/react'

import * as stories from './tv-sample.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders TvSample component', async () => {
    await Default.run()
})
