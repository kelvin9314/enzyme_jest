import Form from "../components/Form";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Form />);
});

describe("<Form />, rendering", () => {
  it("should render 1 <form>", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should not render any <button> when operator is not passed in props ", () => {
    expect(wrapper.find("button")).toHaveLength(0);
  });

  it("should render one <button> to Add when operator '+' is passed in props", () => {
    wrapper.setProps({ operator: "+" });
    expect(wrapper.find("#formButtonAdd")).toHaveLength(1);
    expect(wrapper.find("#formButtonSubtract")).toHaveLength(0);
  });
  it("should render one <button> to Subtract when operator '-' is passed in props", () => {
    wrapper.setProps({ operator: "-" });
    expect(wrapper.find("#formButtonAdd")).toHaveLength(0);
    expect(wrapper.find("#formButtonSubtract")).toHaveLength(1);
  });

  it("should render 2 <label>", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("should render 2 <input>", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });
});
