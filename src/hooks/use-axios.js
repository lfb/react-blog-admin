import { useCallback } from 'react'
import { postRequest } from '../request'

export const useAxios = () => useCallback(postRequest, [])
