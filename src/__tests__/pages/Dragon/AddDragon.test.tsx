import DragonAdd from "../../../pages/Dragon/Add";
import { render } from "../../../helpers/test-utils";

describe('DragonAdd', () => {

  test('should render the login form', () => {
    render(<DragonAdd />);
  });
})