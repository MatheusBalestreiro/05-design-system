import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  
}


