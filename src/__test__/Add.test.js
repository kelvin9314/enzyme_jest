import Add from "../components/Add";
import Form from "../components/Form";

let wrapper;

beforeAll(() => {
  //wrapper = shallow(<Add />);
  wrapper = mount(<Add />);
});

describe("<Add /> rendering", () => {
  it("should render one <h1>", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("should render one <Form>", () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it("should render two<label>", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
