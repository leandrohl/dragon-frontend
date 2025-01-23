import DragonList from "../../../pages/Dragon";
import { render } from "../../../helpers/test-utils";

describe('DragonList', () => {

  test('should render the login form', () => {
    render(<DragonList />);
  });
})