import DragonDetails from "../../../pages/Dragon/Details";
import { render } from "../../../helpers/test-utils";

describe('DragonDetails', () => {

  test('should render the login form', () => {
    render(<DragonDetails />);
  });
})