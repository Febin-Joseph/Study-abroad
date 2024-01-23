import React from 'react';
import { render } from '@testing-library/react';
import Card from '../src/components/card/Card'

test('renders Card component', () => {
  const data = {
    id: 1,
    company: 'Test Company',
    location: 'Test Location',
    image: 'test.jpg',
    course: 'Test Course',
    duration: '6',
    description: ['Test Description'],
  };

  const { container } = render(<Card data={data} />);

  const renderedText = container.textContent;

  expect(renderedText).toContain('Test Company');
});