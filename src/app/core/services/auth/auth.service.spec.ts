import { MockBuilder, MockRender } from "ng-mocks";
import { AuthService } from "./auth.service";

describe('AuthService', () => {

  beforeEach(() => MockBuilder(AuthService));

  it('auth service', () => {
    const service = MockRender(AuthService, AuthService).point.componentInstance;

    expect(service.login()).toBeTruthy();
  })

})

