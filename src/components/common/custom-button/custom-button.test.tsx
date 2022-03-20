import { render, fireEvent } from "@testing-library/react";
import Button from "./index"
const myMock = jest.fn();

describe('Custom button', () => {

    test('should match snapshot', () => {
        const result = render(<Button
            label='Submit'
        />)
        expect(result.baseElement).toMatchSnapshot();
    })

    test('should display proper value', () => {
        const result = render(<Button
            label='Click Here'
        />)
        const label = result.findByText('Click Here')
        expect(label).not.toBeNull()
    })

    test('should call on click function', async () => {
        const result = render(<Button
            label='Click Here'
            onClick={myMock}
        />)
        const button = await result.findByTestId('custom-button')
        fireEvent.click(button)
        expect(myMock).toBeCalled()
    })

    test('should have button type by default', async () => {
        const result = render(<Button
            label='Click Here'
            onClick={myMock}
        />)
        const button:any = await result.findByTestId('custom-button')
        expect(button.type).toEqual('button')
    })

});