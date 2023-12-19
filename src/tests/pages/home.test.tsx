import { screen, render } from "@testing-library/react";
import Home from "@/app/page";

describe("홈페이지", () => {
  it("기본 문구를 표시한다", () => {
    render(<Home />);
    expect(screen.getByText("menu")).toBeInTheDocument();
  });
});
