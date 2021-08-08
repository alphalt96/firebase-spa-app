import * as express from 'express';

export function accessLog (isActivate: boolean) {
  // inside decorator factory
  const isDeactiveAccessLogOverriding = process.env.DISABLE_ACCESS_LOG && process.env.DISABLE_ACCESS_LOG === 'true';
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // inside decorator
    const targetFunction = descriptor.value;
    descriptor.value = function (req: express.Request, res: express.Response, next: express.NextFunction) {
      if (isActivate && !isDeactiveAccessLogOverriding) {
        console.info('Access Log:', {
          path: req.originalUrl,
          method: req.method,
          parameters: JSON.stringify({
            query: req.query,
            path: req.params
          }),
          body: req.body
        });
      }
      return targetFunction.apply(this, [req, res, next]);
    }
  }
}
