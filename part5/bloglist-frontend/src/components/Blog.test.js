import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'


test('renders author and title only by default', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'testurl.com',
    like: 3,
  }


  const other = {
    currentUsersBlog: true,
    handleRemove: () => {},
    handleLikes: () => {}
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