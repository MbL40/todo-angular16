import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(() => {
    return MockBuilder(AppComponent);
  });

  it('should create', () => {
    let fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  });
});
