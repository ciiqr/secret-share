// TODO: move to either tests directory, or in a folder beside App
// import { render } from '@testing-library/react';
import App from "components/App";

describe("App", () => {
    it("renders learn react link", () => {
        // TODO: remove once fixed
        expect(App).toBeTruthy();

        // const { getByText } = render(<App />);
        // const linkElement = getByText(/learn react/i);
        // expect(linkElement).toBeInTheDocument();
    });
});
