import { render, fireEvent } from "@testing-library/react";
import Input from "./index"
const myMock = jest.fn();

describe('Custom input', () => {

    test('should match snapshot', () => {
        const result = render(<Input
            name="city "
            onChange={myMock}
            label='Submit'
            value=""
            placeHolder="test"
        />)
        expect(result.baseElement).toMatchSnapshot();
    })

    test('should display proper value', async () => {
        const result = render(<Input
            name="city "
            onChange={myMock}
            label='Submit'
            value=""
            placeHolder="test"
        />)
        const input = await result.findByPlaceholderText('test')
        expect(input).not.toBeNull()
    })

    test('should call on click function', async () => {
        const result = render(<Input
            name="city "
            onChange={myMock}
            label='Submit'
            value=""
            placeHolder="test"
        />)
        const input = await result.findByPlaceholderText('test')
        fireEvent.change(input, {target: {value: 'test'}})
        expect(myMock).toBeCalled()
    })
    test('should display proper value', async () => {
        const result = render(<Input
            name="city "
            onChange={myMock}
            label='Submit'
            value="test123"
            placeHolder="test"
        />)
        const input:any = await result.findByPlaceholderText('test')
        expect(input.value).toEqual('test123')
    })


});