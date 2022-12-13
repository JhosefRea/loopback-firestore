import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {TokenService} from '@loopback/authentication';
import {securityId, UserProfile} from '@loopback/security';
import * as firebaseAdmin from 'firebase-admin';

class FirebaseTokenError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 403) {
    super(message);
    this.statusCode = statusCode;
  }
}

@injectable({scope: BindingScope.TRANSIENT})
export class FirebaseTokenService implements TokenService {
  constructor(/* Add @inject to inject parameters */) {}

  /**
   * Function to convert token to UserProfile
   */
  tokenToUserProfile(token: Record<string, any>): UserProfile {
    return {
      [securityId]: token.user_id,
      email: token.email,
      name: token.name,
      picture: token.picture,
      uid: token.user_id,
    };
  };
  
  async verifyToken(token: string): Promise<UserProfile> {
    // TODO implement the token decode and verify

    // call the admin sdk to decode the token
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

    // I cast to Record<string, any> here as I need to make
    // some changes to the object
    let userProfile: Record<string, any> = decodedToken;

    // call function to return the UserProfile from
    // decoded token
    return this.tokenToUserProfile(userProfile);
  }

  async generateToken(userProfile: UserProfile): Promise<string> {
    throw new FirebaseTokenError('This service is not implemented');
  }
}
