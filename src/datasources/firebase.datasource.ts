import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'firestore',
  projectId: 'loopback-firebase-c1faa',
  clientEmail:
    'firebase-adminsdk-39mqd@loopback-firebase-c1faa.iam.gserviceaccount.com',
  privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCn24vtR+bkcDRX\nj6s8QhTxIyAs0STH3lhjrKuTlCQcNO4fRK60y+nCUQCQNcFuefrbAeauUL9AokaZ\n4tS8oadf1UXG/HrKpY203dA7v98kPvN3/EWyQygOchrQvtEBKTlRSmjCR3/qF87M\niaZhhdlRmZpQCZza5rbQ0rk3XtVRbGCol83TcD52aF6WH/AJVWYU5MhU/SBc5Uc9\n3zsrAKWZJBy3C/u3jseFXRmUnxVJywKTvQjVfAlYhKCQfij6z4k8jbWF9UYtPM3H\n7OzPmmS4a8//faCqk4JXR+8goDl0eWrj9ZmhluK8YfkFFKd/3Me/DwDeTgANyR+a\n6zyHELFlAgMBAAECggEAA97USFZxV1l+M+upOVEAM4/Cec4S24LVKYffI3r5SPVT\n0NYJAVjTxf+BF9lF6KuVFeIwwUxgLQKn/wngK0ZND38MSd3/xO/R6wS+bpK0/uOZ\nQmcVl8UH0GPm4RvSJdqC2Pd5Zr0vXvZs9gkDRkEAwfGcyKOAjGxg2EMXnWKXfP0+\n/LHObYcyNFUzmIIvdBz12XS5fgrxaFI9EF8zz759K+2PZz/ff9i3N+vUrFOULHL8\nn2XKb5Rk0CetI+ORxh56P9mmdlekKmUk3HtSvU3t+aiAVCfmjYomNjFupZDXuEiG\nyDfPcUfKsAMYuc2VjvQCzWjlAFhufESnxqYxWKr4uQKBgQDY/r19Y2FnTMeHC5BN\nbKGszXrhLMt0LNFfuaU7N1d4hHNME6Mn3/la+xEBbxdP97dTda3Qa/FuRWMPNUxh\nkif/Gi4a6FB9PCjIa/sLMlWkUt9GMCGxTpBf74JtVXjKmjElVyyDmmeKzFVQbDzG\nKAegRcLC852w/VPG6XtVGLyt/QKBgQDGB7FwELAprumQNUlqwp362rJ/pTgavRha\nGk5FARn5ZG74yswXfQbMk5GY2NXAIU1oRIjbEjxEiUpuE0JTPhcc3dwlecXPETQ4\nvAxdnmDz/E2ZuzeUjp34Dm5eYf7TS5zUFbCOR1njqsxB0hV10Zjzts6OQrBk2x4s\na9DCbLd5iQKBgF+y4RD2jlOHegul3us2eIsESCgcoFHJHkGwVx2ph4sgJtUrZ+5D\nCe7FATf3rXlYD2LgaFqd8GkocsqXP+tcEQWhnynAwRaqPHY/oQTMGxcQcWW7/m/6\n7RNSRtw/MLlxjTEhpAEaTIXbHdkNEzR1HP/jJETkOex/nL4B5KGf+j5lAoGBAJ1c\nk6WHvVUCR1tu3K5XhI5IpztDoTeuN+Gxsayn2WoSYxSUomWv1m1Ofo5FEGYikI5g\nl5ft/7I+nsSlzTi0yE0KB9xHzeZjt2m2FOV363c2cLvOx7XnNqRdY1rg6Ewjc7Yc\nnjYRgN6nZLSRKrh7G93e0Hi/icg7Ttjhu/wjxBBxAoGBAJoINUYEhzJ3OgVMlnQo\nqbuJ+2Gp+pSd0oGFx5f0DIntjVr8B40AVnzs65KleD6MftrnB5lMSbpBAuj9C4op\nYsw1c6zBxKliq+oh6GmoiAueWhArmxl82MvOv5msd6T8gP4XxI174Jvu9QguwoJB\nRil7ZB9xIq96YIEUWnKzv5h0\n-----END PRIVATE KEY-----\n',
  databaseName: 'Optional, Default: projectId',
};


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FirebaseDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'firestore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.firestore', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
