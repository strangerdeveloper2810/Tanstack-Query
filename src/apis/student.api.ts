import http from 'utils/http'
import { Students } from 'type/student.type'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
