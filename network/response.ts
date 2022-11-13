import { Request, Response } from 'express'

export function success(
  req: Request,
  res: Response,
  message: string,
  status: number
): Response {
  return res.status(status).send({
    error: false,
    status,
    body: message
  })
}

export function error(
  req: Request,
  res: Response,
  message: string = 'Internal server error',
  status: number = 500
): Response {
  return res.status(status).send({
    error: true,
    status,
    body: message
  })
}
