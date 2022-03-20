import { render,fireEvent } from "@testing-library/react";
import LandingPage from "./index"

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

describe('Landing Page', () => {

    test('should match snapshot', () => {
        const result = render(<LandingPage />)
        expect(result.baseElement).toMatchSnapshot();
    })

    test("should throw error for input if it's empty", async () => {
        const result = render(<LandingPage />)
        const button = await result.findByTestId('custom-button')
        fireEvent.click(button)
        const label = result.findByText('Please enter the city name')
        expect(label).not.toBeNull()
    })

    test("should update input value", async () => {
        const result = render(<LandingPage />)
        const input:any = await result.findByPlaceholderText('Enter the city name')
        fireEvent.change(input, {target: {value: 'London'}})
        expect(input.value).toEqual('London')
    })
    test("should navigate to weather details page with city name", async () => {
        const result = render(<LandingPage />)
        const input:any = await result.findByPlaceholderText('Enter the city name')
        fireEvent.change(input, {target: {value: 'London'}})
        const button = await result.findByTestId('custom-button')
        fireEvent.click(button)
        expect(mockedUsedNavigate).toBeCalledWith('/London')
    })

});