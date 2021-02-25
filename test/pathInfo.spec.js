import { expect } from 'chai'
import { pathInfo } from '../lib/pathInfo'

describe('filePathInfo', () => {
  const fullPath = '/home/user/some-file.txt'
  const t1 = pathInfo(fullPath)
  const root = '/'
  const dir = '/home/user'
  const base = 'some-file.txt'
  const ext = '.txt'
  const name = 'some-file'

  it(`t1.root should return ${root}`, () => {
    expect(t1.root).to.equal(root)
  })
  it(`t1.dir should return ${dir}`, () => {
    expect(t1.dir).to.equal(dir)
  })
  it(`t1.base should return ${base}`, () => {
    expect(t1.base).to.equal(base)
  })
  it(`t1.ext should return ${ext}`, () => {
    expect(t1.ext).to.equal(ext)
  })
  it(`t1.name should return ${name}`, () => {
    expect(t1.name).to.equal(name)
  })
  it(`t1.fullPath should return ${fullPath}`, () => {
    expect(t1.fullPath).to.equal(fullPath)
  })
})
