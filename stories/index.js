import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/components/Card'

storiesOf('Card', module)
  .add('Question', () => (
    <Card questionBody="test"></Card>
  ))
