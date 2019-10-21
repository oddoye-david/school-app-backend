const StudentHandler = require('../../app/student/handler')

describe('StudentHandler', () => {
  let studentHandler = null
  let req = {}
  let res = {}
  let mockController = {}

  const STUDENTS = [
    {
      _id: 'student-1',
      name: 'Student 1',
      age: 12,
      classId: 'class-1',
      createdAt: '2019-10-14T16:44:53.695Z',
      updatedAt: '2019-10-14T16:44:53.695Z'
    },
    {
      _id: 'student-2',
      name: 'Student 2',
      age: 12,
      classId: 'class-2',
      createdAt: '2019-10-14T16:44:53.695Z',
      updatedAt: '2019-10-14T16:44:53.695Z'
    },
    {
      _id: 'student-3',
      name: 'Student 3',
      age: 12,
      classId: 'class-2',
      createdAt: '2019-10-14T16:44:53.695Z',
      updatedAt: '2019-10-14T16:44:53.695Z'
    }
  ]

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    }

    res = {
      json: jest.fn()
    }

    mockController = {
      list: jest.fn().mockResolvedValue(STUDENTS),
      getById: jest.fn().mockImplementation(id => {
        let student = STUDENTS.find(({ _id }) => _id === id) || null
        return Promise.resolve(student)
      }),
      listByClass: jest.fn().mockImplementation(id => {
        let students = STUDENTS.filter(({ classId }) => classId === id)
        return Promise.resolve(students)
      }),
      create: jest.fn().mockImplementation(() => Promise.resolve({}))
    }
    studentHandler = StudentHandler(mockController)
  })

  it('returns a list of students', async () => {
    await studentHandler.list(req, res)
    expect(mockController.list.mock.calls.length).toBe(1)
    expect(res.json.mock.calls[0][0]).toStrictEqual({ data: STUDENTS })
  })

  it('returns a specific student', async () => {
    req.params.id = STUDENTS[1]._id
    await studentHandler.get(req, res)
    expect(mockController.getById.mock.calls.length).toBe(1)
    expect(mockController.getById.mock.calls[0][0]).toBe(STUDENTS[1]._id)
    expect(res.json.mock.calls[0][0]).toStrictEqual({ data: STUDENTS[1] })
  })

  it('returns null if id is wrong', async () => {
    req.params.id = 'not-a-student'
    await studentHandler.get(req, res)
    expect(mockController.getById.mock.calls.length).toBe(1)
    expect(mockController.getById.mock.calls[0][0]).toBe('not-a-student')
    expect(res.json.mock.calls[0][0]).toStrictEqual({ data: null })
  })

  it('returns students in a specified class', async () => {
    req.params.classId = STUDENTS[1].classId
    await studentHandler.getByClassId(req, res)
    expect(mockController.listByClass.mock.calls.length).toBe(1)
    expect(mockController.listByClass.mock.calls[0][0]).toBe(
      STUDENTS[1].classId
    )
    expect(res.json.mock.calls[0][0]).toStrictEqual({
      data: [STUDENTS[1], STUDENTS[2]]
    })
  })

  it('returns [] if no students in class', async () => {
    req.params.classId = 'not-a-class'
    await studentHandler.getByClassId(req, res)
    expect(mockController.listByClass.mock.calls.length).toBe(1)
    expect(mockController.listByClass.mock.calls[0][0]).toBe(
      'not-a-class'
    )
    expect(res.json.mock.calls[0][0]).toStrictEqual({
      data: []
    })
  })

  it('creates a student', async () => {
    const student = {
      name: 'test',
      classId: 'test-class',
      age: 16
    }

    req.body = student

    await studentHandler.create(req, res)
    expect(mockController.create.mock.calls.length).toBe(1)
    expect(mockController.create.mock.calls[0][0]).toStrictEqual(student)
    expect(res.json.mock.calls[0][0]).toStrictEqual({
      data: {}
    })
  })
})
