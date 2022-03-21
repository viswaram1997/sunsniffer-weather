import { render, act, waitFor } from "@testing-library/react";
import WeatherDetailsComponent from "./index"
const mockedUsedNavigate = jest.fn();
import axios from 'helpers';
import { mockResponse } from "./__mocks__/sample-response"
jest.mock('helpers')

const mockAxios = axios as jest.Mocked<typeof axios>;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
    useParams: () => ({ city: 'london' })
}));

describe('Weather Details page', () => {

    test('should match snapshot', async () => {

        mockAxios.get.mockResolvedValueOnce({ data: mockResponse })
        const result = render(<WeatherDetailsComponent />)
        await waitFor(() => expect(result.baseElement).toMatchSnapshot())

    })

    test('should 5 cards', async () => {

        mockAxios.get.mockResolvedValueOnce({ data: mockResponse })

        const result = render(<WeatherDetailsComponent />);
        const card = await waitFor(() => result.findAllByTestId('weather-card'))
        expect(card?.length).toEqual(5)
    })

    test('should error for city not found', async () => {
        mockAxios.get.mockRejectedValue({ response: { data: { code: 404, message: 'No city Found' } } })
        const result = render(<WeatherDetailsComponent />);
        const error = await result.findByText('No city Found')
        await waitFor(() => expect(error).not.toBeNull())
    })

});