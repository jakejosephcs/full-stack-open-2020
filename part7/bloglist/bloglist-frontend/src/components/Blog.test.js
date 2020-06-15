import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const other = {
  currentUsersBlog: true,
  handleRemove: () => {},
  handleLikes: () => {}
}

test('renders author and title only by default', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'testurl.com',
    likes: 3,
  }

  const component = render(
    <Blog
      blog={blog}
      {... other}
    />
  )

  expect(component.container).toHaveTextContent(blog.author)
  expect(component.container).toHaveTextContent(blog.title)
  expect(component.container).not.toHaveTextContent(blog.url)

})

test('renders blog url, number of likes when VIEW is clicked', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'testurl.com',
    likes: 3,
  }

  const component = render(
    <Blog
      blog={blog}
      {... other}
    />
  )

  const viewButton = component.getByText('View')
  fireEvent.click(viewButton)

  expect(component.container).toHaveTextContent(blog.url)
  expect(component.container).toHaveTextContent(blog.likes)

})

test('Click like button twice increases likes twice', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'testurl.com',
    likes: 3,
  }

  other.handleLikes = jest.fn()

  const component = render(
    <Blog
      blog={blog}
      {... other}
    />
  )

  const viewButton = component.getByText('View')
  fireEvent.click(viewButton)

  const likeButton = component.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(other.handleLikes.mock.calls).toHaveLength(2)

})