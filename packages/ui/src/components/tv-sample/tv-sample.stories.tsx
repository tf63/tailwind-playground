import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { button, TvSample } from './tv-sample'

type TvSampleType = typeof TvSample

export default {
    title: 'Ui/TvSample',
    component: TvSample,
    render: (props) => <TvSample {...props} />,
    decorators: [(Story: StoryFn) => <Story />],
} satisfies Meta<TvSampleType>

export const Default: StoryObj<TvSampleType> = {
    args: {
        variant: button(),
    },
}

export const Sm: StoryObj<TvSampleType> = {
    args: {
        variant: button({ size: 'sm' }),
    },
}

export const Md: StoryObj<TvSampleType> = {
    args: {
        variant: button({ size: 'md' }),
    },
}

export const Lg: StoryObj<TvSampleType> = {
    args: {
        variant: button({ size: 'lg' }),
    },
}
