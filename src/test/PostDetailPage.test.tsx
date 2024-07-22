import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PostDetailPage } from '../pages/PostDetailPage';
import { AuthProvider } from '../context/AuthProvider';
import { fetchMock } from './fetchMock';


global.fetch = jest.fn(fetchMock) as jest.Mock;

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
  useNavigate: () => mockNavigate,
}));

describe('PostDetailPage', () => {
  const setup = async () => {
    await act(async () => {
      render(
        <AuthProvider>
          <MemoryRouter initialEntries={['/post/1']}>
            <Routes>
              <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
          </MemoryRouter>
        </AuthProvider>
      );
    });
  };


  test('renderiza los detalles del post', async () => {
    await setup();

    await waitFor(() => {
      expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Body/i)).toBeInTheDocument();
    });
  });

  test('renderiza la información del usuario', async () => {
    await setup();

    await waitFor(() => {
      expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
      expect(screen.getByText(/Romaguera-Crona/i)).toBeInTheDocument();
    });
  });

  test('renderiza los comentarios', async () => {
    await setup();

    await waitFor(() => {
      expect(screen.getByText(/Comments/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Test Comment/i).length).toBe(4);
    });
  });

  test('navega de atras al dar click en "Regresar a la Lista', async () => {
    await setup();

    await waitFor(() => {
      expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Regresar a la Lista/i));

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
