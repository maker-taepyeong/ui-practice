import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "@/app/modal/page";

describe("Modal", () => {
  it("모달을 열고 닫는다", () => {
    render(<Modal />);

    const openButton = screen.getByText("Show Modal");
    fireEvent.click(openButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
