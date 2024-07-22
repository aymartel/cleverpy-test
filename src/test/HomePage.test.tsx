import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AuthProvider } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { fetchMock } from './fetchMock';

global.fetch = jest.fn(fetchMock) as jest.Mock;


jest.mock('sweetalert2', () => ({
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true })),
}));

describe('HomePage', () => {
  const setup = () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </AuthProvider>
    );

    return {
      loadMoreButton: () => screen.queryByText(/Cargar Más/i),
    };
  };

  test('renderiza los posts en la carga inicial', async () => {
    setup();

    await waitFor(() => {
      expect(screen.getByText(/Prueba desarrollador frontend/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Test Post/i).length).toBe(5);
    });
  });

  test('carga más posts al dar click en "Cargar Más"', async () => {
    const { loadMoreButton } = setup();

    await waitFor(() => {
      expect(screen.getAllByText(/Test Post/i).length).toBe(5);
    });

    const button = loadMoreButton();
    if (button) {
      fireEvent.click(button);
    }

    await waitFor(() => {
      expect(screen.getAllByText(/Test Post/i).length).toBe(10);
    });
  });

  test('elimina un post a dar click en el botón de eliminar', async () => {
    setup();

    await waitFor(() => {
      expect(screen.getAllByText(/Test Post/i).length).toBe(5);
    });

    const deleteButtons = screen.getAllByText(/Eliminar/i);
    fireEvent.click(deleteButtons[0]);

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalled();
      expect(screen.queryByText('Test Post 1')).not.toBeInTheDocument();
    });
  });
});
