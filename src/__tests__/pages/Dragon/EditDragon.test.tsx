import EditDragon from "../../../pages/Dragon/Edit";
import { render } from "../../../helpers/test-utils";

describe('Login', () => {

  test('should render the login form', () => {
    render(<EditDragon />);
  });
})