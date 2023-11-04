import { MockBuilder, MockRender } from "ng-mocks";
import { HomeComponent } from "./home.component";

describe('HomeComponent', () => {
  beforeEach(() => {
    return MockBuilder(HomeComponent);
  })

  it('should create home component', () => {
    const fixture = MockRender(HomeComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })
})
