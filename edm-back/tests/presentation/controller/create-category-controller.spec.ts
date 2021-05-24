import { CreateCategoryController } from '@/modules/categories/presentation/controller'
// import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { ValidationSpy, CreateCategorySpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'

import MockDate from 'mockdate'
import faker from 'faker'
import { badRequest, missingFields, ok } from '@/shared/presentation/helpers'
import { throwError } from '@/tests/domain/mocks/test-helps'

const mockRequest = (): CreateCategoryController.Request => ({
  name: faker.random.words()
})

type SutTypes = {
  sut: CreateCategoryController
  validationSpy: ValidationSpy
  createCategorySpy: CreateCategorySpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const createCategorySpy = new CreateCategorySpy()
  const sut = new CreateCategoryController(validationSpy, createCategorySpy)
  return {
    sut,
    validationSpy,
    createCategorySpy
  }
}

describe('Category Controller', () => {

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.payload).toEqual(request)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(missingFields(validationSpy.error))
  })

  test('Should call create category with correct values', async () => {
    const { sut, createCategorySpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(createCategorySpy.params).toEqual(request.name)
  })

  test('Should return 500 if create category throws', async () => {
    const { sut, createCategorySpy } = makeSut()
    jest.spyOn(createCategorySpy, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should return 201 on success', async () => {
    const { sut, createCategorySpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(createCategorySpy.result))
  })
})
