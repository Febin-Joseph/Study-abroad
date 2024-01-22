import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from "./Card"

test('renders Card component with data', () => {
  const data = {
    id: 1,
    company: 'being abroad',
    location: 'kochi',
    image: 'test-image-url',
    course: ' Grammar Class',
    duration: '6',
    description: ['Description 1', 'Description 2'],
  };

  render(<Card data={data} />);

  expect(screen.getByText('being abroad')).toBeInTheDocument();
  expect(screen.getByText('kochi')).toBeInTheDocument();
});