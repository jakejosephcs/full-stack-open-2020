import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import CreateBlogForm from './CreateBlogForm'


test('right details recieved when form is submitted ', () => {
  const handleCreateBlog = jest.fn()

  const component = render(
    <CreateBlogForm handleCreateBlog={handleCreateBlog}/>
  )

  const blogData = {
    title: 'Test title',
    author: 'Test author',
    url: 'testurl.com',
  }

  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')
  const form = component.container.querySelector('form')

  fireEvent.change(title, {
    target: { value: blogData.title }
  })

  fireEvent.change(author, {
    target: { value: blogData.author }
  })

  fireEvent.change(url, {
    target: { value: blogData.url }
  })

  fireEvent.submit(form)

  expect(handleCreateBlog.mock.calls.length).toBe(1)
  expect(handleCreateBlog.mock.calls[0][0]).toEqual(blogData)

})